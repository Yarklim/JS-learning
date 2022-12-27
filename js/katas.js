// const firstNameYar = prompt('Enter your first name');
// const lastNameYar = prompt('Enter your last name');
// const firstNameNeta = prompt('Enter she first name');
// const lastNameNeta = prompt('Enter she last name');

// const love = `${firstNameYar} ${lastNameYar} + ${firstNameNeta} ${lastNameNeta} = Love!`;

// alert(love);
// console.log(love);
// console.log(love.toUpperCase());

// const base = Number(prompt('Enter base number'));
// console.log(base);

// let value = prompt('Enter value number');
// value = Number(value);
// console.log(value);

// const result = base ** value;
// console.log(result);

// let counter = 0;
// while (counter < 20) {
//   counter += 1;

//   if (counter % 2 === 0) {
//     continue;
//   } else if (counter === 15) {
//     break;
//   }
//   console.log(counter);
// }

// let counter = 0;
// do {
//   counter = Number(prompt('Enter number'));
// } while (counter < 10);
// console.log(counter);

// function greet(name) {
//   alert(`Hello, ${name} how are you doing today?`);
// }
// greet('Yar');

//? Возьмите массив и удалите каждый второй элемент из массива.
//? Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
// const array = [
//   'Keep',
//   'Remove',
//   'Keep',
//   'Remove',
//   'Keep',
//   'Remove',
//   'Keep',
//   'Remove',
//   'Keep',
// ];
// let pos = 0;

// for (let i = 0; i < array.length; i++) {
//   pos = 1 + i;
//   array.splice(pos, 1);
// }
// console.log(array);

//? Проверить наличие х в массиве а
// function check(a, x) {
//   return a.includes(x) ? true : false;
// }

// console.log(check([1, 2, 3, 7, 'f', 0], 'f'));

//? Просто удалите пробелы из строки, затем верните результирующую строку.
// function noSpace(x) {
//   return x.split(' ').join('');
// или
// return x.replace(/\s/g, '');
// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

/*
? Разбить предложение
Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. 
Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вы должны добавлять пробелы между каждым словом. 
Будьте внимательны, не должно быть пробела ни в начале, ни в конце предложения!
*/
// function smash(words) {
//   return words.join(' ');
// }

// console.log(smash(['hello', 'world', 'this', 'is', 'great']));

/*
? Камень Hожницы Бумага
Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.
Примеры (Ввод1, Ввод2 --> Выход):
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/
// const rps = (p1, p2) => {
//   const getMsg = (n) => `Player ${n} won!`;

//   if (p1 === p2) return 'Draw!';

//   if (p1 === 'scissors' && p2 === 'paper') return getMsg(1);
//   if (p1 === 'paper' && p2 === 'scissors') return getMsg(2);

//   if (p1 === 'paper' && p2 === 'rock') return getMsg(1);
//   if (p1 === 'rock' && p2 === 'paper') return getMsg(2);

//   if (p1 === 'rock' && p2 === 'scissors') return getMsg(1);
//   if (p1 === 'scissors' && p2 === 'rock') return getMsg(2);
// };

// -------- Оптимизация:

// const rps = (p1, p2) => {
//   if (p1 === p2) return 'Draw!';
//   const rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
//   if (p2 === rules[p1]) {
//     return 'Player 1 won!';
//   } else {
//     return 'Player 2 won!';
//   }
// };

// console.log(rps('rock', 'rock'));
// console.log(rps('scissors', 'paper'));
// console.log(rps('scissors', 'rock'));

/*
? Ваша задача — создать функцию, которая выполняет четыре основные математические операции.
Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
Функция должна возвращать числовой результат после применения выбранной операции.
Примеры(Оператор, значение1, значение2) --> вывод
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/
// function basicOp(operation, value1, value2) {
// 	return eval(value1 + operation + value2);

// или с помощью switch:

//   let result = false;
//   switch (operation) {
//     case '+':
//       return value1 + value2;
//     case '-':
//       return value1 - value2;
//     case '*':
//       return value1 * value2;
//     case '/':
//       return value1 / value2;
//     default:
//       return return 'Operation must be one of + - * /';
//   }
// }
// console.log(basicOp('*', 4, 7));

/*
? Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!

Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

name + " plays banjo" 
name + " does not play banjo"
Указанные имена всегда являются допустимыми строками.
*/
// function areYouPlayingBanjo(name) {
//   return name[0].toLowerCase() === 'r'
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
// }

// console.log(areYouPlayingBanjo('Adam'));
// console.log(areYouPlayingBanjo('Ringo'));

/*
? Часы показывают h часы, m минуты и s секунды после полуночи.
Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах.
Пример:
h = 0
m = 1
s = 1

result = 61000
Входные ограничения:
0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/
// function past(h, m, s) {
//   return h * 3600000 + m * 60000 + s * 1000;
// }

// console.log(past(0, 1, 1)); // 61000
// console.log(past(1, 1, 1)); // 3661000

/*
? Ваша функция принимает два аргумента:
текущий возраст отца (лет)
текущий возраст его сына (лет)
Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше). 
Ответ всегда больше или равен 0, независимо от того, был он в прошлом или в будущем.
*/
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - sonYearsOld * 2);
// }
// console.log(twiceAsOld(55, 30));

