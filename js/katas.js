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
