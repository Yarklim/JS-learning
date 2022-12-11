Mongoose
Mongoose представляет специальную ODM-библиотеку (Object Data Modelling) для работы с MongoDB. Чаще всего библиотека Mongoose служит удобным средством для применения структурированной схемы к коллекции в MongoDB. Модуль служит удобным средством для применения структурных схем к документам. Также дает возможность достоверной проверки типов данных и возможностей валидации. Официальную документацию можно посмотреть здесь

Подключение
Для работы с Mongoose необходимо установить библиотеку:

 npm install mongoose -S

Прежде всего надо подключить mongoose:

const mongoose = require('mongoose');

Чтобы не работать с callback функциями при обращении к базе данных, а с объектами promise, необходимо вначале установить их реализацию для свойства Promise, экземпляра mongoose:

mongoose.Promise = global.Promise;

Подключения к базе выполняется методом mongoose.connect(), в который первым параметром передается адрес на подключение к базе данных, а вторым объект настроек:

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

С помощью метода mongoose.disconnect() можно отключиться от базы данных.

Схема документа
Одно из преимуществ ODM Mongoose, что данные можно описать определенной схемой. Экспортируем класс Schema

const Schema = mongoose.Schema;

Устанавливаем схему

const cats = new Schema({
  nickname: String,
  age: Number,
});

Схема содержит метаданные объектов. Здесь указывается, какие свойства будет иметь объект и какой у них будет тип данных. Для типов данных можно указывать одно из следующих значений:

String
Number
Date
Buffer
Boolean
Mixed
Objectid
Array
Для сложных свойств как объект, вместо типа указывается определение этого объекта: Пример:

const cats = new Schema({
  nickname: String,
  age: Number,
  owner: {
    name: String,
    address: [String], // тип - массив строк
    birthday: Date,
  },
});

При определении схемы Mongoose имеет встроенные правила валидации, которые можно указать в схеме:

required: требует обязательного наличия значения для свойства
min и max: задают минимальное и максимальное значения для числовых данных
minlength и maxlength: задают минимальную и максимальную длину для строк
enum: строка должна представлять одно из значений в указанном массиве строк
match: строка должна соответствовать регулярному выражению
const cats = new Schema({
  nickname: {
    type: String,
    minlength: 2,
    maxlength: 7,
    required: [true, 'Nickname is required'],
  },
  age: {
    type: Number,
    min: 1,
    max: 50,
  },
  owner: {
    name: String,
    address: [String], // тип - массив строк
    birthday: Date,
  },
});

Если мы попытаемся добавить некорректные данные в БД, то запрос на добавление вернет ошибку.

После необходимо создать модель, используя схему:

const Cat = mongoose.model('cat', cats);

Первый параметр в методе mongoose.model указывает на название модели, а второй параметр - собственно схема.

Далее можно создавать объекты для этой модели:

const cat = new Cat({
  nickname: 'Barsik',
  age: 1,
});

Для сохранения объекта в базе вызывается метод save. Он определен для всех создаваемых моделей и сохраняет текущий объект в базу данных. Метод возвращает результат, объект типа Document, который представляет конкретный документ хранящийся в коллекции.

const result = cat.save();
console.log('Кот сохранен в базу! ', result);

Индексы
Если некоторое поле часто используется при поиске документов ему можно назначить индекс. Индексирование полей позволяет быстрее производить поиск по этим полям. Индекс к полю можно добавить двумя способами.

Первый определить в самой схеме

const cats = new Schema({
  nickname: { type: String, index: 1 },
  age: Number,
});

Или вызвав метод index у самой схемы

const cats = new Schema({
  nickname: String,
  age: Number,
});

cats.index({ nickname: 1 });

Уникальные поля
Значение поля можно сделать уникальным. Это означает, что в других документах коллекции не может быть такого поля с таким же значением. Например логично сделать поле email, для схемы описывающей пользователя, уникальным. Для этого надо в схеме, при определении поля, добавить свойство unique

const user = new Schema({
  username: String,
  email: { type: String, unique: true },
});

Обязательные поля
Если при создании нового документа не указать поле, то объект будет создан без этого поля. Некоторые поля должны обязательно присутствовать вновь создаваемом объекте Document. Например, тоже имя пользователя и email, в документе должны быть обязательными, нам возможно придется отправлять письма пользователю на восстановления пароля и т.п. За обязательное поле отвечает свойство required

const user = new Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
});

Методы у объекта схемы
В схемах, которые определяет модуль Mongoose существует возможность добавлять методы. Это дает возможность вызывать заранее определенные методы используя объект типа Document. Чтобы добавить метод к объекту типа Schema надо назначить функцию для свойства Schema.methods. Внутри функции доступ к объекту схемы происходит по ссылке this. Типовой пример использования - это создание функции которая возвращает полное имя пользователя, шифрует пароль пользователя и т.д.