/*
? В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

Примеры
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/
// function highAndLow(numbers) {
//   //   const array = numbers.split(' ');
//   //   const newArr = [];
//   //   const highAndLowArray = [];
//   //   for (let i of array) {
//   //     newArr.push(Number(i));
//   //   }
//   //   highAndLowArray.push(Math.max(...newArr));
//   //   highAndLowArray.push(Math.min(...newArr));

//   //   return highAndLowArray.join(',');

//   // рефакторинг
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }

// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')); // "42 -9"
// console.log(highAndLow('1 2 3')); // "3 1"

//--------------------------------------

//? --------------------------------------------
/*
Очень просто, по заданному целому числу или числу с плавающей запятой найти его противоположность.
Примеры:
1: -1
14: -14
-34: 34
*/
// function opposite(number) {
//   //   return number * -1;
//   return -number;
// }

// console.log(opposite(1)); // -1
// console.log(opposite(4.25)); // -4.25
// console.log(opposite(-12525220.3325)); // 12525220.3325

//? -------------------------------------------
/*
Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку. 
Пример:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/
// function grow(x) {
//   let sum = 1;

//   for (let el of x) {
//     sum *= el;
//   }

//   return sum;
// }

// const grow = (x) => x.reduce((a, b) => a * b);

// console.log(grow([1, 2, 3])); // 6
// console.log(grow([4, 1, 1, 1, 4])); // 16
// console.log(grow([2, 2, 2, 2, 2, 2])); // 64

//? ------------------------------------------
/*
Герой направляется в замок, чтобы выполнить свою миссию. 
Однако ему сказали, что замок окружен парочкой могущественных драконов! каждому дракону требуется 2 пули, 
чтобы быть побежденным, наш герой понятия не имеет, сколько пуль он должен нести.. 
Предполагая, что он собирается схватить определенное количество пуль и двигаться вперед, 
чтобы сразиться с другим заданным количеством драконов, выживет ли он?
Верните True, если да, False в противном случае :)
*/
// function hero(bullets, dragons) {
// 	// return bullets / dragons >= 2 ? true : false;

// 	return bullets >= dragons * 2;
// }

// console.log(hero(10, 5)); // true
// console.log(hero(7, 4)); // false
// console.log(hero(4, 5)); // false
// console.log(hero(100, 40)); // true

//? -------------------------------------------
/*
Завершите решение так, чтобы оно перевернуло переданную в него строку.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/
// function solution(str) {
// 	return str.split('').reverse().join('');

// //   let result = '';

// //   for (const el of str) {
// //     result = el + result;
// //   }
// //   return result;
// }

// console.log(solution('world')); // 'dlrow'
// console.log(solution('hello')); // 'olleh'
// console.log(solution('')); // ''
// console.log(solution('w')); // 'w'

//? ------------------------------------------
/*
Создайте функцию с двумя аргументами, которая будет возвращать массив первых n-кратных x.
Предположим, что и заданное число, и количество раз для подсчета будут положительными числами больше, чем 0.
Возвращайте результаты в виде массива или списка (в зависимости от языка).
Примеры
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
// function countBy(x, n) {
//   let z = [];

//   for (let i = 1; i <= n; i += 1) {
//     z.push(i * x);
//   }
//   return z;
// }

// console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(countBy(2, 5)); // [2,4,6,8,10]
// console.log(countBy(4, 7));

//? ------------------------------------------
/*
По городу движется автобус, и на каждой остановке он берет и высаживает несколько человек.
Вам предоставляется список (или массив) целочисленных пар. 
Элементы каждой пары представляют количество людей, садящихся в автобус (первый элемент) и количество людей, выходящих из автобуса (второй элемент) на автобусной остановке.
Ваша задача — вернуть количество людей, оставшихся в автобусе после последней автобусной остановки (после последнего массива). 
Несмотря на то, что это последняя автобусная остановка, автобус не пустой, и некоторые люди все еще в автобусе, и они, вероятно, спят там :D
Взгляните на тест-кейсы.
Имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда >= 0. Таким образом, возвращаемое целое число не может быть отрицательным.
Второе значение в первом целочисленном массиве равно 0, так как автобус на первой остановке пуст.
*/
// var number = function (busStops) {
//   let passResult = 0;

//   for (let el of busStops) {
//     passResult += el[0] - el[1];
//   }

//   return passResult;
// };

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// ); //   5

// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// ); //   17

// console.log(number([[0, 0]])); // 0

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const newProducts = [];

//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       newProducts.push(product[propName]);
//     }
//   }

//   return newProducts;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('online'));

//? ---------------------------------------------
/*
? Задание
Подумайте о способе хранения языков в виде базы данных (например, объекта). 
Языки перечислены ниже, так что вы можете копировать и вставлять!
Напишите функцию «приветствия», которая принимает параметр «язык» (всегда строка) и возвращает приветствие, если оно есть в вашей базе данных. 
По умолчанию должен быть английский, если языка нет в базе данных или в случае неверного ввода.
База данных
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
Возможные недопустимые входные данные включают:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied
*/
// const langsData = {
//   english: 'Welcome',
//   czech: 'Vitejte',
//   danish: 'Velkomst',
//   dutch: 'Welkom',
//   estonian: 'Tere tulemast',
//   finnish: 'Tervetuloa',
//   flemish: 'Welgekomen',
//   french: 'Bienvenue',
//   german: 'Willkommen',
//   irish: 'Failte',
//   italian: 'Benvenuto',
//   latvian: 'Gaidits',
//   lithuanian: 'Laukiamas',
//   polish: 'Witamy',
//   spanish: 'Bienvenido',
//   swedish: 'Valkommen',
//   welsh: 'Croeso',
// };

