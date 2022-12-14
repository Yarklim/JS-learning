Пример приложения
После теории давайте применим полученные данные на практике и создадим простое приложение на express.

Фреймворк Express представляет свой генератор приложений https://expressjs.com/en/starter/generator.html. Генератор ориентируется на MVC архитектуру приложений и имеет следующую структуру каталогов

├── app.js
├── bin
│ └── www
├── package.json
├── public
│ ├── images
│ ├── javascripts
│ └── stylesheets
│   └── style.css
├── routes
│ ├── index.js
│ └── users.js
└── views
  ├── error.pug
  ├── index.pug
  └── layout.pug

Установку можно произвести следующей командой

npx express-generator --view=ejs simple-express

npx - утилита, которая уже есть у вас в системе если вы установили Node.js версии выше 8.x, она позволяет выполнять команды других утилит не устанавливая их глобально в системе. Дальше мы указываем, что хотим использовать шаблон ejs параметром --view=ejs и последним параметром указываем имя приложения simple-express

Приложение находится в файле app.js, первое, что мы должны сделать это изменить var на const во всем приложении. После этого файл app.js должен выглядеть так:

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

Вначале подключены все сторонние пакеты, которые нужны для функционирования приложения. После мы подключаем роуты, в дальнейшем мы их изменим и внесем дополнительный функционал.

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

После создается экземпляр приложения и подключаем шаблоны

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

После идет блок подключения промежуточного ПО

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

Подключается логгер, обработка JSON и данных из форм, и в конце модуль для работы с cookie.

Дальше устанавливаем обработку статических ресурсов

app.use(express.static(path.join(__dirname, 'public')));

После идет подключение роутеров в приложение

app.use('/', indexRouter);
app.use('/users', usersRouter);

Помните, что порядок подключаемого промежуточного ПО имеет значение. В конце приложения идет обработка ошибок. Вначале происходит обработка несуществующего роута или ошибка 404

app.use(function (req, res, next) {
  next(createError(404));
});

По сути отсутствие обработчика на запрашиваемый у сервера роутер это не ошибка и мы создаем ошибку и пробрасываем ее дальше для обработки.

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

Здесь и происходит обработка ошибки. Мы пробрасываем переменные message и error в шаблон error.ejs и выполняем его рендер

Внутри папки с нашим приложением надо установить пакеты

npm i

Теперь для режима разработки мы установим пакет nodemon. Он позволяет выполнять live reload сервера при разработке. Добавим необходимую зависимость

npm i nodemon -D

После в файле package.json для запуска приложения в режиме разработки добавим скрипт start:dev

  "scripts": {
    "start": "node ./bin/www",
    "start:dev": "nodemon ./bin/www"
  },

И запуск приложения в режиме разработке будет следующим

npm run start:dev

После запуска, приложение выглядеть будет так:

simple app

Приложение выполняет рендер одного шаблона. Сам рендер выполняется в файле роутинга routes/index.js

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

Пришло время изменить наше приложение - добавим форму, чтобы мы могли принять данные. Файл index.ejs должен выглядеть так:

<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel="stylesheet" href="/stylesheets/style.css" />
  </head>
  <body>
    <form action="/login" method="POST">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" />
      <label for="password">Пароль</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Отправить</button>
    </form>
  </body>
</html>

Для лучшего восприятия добавим следующие стили в файл public/stylesheets/style.css

form {
  display: flex;
  flex-direction: column;
  width: 400px;
}

input,
button {
  margin-bottom: 15px;
}

Нам необходим обработчик для пути /login на который будут приходить данные от формы. Давайте добавим его. Но вначале давайте добавим новый шаблон response.ejs куда мы будем выводить данные формы.

<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
  <link rel='stylesheet' href='/stylesheets/style.css' />
</head>
<body>
<p>Email: <%= email %></p>
<p>Password: <%= password %></p>
<a href='/'>Вернуться на главную</a>
</body>
</html>

Теперь в файл роутинга добавим обработчик маршрута

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  res.render('response', { title: 'Simple express app', email, password });
});

Он достаточно упрощен, мы принимаем две переменные и передаем их для рендера шаблона response.ejs, чтобы показать, что данные получены. Если все сделано правильно то при отправке формы мы будем просто видеть, что мы отправили на сервер

simple app

Это пример показывает передачу данных от фронтенд части используя формы.

Теперь в файл роутинга user.js добавим следующий объект с контактами и выглядеть он должен так:

