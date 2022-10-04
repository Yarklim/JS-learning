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

/* ======= Индексация, Свойства и Методы ========= */

// Индексация строки string[], .slice() Метод рядків slice (startIndex, endIndex) використовується для створення копії частини або всього рядка. 
// Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.
let stringIndex = 'Dynamo'; 
console.log(stringIndex[4]); // m
console.log(stringIndex.slice(3)); // amo
console.log(stringIndex.slice(2, 5)); // nam
console.log(stringIndex[0].toLowerCase() + stringIndex.slice(1).toUpperCase()); // dYNAMO

const productName = "Repair droid";
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"

// Поиск в строке .includes()
// Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку. 
// Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".
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

/*=======*/
string1.indexOf();// Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.
string1.lastIndexOf(); 
const message1 = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1
/*=======*/

/*=======*/
string1.replace(); // Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.
string1.replaceAll();
const jsFileName = "script.js";
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"
/*=======*/

/*=======*/
string1.toLowerCase(); // Приводить усі символи строки до ніжнього регістру
string1.toUpperCase(); // Приводить усі символи строки до верхнього регістру
let brand = 'Samsung';
brand = brand.toLowerCase();

let inSearch = 'SamSung';
inSearch = inSearch.toLowerCase();

let searchResult = brand === inSearch;

console.log(searchResult); // true
/*=======*/

/*=======*/
string1.trim(); // убирает пробелы в строке
/*=======*/

/*=======*/
string1.endsWith(); // Дозволяє визначити, чи завершується (або починается) рядок символами (підрядком), зазначеними в дужках, повертаючи true або false.
string1.startsWith();
const jsFileName1 = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false
/*=======*/



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

// const stringName = 'Andrii';

// const newString = stringName + stringName[2];

// console.log(newString);

/*
 * Свойства и Методы строк endsWith, slice, includes, indexOf, toLowerCase, toUpperCase, replace,
 * replaceAll властивість length, індексування
 */
const stringNew = 'Ukraine';

const result1 = stringNew.slice(-3); // ine

const result2 = stringNew.includes('iI'); // false

const result3 = stringNew.indexOf('i'); // 4

const result4 = stringNew.toLowerCase(); // ukraine

const result5 = stringNew.toUpperCase(); // UKRAINE

const result6 = stringNew.replace('n', '3'); // Ukrai3e

const result7 = stringNew.replaceAll('i', '5'); // Ukra5ne

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);

console.log(stringNew[stringNew.length - 1]); // e

//? Запросите у пользователя имя и узнайте из скольких символов, состоит имя.

// const name = prompt('write your name');

// const length = name.length;

// console.log(length); //

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

const str = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';

const isIncluded = str.includes('JS');

console.log(isIncluded); // true

const js = 'JS';

if (isIncluded) {
  console.log(str.indexOf(js)); // 11
}

//? У нас есть строка '24px', узнайте на что заканчивается данная строка, на %, rem, em или px;

const str2 = '24px';

const result = str2.endsWith('px');

console.log(result); // true

//? У нас есть строка '23,4', замените запятую на точку

// const str3 = '23,4';

// console.log(str3.replace(',', '.'));

/*
  ? У нас есть строка:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замените все вхожденя dog на monkey.
*/

// const str4 =
//   'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(str4.replaceAll('dog', 'monkey'));

//? У нас есть дата в формате '12:05:21', замените (:) на (.)

// const str5 = '12:05:21';

// console.log(str5.replaceAll(':', '.'));

/*
  ? Данна строка 'Vasyl Pupkin is 24 years old'.
  ? Скопируйте с этой строки отдельно имя с фамилией и отдельно возраст.
*/

// const str6 = 'Vasyl Pupkin is 24 years old';

// const nameAndSurname = str6.slice(0, 12);

// const ageIndex = str6.indexOf('24');

// const age = str6.slice(ageIndex, ageIndex + 2);

// console.log(nameAndSurname, age);