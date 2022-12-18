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
/*
Who likes it?
Вы, наверное, знаете систему «лайков» из Facebook и других страниц. 
Люди могут «лайкать» сообщения в блогах, изображения или другие элементы. 
Мы хотим создать текст, который должен отображаться рядом с таким элементом.

Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился элемент. 
Он должен возвращать отображаемый текст, как показано в примерах:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Примечание. Для 4 и более имен число "and 2 others"просто увеличивается.
*/
function likes(names) {
  // TODO
}

// console.log(likes([])); // 'no one likes this'
// console.log(likes(['Peter'])); // 'Peter likes this'
// console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
// console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'
//? -----------------------------------------------
/*
Tribonacci Sequence
Хорошо познакомился со старшим братом Фибоначчи, также известным как Трибоначчи.

Как уже видно из названия, он работает в основном как Фибоначчи, 
но суммирует последние 3 (вместо 2) чисел последовательности для генерации следующего. 
И, что еще хуже, к сожалению, я не услышу, как его произносят не носители итальянского языка :(

Итак, если мы хотим начать нашу последовательность 
Трибоначчи [1, 1, 1]в качестве начального ввода ( подпись AKA ), 
у нас есть эта последовательность:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
Но что, если мы начали с [0, 0, 1]подписи? 
Поскольку, начиная с [0, 1]вместо [1, 1] основного сдвига обычной последовательности 
Фибоначчи на одну позицию, у вас может возникнуть соблазн подумать, 
что мы получим ту же самую последовательность, сдвинутую на 2 позиции, но это не так, и мы получим:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Что ж, вы, возможно, уже догадались об этом, но для ясности: 
вам нужно создать функцию Фибоначчи, которая по заданному массиву/списку сигнатур 
возвращает первые n элементов — сигнатуру, включенную в последовательность, заполненную таким образом.

Подпись всегда будет содержать 3 цифры; n всегда будет неотрицательным числом; если n == 0, 
то верните пустой массив (за исключением C, возвращающего NULL) и будьте готовы ко всему, 
что не указано явно;)

Если вам понравилось это ката, более продвинутую и обобщенную версию можно найти в ката Xbonacci.

[Личное спасибо профессору Джиму Фаулеру на Coursera за его замечательные уроки, 
которые я действительно рекомендую всем любителям математики, и за то, 
что он также проявил ко мне эту математическую любознательность со своей обычной заразительной страстью :)]
*/
function tribonacci(signature, n) {
  //your code here
}

// console.log([[1, 1, 1], 10]); // [1,1,1,3,5,9,17,31,57,105]
// console.log([[0, 0, 1], 10]); // [0,0,1,1,2,4,7,13,24,44]
// console.log([[0, 1, 1], 10]); // [0,1,1,2,4,7,13,24,44,81]
// console.log([[1, 0, 0], 10]); // [1,0,0,1,1,2,4,7,13,24]
// console.log([[0, 0, 0], 10]); // [0,0,0,0,0,0,0,0,0,0]
// console.log([[1, 2, 3], 10]); // [1,2,3,6,11,20,37,68,125,230]
// console.log([[3, 2, 1], 10]); // [3,2,1,6,9,16,31,56,103,190]
// console.log([[1, 1, 1], 1]); // [1]
//? -----------------------------------------------
/*
Find the unique number

Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
Гарантируется, что массив содержит не менее 3 чисел.

Тесты содержат очень большие массивы, так что подумайте о производительности.
*/
function findUniq(arr) {
  return;
}

// console.log(findUniq([1, 0, 0])); // 1
// console.log(findUniq([0, 1, 0])); // 1
// console.log(findUniq([0, 0, 1])); // 1
// console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
// console.log(findUniq([1, 1, 2, 1, 1])); // 2
// console.log(findUniq([3, 10, 3, 3, 3])); // 10
//? -----------------------------------------------

/*
Take a Ten Minutes Walk

Вы живете в городе Картезия, где все дороги выложены идеальной сеткой. 
Вы пришли на встречу на десять минут раньше назначенного срока, 
поэтому решили воспользоваться возможностью прогуляться. 
Город предоставляет своим горожанам приложение Walk Generating на их телефонах — каждый раз, 
когда вы нажимаете кнопку, оно отправляет вам массив строк из одной буквы, 
представляющих направления ходьбы (например, ['n', 's', 'w', «е»]). 
Вы всегда проходите только один квартал для каждой буквы (направления), и вы знаете, 
что вам потребуется одна минута, чтобы пройти один городской квартал, поэтому создайте функцию, 
которая будет возвращать true , если прогулка, которую предлагает вам приложение, 
займет у вас ровно десять минут (вы не хочу ни рано, ни поздно!) и, конечно же, 
вернет вас в исходную точку. В противном случае верните false .

Примечание . Вы всегда будете получать допустимый массив, 
содержащий случайный набор букв направления (только «n», «s», «e» или «w»). 
Он никогда не даст вам пустой массив (это не прогулка, это стояние на месте!).
*/
function isValidWalk(walk) {
  //insert brilliant code here
}

// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // 'should return true'
// console.log(
//   isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
// ); // 'should return false'
// console.log(isValidWalk(['w'])); // 'should return false'
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // 'should return false'
//? -----------------------------------------------
/*
Find the odd int
Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.

Всегда будет только одно целое число, которое встречается нечетное количество раз.

Примеры
[7]должен вернуть 7, потому что это происходит 1 раз (что нечетно).
[0]должен вернуть 0, потому что это происходит 1 раз (что нечетно).
[1,1,2]должен вернуть 2, потому что это происходит 1 раз (что нечетно).
[0,1,0,1,0]должен вернуть 0, потому что он встречается 3 раза (что нечетно).
[1,2,2,3,3,3,4,3,3,3,2,2,1]должен вернуть 4, потому что он появляется 1 раз (что нечетно).
*/
function findOdd(A) {
  //happy coding!
  return 0;
}
// console.log[(0, 1, 0, 1, 0)](); // 0
// console.log([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // 5
// console.log([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); // -1
// console.log([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]); // 4
// console.log([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]); // 10
//? -----------------------------------------------