const express = require('express');
const router = express.Router();
const contacts = [
  { id: '1', username: 'Felix', surname: 'Brown', email: 'felix@test.com' },
  { id: '2', username: 'Sonya', surname: 'Redhead', email: 'sonya@test.com' },
  { id: '3', username: 'Conan', surname: 'Barbarian', email: 'conan@test.com' },
];
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(contacts);
});

module.exports = router;

И если мы обратимся по маршруту /users сервер отправит нам JSON

simple app

Для красивого вывода JSON в браузере можно использовать следующее приложение: https://github.com/callumlocke/json-formatter у него так же есть расширение для Chrome. Установите его и вы всегда будете видеть JSON данные в читаемом виде.

Давайте добавим обработчик для получения уникального пользователя по его идентификатору

router.get('/:id', function (req, res, next) {
  const { id } = req.params;
  const contact = contacts.filter(el => el.id === id);
  res.json(contact);
});

Теперь по обращению к урлу /users/2 мы получаем данные Рыжей Сони

[
  {
    "id": "2",
    "username": "Sonya",
    "surname": "Redhead",
    "email": "sonya@test.com"
  }
]

Такой подход передачи данных мы будем использовать чаще всего для редактирования и удаления конкретной сущности по ее уникальному идентификатору.

С полным кодом указанного примера можно ознакомиться здесь:


А мы пойдем дальше и рассмотрим более продвинутые темы.

Переменные окружения
Когда мы начинаем разрабатывать веб-приложение, рано или поздно сталкиваемся с ситуацией использования сторонних источников данных, сервисов, учетных данных API и т.д.. Доступ к этим ресурсам почти всегда происходит с помощью секретных ключей. Это становится большой проблемой, когда код приложения передается в общедоступный репозиторий как GitHub. Код доступен всем, кто его видит, а значит и наши секретные ключи тоже.

Как решают эту проблему? Правильное решение - использовать переменные среды. Это локальные переменные, которые доступные нашему приложению. Создание этих переменных выполняется с помощью модуля dotenv. Этот модуль загружает переменные среды из файла .env, который вы создаете например в корневом каталоге нашего приложения. После мы подключаем модуль в нашем приложении и он добавляет переменные окружения в объект process.env, и уже оттуда, не показывая значения этих переменных, мы можем использовать их в приложении. Само собой файл .env мы должны добавить в файл .gitignore

Сначала установим пакет.

npm install dotenv

Затем добавим в файле app.js следующую строку.

require('dotenv').config();

Затем создаем .env файл в корневом каталоге нашего приложения и добавляем в него переменные.

SECRET_KEY=123456
NODE_ENV=development

Теперь в файле приложения app.js будут доступны любые переменные, которые мы добавили в файл .env. Эти переменные доступны теперь в приложении следующим образом

process.env.SECRET_KEY;
process.env.NODE_ENV;

В дальнейшем мы всегда будем использовать переменные окружения для доступа к секретным данным, такими как секретные слова для cookie или jwt, url подключения к базе данных и прочее.

Логирование
В любом приложении необходимо протоколирование запросов на сервер. Генератор приложений использует для этого модуль morgan — гибкий промежуточный компонент для протоколирования запросов с возможностью настройки формата вывода.

Для использования morgan вызывается как функция промежуточной обработки

const morgan = require('morgan');
...
app.use(logger('dev'))

Для разработки мы используем предопределенный формат журнала dev. Есть пять предопределенных форматов, которые мы можем использовать, чтобы легко получить необходимую информацию:

combined - использует режим combined сервера Apache для формата журналов
:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"


common - использует режим common сервера Apache для формата журналов
:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]

dev - формат журнала с цветовой кодировкой (по статусу запроса) Маркер будет окрашен в зеленый цвет для кодов успеха, красный для кодов ошибок сервера, желтый для кодов ошибок клиента, бирюзового для перенаправления кодов и неокрашенных информационных кодов
:method :url :status :response-time ms - :res[content-length]

logger

short короче, чем формат по умолчанию
:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms

tiny - самый короткий вывод, только время ответа и несколько дополнительных элементов.
:method :url :status :res[content-length] - :response-time ms

Полезность логера заключается в том, что он позволит вам обработать свои журналы аналитическими приложениями, генерирующими полезную статистику. При выдаче запросов от разных клиентских приложений в журнале будет видно строку, идентифицирую­щую агента. Можно создавать собственные форматы журнала. Для этого нужно передать специальную строку маркеров. Например, следующий формат :method :url :response-time ms будет создавать записи вида