// const langsKeys = Object.keys(langsData);

// function greet(language) {
//   for (const key of langsKeys) {
//     if (language === key) {
//       return langsData[key];
//     }
//   }
//   return 'Welcome';
// }

// console.log(greet('english')); // 'Welcome'
// console.log(greet('dutch')); // 'Welkome'
// console.log(greet('IP_ADDRESS_INVALID')); // 'Welcome'

// ? ----------------------------------------

/*
Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
*/
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;

//     for (const potion of potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     return potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];

//       if (potionName === name) {
//         return potions.splice(i, 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (const potion of potions) {
//       if (oldName === potion.name) {
//         return (potion.name = newName);
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })); //в массиве potions последним элементом будет этот объект
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })); // "Error! Potion Dragon breath is already in your inventory!"
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion')
// ); // в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
// console.log(atTheOldToad.getPotions());
//? -----------------------------------------------------

/*
Дезоксирибонуклеиновая кислота (ДНК) представляет собой химическое вещество, находящееся в ядре клеток и несущее «инструкции» по развитию и функционированию живых организмов.

Если вы хотите узнать больше: http://en.wikipedia.org/wiki/DNA

В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». Ваша функция получает одну сторону ДНК (строка, кроме Haskell); 
вам нужно вернуть другую дополнительную сторону. Нить ДНК никогда не бывает пустой или ДНК вообще не существует (опять же, кроме Haskell).

Другие подобные упражнения можно найти здесь: http://rosalind.info/problems/list-view/ (источник)

Пример: ( ввод --> вывод )

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/
// function DNAStrand(dna) {
//   let newDna = '';

//   for (const element of dna) {
//     switch (element) {
//       case 'A':
//         newDna += 'T';
//         break;

//       case 'T':
//         newDna += 'A';
//         break;

//       case 'G':
//         newDna += 'C';
//         break;

//       case 'C':
//         newDna += 'G';
//         break;
//     }
//   }
//   return newDna;
// }

// console.log(DNAStrand('AAAA')); // 'TTTT', 'String AAAA is');
// console.log(DNAStrand('ATTGC')); // 'TAACG', 'String ATTGC is');
// console.log(DNAStrand('GTAT')); // 'CATA', 'String GTAT is');

//? --------------------------------------------------
/*
Дезоксирибонуклеиновая кислота, ДНК является основной молекулой хранения информации в биологических системах. 
Он состоит из четырех оснований нуклеиновых кислот гуанина («G»), цитозина («C»), аденина («A») и тимина («T»).

Рибонуклеиновая кислота, РНК, является основной молекулой-мессенджером в клетках. 
РНК немного отличается от ДНК своей химической структурой и не содержит тимина. 
В РНК тимин заменен другой нуклеиновой кислотой урацилом («U»).

Создайте функцию, которая переводит заданную строку ДНК в РНК.

Например:

"GCAT"  =>  "GCAU"
Входная строка может быть произвольной длины, в частности, она может быть пустой. 
Гарантируется, что все входные данные верны, т. е. каждая входная строка будет состоять только из 'G', 'C', 'A'и/или 'T'.
*/
// function DNAtoRNA(dna) {
//   let rna = '';

//   for (const el of dna) {
//     el === 'T' ? (rna += 'U') : (rna += el);
//   }
//   return rna;
// }

// console.log(DNAtoRNA('TTTT')); // "UUUU"
// console.log(DNAtoRNA('GCAT')); // "GCAU"
// console.log(DNAtoRNA('GACCGCCGCC')); // "GACCGCCGCC"

//? ------------------------------------------
/*
Даны два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. 
Если два числа равны, верните a или b.

Примечание: a и b не заказываются!

Примеры (а, б) --> вывод (пояснение)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/
// function getSum(a, b) {
//   let sum = 0;

//   if (a < b) {
//     for (let i = a; i <= b; i += 1) {
//       sum += i;
//     }
//   }
//   if (b < a) {
//     for (let i = b; i <= a; i += 1) {
//       sum += i;
//     }
//   }
//   if (a === b) {
//     sum = a;
//   }
//   return sum;
// }

// ---------- refactoring ---------
// const getSum = (a, b) => {
//   let min = Math.min(a, b),
//     max = Math.max(a, b);
//   return ((max - min + 1) * (min + max)) / 2;
// };

// console.log(getSum(0, -1)); // -1
// console.log(getSum(-1, 2)); // 2
// console.log(getSum(1, 5)); // 15
// console.log(getSum(2, 2)); // 2
// console.log(getSum(5, 1)); // 15

//? -----------------------------------------
/*
Ваша задача состоит в том, чтобы сделать две функции ( max и min, или maximum и minimum т. д., в зависимости от языка), 
которые получают на вход список целых чисел и возвращают наибольшее и наименьшее число в этом списке соответственно.

Примеры (ввод -> вывод)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Заметки
Вы можете считать, что пустых массивов/векторов не будет.
*/
// var min = function (list) {
//   return Math.min(...list);
// };

// var max = function (list) {
//   return Math.max(...list);
// };
// console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110
// console.log(min([42, 54, 65, 87, 0])); // 0
// console.log(min([5])); // 5

