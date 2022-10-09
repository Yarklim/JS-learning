'use strict';

// ========== Numbers ==========
// =============================
/* Большинство арифметических операций и математических функций преобразуют значение в число автоматически.
Для того чтобы сделать это явно, используйте функцию Number(val), передавая ей в val то, что надо привести к числу.

Если значение не возможно привести к числу, результатом будет специальное числовое значение NaN (Not a Number). 
Аналогичным образом происходит преобразование и в других математических операторах и функциях. */

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

/* 
? Парсинг числа с Number.parseInt() и Number.parseFloat() 
Преобразуют строку символ за символом, пока это возможно. 
При возникновении ошибки возвращается число, которое получилось.
Метод Number.parseInt() парсит из строки целое число.
*/
//? Метод Number.parseInt() парсит из строки целое число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

//? Метод Number.parseFloat() парсит из строки дробное число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

//? Метод число.toFixed(digits)

// let salary = 1300.16472;
// salary = Number(salary.toFixed(2));

// console.log(salary);

/* 
? -------- Проверка на число --------
Для проверки на число можно использовать метод Number.isNaN(val).
Он проверяет, является ли указанное значение NaN или нет.
Метод отвечает на вопрос "Это Not A Number?" и возвращает:

true - если значение val это NaN
false - если значение val это не NaN

Для всех значений val кроме NaN, при передаче в Number.isNaN(val) вернёт false.
Этот метод не производит попытку преобразовать val к числу, а просто выполняет проверку на NaN.
*/

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

/* 
? ========== NaN ========== 
*/
// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity)); /* return 30 */
// console.log(Number(value)); /* return NaN */

/* 
? ========= Object Math ========= 
*/
// Math.floor(num) - возвращает наибольшее целое число,
// меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа,
// округлённое до ближайшего целого
//console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10

/* 
? ======== Генератор случайных чисел ======= 
*/
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
