'use strict';

// ========== Numbers ==========
// =============================
/* Більшість арифметичних операцій і математичних функцій перетворюють значення у число автоматично. 
Для того, щоб зробити це явно, використовуйте функцію Number(val), передаючи їй у val те, що потрібно привести до числа.

Якщо значення привести до числа неможливо, результатом буде спеціальне числове значення NaN(Not a Number). 
Аналогічним чином відбувається перетворення і в інших математичних операторах і функціях. */

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"


/* 
? Парсинг числа с Number.parseInt() и Number.parseFloat() 
Перетворюють рядок символ за символом, доки це можливо. У разі виникнення помилки повертається підсумкове число.
Метод Number.parseInt() парсить з рядка ціле число.
Метод Number.parseFloat() парсить з рядка дробове число.
*/
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth); 

// console.log('elementWidth ', result); // 50

// let elementHeight = '25.8px';
// const resultFloat = Number.parseFloat(elementHeight);

// console.log(resultFloat); // 25.8

/* 
? Метод число.toFixed(digits)
*/
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);

/* 
? Перевірка на число
Для перевірки на число можна використовувати метод Number.isNaN(val). Він перевіряє, чи вказане значення є NaN. Метод відповідає на запитання "Це Not A Number?" і повертає:

true - якщо значення val - NaN
false - якщо значення val - не NaN
Для всіх значень val, крім NaN, при передачі в Number.isNaN(val) поверне false. Цей метод не намагається перетворити val в число, а просто виконує перевірку на NaN.
*/

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

/* ========== NaN ========== */
// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity)); /* return 30 */
// console.log(Number(value)); /* return NaN */

/* ========= Object Math ========= */
// const base = 3;
// const power = 5;

// const result = Math.pow(base, power); /* возведение в степень */
// const squareResult = Math.sqrt(base, power); /* квадратный корень */

// console.log(result);
// console.log(squareResult);

// let base = prompt('Enter base number');
// base = Number(base);
// let power = prompt('Enter power number');
// power = Number(power);
// const result = Math.pow(base, power);

// alert(result);
// console.log(result);

/* ======== Генератор случайных чисел ======= */
// console.log(Math.random());

// const max = 50;
// const min = 30;

// const result = Math.random() * (max - min) + min; /* не меньше min, и не больше max чисел */

// console.log(Math.round(result)); /* округление до целого числа, вверх или вниз */

// ===========================================
// ===========================================

/*
 * Математические операторы (+, -, *, /, %, **)
 */
// const num = 4;
// const num2 = 3;

// const result = num  num2;

// console.log(result);

// let a = 4;

// a /= 2;

// console.log(a);

/*
 ? Данно два числа 10 и 20.
 ? Проведите над этими числами математические операции (+ - / *).
*/

// const a = 10 * 20;

// console.log(a);

//? Проверьте четные ли числа 15, 20, 45, 30.

// console.log(15 % 2); // 1

// console.log(!Boolean(30 % 2)); // true

/*
  ? Данно 90 минут, узнайте сколько в данном числе содержиться часов и минут.
  ? Результат выведите в консоль.
*/

// const minutes = 90;

// const hours = 90 / 60;

// const otherMinutes = 90 % 60;

// console.log(Math.floor(hours)); // 1
// console.log(otherMinutes); // 30

/*
 * Number.parseInt() Number.parseFloat(), приведення до числа
 */

// console.log(Number.parseInt('25.7px')); // 27

// const num = Number(prompt('Введите первое число'));
// const num2 = Number(prompt('Введите второе число'));

// const result = num + num2;

// console.log(result);

// let number = '102.5km';
// number = Number.parseFloat(number);

// console.log(number); // 102.5

/* 
  ? Попросите пользователя ввести число.
  ? Выведите результат в консоль.
  ? Приведите строку к числу.
*/

// const number = Number(prompt('type your number'));

// console.log(number);

//? Данна строка '24px', достаньте с этой строки целое число.

// console.log(parseInt('24px')); // 24

//? Данна строка '25.5%', достаньте с этой строки дробное число.

// console.log(parseFloat('25.5%')); //25.5

//? Попробуйте привести к числу, данную строку 'abc'.

// console.log(Number('abc')); // NaN

//? Запросите у пользователя ввести два числа, сложите их и выведите результат в консоль.

// const num1 = Number(prompt('write first number'));

// const num2 = Number(prompt('write second number'));

// console.log(num1 + num2);

/*
 * Об'єкт Math, методи Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

// const num = 1.4;

// console.log(Math.floor(num)); // 1 Округляет вниз, независимо от дробной части
// console.log(Math.ceil(num)); // 2 Округляет вверх, независимо от дробной части
// console.log(Math.round(num)); // 1 Округляет по математическому правилу округления
// console.log(Math.trunc(num)); // 1 Убирает дробную часть
// console.log(Math.max(num, -6, -5)); // -5 Находит максимальное число
// console.log(Math.min(num, -6, -5)); // -6 Находит минимальное число
// console.log(Math.pow(2, 3)); // 8 Возводит первое число (2) в степень второго числа (3)
// console.log(Math.random()); // Выдает рандомное число
// console.log(Math.sqrt(4)); // 2 Вычисляет квадратный корень из числа

console.log(isNaN('true')); // true

/*
  ? Данно число 23.5, примените к нему различный методы округления.
  ? Протестируйте на числах, 23.3, 23.9
*/

// const num = 23.9;

// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.trunc(num));

/*
  ? Попросите пользователя ввести число и степень.
  ? Возведите число в степень и выведете результат в консоль.
*/

// const num = Number(prompt('write your number'));

// const del = Number(prompt('write your del'));

// console.log(num ** del);

/*
  ? Сгенирируйте рандомное число:
  ? от 0 до 1;
  ? от 10 до 50.
*/

// const firstNumber = Math.floor(0 + Math.random() * (1 + 1 - 0));

// console.log(firstNumber);

// const randomNumber = Math.random();

// console.log(randomNumber);

// const secondNumber = Math.floor(10 + Math.random() * (50 + 1 - 10));

// console.log(secondNumber);

//? Сгенирируйте рандомное число. Минимальное и максимально значение, получить от пользователя

// const min = Number(prompt('write your min number'));
// const max = Number(prompt('write your max number'));

// const result = Math.floor(min + Math.random() * (max + 1 - min));

// console.log(result);