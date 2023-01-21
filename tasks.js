/*
Завдання 1
Візміть об'єкт user1, створіть зміні name та lastName з відповідних властивостей об'єкту, 
а всі інші властивості збережіть у зміну additionalInfo
*/

const user1 = {
  name: 'Тайвин',
  lastName: 'Ланнистер',
  status: 'глава дома Ланнистеров',
  castle: 'Утес Кастерли',
  words: 'Услышь мой рёв!',
  sword: 'Светлый рёв',
  vasalls: ['Рейны', 'Веларионы'],
  marriage: true,
};

/*
Завдання 2
Візміть об'єкт user2, та створіть окрему зміну daughter, куди збережіть значеня із user2.children.daughter. 
Використайте для цього вкладену деструктуризацію.
*/

const user2 = {
  name: 'Тайвин',
  lastName: 'Ланнистер',
  status: 'глава дома Ланнистеров',
  castle: 'Утес Кастерли',
  words: 'Услышь мой рёв!',
  sword: 'Светлый рёв',
  vasalls: ['Рейны', 'Веларионы'],
  children: {
    main: 'Джейме',
    daughter: 'Серсея',
    son: 'Тирион',
  },
};

/*
Завдання 3
Напишіть функцію getBasicInfo, яка отримує об'єкт типу product1 та повертає основну інформацію про товар:

name;
перший елемент масиву img;
price;
у вигляді об'єкту. Зробіть так, щоб функція приймала лише ті властивості об'єкту product, 
які їй потрібні для виконаня завданя.
*/

const product1 = {
  name: 'iphone X',
  img: ['./i.jpg', './2.jpg', './3.jpg'],
  price: 14500,
  article: 23324,
  reviews: [
    {
      name: 'Александра',
      date: '12-03-2020',
      text: 'Работает как часы',
    },
  ],
  techSpec: [
    {
      name: 'Процессор',
      value: 'M1',
    },
  ],
};

/*
Завдання 4
Напишіть функцію getMinPrice, яка отримує масив об'єктів та повертає найнижчу ціну. 
У функції використайте деструктуризацію об'єкту там метод Math.min
*/

const products2 = [
  {
    name: 'Acer Swift 3',
    price: 18000,
  },
  {
    name: 'Lenovo X120S',
    price: 12000,
  },
  {
    name: 'Huawei MateBook D',
    price: 23000,
  },
];

/*
Завдання 5
Візміть об'єкт user3 та додайте йому метод getModifyTabel, який в якості аргументу отримує колбек, 
та повертає новий об'єкт tabel (копію об'єкту user3.tabel), 
де кожна оцінка - це результат роботи callback - функції
(тобто щоб отримати оцінку для нового табелю вам треба стару оцінку передити в callback - функцію,
яку ви отримуєте в якості аргументу, і результат її роботи записати як нову оцінку в новий табель).

В якості аргументу в метод user3.getModifyTabel створіть та передайте функцію convert100to12,
яка отримує оцінку за 100 - бальною системою та повертає її аналог з 12 - бальної,
откругляючи результат до найближчого цілого.
*/

const user3 = {
  name: 'Годрик',
  lastName: 'Гриффиндор',
  sword: 'Годрик Гриффиндор',
  tabel: {
    basicMagic: 70,
    flight: 40,
    fight: 100,
  },
};

/*
Завдання 6
Візміть об'єкт user4 та додайте йому метод getModifySallaries, який в якості аргументу отримує колбек, 
та повертає новий масив sallaries - копію масиву user4.sallaries, де кожне значеня - це результат роботи callback-функції.

В якості аргументу в метод user4.getModifySallaries створіть та передайте функцію convertToUSD, 
яка отримує зарплату у гривні так повертає її в доларах, откругляючи до найближчого цілого.
*/
const user4 = {
  name: 'Годрик',
  lastName: 'Гриффиндор',
  sword: 'Годрик Гриффиндор',
  sallaries: [13000, 15000, 12500],
};

/*
Завдання 7
Напишіть функцію calcBodyMassIndex, яка в якості аргументів отримує вагу в кг так зріст у см, 
і повертає індекс маси тіла, який розраховується за формулою: вага_у_кг / (зріст_у_метрах у квадраті). 
Зробіть її стрілочною та в одну строку.
*/

/*
Завдання 8
Створіть функцію `getFullName`, яка повертає повне ім'я та викличте її для об'єктів
`user5` та `user6`. Всередині функцію використовуйте this.
*/

const user5 = {
  name: 'Годрик',
  lastName: 'Гриффиндор',
};
const user6 = {
  name: 'Геллерт',
  lastName: 'Гриндевальд',
};

