//?------------------------------------------------------
/*
Задача с собеседования на стажировку в Яндекс:
Даны две строки, состоящие из строчных латинских букв. 
Требуется определить, являются ли эти строки анаграммами, 
т. е. отличаются ли они только порядком следования символов.

Примеры:
checkAnagram('qwerty', 'ytqwre') // true
checkAnagram('qwerty', 'aqwert') // false
checkAnagram('qwerty', 'qywteu') // false
*/
// const checkStr = (str1, str2) => {
//   const strArr1 = str1.split('').sort();
//   const strArr2 = str2.split('').sort();

//   for (let i = 0; i < strArr1.length; i++) {
//     return strArr1[i] === strArr2[i];
//   }
// };

// console.log(checkStr('qwerty', 'ytqwre'));

//?-----------------------------------------------------------
/*
Подсчитайте количество делителей натурального числа n.

Случайные тесты доходят до n = 500000.

Примеры (ввод --> вывод)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Обратите внимание, что вы должны возвращать только число, количество делителей. 
Числа в скобках показаны только для того, чтобы вы могли видеть, какие числа учитываются в каждом случае.
*/
// function getDivisorsCnt(n) {
//   const resultArr = [];

//   for (let i = 1; i <= n; i++) {
//     if (n % [i] === 0) resultArr.push([i]);
//   }
//   return resultArr.length;
// }

// console.log(getDivisorsCnt(1)); // 1
// console.log(getDivisorsCnt(10)); // 4
// console.log(getDivisorsCnt(11)); // 2
// console.log(getDivisorsCnt(54)); // 8

//?-------------------------------------------------
/*
На заводе принтер печатает этикетки для коробок. 
Для одного вида коробок принтер должен использовать цвета, которые для простоты названы буквами из a to m.

Цвета, используемые принтером, записываются в управляющую строку. 
Например, "хорошая" управляющая строка будет aaabbbbhaijjjm означать, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a...

Иногда возникают проблемы: отсутствие цветов, технический сбой и выдается "плохая" управляющая строка, например, aaaxbbbbyyhwawiwjjjwwmс буквами не из a to m.

Вы должны написать функцию, printer_error которая по заданной строке будет возвращать частоту ошибок принтера в виде строки , 
представляющей рациональное число, числитель которого — количество ошибок, а знаменатель — длину контрольной строки. 
Не уменьшайте эту дробь до более простого выражения.

Строка имеет длину больше или равную единице и содержит только буквы от aдо z.

Примеры:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/
// function printerError(s) {
//   const letterRight = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'j',
//     'h',
//     'i',
//     'k',
//     'l',
//     'm',
//   ];
//   let errors = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (!letterRight.includes(s[i])) {
//       errors += 1;
//     }
//   }
//   return `${errors}/${s.length}`;
// }

// console.log(printerError('aaabbbbhaijjjm')); // '0/14'
// console.log(printerError('aaaxbbbbyyhwawiwjjjwwm')); // '8/22'
// console.log(
//   printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
// ); // '3/56'

//?---------------------------------------------------------
/*
Вы получаете массив чисел, возвращаете сумму всех положительных.

Пример [1,-4,7,12]=>1 + 7 + 12 = 20

Примечание: если суммировать нечего, сумма по умолчанию равна 0.
*/
// function positiveSum(arr) {
//   let sum = 0;
//   for (const num of arr) {
//     if (num >= 0) sum += num;
//   }
//   return sum;
// }

// console.log(positiveSum([1, 2, 3, 4, 5])); // 15
// console.log(positiveSum([1, -2, 3, 4, 5])); // 13
// console.log(positiveSum([])); // 0
// console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
// console.log(positiveSum([-1, 2, 3, 4, -5])); // 9

//?--------------------------------------------------------
/*
Таракан – одно из самых быстрых насекомых. 
Напишите функцию, которая получает скорость в км/ч и возвращает ее в см/с с округлением в меньшую сторону до целого числа (= с точностью до пола).

Например:

1.08 --> 30
Примечание! Ввод представляет собой вещественное число (фактический тип зависит от языка) и >= 0. Результат должен быть целым числом.
*/
// function cockroachSpeed(s) {
//   return Math.floor((s * 100000) / 3600);
// }

