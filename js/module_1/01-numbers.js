'use strict';

// ========== Numbers ==========
// =============================

/* Парсинг числа с Number.parseInt() и Number.parseFloat() */
// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);

// console.log('elementWidth ', result);

// let elementHeight = '25.8px';
// const resultFloat = Number.parseFloat(elementHeight);

// console.log(resultFloat);

// /* Метод число.toFixed(digits) */
// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);

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

// console.log(15 % 2);

// console.log(!Boolean(30 % 2));

/*
  ? Данно 90 минут, узнайте сколько в данном числе содержиться часов и минут.
  ? Результат выведите в консоль.
*/

// const minutes = 90;

// const hours = 90 / 60;

// const otherMinutes = 90 % 60;

// console.log(Math.floor(1.1));
// console.log(otherMinutes);

/*
 * Number.parseInt() Number.parseFloat(), приведення до числа
 */

// console.log(Number.parseInt('25.7px'));

// const num = Number(prompt('Введите первое число'));
// const num2 = Number(prompt('Введите второе число'));

// const result = num + num2;

// console.log(result);

// let number = '102.5km';
// number = Number.parseFloat(number);

// console.log(number);

/* 
  ? Попросите пользователя ввести число.
  ? Выведите результат в консоль.
  ? Приведите строку к числу.
*/

// const number = Number(prompt('type your number'));

// console.log(number);

//? Данна строка '24px', достаньте с этой строки целое число.

// console.log(parseInt('24px'));

//? Данна строка '25.5%', достаньте с этой строки дробное число.

// console.log(parseFloat('25.5%'));

//? Попробуйте привести к числу, данную строку 'abc'.

// console.log(Number('abc'));

//? Запросите у пользователя ввести два числа, сложите их и выведите результат в консоль.

// const num1 = Number(prompt('write first number'));

// const num2 = Number(prompt('write second number'));

// console.log(num1 + num2);

/*
 * Об'єкт Math, методи Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

// const num = 1.4;

// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.trunc(num));
// console.log(Math.max(num, -6, -5));
// console.log(Math.min(num, -6, -5));
// console.log(Math.pow(2, 3));
// console.log(Math.random());
// console.log(Math.sqrt(4));

// console.log(isNaN('true'));

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