/*
Завдання 9
Візміть об'єкт `user7` та додайте йому такі методи:

- `isFavoriteMovie`, який в якості аргументу отримує назву фільму та перевіряє, 
чи є він в списку улюблених у користувача (властивість об'єкту `favoriteMovies`);

- `addFavoriteMovie` - який в якості аргументу отримує назву фільму та якщо його немає 
в списку улюблених, додає його та повертає true, інакше - повертає false;

- `removeFavoriteMovie` - який в якості аргументу отримує назву фільму та якщо він є в 
списку улюблених, видяляє його та повертає true, інакше - повертає false;
```
*/
const user7 = {
  name: 'Годрик',
  lastName: 'Гриффиндор',
  favoriteMovies: ['Dune', 'Avatar', 'Deadpool'],
};

/*
Завдання 10
У вас есть 2 массива - члены секты свидетелей Иеговы и члены секты
Адвентистов седьмого дня.Найдите тех, кто входит в секту свидетелей Иеговы,
но не входит в секту Адвентистов седьмого дня.
*/
const JehovahWEitnesses = [
  {
    name: 'Надежда Петровна',
    age: 66,
  },
  {
    name: 'Василий Петрович',
    age: 66,
  },
  {
    name: 'Елена Павловна',
    age: 66,
  },
  {
    name: 'Александр Сергеевич',
    age: 66,
  },
  {
    name: 'Юлия Кирилловна',
    age: 66,
  },
];

const seventhDayAdventists = [
  {
    name: 'Надежда Петровна',
    age: 66,
  },
  {
    name: 'Андрей Петрович',
    age: 66,
  },
  {
    name: 'Елена Павловна',
    age: 66,
  },
  {
    name: 'Алексей Викторович',
    age: 66,
  },
  {
    name: 'Юлия Кирилловна',
    age: 66,
  },
];

//? ===============================================
//? ===============================================

/*
Завдання 1
Напишите две функции letMeSeeYourName(callback) - спрашивает имя пользователя 
через prompt и вызывает callback функцию greet(name) - коллбек принимающий имя и логирующий 
в консоль строку "Привет <name>" 
Реализуй проверку, что prompt не пустой
*/

/*
Завдання 2
Напишите функцию makeCounter, которая возвращает другую функцию, которая считает 
и логирует количество своих вызовов
*/

/*
Завдання 3
Напишите функцию savePassword(password) которая принимает пароль и возвращает внутреннюю функцию, 
которая принимает строку и возвращает буль true, если строка совпадает с сохраненным паролем и false - если не совпадает
*/

/*
Завдання 4
Напиши функцию конструктор Storage который создаёт объкты для управления складом товаров. 
При вызове будет получать один агрумент - начальный массив товаров, и записывать его в свойство items. 
Добавь методы класса: getItems() - возвращайте массив товаров addItems(item) - получает новый товар 
и добавляет его к текущим removeItem(item) - плучает товар и, если он есть, удаляет его из текущих
*/
const productArr = ['apple', 'banana', 'mango'];

/*
Завдання 5
Напиши функцию конструктор Storage который создаёт объекты для управления складом товаров. 
При вызове будет получать один агрумент - начальный массив товаров, и записывать его в свойство items. 
Добавь методы класса: getItems() - возвращайте массив товаров addItems(item) - получает новый товар 
и добавляет его к текущим removeItem(item) - плучает товар и, если он есть, удаляет его из текущих
*/

/*
Завдання 6
Напиши класс Client который создает объект со свойствами login email 
Объяви приватные свойства #login #email, доступ к которым сделай через геттер и сеттер login email
Создай сеттер changeLogin, который будет изменять login,
Создай сеттер changeEmail, который будет изменять email
*/

/*
Завдання 7
Напиши класс Notes который управляет коллекцией заметок в свойстве items. 
Заметка это объект со свойствами text priority 
Добавь классу статическое свойство Priopity, в котором будет храниться объект с приоритетами. 
Добавь методы addNote(note), removeNote(text) updatePriority(text, newPriority)
*/

//? Сложная задача!!!
/*
Перед вами масив об'єктів. Кожен об'єкт – це співробітник у компанії. Кожен об'єкт має властивість
`sallary` - його зарплата на місяць, та `department` - відділ, в якому він працює.
Знайдіть та виведіть у консоль назву відділу з найбільшою середньою зарплатою.
*/
const employees = [
  {
    name: 'Андрей',
    sallary: 22000,
    department: 'sale',
  },
  {
    name: 'Святослав',
    sallary: 33000,
    department: 'lawyer',
  },
  {
    name: 'Мария',
    sallary: 44000,
    department: 'IT',
  },
  {
    name: 'Иван',
    sallary: 55000,
    department: 'IT',
  },
  {
    name: 'Юрий',
    sallary: 28000,
    department: 'lawyer',
  },
  {
    name: 'Алина',
    sallary: 78000,
    department: 'sale',
  },
  {
    name: 'Алекс',
    sallary: 105000,
    department: 'IT',
  },
];
