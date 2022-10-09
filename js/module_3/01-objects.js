//? ============= Объекты ==============

//? Объекты описывают и группируют характеристики определенной сущности - пользователя, продукта и т.д.
//? Объявляются с помощью фигурных скобок { } - литерал объекта.

const book = {
  title: 'The Last Kingdom',
  autor: 'Bernard Cornwell',
  genres: ['historicsl prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};
const bookTitle = book.title; // обращение к свойсвту объекта через точку
console.log(bookTitle); // 'The Last Kingdom'

const bookGenres = book.genres;
console.log(bookGenres); // ['historical prose', 'adventurs']

const bookPrice = book.price;
console.log(bookPrice); // undefined

//? ключи могут иметь вложенности свойств:

const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
  hobbies: ['swiming', 'music', 'sci-fi'],
};
const location = user.location;
console.log(location); // Об'єкт location

const country = user.location.country; // обращение к вложенным свойствам объекта через точку
console.log(country); // 'Jamaica'

const hobbies = user.hobbies;
console.log(hobbies); // ['swiming', 'music', 'sci-fi']

const firstHobby = user.hobbies[0];
console.log(firstHobby); // 'swiming'

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

//? ------ Обращение к свойствам объекта через [] (используется не часто) ------

const book2 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const book2Title = book2['title'];
console.log(book2Title); // 'The Last Kingdom'

const book2Genres = book2['genres'];
console.log(book2Genres); // ['historical prose', 'adventurs']

const propKey = 'author';
const book2Author = book2[propKey];
console.log(book2Author); // 'Bernard Cornwell'

//? ------- Замена и/или добавление свойств и значений свойств -------
//? Необходимо обратится к имени свойства, например через точку, и присвоить новое свойство или значение.

const book3 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

book3.rating = 9;
book3.isPublic = false;
book3.genres.push('драма');

book3.pageCount = 836;
book3.originalLanguage = 'en';
book3.translations = ['ua', 'ru'];

console.log(book3.rating); // 9
console.log(book3.isPublic); // false
console.log(book3.genres); // ['historical prose', 'adventures', 'драма']

console.log(book3.pageCount); // 836
console.log(book3.originalLanguage); // 'en'
console.log(book3.translations); // ['ua', 'ru']

//? ---------- Удаление свойства ----------
let userInfo = {
  name: 'Jony',
  age: 30,
  'like javascript': true,
};
console.log(userInfo);
delete userInfo.age;
console.log(userInfo);
delete userInfo['like javascript'];
console.log(userInfo);

//? ----------- Копирование объекта ----------
//? При копировании объекта в другую переменную, сам объект не дублируется, а копируется только ссылка на него
let userInfo2 = {
  name: 'Merry',
  age: 25,
  'like javascript': true,
};

console.log(userInfo2);
let userNew = userInfo2;
console.log(userNew);
userNew.age = 27;
console.log(userInfo2);

//? -------- Синтаксис коротких свойств (shorthand properties) --------
//? Позволяет использовать имя переменной (или параметр функции) в качестве имени свойства, а её знечение - в качестве значения свойства.

const name2 = 'Генрі Сибола';
const age2 = 25;

const user2 = {
  name2,
  age2,
};

console.log(user2.name2); // "Генрі Сибола"
console.log(user2.age2); // 25

//? -------- Синтаксис вычисляемых свойств (computed properties) --------

const propName = 'name';
const user3 = {
  age: 25,
  // Ім'я цієї властивості буде взяте зі значення змінної propName
  [propName]: 'Генрі Сибола',
};

console.log(user3.name); // 'Генрі Сибола'

//? ========== Методы объекта ===========
//? Объекты могут хранить не только данные, но и функции для работы с этими данными – методы.
//? Если значение свойства – это функция, такое свойство называется методом объекта.

// ✅ Логічно і синтаксично згруповані сутності
const bookShelf = {
  books: ['The Last Kingdom', 'Dream Guardian'],
  // Це метод об'єкта
  getBooks() {
    console.log('Цей метод буде повертати всі книги - властивість books');
  },
  // Це метод об'єкта
  addBook(bookName) {
    console.log('Цей метод буде додавати нову книгу у властивість books');
  },
};
// Виклики методів
bookShelf.getBooks();
bookShelf.addBook('Нова книга');

//? --------- Доступ к свойствам объекта в методах --------
//? Для доступа к объекту в методе используется не имя переменной, например bookShelf, а ключевое слово this – контекст.
//? Значением this будет объект перед «точкой», то есть объект, вызвавший этот метод, в нашем случае – это ссылка на объект bookShelf2.

const bookShelf2 = {
  books: ['The Last Kingdom'],
  getBooks() {
    console.log(this);
  },
};

// Перед крапкою знаходиться об'єкт bookShelf,
// тому, викликаючи метод, this буде зберігати посилання на нього.
bookShelf2.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

//? -------- Для того чтобы получить доступ к свойствам объекта в методах,
//? мы обращаемся к нему через this и далее, стандартно - «через точку» к свойствам.

const bookShelf3 = {
  books: ['The Last Kingdom'],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf3.getBooks()); // ["The Last Kingdom"]
bookShelf3.addBook('The Mist');
bookShelf3.addBook('Dream Guardian');
console.log(bookShelf3.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf3.removeBook('The Mist');
console.log(bookShelf3.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

//? ========= Проверка существования свойства - Опциональная цепочка =========
let langIt = {
  name: 'JS',
  rating: 2,
  level: 5,
};
console.log(langIt?.name);

//? Оператор in
if ('rating' in langIt) {
  console.log(langIt.rating);
}

//? ============= Итерация объекта =============
//? В отличие от массива или строки, объект - это неитерабельная сущность, то есть его нельзя перебрать циклами for или for...of.

//? --------- Цикл for...in ---------

//? Для перебора объектов используется специальный цикл for...in, который перебирает ключи объекта object.

const book4 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book4) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book4[key]);
}