//? ------------------------------------------
/*
Напишите функцию, которая разбивает строку и преобразует ее в массив слов.
Примеры (ввод ==> вывод):
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/
// function stringToArray(string) {
//   return string.split(' ');
// }
// console.log(stringToArray('Robin Singh')); // ["Robin", "Singh"]
// console.log(stringToArray('I love arrays they are my favorite')); // ["I", "love", "arrays", "they", "are", "my", "favorite"]

//? ------------------------------------------
/*
Первое столетие охватывает период с 1 года по 100 год включительно , второе столетие — с 101 года по 200 год включительно и т. д.
Задача
Учитывая год, верните столетие, в котором он находится.
Примеры
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/
// function century(year) {
//   let century = 0;

//   year % 100 === 0 ? (century = year / 100) : (century = Math.ceil(year / 100));

//   return century;
// }
// console.log(century(1705)); // 18
// console.log(century(1900)); // 19
// console.log(century(1601)); // 17
// console.log(century(2000)); // 20
// console.log(century(89)); // 1

//? -----------------------------------------
/*
Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента 
и возвращать его с цифрами в порядке убывания. 
По сути, переставьте цифры, чтобы получить максимально возможное число.

Примеры:
Вход: 42145 Выход:54421

Вход: 145263 Выход:654321

Вход: 123456789 Выход:987654321
*/
// function descendingOrder(n) {
//   return parseInt(String(n).split('').sort().reverse().join(''));

//   const arrN = String(n).split('');

//   //   return arrN.sort().reverse().join('') / 1;
// }
// console.log(descendingOrder(0)); // 0
// console.log(descendingOrder(1)); // 1
// console.log(descendingOrder(111)); // 111
// console.log(descendingOrder(15)); // 51
// console.log(descendingOrder(1021)); // 2110
// console.log(descendingOrder(83957262311)); // 9876533211

//? ------------------------------------------
/*
Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. 
Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
*/
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// let sum = 0;
// function calculateTotalPrice(productName) {
//   for (const { name, price, quantity } of products) {
//     if (productName === name) {
//       sum = price * quantity;
//     }
//   }
//   return sum;
// }

// console.log(calculateTotalPrice('Blaster')); // 0
// console.log(calculateTotalPrice('Radar')); // 5200
// console.log(calculateTotalPrice('Droid')); // 2800
// console.log(calculateTotalPrice('Grip')); // 10800
// console.log(calculateTotalPrice('Scanner')); // 8100

//? ---------------------------------------------
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

//? ---------------------------------------------------

/*
Возьмите 2 строки s1 и s2 включите только буквы от a до z. 
Возвращает новую отсортированную строку, максимально длинную, 
содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.

Примеры:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// function longest(s1, s2) {
//   return s1
//     .split('')
//     .concat(s2.split(''))
//     .filter((el, index, array) => array.indexOf(el) === index)
//     .sort()
//     .join('');
// }

// console.log(longest('aretheyhere', 'yestheyarehere')); // 'aehrsty'
// console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')); // 'abcdefghilnoprstu'
// console.log(longest('inmanylanguages', 'theresapairoffunctions')); // 'acefghilmnoprstuy'

//? ---------------------------------------------------
/*
Напишите функцию, которая принимает целое число n и строку s в качестве параметров 
и возвращает строку, sповторяющуюся ровно столько n раз.

Примеры (ввод -> вывод)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// function repeatStr(n, s) {
// //   let str = '';
// //   for (let i = 1; i <= n; i++) {
// //     str += s;
// //   }
// //   return str;
// 	return s.repeat(n);
// }

// console.log(repeatStr(3, 's'));

//?------------------------------------------------------------
/*
Натан любит кататься на велосипеде.

Поскольку Натан знает, как важно избегать обезвоживания, 
он выпивает 0,5 литра воды за час езды на велосипеде.

Вам дается время в часах, и вам нужно вернуть количество литров, 
которые выпьет Натан, округленное до наименьшего значения.

Например:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
*/
// function litres(time) {
//   return Math.floor(time / 2);
// }

// console.log(litres(2)); // 1
// console.log(litres(1.4)); // 0
// console.log(litres(12.3)); // 6
// console.log(litres(0.82)); // 0
// console.log(litres(11.8)); // 5
// console.log(litres(1787)); // 893
// console.log(litres(0)); // 0

//? --------------------------------
/*
Создайте функцию, которая принимает 2 строковых аргумента 
и возвращает целое число, соответствующее количеству вхождений 
второго аргумента в первом.

Если вхождений не найдено, должно быть возвращено число 0.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Заметки:

Первый аргумент может быть пустой строкой
Второй строковый аргумент всегда будет иметь длину 1.
*/
// function strCount(str, letter) {
//   let result = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) result += 1;
//   }
//   return result;
// }

// console.log(strCount('Hello', 'o')); // 1
// console.log(strCount('Hello', 'l')); // 2
// console.log(strCount('', 'z')); // 0

//?-----------------------------------------------------
/*
Создайте функцию, которая принимает 2 целых числа в виде строки 
в качестве входных данных и выводит сумму (также в виде строки):

Пример: ( Ввод1, Ввод2 -->Вывод )

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Заметки:

Если какой-либо вход является пустой строкой, считайте ее нулевой.

Входные данные и ожидаемые выходные данные никогда не превысят 
ограничение на 32-разрядное целое число со знаком ( 2^31 - 1)
*/
// function sumStr(a, b) {
//   return String(Number(a) + Number(b));
// }