const user = new Schema({
  firstName: String,
  lastName: String,
});

user.methods.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Получив потом экземпляр документа из базы, мы можем вызывать у него функцию fullName() возвращающую полное имя и фамилию пользователя

Основные операции с данными в Mongoose.
Создание документов
Кроме рассмотренного метода save() также можно использовать метод от модели объекта Cat.create(). Первым параметром метода передается объект для сохранения.

Cat.create({
  nickname: 'Barsik',
  age: 1,
});

Получение данных
Для получения данных можно использовать методы.

find([query], [options]);

Устанавливает операцию поиска, возвращающую массив объектов типа Document, совпадающих с запросом

findOne([query], [options]);

Устанавливает операцию поиска одного документа, возвращающую первый же объект Document, совпадающий с запросом

Удаление данных
Для удаления применяются следующие методы

remove([query], [options]);

Устанавливает операцию удаления, в ходе которой из коллекции удаляются все объекты, совпадающие с запросом

findOneAndRemove([query], [options]);

Устанавливает операцию поиска и удаления, в ходе которой из коллекции удаляется первый же документ совпадающий с запросом

Изменение данных
update([query], [update], [options]);

Устанавливает операцию обновления, в ходе которой в коллекции обновляются все документы совпадающие с запросом.

findOneAndUpdate([query], [update], [options]);

Устанавливает операцию поиска и обновления, в ходе которой в коллекции обновляется первый же документ совпадающий с запросом.

Подключение Mongoose в проекте
Давайте теперь разберем REST API приложение и подключение к нему Mongoose. Структура нашего приложения будет следующая

├── server.js
├── .env
├── controller
│   └── index.js
├── package.json
├── service
│   ├── schemas
│   |   └── task.js
│   └── index.js
└── api
    └── index.js

С самим приложением вы можете ознакомится:


API доступно поэтому URL: https://nodebook-api-mongoose.glitch.me/api/tasks. И вы опять можете с помощью Postman выполнить все CRUD операции

Работу с базой данных мы выделяем в отдельный сервис и помещаем его папку service, файл index.js. Определяем схемы для документов в папке schemas. Роуты у нас останутся как и раньше в папке api, а вот логику работы приложения мы перенесем в папку controller. Давайте теперь поговорим более подробнее о каждом модуле приложения

Главный файл и подключение к БД
Файл сервера server.js. Подключаем необходимые модули и создаем экземпляр приложения.

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

Подключаем парсер JSON и разрешаем кроссдоменные запросы к нашему приложению через промежуточное ПО cors

// parse application/json
app.use(express.json());
// cors
app.use(cors());

Подключаем роуты, для нашего API, а также обработку ошибки 404 и ошибок сервера 500

const routerApi = require('./api');
app.use('/api', routerApi);

app.use((_, res, __) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Use api on routes: /api/tasks',
    data: 'Not found',
  });
});

app.use((err, _, res, __) => {
  console.log(err.stack);
  res.status(500).json({
    status: 'fail',
    code: 500,
    message: err.message,
    data: 'Internal Server Error',
  });
});

Подключаемся к серверу MongoDB с помощью mongoose.connect. Данный метод возвращает промис, и когда он разрешится мы стартуем наш сервер app.listen. Если же при подключении к базе данных произошла ошибка, то стартовать сервер нет никакой причины и мы выводим в консоль просто сообщение об ошибке.

const PORT = process.env.PORT || 3000;
const uriDb = process.env.DB_HOST;

