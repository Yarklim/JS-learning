//?-------------------------------------------------------
//?-------------------------------------------------------

/*
? Вы уже реализовали класс Cube , но теперь нам снова нужна ваша помощь! 
Я говорю о конструкторах. У нас его нет. 
Давайте закодируем два: один принимает целое число, а другой не обрабатывает заданные аргументы!
Также у нас возникла проблема с отрицательными значениями. 
Исправьте код, чтобы отрицательные значения были заменены на положительные!
Конструктор, не принимающий аргументов, должен присвоить 0 свойству Cube Side.
*/
// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
// class Cube {
//   getSide() {
//     return this.side;
//   }
//   setSide(n) {
//     this.side = Math.abs(n);
//   }
// }

// const expect = require('chai').expect;

// describe('Cube', () => {
//   it('constructs a cube with side s if positive s is passed', () => {
//     let cube = new Cube(12);
//     expect(cube.getSide()).to.equal(12);
//     cube.setSide(42);
//     expect(cube.getSide()).to.equal(42);
//   });
// });

//?--------------------------------------------------------
//?--------------------------------------------------------
/*
Реализуйте функцию, которая складывает два числа 
и возвращает их сумму в двоичном виде. 
Преобразование может быть выполнено до или после добавления.

Возвращаемое двоичное число должно быть строкой.

Примеры:(Ввод1, Ввод2 --> Выход (пояснение)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
// function addBinary(a, b) {}

// console.log(addBinary(1, 2)); // 11

//?-------------------------------------------------------

/*
Вам будет дан массив целых чисел. 
Ваша задача состоит в том, чтобы взять этот массив и найти индекс N, 
где сумма целых чисел слева от N равна сумме целых чисел справа от N. 
Если такого индекса нет, верните -1.

Например:

Допустим, вам дан массив {1,2,3,4,3,2,1}:
ваша функция вернет индекс 3, потому что в 3-й позиции массива 
сумма левой части индекса ( {1,2,3}) 
и сумма правой части индекса ( {3,2,1}) равны 6.

Давайте посмотрим на другой.
Вам дан массив {1,100,50,-51,1,1}:
ваша функция вернет индекс 1, потому что в 1-й позиции массива 
сумма левой части индекса ( {1}) 
и сумма правой части индекса ( {50,-51,1,1}) равны 1.

Последний:
вам дан массив. {20,10,-80,10,10,15,35}
В индексе 0 левая сторона равна {}
Правая сторона равна {10,-80,10,10,15,35}
Они обе равны 0 при добавлении. (Пустые массивы равны 0 в этой задаче)
Индекс 0 - это место, где левая и правая части равны.

Примечание. Помните, что в большинстве языков 
программирования/скриптов индекс массива начинается с 0.

Вход:
Целочисленный массив длины 0 < arr < 1000. 
Числа в массиве могут быть любыми целыми положительными или отрицательными.

Выход:
наименьший индекс N, в котором сторона слева от N равна стороне справа от N. 
Если вы не найдете индекс, соответствующий этим правилам, вы вернете -1.

Примечание.
Если вам дан массив с несколькими ответами, верните наименьший правильный индекс.
*/

function findEvenIndex(arr) {}

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3

//? ----------------------------------------------
/*
Вам дан массив (список) strarr строк и целое число k. 
Ваша задача — вернуть первую самую длинную строку, 
состоящую из k последовательных строк, взятых в массиве.

Примеры:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n — длина массива строк, если n = 0или k > nили k <= 0возвращают "" (возврат Nothingв Elm, "ничего" в Erlang).

Примечание
последовательные строки: следуют одна за другой без перерыва
*/

// function longestConsec(strarr, k) {
//   // your code
// }

// console.log(
//   longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)
// ); // 'abigailtheta'
// console.log(
//   longestConsec(
//     [
//       'ejjjjmmtthh',
//       'zxxuueeg',
//       'aanlljrrrxx',
//       'dqqqaaabbb',
//       'oocccffuucccjjjkkkjyyyeehh',
//     ],
//     1
//   )
// ); // 'oocccffuucccjjjkkkjyyyeehh'
// console.log(longestConsec([], 3)); // ''
// console.log(
//   longestConsec(
//     [
//       'itvayloxrp',
//       'wkppqsztdkmvcuwvereiupccauycnjutlv',
//       'vweqilsfytihvrzlaodfixoyxvyuyvgpck',
//     ],
//     2
//   )
// ); // 'wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck'
// console.log(
//   longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2)
// ); // 'wlwsasphmxxowiaxujylentrklctozmymu'
// console.log(
//   longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2)
// ); // ''
// console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)); // 'ixoyx3452zzzzzzzzzzzz'
// console.log(
//   longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15)
// ); // ''
// console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0)); // ''

//? -----------------------------------------------