// console.log(sumStr('4', '5')); // '9'
// console.log(sumStr('34', '5')); // '39'
// console.log(sumStr('', '')); // '0'
// console.log(sumStr('2', '')); // '2'
// console.log(sumStr('-5', '3')); // '-2'

//?-----------------------------------------------------------------
/*
Преобразовать число в перевернутый массив цифр
Учитывая случайное неотрицательное число, 
вы должны вернуть цифры этого числа в массиве в обратном порядке.

Пример (ввод => вывод):
35231 => [1,3,2,5,3]
0 => [0]
*/
function digitize(n) {
  //   const nToString = String(n);
  //   const arr = [];

  //   for (let i = 0; i < nToString.length; i++) arr.push(Number(nToString[i]));

  //   return arr.reverse();
  return String(n).split('').map(Number).reverse();
}

// console.log(digitize(35231)); // [1, 3, 2, 5, 3]
// console.log(digitize(0)); // [0]

//?-----------------------------------------------------------------
/*
Учитывая массив целых чисел, ваше решение должно найти 
наименьшее целое число.

Например:

Учитывая [34, 15, 88, 2], что ваше решение вернется2
Учитывая [34, -345, -1, 100], что ваше решение вернется-345
Для целей этого ката вы можете предположить, 
что предоставленный массив не будет пустым.
*/
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// assert.strictEqual(sif.findSmallestInt([78, 56, 232, 12, 8]), 8);
// assert.strictEqual(sif.findSmallestInt([78, 56, 232, 12, 18]), 12);
// assert.strictEqual(sif.findSmallestInt([78, 56, 232, 412, 228]), 56);
// assert.strictEqual(sif.findSmallestInt([78, 56, 232, 12, 0]), 0);
// assert.strictEqual(sif.findSmallestInt([1, 56, 232, 12, 8]), 1);

//?------------------------------------------------------------
/*
Создайте программу, которая фильтрует список строк и возвращает список, 
содержащий только имена ваших друзей.

Если в имени ровно 4 буквы, можете быть уверены, 
что оно должно быть вашим другом! В противном случае, 
вы можете быть уверены, что он не...

Пример: ввод = ["Райан", "Киран", "Джейсон", "Юс"], 
вывод = ["Райан", "Юс"]

то есть

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Примечание: сохраните исходный порядок имен в выводе.
*/
function friend(friends) {
  //   const myFriends = friends.reduce((acc, friend) => {
  //     if (friend.length === 4) acc.push(friend);
  //     return acc;
  //   }, []);

  //   return myFriends;
  return friends.filter((n) => n.length === 4);
}

// console.log(friend(['Ryan', 'Kieran', 'Mark'])); // ['Ryan', 'Mark']
// console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])); // ['Ryan']
// console.log(
//   friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
// ); // ['Jimm', 'Cari', 'aret']
// console.log(friend(['Love', 'Your', 'Face', '1'])); // ['Love', 'Your', 'Face']

//?-------------------------------------------------------------
/*
Боб работает водителем автобуса. 
Тем не менее, он стал чрезвычайно популярен среди жителей города. 
С таким количеством пассажиров, желающих сесть в его автобус, 
ему иногда приходится сталкиваться с проблемой нехватки места в автобусе! 
Он хочет, чтобы вы написали простую программу, сообщающую ему, 
сможет ли он разместить всех пассажиров.

Обзор задачи:
Вам нужно написать функцию, которая принимает три параметра:

cap это количество человек, которое может вместить автобус, 
не считая водителя.
on это количество людей в автобусе без учета водителя.
wait это количество людей, ожидающих посадки в автобус, не считая водителя.
Если места достаточно, вернуть 0, а если нет, 
вернуть количество пассажиров, которых он не может взять.

Примеры использования:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
*/
// function enough(cap, on, wait) {
//   return cap - on - wait >= 0 ? 0 : Math.abs(wait - (cap - on));
// }

// console.log(enough(10, 5, 5)); // 0
// console.log(enough(100, 60, 50)); // 10
// console.log(enough(20, 5, 5)); // 0
// console.log(enough(120, 50, 105)); // 35

//?---------------------------------------------------------------
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

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split('')
    .filter((el, index, arr) => arr.indexOf(el) !== index)
    .filter((el, index, arr) => arr.indexOf(el) === index).length;
}

// console.log(duplicateCount('')); // 0
// console.log(duplicateCount('aabbcde')); // 2
// console.log(duplicateCount('aaboBcdoe')); // 3
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

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n)) ? true : false;
};

// console.log(isSquare(-1)); // false
// console.log(isSquare(0)); // true
// console.log(isSquare(25)); // true
// console.log(isSquare(26)); // false

//? ----------------------------------------
/*
Ваша задача — написать функцию, которая принимает строку и 
возвращает новую строку, в которой удалены все гласные.

Например, строка «This website is for losers LOL!» станет 
«Ths wbst s fr lsrs LL!».

Примечание: для этой ката y не считается гласной.
*/
function disemvowel(str) {
  //   const vowelsArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  //   const lettersArr = str.split('');
  //   const newStr = [];

  //   console.log(lettersArr);

  //   for (let i = 0; i < lettersArr.length; i++) {
  //     if (vowelsArr.includes(lettersArr[i])) {
  //       continue;
  //     }
  //     newStr.push(lettersArr[i]);
  //   }
  //   return newStr.join('');
  return str.replace(/[aeiou]/gi, '');
}