GET / 15 ms:

По умолчанию доступны следующие маркеры. Вы также можете определять нестандартные маркеры и перенаправить вывод в файл журнала.

Что такое REST
Введение
REST (REpresentational State Transfer) - расшифровывается как передача репрезентативного состояния. Это набор принципов проектирования для повышения масштабируемости и гибкости сетевых коммуникаций. Эти принципы отвечают на ряд вопросов.

Какие компоненты системы?
Как они общаются между собой?
Как можно гарантировать, возможность поменять разные части системы в любое время?
Как можно масштабировать систему для обслуживания большого количества пользователей?
Рой Т. Филдинг впервые ввел термин REST в 2000 году в своей докторской диссертации «Архитектурные стили и проектирование сетевых архитектур программного обеспечения». Ее можно почитать по этому адресу

На момент публикации диссертации Интернет уже был очень популярен. Филдинг по сути сделал шаг назад и проанализировал черты, которые сделали Интернет более успешным, чем конкурирующие Интернет-протоколы. Затем он представил схематическую структуру, которая сделает сетевое общение «веб-подобным». Итак, REST - это общий набор принципов, не специфичных для Интернета. Его можно применять к другим типам сетей, например к встроенным системам. REST также не является протоколом, поскольку не требует подробностей реализации. В диссертации Филдинга излагается ряд архитектурных ограничений, которым должна удовлетворять система, чтобы считаться RESTful.

Что такое URI и URL?
Прежде чем мы перейдем к тому какие архитектурные ограничения накладывает REST, давайте разберемся с терминологией URL и URI. Термины URI и URL часто используются как синонимы, но это не совсем одно и то же.

URI
Представляет собой идентификатор конкретного ресурса. Как страницу, книгу или документ.

URL
Представляет особый тип идентификатора, который также говорит вам , как получить к нему доступ

В принципе URI это более широкое понятие и включает в себя URL. Если проводить какие-то аналогии упрощения то можно считать, что URI это, что-то вроде имени, а URL конкретно имя и как к нему добраться. Например ISBN книги это URI, а вот https://goit.ua это URL здесь есть имя и как к нему дойти - протокол. Т.е. если протокол (https, ftp и т.д.) либо присутствует, либо подразумевается для домена, вы должны называть его URL-адресом, даже если это также URI.

