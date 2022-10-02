'use strict';

// ========= Ввод пользователя ==========
// ======================================

// Методы window.confirm() и window.prompt()
// const shouldRenew = confirm("Do you whant subscribe?");

// console.log(shouldRenew);

// Enter quantity items
// let quantity = prompt('Enter quantity items'); /* prompt return string */
// quantity = Number(quantity); /* переназначение в число */

// console.log(quantity);
// console.log(typeof quantity);

// =====================================
// =====================================

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