// console.log(disemvowel('This website is for losers LOL!')); // "Ths wbst s fr lsrs LL!"
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// console.log(disemvowel('What are you, a communist?')); // "Wht r y,  cmmnst?"

//? ----------------------------------------------
/*
? Ваша задача состоит в том, чтобы преобразовать строки в то, как они были бы написаны Джейденом Смитом. 
Строки являются настоящими цитатами Джейдена Смита, но они не написаны с заглавной буквы так, как он их изначально напечатал.
Пример:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" 
*/
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

// console.log(fn("How can mirrors be real if our eyes aren't real"));
// var str = "How can mirrors be real if our eyes aren't real";
// Test.assertEquals(
//   str.toJadenCase(),
//   "How Can Mirrors Be Real If Our Eyes Aren't Real"
// );

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
String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join('');
};

// console.log('HELLO WORLD'.toAlternatingCase()); // 'HELLO WORLD'
// console.log('hello world'.toAlternatingCase()); // 'hello world'
// console.log('HeLLo WoRLD'.toAlternatingCase()); // 'HELLO world'
// console.log('hello WORLD'.toAlternatingCase()); // 'hEllO wOrld'
// console.log('12345'.toAlternatingCase()); // '12345'
// console.log('1a2b3c4d5e'.toAlternatingCase()); // '1A2B3C4D5E'
// console.log('String.prototype.toAlternatingCase'.toAlternatingCase()); // 'sTRING.PROTOTYPE.TOaLTERNATINGcASE'

// console.log('Hello World'.toAlternatingCase().toAlternatingCase()); // 'Hello World'

//?------------------------------------------------------------
/*
Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.

Пример
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
function solution(string) {
  //   const strArr1 = [];

  //   for (let i = 0; i < string.length; i++) {
  //     if (string[i] === string[i].toUpperCase()) {
  //       strArr1.push(` `);
  //     }
  //     strArr1.push(string[i]);
  //   }
  //   return strArr1.join(' ');
  return string
    .split('')
    .map((el) => (el === el.toUpperCase() ? ` ${el}` : el))
    .join('');
}

// console.log(solution('camelCasing')); // 'camel Casing'
// console.log(solution('camelCasingTest')); // 'camel Casing Test'

//? --------------------------------------------
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
function wave(str) {
  const strArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }
    strArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return strArr;
}

// console.log(wave('codewars')); // ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
// console.log(wave('two words')); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
// console.log(wave(' gap ')); // [" Gap ", " gAp ", " gaP "]

//? ---------------------------------------------
function pinCode(pin) {
  //   const n = pin.length;
  //   if (n != 4 && n != 6) return false;
  //   for (const i in pin) if (pin[i] > '9' || pin[i] < '0') return false;

  //   return true;

  let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let count = 0;
  let pinArr = pin.split('');
  for (let i of pinArr) {
    if (num.includes(i)) {
      count += 1;
    } else {
      return false;
    }
  }
  return count == 4 || count == 6;

  //   return /^(\d{4}|\d{6})$/.test(pin);
}

// console.log(pinCode('123\n')); // false
// console.log(pinCode('4E73')); // false
// console.log(pinCode('1e23')); // false
// console.log(pinCode('123456')); // true
// console.log(pinCode('-1.234')); // false
// console.log(pinCode('.234')); // false
// console.log(pinCode('0000')); // true

//? ---------------------------------------
/*
Построить башню
Постройте башню в форме пирамиды как массив/список строк, учитывая положительное целое число number of floors. Башенный блок представлен с "*"характером.

Например, башня с 3этажами выглядит так:

[
  "  *  ",
  " *** ", 
  "*****"
]
А башня с 6 этажами выглядит так:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/
function towerBuilder(nFloors) {
  //   const arr = [];

  //   for (let i = 0; i < nFloors; i++) {
  //     arr.push(
  //       ' '.repeat(nFloors - i - 1) +
  //         '*'.repeat(i + i + 1) +
  //         ' '.repeat(nFloors - i - 1)
  //     );
  //   }
  //   return arr;
  return [...Array(n)].map(
    (_, i) =>
      ' '.repeat(n - 1 - i) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - 1 - i)
  );
}

// console.log(towerBuilder(1)); // ["*"]
// console.log(towerBuilder(2)); // [" * ","***"]
// console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
// console.log(towerBuilder(0));

//? -------------------------------------------------------
/*
Convert a Boolean to a String
Реализуйте функцию, которая преобразует данное логическое значение в его строковое представление.

Примечание. Будут даны только действительные входные данные.
*/
function booleanToString(b) {
  //   return b ? 'true' : 'false';
  return b.toString();
}

// console.log(booleanToString(true)); // "true"
// console.log(booleanToString(false)); // "false"
//? -----------------------------------------------
/*
Square(n) Sum
Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, 
а затем суммировала результаты.

Например, for [1, 2, 2]это должно возвращаться , 9потому что 1^2 + 2^2 + 2^2 = 9.
*/
function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