Существует следующая традиционная форма записи `URL:

<scheme>://[<login>[:<password>]@]<host>[:<port>]][/<path>][?<query>][#<fragment>]

Пример:

http://user:password@host.com:80/resourse/path/?query=name&ttt=123#hash

В этой записи:

scheme - Это сетевой протокол по которому происходит обращение к ресурсу
login - не обязательный параметр имя пользователя, используемое для доступа к ресурсу
password - пароль указанного пользователя, если он необходим
host - полностью прописанное доменное имя хоста в системе DNS (goit.ua) или IP-адрес хоста в форме четырех групп десятичных чисел, разделенных точками
port - порт хоста для подключения, вспомните мы часто использовали http://localhost:3000 где 3000 это и есть порт. Возникает закономерный вопрос, почему порт не указывается например для URL в браузере. Просто браузер знает, что для протокола http порт равен 80, а для https он равен 443 и подставляет его за нас
path - уточняющая информация о месте нахождения ресурса.
query - строка запроса с передаваемыми на сервер (методом GET) параметрами. Начинается с символа ?, разделитель параметров — знак &. Пример: ?foo=123&baz=234&bar=value
fragment - идентификатор с предшествующим символом #. Часто его называют хеш - hash или якорь. Якорем может быть указан заголовок внутри документа или атрибут id элемента. По такой ссылке браузер откроет страницу и переместит окно просмотра к указанному элементу. Например, ссылка на секцию контактов в лендинге: https://example.com/#contact.
Архитектурные ограничения RESTful
Клиент-сервер
Первое ограничение указывает, что сеть должна состоять из клиентов и серверов. Сервер - это компьютер, у которого есть интересующие ресурсы, а клиент - это компьютер, который хочет взаимодействовать с ресурсами, хранящимися на сервере. Когда вы просматриваете Интернет, ваш компьютер действует как клиент и отправляет HTTP-запросы на сервер для доступа к информации и управления ею. Система RESTful должна работать по модели клиент-сервер, даже если компонент иногда действует как клиент, а иногда как сервер.

Альтернативой клиент-серверной архитектуре, отличной от RESTful, является архитектура интеграции на основе событий. В этой модели каждый компонент непрерывно транслирует события, при этом ожидая соответствующих событий от других компонентов. Нет личного общения, только трансляция и подслушивание. REST требует индивидуального взаимодействия, поэтому архитектура интеграции на основе событий не будет RESTful.

Stateless
Отсутствие состояния. Отсутствие состояния не означает, что серверы и клиенты не имеют состояния, это просто означает, что им не нужно отслеживать состояние друг друга. Когда клиент не взаимодействует с сервером, сервер не знает о его существовании. Сервер также не ведет учет прошлых запросов. Каждый запрос рассматривается как отдельный, т.е. никаких сессий.

Единый интерфейс
Это ограничение гарантирует, что существует общий язык между серверами и клиентами, который позволяет заменять или изменять каждую часть без нарушения работы всей системы. Это достигается за счет 4 дополнительных ограничений:

идентификация ресурсов
манипулирование ресурсами с помощью представлений
информативные (самоописательные) сообщения
гипермедиа.
Первое ограничение интерфейса: идентификация ресурсов
Первое ограничение единого интерфейса влияет на способ идентификации ресурсов. В терминах REST ресурсом может быть что угодно - документ HTML, изображение, информация о заказе и т. д. Каждый ресурс должен быть однозначно идентифицирован стабильным идентификатором. «Стабильный» идентификатор означает, что он не изменяется при взаимодействии, и он не изменяется даже при изменении состояния ресурса. Если ресурс действительно перемещается на другой идентификатор, сервер должен дать клиенту ответ, указывающий, что запрос был неверным, и дать ему ссылку на новое местоположение ресурса.

Интернет использует URL для идентификации ресурсов и HTTP в качестве стандарта связи. Чтобы получить ресурс, который хранится на сервере, клиент отправляет HTTP-запрос GET на URL, который идентифицирует этот ресурс. Каждый раз, когда вы вводите адрес в свой браузер, ваш браузер делает запрос GET на этот URL. Если он получает статус 200 и HTML-документ, он отображает страницу в окне, чтобы вы могли ее просмотреть.

Второе ограничение интерфейса: манипулирование ресурсами через представления
Второе ограничение говорит о том, что клиент управляет ресурсами, отправляя представления на сервер - обычно это объект JSON или XML, содержащий контент, который он хотел бы добавить, удалить или изменить. В REST сервер полностью контролирует ресурсы и отвечает за любые изменения. Pесурсами могут служить записи в базе данных, файлы и т.д. Когда клиент желает внести изменения в ресурсы, он отправляет серверу представление о том, как должен выглядеть полученный ресурс. Сервер принимает запрос как предложение, но имеет полный контроль и сам принимает действие.

Самый простой пример это блог в сети. Когда пользователь создает новое сообщение в блоге, компьютер-клиент сообщает серверу, что необходимо добавить новое сообщение в блог. Для этого он отправляет HTTP-запрос POST, возможно PUT с контентом для нового сообщения в блоге. Сервер отправляет ответ клиенту, указывающий, было ли сообщение создано или возникла проблема создания записи.

Третье ограничение интерфейса: информативные (self-descriptive) сообщения
Информативные сообщения - еще одно ограничение, обеспечивающее единообразный интерфейс между клиентами и серверами. Информативное сообщение - это сообщение, которое содержит всю информацию, которая необходима получателю для его понимания. Дополнительной информации в отдельной документации или в другом сообщении быть не должно.

Чтобы понять, как это применимо к Интернету, давайте проанализируем набор HTTP-запросов и ответов.

Когда пользователь вводит http://www.example.com в адресной строке своего веб-браузера, браузер отправляет следующий HTTP-запрос:

GET / HTTP/1.1
Host: www.example.com

Это сообщение является информативным, поскольку оно сообщает серверу, какой метод HTTP был использован, и какой протокол использовался (HTTP 1.1).

Сервер может отправить ответ, подобный этому:

HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Your Site Title Here</title>
  </head>
  <body>
    Hello world!
    <a href="https://goit.ua">GoIT world!</a>
    <img src="https://goit.ua/wp-content/themes/1/images/Layer.png">
  </body>
</html>

Это сообщение является информативным (самоописательным), потому что оно сообщает клиенту, как ему нужно интерпретировать тело сообщения, указывая, что это Content-type было text/html. У клиента есть все необходимое в этом единственном сообщении, чтобы обработать его должным образом.

Четвертое ограничение интерфейса: гипермедиа
Последнее ограничение интерфейса - это ограничение гипермедиа. Гипермедиа - это модное слово для данных, отправляемых с сервера клиенту, которые содержат информацию о том, что клиент может сделать дальше, другими словами, какие дальнейшие запросы он может делать. В REST серверы должны отправлять клиентам только гипермедиа. HTML - это разновидность гипермедиа. Чтобы лучше понять это, давайте еще раз посмотрим на ответ сервера выше.

<a href="https://goit.ua">GoIT world!</a>

сообщает клиенту, что он должен сделать запрос GET на https://goit.ua, если пользователь щелкнет ссылку.

<img src="https://goit.ua/wp-content/themes/1/images/Layer.png" />

сообщает клиенту, что нужно немедленно отправить запрос GET на https://goit.ua/wp-content/themes/1/images/Layer.png, чтобы он мог отобразить изображение пользователю.

Когда система имеет идентификаторы для каждого ресурса, манипулирует ими путем отправки представлений от клиента на сервер и имеет сообщения, которые являются информативными и состоят из гипермедиа, считается, что она имеет единый интерфейс.

Кэширование
Кэширование относится к ограничению, при котором ответы сервера должны быть помечены как кэшируемые или некэшируемые. Кэширование происходит, когда клиент сохраняет предыдущие ответы, полученные от сервера, поэтому, когда эти данные снова понадобятся, он может не делать запрос по сети, а использовать кэшированные данные. Кэширование частично или полностью устраняет некоторые клиент-серверные взаимодействия, способствуя масштабируемости и производительности приложения.

Многослойная (многоуровневая) система
Многослойная (многоуровневая) система состоит в том, что компонентов может быть больше, чем просто серверов и клиентов. Это значит, что в системе может быть более одного уровня. Однако каждый компонент ограничен, чтобы видеть и взаимодействовать только со следующим слоем. Прокси - это дополнительный компонент, который передает HTTP-запросы на серверы или другие прокси. Прокси-серверы полезны для балансировки нагрузки и проверки безопасности. Прокси-сервер действует как сервер для первоначального клиента, который отправляет запрос, а затем действует уже как клиент, когда передает этот запрос дальше. Шлюз может быть еще одним дополнительным слоем, который переводит HTTP-запрос в другой протокол и распространяет этот запрос, а затем преобразует полученный ответ обратно в HTTP. Клиент при этом взаимодействует со шлюзом как с обычным сервером.

Код по запросу
Необязательное ограничение, которое относится к возможности сервера отправлять исполняемый код клиенту. Когда документ HTML загружен, браузер автоматически загружает код JavaScript с сервера и выполняет его локально.

Итог
Таким образом, система RESTful - это любая сеть, удовлетворяющая рассмотренным ограничениям. Система RESTful должна быть гибкой для различных случаев использования, масштабируемой для поддержки большого количества пользователей и компонентов и адаптируемой с течением времени. Но помните, что REST - это теоретический проект.

Основные методы HTTP
Идемпотентность
Свойство объекта или операции при повторном применении операции к объекту давать тот же результат, что и при первом. Примеры:

cложение с нулём: a=a+0=(a+0)+0=((a+0)+0)+0=...
умножение на единицу: x = x*1 = (x*1)*1 = ((x*1)*1)*1 = ...;
С точки зрения службы RESTful, чтобы операция была идемпотентной, клиенты могут совершать один и тот же вызов несколько раз, производя один и тот же результат, работая как "сеттер" метод на языке программирования. Другими словами, создание нескольких одинаковых запросов имеет тот же эффект как и отправка одного запроса. Хотя идемпотентные операции производят один и тот же результат на сервере, сам ответ может отличаться то есть состояние ресурса может измениться между запросами.

Основные или наиболее часто используемые HTTP-методы GET/POST/PUT/DELETE

GET запрашивает представление ресурса. Запросы с использованием этого метода могут только извлекать данные.

POST используется для отправки сущностей к определенному ресурсу. Вызывает изменение состояния и побочные эффекты на сервере поскольку чаще всего создает новый ресурс по отправленному представлению

PUT заменяет ресурс текущим представлением запроса

DELETE удаляет указанный ресурс.

PATCH используется для частичного изменения ресурса

HTTP метод GET
Используется для получения (или чтения) представления ресурса. В случае успешного адреса, метод GET возвращается представление ресурса в формате XML или JSON в сочетании с кодом состояния HTTP 200 (OK). В случае неудачи возвращается код 404 (NOT FOUND) или 400 (BAD REQUEST). Является безопасным (идемпотентным) методом. Это означает, что он предназначен только для получения информации и не должен изменять состояние сервера или иметь побочных эффектов.

HTTP метод POST
Запрос наиболее часто используется для создания новых ресурсов. На практике он также используется для создания вложенных ресурсов. При создании нового ресурса, POST запрос отправляет представление, а сервис берет на себя ответственность на назначение новому ресурсу ID и т.п. При успешном создании ресурса возвращается HTTP код 201 Create, а также может быть установлен заголовок Location с адресом созданного ресурса. Метод POST не является безопасным или идемпотентным запросом поскольку происходит побочный эффект - создание ресурса.

HTTP метод PUT (PATCH)
Обычно используется для обновления ресурса. Тело запроса при отправке PUT-запроса к существующему ресурсу URL должно содержать обновленные данные оригинального ресурса (полностью, или только обновляемую часть - PATCH). При успешном обновлении возвращается код 200 (или 204 если не был передан какой либо контент в теле ответа). Метод PUT считается небезопасной операцией, так как в процессе выполнения происходит модификация (или создание) экземпляров ресурса на стороне сервера, но этот метод идемпотентен. Другими словами, создание или обновление ресурса посредством отправки PUT запроса - ресурс не исчезнет, будет располагаться там же, где и был

HTTP метод DELETE
Используется для удаления ресурса, идентифицированного конкретным URL (ID). При успешном удалении ресурса возвращается код 200 (OK) HTTP, совместно с телом ответа, содержащим данные удаленного ресурса. Также возможно использование HTTP кода 204 (NO CONTENT) без тела ответа. Согласно спецификации HTTP, метод DELETE идемпотентен. Если вы выполняете DELETE запрос к ресурсу, он удаляется. Повторный DELETE запрос к ресурсу закончится также: ресурс удален.

Коды ответа HTTP
Как видно любой ответ от сервера должен указывать код состояния HTTP. Он показывает, был ли успешно выполнен определённый HTTP запрос. Коды делятся на пять групп:

Информационные 100 - 199
  100: Continue

Успешные 200 - 299
  200: OK
  201: Created
  202: Accepted
  204: No Content

Перенаправления 300 - 399
  301: Moved Permanently
  307: Temporary Redirect

Клиентские ошибки 400 - 499
  400: Bad Request
  401: Unauthorized
  403: Forbidden
  404: Not Found

Серверные ошибки 500 - 599
  500: Internal Server Error
  501: Not Implemented
  502: Bad Gateway
  503: Service Unavailable
  504: Gateway Timeout

Более подробнее почитайте в стандарте RFC 2616 или более проще MDN

CORS
Cross-Origin Resource Sharing (CORS, перекрестный обмен ресурсами) - это механизм, который с помощью HTTP-заголовков дает браузеру разрешение загружать ресурсы с определенного источника на запрос web-приложения, полученного из отличного источника.

NOTE
Пример перекрестного запроса JavaScript-код web-приложения, размещенного на домене http://example.com, пытается с помощью Fetch-запроса получить данные от Web-API с другого домена http://api-example.com/data

В целях безопасности все браузеры прекращают все перекрестные HTTP-запросы которые производятся клиентским JavaScript. Это называется соблюдение правила одного источника и получается, что web-приложение, полученное с определенного домена (Github pages), не может выполнять запросы к HTTP-ресурсам с отличающегося домена (Heroku). Чтобы получить ответ, что поступает с API, веб сервер на котором реализовано API должен содержать соответствующие CORS-заголовки.

Механизм CORS делает безопасные перекрестные запросы и передачи данных между web-браузерами и web-серверами.

Для Node.js это модуль cors, доступный через реестр npm. Установка производится с помощью

npm install cors

Пример:

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
  res.json({ message: 'CORS is activated' });
});

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000');
});

В функцию промежуточного ПО cors, мы можем передать аргумент конфигурационный объект со следующими свойствами

origin: Настраивает заголовок CORS Access-Control-Allow-Origin. Чаще всего это строка "*" которая разрешает запрос от любого домена. Возможно конкретное значение по типу "http://example.com" и будут разрешены только запросы с "http://example.com". Можно использовать регулярное выражение или массив строк или регулярных выражений если доступ к API возможен с разных доменов

methods: Настраивает заголовок CORS Access-Control-Allow-Methods. Ожидает строку с HTTP методами - например, "GET, PUT, POST", можно массив ['GET', 'PUT', 'POST'], которым разрешены междоменные запросы.

allowedHeaders: Настраивает заголовок CORS Access-Control-Allow-Headers. Ожидает строку с разделителями-запятыми например, "Content-Type, Authorization" или массив ['Content-Type', 'Authorization'] - какие заголовки разрешены при запросе.

exposedHeaders: Настраивает заголовок CORS Access-Control-Expose-Headers. Управляет пользовательскими заголовками.

credentials: Настраивает заголовок CORS Access-Control-Allow-Credentials. Установите true для передачи заголовка, в противном случае он не указывается.

maxAge: Настраивает заголовок CORS Access-Control-Max-Age. Установите целое число для передачи заголовка, в противном случае он опускается.

preflightContinue: Передать ответ предварительной проверки CORS следующему обработчику.

optionsSuccessStatus: Предоставляет код состояния для использования при успешных OPTIONS запросах, поскольку некоторые устаревшие браузеры (IE11, различные SmartTV) не работают со статусом 204.

Конфигурация по умолчанию эквивалентна:

{
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}

Формирование URL для REST API
В этом разделе мы поговорим о правильном именовании ресурсов для API. Когда ресурсы названы правильно, API интуитивно понятен и прост в использовании. Часто конечные URL по запросу ресурса называют endpoints API

Что есть хорошей практикой для правильного именования?

Ну во первых необходимо использовать для описания базовых URL существительные во множественном числе - users, contacts. Также надо использовать более конкретные и четкие имена news, videos, а не абстрактные items или elements. Сложную логику для URL необходимо описывать за счет дополнительных параметров, т.е. прятать за знаком ?. Пример использование пагинации /users?limit=25&offset=50, фильтрация ответа /friends?fields=id,name,picture

Исходя из сказанного следующие наименования будут плохой практикой

/api/users/13/remove
/api/getusers
/api/v1/users-get

Здесь мы используем глаголы, указываем удаление для /api/users/13/remove, а необходимо просто использовать HTTP метод DELETE

Давайте рассмотрим хорошие практики именования URL для разнообразных ситуаций

Добавление нового клиента в систему:

HTTP метод: POST
URL: http://www.example.com/customers

Получить данные клиента с идентификатором клиента ID 112233:

HTTP метод: GET
URL: http://www.example.com/customers/112233

Тот же URL мы используем для HTTP методов PUT и DELETE для обновления и удаления соответственно.

Создание нового продукта:

HTTP метод: POST
URL: http://www.example.com/products

Для чтения, обновления, удаления продукта с ID 432111, соответственно:

HTTP метод: GET, PUT, DELETE
URL: http://www.example.com/products/432111

Создания нового заказа для клиента вне контекста клиента

HTTP метод: POST
URL: http://www.example.com/orders

Создание того же заказа, но в контексте конкретного клиента с ID 332244

HTTP метод: POST
URL: http://www.example.com/customers/332244/orders

Список заказов принадлежащих клиенту ID 332244:

HTTP метод: GET
URL: http://www.example.com/customers/332244/orders

Пусть необходим URL для добавления новой позиции в заказе с ID 1234, для клиента с ID 332244:

HTTP метод: POST
URL: http://www.example.com/customers/332244/orders/1234/lineorders

Получение списка заказа по ID заказа без знания ID конкретного клиента

HTTP метод: GET
URL: http://www.example.com/orders/8769

Пагинация производится через query строку с помощью параметра offset - это начальный номер позиции, и параметр limit - максимальное количество возвращаемых элементов. Они могут называться и по другому, например skip, limit

HTTP метод: GET
URL: http://api.example.com/resources?offset=0&limit=25

Сложная фильтрация по значениям. Можно использовать разделитель двойное двоеточие ::, которое отделяет имя свойства от значения сравнения

HTTP метод: GET
URL: http://www.example.com/users?filter="name::sam|city::denver"

Сортировка. Один из способов, когда для каждого передаваемого свойства производится сортировка в порядке возрастания, а для каждого свойства, с префиксным тире ("-") сортировка производится в порядке убывания. Сепаратор для каждого имени свойства вертикальная полоса ("|")

HTTP метод: GET
URL: http://www.example.com/users?sort=lastName|firstName|-birthdate

Надеюсь с этих примеров вам стало понятно, как необходимо именовать ресурсы для вашего API

Пример REST API приложения
Рассмотрим простейшее Web-API. Реализуем стандартный todo-list, который будет нам возвращать список текущих заданий. Наш API будет содержать полный набор CRUD (Create, Read, Update, Delete) операций для наших задач.

Мы будем работать с двумя URL

/api/tasks/ - полный CRUD

/api/tasks/:id/status - для изменения статуса задачи, выполнена она или нет

Полный код приложения:


Все запросы к нашему API мы будем выполнять с помощью утилиты Postman

Основной файл приложения
const express = require('express');
const cors = require('cors');
const routerApi = require('./api');

const app = express();

// parse application/json
app.use(express.json());
// cors
app.use(cors());

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server running. Use our API on port: ${PORT}`);
});