//? -------- Метод hasOwnProperty() ---------

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = 'Манго';

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4

//? Метод Object.create(animal) создает и возвращает новый объект, связывая его с объектом animal.
//? Поэтому можно получить значение свойства legs, обратившись к нему как dog.legs, хотя он отсутствует в объекте dog – это несобственное свойство из объекта animal.
//? Оператор in, используемый в цикле for...in, не делает разницы между собственными и несобственными свойствами объекта.
//? Эта особенность мешает, поскольку мы всегда хотим взять только собственные свойства.
//? Для того, чтобы узнать, содержит ли объект собственное свойство, используется метод hasOwnProperty(key), возвращающий true или false.

// ❌ Повертає true для всіх властивостей
console.log('name' in dog); // true
console.log('legs' in dog); // true

// ✅ Повертає true тільки для власних властивостей
console.log(dog.hasOwnProperty('name')); // true
console.log(dog.hasOwnProperty('legs')); // false

//? Поэтому, перебирая циклом for...in, необходимо на каждой итерации добавить проверку собственного свойства.
//? Даже если сейчас мы уверены в том, что в объекте отсутствуют несобственные свойства, это защитит от возможных ошибок в будущем.

const book5 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book5) {
  // Якщо це власна властивість - виконуємо тіло if
  if (book5.hasOwnProperty(key)) {
    console.log(key);
    console.log(book5[key]);
  }

  // Якщо це невласна властивість - нічого не робимо
}

//? -------- Метод Object.keys() ----------

//? Встроенный класс Object имеет несколько полезных способов для работы с объектами.
//? Первый из них – это Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств.
//? Если объект не обладает свойствами, метод вернет пустой массив.

const book6 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
const keys1 = Object.keys(book6);
console.log(keys1); // ['title', 'author', 'genres', 'rating']