// console.log(squareSum([1, 2])); // 5
// console.log(squareSum([0, 3, 4, 5])); // 50
// console.log(squareSum([])); // 0
//? -----------------------------------------------
/*
Fake Binary

Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1». 
Верните полученную строку.

Примечание: ввод никогда не будет пустой строкой
*/
function fakeBin(x) {
  return x
    .split('')
    .map((el) => (el < 5 ? 0 : 1))
    .join('');
}

// console.log(fakeBin('45385593107843568')); // '01011110001100111'
// console.log(fakeBin('509321967506747')); // '101000111101101'
// console.log(fakeBin('366058562030849490134388085')); // '011011110000101010000011011'
//? -----------------------------------------------
/*
Abbreviate a Two Word Name

Напишите функцию для преобразования имени в инициалы. 
Это ката строго состоит из двух слов с одним пробелом между ними.

На выходе должны быть две заглавные буквы с точкой, разделяющей их.

Это должно выглядеть так:

Sam Harris=>S.H

patrick feeney=>P.F
*/
function abbrevName(name) {
  //   const arr = name.split(' ');
  //   const result = [];

  //   for (const el of arr) {
  //     result.push(el[0]);
  //   }
  //   return result.join('.');

  return name
    .split(' ')
    .map((i) => i[0].toUpperCase())
    .join('.');
}

// console.log(abbrevName('Sam Harris')); // "S.H"
// console.log(abbrevName('Patrick Feenan')); // "P.F"
// console.log(abbrevName('Evan Cole')); // "E.C"
// console.log(abbrevName('P Favuzzi')); // "P.F"
// console.log(abbrevName('David Mendieta')); //  "D.M"
//? -----------------------------------------------
/*
Пример 1:

Ввод: nums = [1,1,2]
 Вывод: 2, nums = [1,2,_]
 Объяснение: Ваша функция должна возвращать k = 2, 
 причем первые два элемента nums равны 1 и 2 соответственно.
Неважно, что вы оставляете за возвращенным k 
(следовательно, это символы подчеркивания).
Пример 2:

Ввод: числа = [0,0,1,1,1,2,2,3,3,4]
 Выход: 5, числа = [0,1,2,3,4,_,_,_,_, _]
 Объяснение: Ваша функция должна возвращать k = 5, 
 причем первые пять элементов nums равны 0, 1, 2, 3 и 4 соответственно.
Неважно, что вы оставляете за возвращенным k 
(следовательно, это символы подчеркивания).

Ограничения:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
numsсортируется в порядке неубывания .
*/
var removeDuplicates = function (nums) {
  //   return nums.filter((num, index, array) => array.indexOf(num) === index);

  if (!nums.length) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
//? ---------------------------------------------------------
/*
Развернуть многоуровневый массив в одноуровневый.
*/
const data = [
  1,
  2,
  'Yar',
  {
    name: 'Neta',
    age: 27,
    family: { sister: 'Saphir', age: 23 },
  },
  [3, 4, { name: 'Elina', age: 25 }],
];

const fun = (arr) => {
  const newArr = [];
  const a = (object) => {
    for (let key in object) {
      if (typeof object[key] === 'object') {
        a(object[key]);
      } else {
        newArr.push(object[key]);
      }
    }
  };
  a(arr);
  return newArr;
};

// console.log(fun(data));
//? ------------------------------------------------------
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
  if (walk.length !== 10) {
    return false;
  }
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;
  for (const el of walk) {
    if (el === 'n') n += 1;
    if (el === 's') s += 1;
    if (el === 'w') w += 1;
    if (el === 'e') e += 1;
  }
  return n === s && w === e;
}

// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // 'true'
// console.log(
//   isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
// ); // 'false'
// console.log(isValidWalk(['w'])); // 'false'
// console.log(isValidWalk(['w', 'n', 'e', 's', 's', 'e', 'n', 'n', 'w', 's'])); // true
// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // 'false'
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
  //   const uniqNum = arr.filter((el) => el !== arr[0]);
  //   if (uniqNum.length === 1) {
  //     return uniqNum[0];
  //   } else {
  //     return arr[0];
  //   }

  //   arr.sort((a, b) => a - b);
  //   return arr[0] == arr[1] ? arr.pop() : arr[0];

  return arr.find((el) => arr.indexOf(el) === arr.lastIndexOf(el));
}

// console.log(findUniq([1, 0, 0])); // 1
// console.log(findUniq([0, 1, 0])); // 1
// console.log(findUniq([0, 0, 1])); // 1
// console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
// console.log(findUniq([1, 1, 2, 1, 1])); // 2
// console.log(findUniq([3, 10, 3, 3, 3])); // 10
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
  //   const sortArr = A.sort((a, b) => a - b);

  //   for (let i = sortArr.length; i > -1; i--) {
  //     if (sortArr[i] === sortArr[i + 1]) {
  //       sortArr.splice(i, 2);
  //     }
  //   }
  //   return Number(sortArr.join(''));
  const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
}
// console.log(findOdd([0, 1, 0, 1, 0])); // 0
// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5
// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1
// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); // 10
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