Мы здесь подключаем обработку данных в JSON формате, включаем cors и добавляем обработчики ошибок

Реализация API
В файле роутинга мы описываем всю логику поведения нашего API.

Для генерации случайного уникального идентификатора задачи мы используем модуль nanoid

const { nanoid } = require('nanoid');

Все данные о задачах мы храним в массиве tasks, где жестко прописываем одну задачу.

let tasks = [
  {
    id: nanoid(),
    title: 'Work',
    text: 'Do it!',
    done: false,
  },
];

В дальнейшем в этот массив мы будем добавлять новые задачи, удалять и обновлять их

Чтение
Первый обработчик это получения списка всех задач

router.get('/tasks', (req, res, next) => {
  res.json({
    status: 'success',
    code: 200,
    data: {
      tasks,
    },
  });
});

Здесь достаточно все просто мы отдаем объект со статусом 'success', кодом 200 и свойством data, это наша полезная нагрузка куда мы положим массив наших задач. Воспользуемся Postman и отправим наш первый запрос

read

Обработчик для получения задачи по ID

router.get('/tasks/:id', (req, res, next) => {
  const { id } = req.params;
  const [task] = tasks.filter(el => el.id === id);
  res.json({
    status: 'success',
    code: 200,
    data: { task },
  });
});

