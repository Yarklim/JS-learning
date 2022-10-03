/* ============= Strings ============= */

// Длина строки .length
const message = 'В этой строке 26 символов.';
console.log(message.length); // 26

// Конкатенация строк
const firstName = 'Chelsy';
const lastName = 'Emerald';

console.log(firstName + ' ' + lastName); // Chelsy Emerald
console.log(5 + '5'); /* выведет строку 55 */

// Шаблонные строки
const guestFirstName = 'Yar';
const guestLastName = 'Klim';
const hotelName = 'Aria';
const roomNumber = 1082;

const guestDescription = `Гость ${guestFirstName} ${guestLastName} поселился в гостинице ${hotelName}, комната ${roomNumber}`;
 
console.log(guestDescription); // Гость Yar Klim поселился в гостинице aria, комната 1082

/* ======= Свойства и Методы ========= */

// Нормализация методами toLowerCase(), toUpperCase()
let brand = 'Samsung';
brand = brand.toLowerCase();

let inSearch = 'SamSung';
inSearch = inSearch.toLowerCase();

let searchResult = brand === inSearch;

console.log(searchResult); // true

// Индексация строки string[], .slice()
let stringIndex = 'Dynamo';
console.log(stringIndex[4]); // m
console.log(stringIndex.slice(3)); // amo
console.log(stringIndex.slice(2, 5)); // nam
console.log(stringIndex[0].toLowerCase() + stringIndex.slice(1).toUpperCase()); // dYNAMO

// Поиск в строке .includes()
const blackListWord1 = 'спам';
const blackListWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропусти!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blackListWord1)); // true
console.log(string1.includes(blackListWord2)); // false

console.log(string2.includes(blackListWord1)); // false
console.log(string2.toLowerCase().includes(blackListWord2)); // true

console.log(string3.includes(blackListWord1)); // false
console.log(string3.includes(blackListWord2)); // false

string1.indexOf();
string1.lastIndexOf();
string1.replace();
string1.replaceAll();
string1.toLowerCase();
string1.toUpperCase();
string1.trim(); // убирает пробелы в строке
string1.endsWith();
string1.startsWith();

/*
  ? Запросите у пользователя имя с возрастом и выведете в консоль сообщение:
  ? Hello имя_пользователя, your age is возраст_пользователя .
*/

// const name = prompt('write your name');

// const age = prompt('write your age');

// const result = 'Hello ' + name + ' your age is ' + age;

// console.log(result);

//? Выполните задачу выше, используя шаблонные строки

// const name = prompt('write your name');

// const age = prompt('write your age');

// const result = `Hello ${name}, your age is ${age}`;

// console.log(result);

// const string = 'Andrii';

// const newString = string + string[2];

// console.log(newString);

/*
 * Свойства и Методы строк endsWith, slice, includes, indexOf, toLowerCase, toUpperCase, replace,
 * replaceAll властивість length, індексування
 */

// const result1 = string.slice(-3);

// const result2 = string.includes('iI');

// const result3 = string.indexOf('i');

// const result4 = string.toLowerCase();

// const result5 = string.toUpperCase();

// const result6 = string.replace('n', '3');

// const result7 = string.replaceAll('i', '5');

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
// console.log(result6);
// console.log(result7);

// console.log(string[string.length - 1]);

//? Запросите у пользователя имя и узнайте из скольких символов, состоит имя.

// const name = prompt('write your name');

// const length = name.length;

// console.log(length);

//? Попросите пользователя ввести email и переведите в нижний регистр.

// const email = prompt('write your email');

// const lowerEmail = email.toLowerCase();

// console.log(lowerEmail);

//? Попросите пользователя ввести email и переведите в верхний регистр

// const email = prompt('write your email');

// const lowerEmail = email.toUpperCase();

// console.log(lowerEmail);

/*
  ? Есть строка 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Узнайте есть ли в этой строке язык: 'JavaScript', или 'JS'?.
  ? Если есть, узнайте позицию на которой находиться данная подстрока
*/

// const str = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';

// const isIncluded = str.includes('JS');

// console.log(isIncluded);

// const js = 'JS';

// if (isIncluded) {
//   console.log(str.indexOf(js));
// }

//? У нас есть строка '24px', узнайте на что заканчивается данная строка, на %, rem, em или px;

// const str = '24px';

// const result = str.endsWith('px');

// console.log(result);

//? У нас есть строка '23,4', замените запятую на точку

// const str = '23,4';

// console.log(str.replace(',', '.'));

/*
  ? У нас есть строка:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замените все вхожденя dog на monkey.
*/

// const str =
//   'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(str.replaceAll('dog', 'monkey'));

//? У нас есть дата в формате '12:05:21', замените (:) на (.)

// const str = '12:05:21';

// console.log(str.replaceAll(':', '.'));

/*
  ? Данна строка 'Vasyl Pupkin is 24 years old'.
  ? Скопируйте с этой строки отдельно имя с фамилией и отдельно возраст.
*/

// const str = 'Vasyl Pupkin is 24 years old';

// const nameAndSurname = str.slice(0, 12);

// const ageIndex = str.indexOf('24');

// const age = str.slice(ageIndex, ageIndex + 2);

// console.log(nameAndSurname, age);