*/
function tribonacci(signature, n) {
  //   if (n === 0) return [];
  //   if (n === 1) return [1];

  //   const newArr = [...signature];

  //   for (let i = 0; i < n - 3; i++) {
  //     newArr.push(newArr[i] + newArr[i + 1] + newArr[i + 2]);
  //   }
  //   return newArr;
  for (var i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

// console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]
// console.log(tribonacci([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]
// console.log(tribonacci([0, 1, 1], 10)); // [0,1,1,2,4,7,13,24,44,81]
// console.log(tribonacci([1, 0, 0], 10)); // [1,0,0,1,1,2,4,7,13,24]
// console.log(tribonacci([0, 0, 0], 10)); // [0,0,0,0,0,0,0,0,0,0]
// console.log(tribonacci([1, 2, 3], 10)); // [1,2,3,6,11,20,37,68,125,230]
// console.log(tribonacci([3, 2, 1], 10)); // [3,2,1,6,9,16,31,56,103,190]
// console.log(tribonacci([1, 1, 1], 1)); // [1]
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
  //   if (names.length === 0) return `no one likes this`;
  //   if (names.length === 1) return `${names[0]} likes this`;
  //   if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  //   if (names.length === 3)
  //     return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  //   if (names.length > 3)
  //     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;

  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

// console.log(likes([])); // 'no one likes this'
// console.log(likes(['Peter'])); // 'Peter likes this'
// console.log(likes(['Jacob', 'Alex'])); // 'Jacob and Alex like this'
// console.log(likes(['Max', 'John', 'Mark'])); // 'Max, John and Mark like this'
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'
//? -----------------------------------------------
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

// function findEvenIndex(arr) {
//   if (arr.slice(1).reduce((total, item) => total + item, 0) === 0) {
//     return 0;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr.slice(0, i).reduce((total, item) => total + item, 0) ===
//       arr.slice(i + 1).reduce((total, item) => total + item, 0)
//     ) {
//       return i;
//     }
//   }
//   return -1;
// }

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex = (a) =>
  a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
// console.log(findEvenIndex([1, 2, -2])); // 0

//? ----------------------------------------------
/*
Реализуйте функцию, которая складывает два числа 
и возвращает их сумму в двоичном виде. 
Преобразование может быть выполнено до или после добавления.

Возвращаемое двоичное число должно быть строкой.

Примеры:(Ввод1, Ввод2 --> Выход (пояснение)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/
function addBinary(a, b) {
  return (a + b).toString(2);
}

console.log(addBinary(5, 9)); // 1110

//?-------------------------------------------------------
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

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return currString.length > long.length ? currString : long;
  }, '');
}

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
Remove the minimum

Музей невероятно скучных вещей хочет избавиться от некоторых выставок. 
Мириам, архитектор интерьеров, придумывает план убрать 
самые скучные выставки. Она дает им рейтинг, а затем удаляет тот, 
у которого самый низкий рейтинг.

Однако, как только она закончила оценивать все выставки, 
она отправилась на важную ярмарку, поэтому она попросила вас 
написать программу, которая сообщает ей оценки предметов после того,
 как один из них удалил самый низкий. Справедливо.

Задача
Учитывая массив целых чисел, удалите наименьшее значение. 
Не изменяйте исходный массив/список. Если есть несколько элементов с 
одинаковым значением, удалите элемент с более низким индексом.
Если вы получили пустой массив/список, верните пустой массив/список.

Не меняйте порядок оставшихся элементов.

Примеры
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/
function removeSmallest(numbers) {
  //   if (numbers.length < 1) return [];

  //   const indexMinNum = numbers.findIndex(
  //     (element, index, array) => element === Math.min(...array)
  //   );

  //   const newArr = [];

  //   for (let i = 0; i < numbers.length; i++) {
  //     if (i !== indexMinNum) {
  //       newArr.push(numbers[i]);
  //     }
  //   }

  //   return newArr;

  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

console.log(removeSmallest([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // [2, 2, 2, 1]
console.log(removeSmallest([])); // []

//?--------------------------------------------------------
/*
Find the stray number

Вам дан массив целых чисел нечетной длины , в котором все они одинаковы, 
кроме одного единственного числа.

Завершите метод, который принимает такой массив и возвращает 
это единственное другое число.

Входной массив всегда будет действительным! (нечетная длина >= 3)

Примеры
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
function stray(numbers) {
  //   const arr1 = [numbers[0]];
  //   const arr2 = [];

  //   for (let i = 1; i < numbers.length; i++) {
  //     if (arr1.includes(numbers[i])) {
  //       arr1.push(numbers[i]);
  //     } else {
  //       arr2.push(numbers[i]);
  //     }
  //   }

  //   return arr1.length < arr2.length
  //     ? Number(arr1.join(''))
  //     : Number(arr2.join(''));

  return numbers.reduce((a, b) => a ^ b);
}

// console.log(stray([1, 1, 2])); // 2
// console.log(stray([1, 2, 1])); // 2
// console.log(stray([2, 1, 1])); // 2

//?--------------------------------------------------------
/*
Testing 1-2-3

Ваша команда пишет новый модный текстовый редактор, и вам поручили 
внедрить нумерацию строк.

Напишите функцию, которая принимает список строк и возвращает 
каждую строку с правильным номером перед ним.

Нумерация начинается с 1. Формат n: string. Обратите внимание 
на двоеточие и пробел между ними.

Примеры: (Ввод --> Вывод)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/
var number = function (array) {
  return array.map((item, index) => (item = `${index + 1}: ${item}`));
};

// console.log(number([])); // []
// console.log(number(['a', 'b', 'c'])); // ["1: a", "2: b", "3: c"]

//? ------------------------------------------------