// console.log(cockroachSpeed(1.08)); // 30
// console.log(cockroachSpeed(1.09)); // 30
// console.log(cockroachSpeed(0)); // 0

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
/*
Реализуйте функцию, которая складывает два числа и возвращает их сумму в двоичном виде. 
Преобразование может быть выполнено до или после добавления.

Возвращаемое двоичное число должно быть строкой.

Примеры:(Ввод1, Ввод2 --> Выход (пояснение)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
// function addBinary(a, b) { }

// describe('addBinary(1,2)', function () {
//   var results1 = addBinary(1, 2);
//   it("Should return something that isn't falsy", function () {
//     Test.expect(results1, 'Something is wrong, no results!');
//   });
//   it('Should return "11"', function () {
//     Test.assertEquals(results1, '11');
//   });
// });

//?-------------------------------------------------------
/*
Определите String.prototype.toAlternatingCase(или аналогичную функцию/метод , например, to_alternating_case / toAlternatingCase/ ToAlternatingCase​​на выбранном вами языке; подробности см. в исходном решении ), чтобы каждая строчная буква становилась прописной, а каждая прописная буква — строчной. Например:

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
Натан любит кататься на велосипеде.

Поскольку Натан знает, как важно избегать обезвоживания, он выпивает 0,5 литра воды за час езды на велосипеде.

Вам дается время в часах, и вам нужно вернуть количество литров, которые выпьет Натан, округленное до наименьшего значения.

Например:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/
// function litres(time) {
//   return 0;
// }

// assert.strictEqual(litres(2), 1, 'should return 1 litre');
// assert.strictEqual(litres(1.4), 0, 'should return 0 litres');
// assert.strictEqual(litres(12.3), 6, 'should return 6 litres');
// assert.strictEqual(litres(0.82), 0, 'should return 0 litres');
// assert.strictEqual(litres(11.8), 5, 'should return 5 litres');
// assert.strictEqual(litres(1787), 893, 'should return 893 litres');
// assert.strictEqual(litres(0), 0, 'should return 0 litres');

//?------------------------------------------------------------
/*
Создайте функцию, которая принимает 2 строковых аргумента и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом.

Если вхождений не найдено, должно быть возвращено число 0.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Заметки:

Первый аргумент может быть пустой строкой
Второй строковый аргумент всегда будет иметь длину 1.
*/
// function strCount(str, letter) {
//   //code here
// }

// assert.strictEqual(strCount('Hello', 'o'), 1);
// assert.strictEqual(strCount('Hello', 'l'), 2);
// assert.strictEqual(strCount('', 'z'), 0);

//?-----------------------------------------------------
/*
Создайте функцию, которая принимает 2 целых числа в виде строки в качестве входных данных и выводит сумму (также в виде строки):

Пример: ( Ввод1, Ввод2 -->Вывод )

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Заметки:

Если какой-либо вход является пустой строкой, считайте ее нулевой.

Входные данные и ожидаемые выходные данные никогда не превысят ограничение на 32-разрядное целое число со знаком ( 2^31 - 1)
*/
// function sumStr(a, b) { }

// assert.strictEqual(sumStr('4', '5'), '9');
// assert.strictEqual(sumStr('34', '5'), '39');

//?-----------------------------------------------------------------
/*
Преобразовать число в перевернутый массив цифр
Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.

Пример (ввод => вывод):
35231 => [1,3,2,5,3]
0 => [0]
*/
// function digitize(n) {
//   //code here
// }

// assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
// assert.deepEqual(digitize(0), [0]);

//?-----------------------------------------------------------------
/*
Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

Например:

Учитывая [34, 15, 88, 2], что ваше решение вернется2
Учитывая [34, -345, -1, 100], что ваше решение вернется-345
Для целей этого ката вы можете предположить, что предоставленный массив не будет пустым.
*/
// class SmallestIntegerFinder {
//   findSmallestInt(args) {}
// }

// assert.strictEqual(
//   sif.findSmallestInt([78, 56, 232, 12, 8]),
//   8,
//   'Should return the smallest int 8'
// );
// assert.strictEqual(
//   sif.findSmallestInt([78, 56, 232, 12, 18]),
//   12,
//   'Should return the smallest int 12'
// );
// assert.strictEqual(
//   sif.findSmallestInt([78, 56, 232, 412, 228]),
//   56,
//   'Should return the smallest int 56'
// );
// assert.strictEqual(
//   sif.findSmallestInt([78, 56, 232, 12, 0]),
//   0,
//   'Should return the smallest int 0'
// );
// assert.strictEqual(
//   sif.findSmallestInt([1, 56, 232, 12, 8]),
//   1,
//   'Should return the smallest int 1'
// );

//?------------------------------------------------------------
/*
Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом! В противном случае, вы можете быть уверены, что он не...

Пример: ввод = ["Райан", "Киран", "Джейсон", "Юс"], вывод = ["Райан", "Юс"]

то есть

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Примечание: сохраните исходный порядок имен в выводе.
*/
// function friend(friends) {
//   //your code here
// }

// assert.deepEqual(friend(['Ryan', 'Kieran', 'Mark']), ['Ryan', 'Mark']);
// assert.deepEqual(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']), ['Ryan']);
// assert.deepEqual(
//   friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']),
//   ['Jimm', 'Cari', 'aret']
// );
// assert.deepEqual(friend(['Love', 'Your', 'Face', '1']), [
//   'Love',
//   'Your',
//   'Face',
// ]);

//?-------------------------------------------------------------
/*
Боб работает водителем автобуса. Тем не менее, он стал чрезвычайно популярен среди жителей города. С таким количеством пассажиров, желающих сесть в его автобус, ему иногда приходится сталкиваться с проблемой нехватки места в автобусе! Он хочет, чтобы вы написали простую программу, сообщающую ему, сможет ли он разместить всех пассажиров.

Обзор задачи:
Вам нужно написать функцию, которая принимает три параметра:

capэто количество человек, которое может вместить автобус, не считая водителя.
onэто количество людей в автобусе без учета водителя.
waitэто количество людей, ожидающих посадки в автобус, не считая водителя.
Если места достаточно, вернуть 0, а если нет, вернуть количество пассажиров, которых он не может взять.

Примеры использования:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/
// function enough(cap, on, wait) {
//   // your code here
// }

// assert.strictEqual(enough(10, 5, 5), 0);
// assert.strictEqual(enough(100, 60, 50), 10);
// assert.strictEqual(enough(20, 5, 5), 0);

//?---------------------------------------------------------------