Создание новой задачи
router.post('/tasks', (req, res, next) => {
  const { title, text } = req.body;
  const task = {
    id: nanoid(),
    title,
    text,
    done: false,
  };

  tasks.push(task);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: { task },
  });
});

При отправке Postman мы выбираем вкладку Body, режим raw формат JSON и устанавливаем HTTP метод POST

{
  "title": "Vacation",
  "text": "Enjoy"
}

create

Мы видим, что мы создали новый ресурс, обратите внимание мы устанавливаем статус 201, и повторный запрос к списку задач нам покажет уже две задачи.

create

Обновление задачи
router.put('/tasks/:id', (req, res, next) => {
  const { id } = req.params;
  const { title, text } = req.body;
  const [task] = tasks.filter(el => el.id === id);
  task.title = title;
  task.text = text;
  res.json({
    status: 'success',
    code: 200,
    data: { task },
  });
});

Нам не нравится заголовок и тело задачи и мы выполняем их обновление новым объектом с помощью Postman и HTTP методом PUT

{
  "title": "My vacation",
  "text": "Enjoy and rest"
}

update

И вызов полного списка задач покажет нам уже обновленный список

update list

Частичное обновление
Для статуса мы используем отдельный URL и HTTP метод PATCH

router.patch('/tasks/:id/status', (req, res, next) => {
  const { id } = req.params;
  const { done } = req.body;
  const [task] = tasks.filter(el => el.id === id);
  task.done = done;
  res.json({
    status: 'success',
    code: 200,
    data: { task },
  });
});

Здесь для задачи мы изменяем значение только ее свойства done

{
  "done": true
}

update list

Удаление
И последнее действие это удаление задачи из списка

router.delete('/tasks/:id', (req, res, next) => {
  const { id } = req.params;
  const newtasks = tasks.filter(el => el.id !== id);
  tasks = [...newtasks];
  res.status(204).json();
});

Установите себе Postman и зная полный URL приложения

https://nodebook-api.glitch.me/api/tasks/

Попробуйте самостятельно повторить указанные действия по созданию и обновлению списка задач.