/* ============= Strings ============= */

//? Конкатенация строк
const firstName = 'Chelsy';
const lastName = 'Emerald';

console.log(firstName + ' ' + lastName); // Chelsy Emerald
console.log(5 + '5'); /* выведет строку '55' */

//? Шаблонные строки
const guestFirstName = 'Yar';
const guestLastName = 'Klim';
const hotelName = 'Aria';
const roomNumber = 1082;

const guestDescription = `Гость ${guestFirstName} ${guestLastName} поселился в гостинице ${hotelName}, комната ${roomNumber}`;

console.log(guestDescription); // Гость Yar Klim поселился в гостинице aria, комната 1082

//? ========== Свойства и методы строк =========
//? У каждой строки есть встроенные свойства и методы, рассмотрим некоторые из них.

//? ------ Свойство length -------
//? Для того чтобы узнать длину строки, то есть количество её символов, у всех строк есть встроенное свойство length, значение которого можно получить обратившись к нему через точку после имени переменной или строкового литерала.

const message1 = 'Welcome to Bahamas!';
console.log(message1.length); // 19
console.log('There is nothing impossible to him who will try'.length); // 47

//? ------- Методы toLowerCase() и toUpperCase() -------
//? Возвращают новую строку в соответствующем регистре, не изменяя оригинальную строку.

const message2 = 'Welcome to Bahamas!';
console.log(message2.toLowerCase()); // "welcome to bahamas!"
console.log(message2.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message2); // "Welcome to Bahamas!"

//? Бывают ситуации когда все символы в строке необходимо преобразовать в один регистр, верхний или нижний.
//? Например, при поиске по ключевому слову, когда пользователь вводит строку 'saMsUng', а сравнить её надо со строкой 'samsung' или 'SAMSUNG'.

console.log('saMsUng' === 'samsung'); // false
console.log('saMsUng' === 'SAMSUNG'); // false

// Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию» введённой пользователем строки, то есть преобразовать все её символы в верхний или нижний регистр.
// Методы строки toLowerCase() и toUpperCase() вернут новую строку в соответствующем регистре, не изменяя оригинальную.

const BRAND_NAME = 'SAMSUNG';
const userInput = 'saMsUng';
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

//? --------- Метод indexOf() ---------
//? Возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено.

const message = 'Welcome to Bahamas!';
console.log(message.indexOf('to')); // 8
console.log(message.indexOf('hello')); // -1

//? --------- Метод includes() ---------
//? Проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае.
//? Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

const productName1 = 'Ремонтный дроид';

console.log(productName1.includes('н')); // true
console.log(productName1.includes('Н')); // false
console.log(productName1.includes('дроид')); // true
console.log(productName1.includes('Дроид')); // false
console.log(productName1.includes('Ремонтный')); // true
console.log(productName1.includes('ремонтный')); // false

//? ИНТЕРЕСНО
//? Все методы строк чувствительны к регистру.

//? --------- Метод endsWith() ----------
//? Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая true или false.

const jsFileName1 = 'script.js';
console.log(jsFileName1.endsWith('.js')); // true

const cssFileName = 'styles.css';
console.log(cssFileName.endsWith('.js')); // false

//? --------- Методы replace() и replaceAll() ----------
//? Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll) подстроки заменены на указанное значение.

const jsFileName = 'script.js';
const minifiedJsFileName = jsFileName.replace('.js', '.min.js');
console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = 'styles.css, about.css, portfolio.css';
const minifiedCssFileNames = cssFileNames.replaceAll('.css', '.min.css');
console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

//? ------- Метод slice() ---------
//? Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки.
//? Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.

const productName = 'Repair droid';
console.log(productName.slice(0, 4)); // "Repa"
console.log(productName.slice(3, 9)); // "air dr"
console.log(productName.slice(0, productName.length)); // "Repair droid"
console.log(productName.slice(7, productName.length)); // "droid"

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