const connection = mongoose.connect(uriDb, {
  promiseLibrary: global.Promise,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

connection
  .then(() => {
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch(err =>
    console.log(`Server not running. Error message: ${err.message}`),
  );

Роуты
Файл роутинга api/index.js у нас стал лаконичным и чистым

const express = require('express');
const router = express.Router();
const ctrlTask = require('../controller');

router.get('/tasks', ctrlTask.get);

router.get('/tasks/:id', ctrlTask.getById);

router.post('/tasks', ctrlTask.create);

router.put('/tasks/:id', ctrlTask.update);

router.patch('/tasks/:id/status', ctrlTask.updateStatus);

router.delete('/tasks/:id', ctrlTask.remove);

module.exports = router;

Мы импортируем контроллер и для каждого маршрута и необходимого метода HTTP вызываем соответствующий метод контроллера ctrlTask. При дальнейшей работе над приложением здесь могут появиться промежуточные ПО для авторизации необходимых маршрутов, для валидации передаваемых данных и другие вспомогательные функции.

Контроллеры
Здесь мы поместим основную логику работы нашего приложения. Фактически контроллер в нашем случае некий диспетчер, который принимает запрос на обработку маршрута от роута, обращается к базе данных через сервис и с полученным результатом формирует ответ приложения.

Получить список всех задач достаточной простой обработчик

const get = async (req, res, next) => {
  try {
    const results = await service.getAlltasks();
    res.json({
      status: 'success',
      code: 200,
      data: {
        tasks: results,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

Мы обращаемся к сервису и запрашиваем у базы все текущие задачи нашего TODO листа

const results = await service.getAlltasks();

После отправляем полученный результат клиенту

res.json({
  status: 'success',
  code: 200,
  data: {
    tasks: results,
  },
});

В случае ошибки выполнения мы отправляем ее дальше next(err), для обработчика ошибок в файле server.js

Контроллер для обработки запроса задачи по id похож на предыдущий, но имеет важное отличие. В случае если сервис нам ничего не вернул из базы данных, мы возвращаем ответ 404 - ничего не найдено.

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await service.getTaskById(id);
    if (result) {
      res.json({
        status: 'success',
        code: 200,
        data: { task: result },
      });
    } else {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `Not found task id: ${id}`,
        data: 'Not Found',
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

Точно также мы поступаем для контроллеров обновления задачи и удаления - если ничего не найдено возвращаем ошибку 404

Сервис работы с БД
Сервис для выполнения операций над базой данных тоже достаточно лаконичен

const Task = require('./schemas/task');

const getAlltasks = async () => {
  return Task.find();
};

const getTaskById = id => {
  return Task.findOne({ _id: id });
};

const createTask = ({ title, text }) => {
  return Task.create({ title, text });
};

const updateTask = (id, fields) => {
  return Task.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

const removeTask = id => {
  return Task.findByIdAndRemove({ _id: id });
};

module.exports = {
  getAlltasks,
  getTaskById,
  createTask,
  updateTask,
  removeTask,
};

У нас есть пять функций, которые выполняют все основные операции для нашего простого API

Получить все задачи, мы используем метод find, который вызываем у модели и возвращаем результат в контроллер

const getAlltasks = async () => {
  return Task.find();
};

Получить конкретную задачу по id. Мы вызываем метод findOne, который находит нам единственный результат по условию { _id: id }. Если метод ничего не найдет то будет возвращено значение null

const getTaskById = id => {
  return Task.findOne({ _id: id });
};

Создание новой задачи. Вызываем у модели метод create

const createTask = ({ title, text }) => {
  return Task.create({ title, text });
};

Обновляем задачу методом findByIdAndUpdate, первым параметром передаем условие поиска - совпадение по id, а вторым объект с полями, которые необходимо обновить. Третий параметр указывает, что метод должен вернуть уже обновленный документ

const updateTask = (id, fields) => {
  return Task.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

И последняя операция удаление задачи из базы данных. Используем метод Mongoose findByIdAndRemove, которому передаем id задачи, а метод находит и удаляет его из базы данных.

const removeTask = id => {
  return Task.findByIdAndRemove({ _id: id });
};

Схема
Последним, что осталось нам рассмотреть это файл создания схемы для нашей коллекции задач.

const {Schema, model} = require('mongoose');

const task = new Schema(
  {
    title: {
      type: String,
      minlength: 2,
      maxlength: 70,
    },
    text: {
      type: String,
      minlength: 3,
      maxlength: 170,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
);

const Task = model('task', task);

module.exports = Task;

В принципе здесь нам уже все понятно, мы создаем схему с тремя полями title, text, isDone. Определяем тип хранимых значений и накладываем ограничения. Из нового здесь появился параметр с опциями при создании схемы.

{ versionKey: false, timestamps: true }

Данные опции, отключают версионирование документов установкой значение свойства versionKey в false. Mongoose по умолчанию добавляет версионирование - параметр __v, который указывает версию измененного документа. В основном это нужно для документов со сложной структурой, а поскольку структура нашей схемы плоская мы версионирование отключаем. Вторая опция включает в нашу схему два дополнительных свойства, время создания документа createdAt и время обновления updatedAt. Причем Mongoose будет автоматически устанавливать эти поля при создании и изменять поле updatedAt при каждом обновлении документа, что согласитесь очень удобно.

В итоге типичный документ в нашей коллекции tasks должен выглядеть так:

{
  "isDone": false,
  "_id": "5f8e3067975b9d23a0dbd270",
  "title": "My work",
  "text": "Pain and pain!",
  "createdAt": "2020-10-20T00:33:43.492Z",
  "updatedAt": "2020-10-20T00:43:16.961Z"
}

Мы разобрали простое приложение REST API и подключение библиотеки Mongoose в нашем проекте