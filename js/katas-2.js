//?-------------------------------------------------------
//?-------------------------------------------------------
/*
? Ваша задача состоит в том, чтобы преобразовать строки в то, как они были бы написаны Джейденом Смитом. 
Строки являются настоящими цитатами Джейдена Смита, но они не написаны с заглавной буквы так, как он их изначально напечатал.
Пример:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" 
*/
// String.prototype.toJadenCase = function () {
//   //...
// };

// function fn(str) {
//   const strArr = str.split(' ');
//   const result = strArr.map((word) => word[0].toUpperCase() + word.slice(1));

//   return result.join(' ');
// }

// console.log(fn("How can mirrors be real if our eyes aren't real"));
// var str = "How can mirrors be real if our eyes aren't real";
// Test.assertEquals(
//   str.toJadenCase(),
//   "How Can Mirrors Be Real If Our Eyes Aren't Real"
// );

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
Определите String.prototype.toAlternatingCase(или аналогичную функцию/метод, 
например, to_alternating_case / toAlternatingCase/ ToAlternatingCase​​на 
выбранном вами языке; подробности см. в исходном решении ), 
чтобы каждая строчная буква становилась прописной, 
а каждая прописная буква — строчной. Например:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
Как обычно, ваша функция/метод должна быть чистой, т.е. она не должна изменять исходную строку.
*/
// String.prototype.toAlternatingCase = function () {
//   // Define your method here :)
// };

// assert.strictEqual('hello world'.toAlternatingCase(), 'HELLO WORLD');
// assert.strictEqual('HELLO WORLD'.toAlternatingCase(), 'hello world');
// assert.strictEqual('hello WORLD'.toAlternatingCase(), 'HELLO world');
// assert.strictEqual('HeLLo WoRLD'.toAlternatingCase(), 'hEllO wOrld');
// assert.strictEqual('12345'.toAlternatingCase(), '12345');
// assert.strictEqual('1a2b3c4d5e'.toAlternatingCase(), '1A2B3C4D5E');
// assert.strictEqual(
//   'String.prototype.toAlternatingCase'.toAlternatingCase(),
//   'sTRING.PROTOTYPE.TOaLTERNATINGcASE'
// );
// assert.strictEqual(
//   'Hello World'.toAlternatingCase().toAlternatingCase(),
//   'Hello World'
// );

//?------------------------------------------------------------
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
Они обе равны 0при добавлении. (Пустые массивы равны 0 в этой задаче)
Индекс 0 - это место, где левая и правая части равны.

Примечание. Помните, что в большинстве языков 
программирования/скриптов индекс массива начинается с 0.

Вход:
Целочисленный массив длины 0 < arr < 1000. 
Числа в массиве могут быть любыми целыми положительными или отрицательными.

Выход:
наименьший индекс N, в котором сторона слева от Nравна стороне справа от N. 
Если вы не найдете индекс, соответствующий этим правилам, вы вернете -1.

Примечание.
Если вам дан массив с несколькими ответами, верните наименьший правильный индекс.
*/

// function findEvenIndex(arr) {
//   //Code goes here!
// }

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
/*
В этой простой ката ваша задача — создать функцию, 
которая превращает строку в мексиканскую волну. 
Вам будет передана строка, и вы должны вернуть эту строку в виде массива, 
где заглавная буква означает стоящего человека. 
Правила
1. Строка ввода всегда будет строчной, но может быть и пустой.

 2. Если символ в строке является пробелом, пропустите его, 
 как если бы это было пустое место.
Пример
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/
// function wave(str) {
//   // Code here
// }

// console.log(wave('codewars')); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
// console.log(wave('two words')); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
// console.log(wave(' gap ')); // [" Gap ", " gAp ", " gaP "]

//? ---------------------------------------------
/*
Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.

Пример
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
// function solution(string) {}

// console.log(solution('camelCasing')); // 'camel Casing'
// console.log(solution('camelCasingTest')); // 'camel Casing Test'

//? --------------------------------------------
/*
Ваша задача — написать функцию, которая принимает строку и 
возвращает новую строку, в которой удалены все гласные.

Например, строка «This website is for losers LOL!» станет 
«Ths wbst s fr lsrs LL!».

Примечание: для этой ката yне считается гласной.
*/
// function disemvowel(str) {
//   return str;
// }

// console.log(disemvowel('This website is for losers LOL!')); // "Ths wbst s fr lsrs LL!"
// console.log(
//   disemvowel("No offense but,\nYour writing is among the worst I've ever read")
// ); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// console.log(disemvowel('What are you, a communist?')); // "Wht r y,  cmmnst?"

//? ----------------------------------------------
/*
Подсчитайте количество дубликатов
Напишите функцию, которая будет возвращать 
количество различных буквенных символов и цифр, не зависящих от регистра, 
которые встречаются во входной строке более одного раза. 
Можно предположить, что входная строка содержит только буквы 
(как прописные, так и строчные) и числовые цифры.

Пример
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// function duplicateCount(text) {
//   //...
// }

// console.log(duplicateCount('')); // 0
// console.log(duplicateCount('aabbcde')); // 2
// console.log(duplicateCount('aabBcde')); // 2
// console.log(duplicateCount('Indivisibilities')); // 2

//? --------------------------------------------
/*
Квадрат из квадратов
Вам нравятся строительные блоки. 
Вам особенно нравятся квадратные строительные блоки. 
А что вам еще больше нравится, так это собирать их в квадрат 
из квадратных строительных блоков!

Однако иногда вы не можете расположить их в квадрат. 
Вместо этого у вас получится обычный прямоугольник! 
Эти проклятые вещи! Если бы у вас был способ узнать, 
не зря ли вы сейчас работаете… Подождите! Вот и все! 
Вам просто нужно проверить, является ли количество 
строительных блоков идеальным квадратом .

Задача
Учитывая целое число, определите, является ли оно квадратным числом :

В математике квадратное число или идеальный квадрат — 
это целое число, являющееся квадратом целого числа; 
другими словами, это произведение некоторого целого числа на самого себя.

В тестах всегда будет использоваться некоторое целое число, 
так что не беспокойтесь об этом в языках с динамической типизацией.

Примеры
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
isSquare (-1) // => false
isSquare   3  // => false
isSquare   4  // => true
isSquare  25  // => true
isSquare  26  // => false
*/

// var isSquare = function (n) {
//   return false; // fix me
// };

// console.log(isSquare(-1)); // false
// console.log(isSquare(4)); // true
// console.log(isSquare(25)); // true
// console.log(isSquare(26)); // false

//? ----------------------------------------