//? Скомбинировав результат Object.keys() и цикл for...of,
//? можно удобно перебрать собственные свойства объекта, и не используя архаический цикл for...in с проверками принадлежности свойств.
//? Мы перебираем массив ключей объекта и на каждой итерации получаем значение свойства с таким ключом.

const book7 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
const keys2 = Object.keys(book7);

for (const key of keys2) {
  // Ключ
  console.log(key);
  // Значення властивості
  console.log(book7[key]);
}

//? -------- Метод Object.values() ---------

//? Object.values(obj) возвращает массив значений его собственных свойств.
//? Если в объекте отсутствуют свойства, метод Object.values(obj) вернет пустой массив.

const book8 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  rating: 8.38,
};
const keys = Object.keys(book8);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book8);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//? Массив значений свойств также можно перебрать циклом for, например, для получения общей суммы числовых значений.
//? Предположим, что нам нужно сосчитать общее количество продуктов в объекте формата имя - продукта: количество.
//? В таком случае будет уместен метод Object.values() для того, чтобы получить массив всех значений, а затем удобно добавить их.

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};
const values2 = Object.values(goods); // [6, 3, 4, 7]

let total = 0;

for (const value of values2) {
  total += value;
}
console.log(total); // 20

//? --------- Object.assign - дублирование объекта --------
//? Object.assign(кудв(объект), что(свойство №1), что(свойство №1), ...)

let userInfo3 = {
  name: 'Neta',
  age: 27,
};
let userNew2 = Object.assign({}, userInfo3);
userNew2 = 25;
console.log(userInfo3);
console.log(userNew3);

//? Также с помощью этого метода можно добавлять новые свойства в объект

Object.assign(userInfo3, { ['likes javascript']: true, city: 'NY' });
console.log(userInfo3);

//? --------- Метод Object.entries() (используется очень редко) ----------

//? Метод Object.entries(obj) возвращает массив записей, каждый элемент которого будет еще один массив из 2-х элементов:
//? имени свойства и значения этого свойства из объекта obj.

const book9 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  rating: 8.38,
};
const keys3 = Object.keys3(book9);
console.log(keys3); // ['title', 'author', 'rating']

const values3 = Object.values3(book9);
console.log(values3); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book9);
console.log(entries);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

//? =========== Массив Объекта ==========
//? Стандартный набор обычных задач разработчика содержит манипуляцию массивом однотипных объектов.
//? Это означает, что все объекты в массиве гарантированно будут иметь одинаковый набор свойств, но с разными значениями.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'На березі спокійних вод',
    author: 'Роберт Шеклі',
    rating: 8.51,
  },
  {
    title: 'Сон смішної людини',
    author: 'Федір Достоєвський',
    rating: 7.75,
  },
];

//? Для переборки такого массива используется стандартный цикл forof.
//? Значения свойств каждого объекта можно получить, используя синтаксис "через точку",
//? поскольку в каждом объекте набор свойств и их имена будут одинаковы, отличаются только значения.

for (const book of books) {
  // Об'єкт книги
  console.log(book);
  // Назва
  console.log(book.title);
  // Автор
  console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}
//? К примеру, получим список названий всех книг в коллекции books.

const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}
console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

//? Узнаем средний рейтинг всей нашей коллекции.
//? Для этого добавим все рейтинги, после чего поделим это значение на количество книг в коллекции.

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}
const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2

//? =========== Функция-конструктор ==========
/*
Обычный синтаксис создания объекта{... } позволяет создать только один объект.
Но зачастую нам нужно создать множество однотипных объектов, таких как полбзователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора "new"

Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция - конструктор должна вызываться при помощи оператора "new".
*/

function UserInfo(name) {
  //this = {}; Создается пустой оюъект (неявно)
  this.name = name;
  this.age = 30;
  // return this; Возвращается объект (нявно)
}
console.log(new UserInfo('Nata'));
