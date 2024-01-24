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
/*
Persistent Bugger.

Напишите функцию , persistence которая принимает положительный параметр 
num и возвращает его мультипликативную постоянство, 
то есть количество раз, которое вы должны умножить на цифры num, 
пока не получите одну цифру.

Например (Ввод --> Вывод) :

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
function persistence(num) {
  let counter = 0;
  let arrStr = num.toString().split('');

  if (arrStr.length === 1) return 0;

  while (arrStr.length > 1) {
    arrStr = arrStr
      .reduce((total, item) => total * item, 1)
      .toString()
      .split('');

    counter += 1;
  }

  return counter;
}

// console.log(persistence(39)); // 3
// console.log(persistence(4)); // 0
// console.log(persistence(25)); // 2
// console.log(persistence(999)); // 4
//? -----------------------------------------------
/*
Money, Money, Money

У мистера Скруджа есть сумма денег «P», которую он хочет инвестировать. 
Прежде чем он это сделает, он хочет знать, сколько лет «Y» 
эта сумма «P» должна храниться в банке, чтобы она составила 
желаемую сумму денег «D».

Сумма хранится в течение Y лет в банке, где проценты I выплачиваются 
ежегодно. После уплаты налогов «Т» за год новая сумма реинвестируется.

Примечание к налогам: налогом облагается не инвестированная основная 
сумма, а только начисленные проценты за год.

Пример:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Таким образом, г-н Скрудж должен ждать 3 года, чтобы первоначальный 
основной капитал составил желаемую сумму.

Ваша задача — завершить предоставленный метод и вернуть количество лет
 «Y» в целом, чтобы мистер Скрудж получил желаемую сумму.

Предположение: предположим, что желаемый принципал «D» всегда больше, 
чем первоначальный принципал. Однако лучше принять во внимание, 
что если желаемый основной «D» равен основному «P», 
это должно вернуть 0 лет.
*/
function calculateYears(principal, interest, tax, desired) {
  if (desired <= principal) return 0;

  let totalSum = principal;
  let yearsCount = 0;

  while (totalSum < desired) {
    totalSum = totalSum + (totalSum * interest - totalSum * interest * tax);
    yearsCount += 1;
  }

  return yearsCount;
}

// console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
// console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // 14
// console.log(calculateYears(1000, 0.05, 0.18, 1000)); // 0
//? ------------------------------------------------
/*
Growth of a Population

В маленьком городке население p0 = 1000 на начало года. 
Население регулярно увеличивается на 2 percent 1 год, и, кроме того , 
50 каждый год в город приезжают новые жители. Сколько лет нужно городу, 
чтобы его население было больше или равно количеству p = 1200 жителей?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
Более общие параметры:

p0, percent, aug (inhabitants coming or leaving each year), 
p (population to equal or surpass)

функция nb_year должна возвращать n количество полных лет, 
необходимых для получения населения, большего или равного p.

aug — целое число, процент — положительное или нулевое плавающее число, 
p0 и p — положительные целые числа (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Примечание:
Не забудьте преобразовать параметр процента в процент в теле 
вашей функции: если параметр процента равен 2, 
вы должны преобразовать его в 0,02.
*/
function nbYear(p0, percent, aug, p) {
  //   let total = p0;
  //   let countYears = 0;

  //   while (total < p) {
  //     total += Math.floor(total * (percent / 100) + aug);
  //     countYears += 1;
  //   }
  //   return countYears;

  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}
// console.log(nbYear(1000, 2, 50, 1200)); // 3
// console.log(nbYear(1500, 5, 100, 5000)); // 15
// console.log(nbYear(1500000, 2.5, 10000, 2000000)); // 10
// console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94
//?-------------------------------------------------------
/*
Playing with digits

Некоторые числа обладают забавными свойствами. Например:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Даны положительное целое число n, записанное в виде abcd... 
(a, b, c, d... являются цифрами), и положительное целое число p

мы хотим найти положительное целое число k, если оно существует, 
такое, что сумма цифр n, взятых в последовательных степенях p, равна k * n.
Другими словами:

Существует ли целое число k, такое как: (a ^ p + b ^ (p+1) + c ^ (p+2) + d ^ (p+3) + ...) = n * k

Если это так, мы вернем k, если нет, вернем -1.

Примечание : n и p всегда задаются как строго положительные целые числа.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/
function digPow(n, p) {
  const sum =
    n
      .toString()
      .split('')
      .reduce((total, item, index) => total + item ** (p + index), 0) / n;

  return sum % 1 === 0 ? sum : -1;
}

// console.log(digPow(89, 1)); // 1
// console.log(digPow(92, 1)); // -1
// console.log(digPow(695, 2)); // 2
// console.log(digPow(46288, 3)); // 51
//? ------------------------------------------------
/*
Enough is enough!

Алиса и Боб были в отпуске. Они оба сделали много фотографий мест, 
где побывали, и теперь хотят показать Чарли всю свою коллекцию. 
Однако эти сеансы не нравятся Чарли, так как мотив обычно повторяется. 
Ему не нравится смотреть на Эйфелеву башню 40 раз.
Он говорит им, что будет сидеть на сеансе только в том случае, 
если они будут показывать один и тот же мотив в большинстве N случаев. 
К счастью, Алиса и Боб могут закодировать мотив как число. 
Можете ли вы помочь им удалить числа так, чтобы их список содержал 
каждое число только до N раз, не меняя порядок?

Задача
Учитывая список и число, создайте новый список, который содержит 
каждое число list не более N раз, без изменения порядка.
Например, если входной номер равен 2, а входной список — [1,2,3,1,2,1,2,3],
вы берете [1,2,3,1,2], отбрасываете следующий, [1,2] поскольку это приведет 
к 1 и 2 будет в результате 3 раз, а затем берете 3, что приводит к [1,2,3,1,2,3].
Со списком [20,37,20,21] и числом 1 результатом будет [20,37,21].
*/
function deleteNth(arr, n) {
  //   const counterDigit = {};
  //   const result = [];

  //   for (const element of arr) {
  //     if (!counterDigit[element]) {
  //       counterDigit[element] = 1;
  //       result.push(element);
  //     } else {
  //       counterDigit[element] += 1;
  //       if (counterDigit[element] <= n) {
  //         result.push(element);
  //       }
  //     }
  //   }

  //   return result;

  let m = {};
  return arr.filter((v) => (m[v] = m[v] + 1 || 1) <= n);
}

// console.log(deleteNth([20, 37, 20, 21], 1)); // [20,37,21]
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); // [1, 1, 3, 3, 7, 2, 2, 2]

//? ------------------------------------------------
/*
13. Roman to Integer

Римские цифры представлены семью различными символами:  I, V, X, L, и .CDM

Символ        Значение
I 1
V 5
Х 10
L 50
С 100
D 500
М 1000
Например, 2 пишется как II римскими цифрами, просто две сложенные вместе. 
12 пишется как  XII, что просто X + II. 
Число 27записывается как XXVII, то есть XX + V + II.

Римские цифры обычно пишутся слева направо от большего к меньшему. 
Однако цифра «четыре» — не IIII. 
Вместо этого цифра четыре записывается как IV. 
Так как единица предшествует пятерке, мы вычитаем ее и получаем четыре. 
Тот же принцип применим к числу девять, которое записывается как IX. 
Есть шесть случаев, когда используется вычитание:

I можно поставить перед V(5) и X(10), чтобы получилось 4 и 9. 
X можно поставить перед L(50) и C(100), чтобы получилось 40 и 90. 
C можно поставить перед D(500) и M(1000), чтобы получить 400 и 900.

Дана римская цифра, преобразовать ее в целое число.

Пример 1:

Ввод: s = "III"
 Вывод: 3
 Объяснение: III = 3.

Пример 2:

Вход: s = "LVIII"
 Выход: 58
 Объяснение: L = 50, V = 5, III = 3.

Пример 3:

Ввод: s = "MCMXCIV"
 Вывод: 1994
 Объяснение: M = 1000, CM = 900, XC = 90 и IV = 4.
 

Ограничения:

1 <= s.length <= 15
s содержит только символы ('I', 'V', 'X', 'L', 'C', 'D', 'M').
Гарантируется , что s это допустимая римская цифра в диапазоне [1, 3999].
*/
var romanToInt = function (s) {
  const romeDig = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let result = 0;

  s.split('').forEach((num, i) => {
    if (romeDig[num] < romeDig[s[i + 1]]) result -= romeDig[num];
    else result += romeDig[num];
  });

  return result;
};

// console.log(romanToInt('III'));
// console.log(romanToInt('LVIII'));
// console.log(romanToInt('MCMXCIV'));
//? ==============================================
/*
Replace With Alphabet Position

В этой ката вы должны, учитывая строку, заменить каждую букву 
ее позицией в алфавите.

Если что-то в тексте не является буквой, игнорируйте это и не возвращайте.

"a" = 1, "b" = 2, и т.д.

Пример
alphabetPosition("The sunset sets at twelve o' clock.")
Должен возвращаться "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(в виде строки)
*/
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map((element) => element.charCodeAt() - 64)
    .join(' ');
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
// console.log(alphabetPosition('The narwhal bacons at midnight.')); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
//? ------------------------------------------------
/*
14. Longest Common Prefix

Напишите функцию, которая находит самую длинную строку общего префикса 
среди массива строк.

Если общего префикса нет, вернуть пустую строку "".

Пример 1:

Ввод: strs = ['flower', 'flow', 'flight']
 Вывод: "fl"
Пример 2:

Ввод: strs = ['dog', 'racecar', 'car']
 Вывод: ""
 Объяснение: Среди входных строк нет общего префикса.
 

Ограничения:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i]состоит только из строчных английских букв.
*/
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));

//? ==============================================
/*
Sum of the first nth term of Series

Ваша задача — написать функцию, которая возвращает сумму следующих рядов 
до n-го члена (параметра).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Правила:
Вам нужно округлить ответ до 2 знаков после запятой и вернуть его как строку.

Если заданное значение равно 0, оно должно вернуть 0,00.

В качестве аргументов вам будут предоставлены только натуральные числа.

Примеры: (Ввод --> Вывод)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/
function SeriesSum(n) {
  //   if (n === 0) return '0.00';
  //   let decimal = 4;
  //   let result = 1;

  //   for (let i = 1; i < n; i++) {
  //     result += 1 / decimal;
  //     decimal += 3;
  //   }
  //   return result.toFixed(2);
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

// console.log(SeriesSum(1)); // "1.00"
// console.log(SeriesSum(2)); // "1.25"
// console.log(SeriesSum(3)); // "1.39"
// console.log(SeriesSum(4)); // "1.49"
// console.log(SeriesSum(5)); // "1.57"

//? ------------------------------------------------
/*
20. Valid Parentheses

Учитывая строку s, содержащую только символы '(', ')', '{', и , 
определите '}', допустима ли входная строка.'['']'

Входная строка действительна, если:

Открытые скобки должны быть закрыты однотипными скобками.
Открытые скобки должны быть закрыты в правильном порядке.
Каждой закрывающей скобке соответствует открытая скобка того же типа.
 

Пример 1:

Ввод: s = "()"
 Вывод: правда
Пример 2:

Ввод: s = "()[]{}"
 Вывод: правда
Пример 3:

Ввод: s = "(]"
 Вывод: ложь
 

Ограничения:

1 <= s.length <= 104
s состоит только из скобок '()[]{}'.
*/
var isValid = function (s) {
  const bracketsMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (const el of s) {
    if (bracketsMap[el]) {
      stack.push(bracketsMap[el]);
    } else if (stack.length > 0 && stack[stack.length - 1] === el) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

// console.log(isValid('()'));
// console.log(isValid('()[]{}'));
// console.log(isValid('(]'));
//? ==============================================
/*
35. Search Insert Position

Учитывая отсортированный массив различных целых чисел и целевое значение, 
вернуть индекс, если цель найдена. 
Если нет, верните индекс туда, где он был бы, если бы он был вставлен 
по порядку.

Вы должны написать алгоритм со  O(log n) сложностью выполнения.

Пример 1:
Ввод: числа = [1,3,5,6], цель = 5
 Вывод: 2

Пример 2:
Ввод: числа = [1,3,5,6], цель = 2
 Вывод: 1

Пример 3:
Ввод: числа = [1,3,5,6], цель = 7
 Вывод: 4

Ограничения:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
numsсодержит различные значения, отсортированные в порядке возрастания .
-104 <= target <= 104
*/
var searchInsert = function (nums, target) {
  return [...nums, target]
    .filter((num, index, array) => array.indexOf(num) === index)
    .sort((a, b) => a - b)
    .indexOf(target);
};

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
//? ==============================================
/*
58. Length of Last Word

Учитывая строку, sсостоящую из слов и пробелов, вернуть длину последнего слова в строке.

Слово – это максимальное
подстрока
состоящая только из не пробельных символов.

Пример 1:
Ввод: s = "Hello World"
 Вывод: 5
 Объяснение: Последнее слово "World" имеет длину 5.

Пример 2:
Ввод: s = " лети со мной на луну "
 Вывод: 4
 Объяснение: Последнее слово "луна" имеет длину 4.

Пример 3:
Ввод: s = "luffy все еще джойбой"
 Вывод: 6
 Объяснение: Последнее слово "joyboy" имеет длину 6.
 
Ограничения:
1 <= s.length <= 104
sсостоит только из английских букв и пробелов ' '.
В нем будет хотя бы одно слово s.
*/
var lengthOfLastWord = function (s) {
  const arrStr = s.trimEnd().split(' ');
  const lastElement = arrStr.length - 1;

  return arrStr[lastElement].length;
};

// console.log(lengthOfLastWord('Hello World'));
// console.log(lengthOfLastWord('   fly me   to   the moon  '));
// console.log(lengthOfLastWord('luffy is still joyboy'));

//? ==============================================
/*
66. Plus One

Вам дано большое целое число , представленное в виде массива целых чисел digits, 
где каждое число digits[i]является цифрой целого числа. 
Цифры упорядочены от наиболее значащего к наименее значащему в порядке слева направо. 
Большое целое число не содержит начальных символов .ith0

Увеличьте большое целое число на единицу и верните результирующий массив цифр .

Пример 1:
Ввод: цифры = [1,2,3]
 Вывод: [1,2,4]
 Объяснение: Массив представляет целое число 123.
Увеличение на единицу дает 123 + 1 = 124.
Таким образом, результат должен быть [1,2,4].

Пример 2:
Ввод: цифры = [4,3,2,1]
 Вывод: [4,3,2,2]
 Объяснение: Массив представляет целое число 4321.
Увеличение на единицу дает 4321 + 1 = 4322.
Таким образом, результат должен быть [4,3,2,2].

Пример 3:
Ввод: цифры = [9]
 Вывод: [1,0]
 Объяснение: Массив представляет целое число 9.
Увеличение на единицу дает 9 + 1 = 10.
Таким образом, результат должен быть [1,0]. 

Ограничения:
1 <= digits.length <= 100
0 <= digits[i] <= 9
digitsне содержит ведущих 0'.
*/
var plusOne = function (digits) {
  let sum = BigInt(digits.join('')) + 1n;
  return sum.toString().split('');
};

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 1]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
//? ==============================================
/*
Rot13

ROT13 — это простой шифр с заменой букв, который заменяет букву буквой через 13 букв после нее в алфавите. 
ROT13 является примером шифра Цезаря.

Создайте функцию, которая принимает строку и возвращает строку, зашифрованную с помощью Rot13. 
Если в строку включены числа или специальные символы, они должны быть возвращены как есть. 
Сдвинуты должны быть только буквы латинского/английского алфавита, как в оригинальной "реализации" Rot13.
*/
function rot13(message) {
  //   const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  //   const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

  //   return message.replace(/[a-z]/gi, (char) => output[input.indexOf(char)]);

  const rot13 = (str) =>
    str.replace(/[a-z]/gi, (letter) =>
      String.fromCharCode(
        letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)
      )
    );
}
// console.log(rot13('a1b3c4')); // 'n1o3p4'
// console.log(rot13('test')); // "grfg"
// console.log(rot13('Test')); // "Grfg"

//? ------------------------------------------------
/*
67. Add Binary

Учитывая две двоичные строки a и b, верните их сумму в виде двоичной строки .

Пример 1:
Ввод: a = "11", b = "1"
 Выход: "100"

Пример 2:
Ввод: а = "1010", б = "1011"
 Выход: "10101" 

Ограничения:
1 <= a.length, b.length <= 104
a и b состоят только из '0'или '1'символов.
Каждая строка не содержит ведущих нулей, кроме самого нуля.
*/
var addBinary = function (a, b) {
  let sum = 0;
  if (a.length < 53 && b.length < 53) {
    sum = parseInt(a, 2) + parseInt(b, 2);
    return sum.toString(2);
  } else {
    sum = BigInt('0b' + a) + BigInt('0b' + b);
    return sum.toString(2);
  }
};

// console.log(addBinary('11', '1'));
// console.log(addBinary('1010', '1011'));
//? ==============================================
/*
Reverse words


*/
function reverseWords(str) {
  //   const arr = str.split(' ');
  //   const reverseArr = [];

  //   console.log(arr);

  //   for (const el of arr) {
  //     for (let i = el.length - 1; i >= 0; i--) {
  //       reverseArr.push(el[i]);
  //     }
  //   }

  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === ' ') {
  //       reverseArr.splice(i, 0, ' ');
  //     }
  //   }

  //   return reverseArr.join('');
  return str
    .split(' ')
    .map((str) => str.split('').reverse().join(''))
    .join(' ');
}
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
// console.log(reverseWords('a b c d')); // 'a b c d'
// console.log(reverseWords('double  spaced  words')); // 'elbuod  decaps  sdrow'
//! ------------------------------------------------------
/*
83. Remove Duplicates from Sorted List

Учитывая headотсортированный связанный список, удалите все дубликаты, чтобы каждый элемент появлялся только один раз . 
Возвращает также отсортированный связанный список .

Пример 1:
Ввод: голова = [1,1,2]
 Вывод: [1,2]

Пример 2:
Ввод: голова = [1,1,2,3,3]
 Вывод: [1,2,3]
*/
var deleteDuplicates = function (head) {
  //   return head.filter((item, index, array) => array.indexOf(item) === index);

  let cur = head;

  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};

// console.log(deleteDuplicates([1, 1, 2]));
// console.log(deleteDuplicates([1, 1, 2, 3, 3]));

//? ==============================================
/*
2309. Greatest English Letter in Upper and Lower Case

Для заданной строки английских букв sвернуть наибольшую английскую букву, 
которая встречается как в строчной, так и в прописной букве в s . 
Возвращаемое письмо должно быть в верхнем регистре . 
Если такой буквы не существует, вернуть пустую строку .

Английская буква больше , чем другая буква , если она b стоит после в английском алфавите.ab a

Пример 1:
Ввод: s = "l Ee TcOd E "
 Вывод: "E"
 Объяснение: 
Буква 'E' — единственная буква, которая встречается как в нижнем, так и в верхнем регистре.

Пример 2:
Ввод: s = "a rR AzFif"
 Вывод: "R"
 Объяснение: 
Буква 'R' — это самая большая буква, встречающаяся как в нижнем, так и в верхнем регистре. 
Обратите внимание, что «A» и «F» также появляются как в нижнем, так и в верхнем регистре, но «R» больше, чем «F» или «A».

Пример 3:
Ввод: s = "AbCdEfGhIjK"
 Вывод: ""
 Объяснение: 
Нет ни одной буквы, которая бы встречалась как в нижнем, так и в верхнем регистре.
*/
/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  //   const letterLowerList = 'abcdefghijklmnopqrstuvwxyz';
  //   const letterLower = [];
  //   const letterUpper = [];

  //   for (const letter of s) {
  //     if (letterLowerList.includes(letter)) {
  //       letterLower.push(letter.toUpperCase());
  //     }
  //   }

  //   for (const el of s) {
  //     if (letterLower.includes(el)) {
  //       letterUpper.push(el);
  //     }
  //   }

  //   if (letterUpper.length === 0) return '';
  //   return letterUpper.sort((a, b) => b.localeCompare(a))[0];
  let dict = new Set();
  let setA = new Set();
  let output = '';
  for (let c of s) {
    let aux = c.toUpperCase();
    if (setA.has(aux)) continue;
    dict.add(c);

    if (dict.has(aux) && dict.has(c.toLowerCase())) {
      setA.add(aux);
      if (output < aux) output = aux;
    }
  }

  return output;
};
// console.log(greatestLetter('lEeTcOdE')); // 'E'
// console.log(greatestLetter('arRAzFif')); // 'R'
// console.log(greatestLetter('AbCdEfGhIjK')); // ''

//? ==============================================
/*
11. Container With Most Water
*/
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let currentVol = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, currentVol);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return maxArea;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
// console.log(maxArea([1, 1])); // 1
// console.log(maxArea([0, 0, 10])); // 0
//? ==============================================
/*
Are they the "same"?

Даны два массива a и b напишите функцию comp(a, b)(или compSame(a, b)), 
которая проверяет, имеют ли два массива «одинаковые» элементы с 
одинаковыми кратностями (кратность члена — это количество раз, когда он появляется). «То же самое» здесь означает, что элементы в bявляются элементами в aквадрате, независимо от порядка.

Примеры
Действительные массивы
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b)возвращает true, потому что b121 — это квадрат 11, 14641 — квадрат 121, 
20736 — квадрат 144, 361 — квадрат 19, 25921 — квадрат 161 и так далее. 
Это становится очевидным, если мы запишем bэлементы в терминах квадратов:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Недопустимые массивы
Если, например, мы изменим первое число на что-то другое, compоно больше 
не возвращает true:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b)возвращает false, потому что b132 не является квадратом любого числа a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b)возвращает false, потому что b36100 не является квадратом любого числа a.

Примечания
aили bможет быть [] or {}(все языки, кроме R, Shell).
aили bможет быть nilили nullили Noneили nothing(кроме C++, COBOL, 
	Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, 
	PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift ).
Если aили b( nilили nullили None, в зависимости от языка), проблема 
не имеет смысла, поэтому верните false.

*/
function comp(array1, array2) {
  //   if (array1 === null || array2 === null) return false;
  //   if (array1.length === 0 && array2.length === 0) return true;

  //   const arrSort1 = array1.map((item) => item * item).sort((a, b) => a - b);
  //   const arrSort2 = array2.sort((a, b) => a - b);
  //   let result;

  //   for (let i = 0; i < arrSort1.length; i++) {
  //     if (arrSort1[i] !== arrSort2[i]) {
  //       result = false;
  //       break;
  //     } else {
  //       result = true;
  //     }
  //   }
  //   return result;
  //   if (array1 == null || array2 == null) return false;
  //   array1.sort((a, b) => a - b);
  //   array2.sort((a, b) => a - b);
  //   return array1.map((v) => v * v).every((v, i) => v == array2[i]);
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}

let a1 = [2, 2, 3];
let a2 = [9, 4, 4];

// console.log(comp(a1, a2));
//? ------------------------------------------------
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}
// console.log(isIsogram('Dermatoglyphics')); // true
// console.log(isIsogram('moOse')); // false
//? ------------------------------------------------
/*
389. Find the Difference

You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

Example 1:
Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.

Example 2:
Input: s = "", t = "y"
Output: "y"
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const arrayT = t.split('').sort();
  const arrayS = s.split('').sort();
  for (let i = 0; i < arrayT.length; i++) {
    if (arrayT[i] !== arrayS[i]) {
      return arrayT[i];
    }
  }
};
// console.log(findTheDifference('abcd', 'abcde')); // "e"
// console.log(findTheDifference('', 'y')); // "y"
// console.log(findTheDifference('abcd', 'abocd')); // "o"
//? ----------------------------------------------------
function reverseLetter(str) {
  return str.match(/[a-z]/gi).reverse().join('');
}

// console.log(reverseLetter('ultr53o?n'));
//? ----------------------------------------------------
/*
345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const leftChar = arr[left];
    const rightChar = arr[right];

    if (!vowels.includes(leftChar)) {
      left += 1;
    } else if (!vowels.includes(rightChar)) {
      right -= 1;
    } else {
      arr[left] = rightChar;
      left += 1;
      arr[right] = leftChar;
      right -= 1;
    }
  }

  return arr.join('');
};
// console.log(reverseVowels('hello')); // "holle"
// console.log(reverseVowels('leetcode')); // "leotcede"

//? ==============================================
/*
560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
*/
var subarraySum = function (nums, k) {
  let counter = 0;
  const map = new Map([[0, 1]]);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      counter += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  //   for (let i = 0; i < nums.length; i++) {
  //     let sum = 0;
  //     for (let j = i; j < nums.length; j++) {
  //       sum += nums[j];
  //       if (sum === k) {
  //         counter += 1;
  //       }
  //     }
  //   }

  return counter;
};

// console.log(subarraySum([1, 2, 3], 3)); // 2
// console.log(subarraySum([1, 2, 3], 4)); // 0
// console.log(subarraySum([1, -1, 0], 0)); // 3
// console.log(subarraySum([3, 4, 7, -2, 2, 1, 4, 2], 7)); // 6

//? ==============================================
/*
Ones and Zeros

Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.

Например: [0, 0, 0, 1]рассматривается как 0001 двоичное представление 1.

Примеры:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
Однако массивы могут иметь разную длину, а не только 4.
*/

const binaryArrayToNumber = (arr) => parseInt(arr.join(''), 2);
// console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
// console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
// console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
// console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6

//? ------------------------------------------------------
/*
String incrementer

Ваша задача — написать функцию, которая увеличивает строку, 
чтобы создать новую строку.

Если строка уже заканчивается числом, число должно быть увеличено на 1.
Если строка не заканчивается цифрой. число 1 должно быть добавлено к новой строке.
Примеры:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Внимание: Если в числе есть ведущие нули, следует учитывать количество цифр.
*/
// function incrementString(strng) {
//   return strng.replace(/\d*$/, (match) => {
//     if (!match) return '1';
//     const numStr = String(parseInt(match) + 1);
//     const diff = match.length - numStr.length;
//     return diff > 0 ? '0'.repeat(diff) + numStr : numStr;
//   });
// }
let incrementString = (str) =>
  str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));

console.log(incrementString('foobar000')); // "foobar001"
console.log(incrementString('foobar999')); // "foobar1000"
console.log(incrementString('foo')); // "foo1"
console.log(incrementString('009')); // "010"

//? ------------------------------------------------
/*
121. Best Time to Buy and Sell Stock

Вам дан массив, prices где указана prices[i] 
цена данной акции в день.ith

Вы хотите максимизировать свою прибыль, 
выбрав один день для покупки одной акции и выбрав другой день 
в будущем для продажи этой акции.

Верните максимальную прибыль, которую вы можете получить от 
этой сделки . Если вы не можете получить какую-либо прибыль, 
верните 0.

Пример 1:
Входные данные: цены = [7,1,5,3,6,4]
 Выходные данные: 5
 Объяснение: Покупка во 2-й день (цена = 1) и 
 продажа в 5-й день (цена = 6), прибыль = 6-1 = 5.
Обратите внимание, что покупка во 2-й день и продажа в 1-й день 
не разрешены, потому что вы должны купить перед продажей.

Пример 2:
Ввод: цены = [7,6,4,3,1]
 Вывод: 0
 Объяснение: В этом случае транзакции не совершаются и 
 максимальная прибыль = 0. 

Ограничения:
1 <= prices.length <= 105
0 <= prices[i] <= 104
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxNum = 0;

  for (let i = 1; i < prices.length; i++) {
    const maxPrice = prices[i];
    const profit = maxPrice - minPrice;
    maxNum = Math.max(maxNum, profit);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxNum;
};
// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([2, 1])); // 0
// console.log(maxProfit([2, 4, 1])); // 2

//? ==============================================
/*
3. Longest Substring Without Repeating Characters

Дана строка s, найдите длину самой длинной 
подстрока
без повторяющихся символов.

Пример 1:
Ввод: s = "abcabcbb"
 Вывод: 3
 Объяснение: Ответ "abc", длина 3.

Пример 2:
Вход: s = "bbbb"
 Выход: 1
 Объяснение: Ответ "b" с длиной 1.

Пример 3:
Ввод: s = "pwwkew"
 Вывод: 3
 Объяснение: Ответ "wke", длина 3. 
Обратите внимание, что ответ должен быть подстрокой, 
"pwke" — это подпоследовательность, а не подстрока.
 
Ограничения:

0 <= s.length <= 5 * 104
sсостоит из английских букв, цифр, символов и пробелов.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //? Var 1
  //   if (s === '') return 0;
  //   const lettersMap = {};
  //   let maxLen = 0;
  //   let start = 0;

  //   for (let i = 0; i < s.length; i++) {
  //     let lastChar = s[i];
  //     if (lettersMap[lastChar] === undefined) {
  //       lettersMap[lastChar] = 0;
  //     }
  //     lettersMap[lastChar] += 1;
  //     while (lettersMap[lastChar] > 1) {
  //       let firstChar = s[start];
  //       lettersMap[firstChar] -= 1;
  //       start += 1;
  //     }
  //     maxLen = Math.max(maxLen, i - start + 1);
  //   }
  //   return maxLen;

  //? Var 2
  let max = 0;
  let windowStart = 0;
  const soFar = {};

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];
    soFar[rightChar] = soFar[rightChar] + 1 || 1;

    while (soFar[rightChar] > 1) {
      let leftChar = s[windowStart];

      if (soFar[leftChar] > 1) {
        soFar[leftChar]--;
      } else {
        delete soFar[leftChar];
      }
      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
};
// console.log(lengthOfLongestSubstring('abcabcbb')); // 3
// console.log(lengthOfLongestSubstring('dvdf')); // 3
// console.log(lengthOfLongestSubstring('pwwkew')); // 3
//? ==============================================
/*
12. Integer to Roman

Римские цифры представлены семью различными символами  : I, V, X, L, Cи D.M

Символ        Значение
я 1
В 5
Х 10
л 50
С 100
Д 500
М 1000
Например,  2пишется как II римская цифра, просто две единицы сложены. 12пишется как  XII, 
что просто X + II. Число 27записывается как XXVII, то есть XX + V + II.

Римские цифры обычно пишутся слева направо от большего к меньшему. Однако цифра «четыре» — не IIII. 
Вместо этого цифра четыре записывается как IV.
Так как единица предшествует пятерке, мы вычитаем ее и получаем четыре. 
Тот же принцип применим к числу девять, которое записывается как IX. 
Есть шесть случаев, когда используется вычитание:

Iможно поставить перед V(5) и X(10), чтобы получилось 4 и 9. 
Xможно поставить перед L(50) и C(100), чтобы получилось 40 и 90. 
Cможно поставить перед D(500) и M(1000), чтобы получить 400 и 900.
Дано целое число, преобразовать его в римскую цифру.

Пример 1:
Ввод: число = 3
 Вывод: "III"
 Объяснение: 3 представляется как 3 единицы.

Пример 2:
Ввод: число = 58
 Вывод: "LVIII"
 Объяснение: L = 50, V = 5, III = 3.

Пример 3:
Ввод: num = 1994
 Вывод: "MCMXCIV"
 Объяснение: M = 1000, CM = 900, XC = 90 и IV = 4.
*/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  //   const keys = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  //   const values = [1000, 500, 100, 50, 10, 5, 1];
  //   let result = '';

  //   for (let i = 0; i < values.length; i++) {
  //     if (num >= 900 && num < 1000) {
  //       num -= 900;
  //       result += 'CM';
  //     }
  //     if (num >= 90 && num < 100) {
  //       num -= 90;
  //       result += 'XC';
  //     }
  //     if (num === 9) {
  //       num -= 9;
  //       result += 'IX';
  //     }
  //     if (num >= 400 && num < 500) {
  //       num -= 400;
  //       result += 'CD';
  //     }
  //     if (num >= 40 && num < 50) {
  //       num -= 40;
  //       result += 'XL';
  //     }
  //     if (num === 4) {
  //       num -= 4;
  //       result += 'IV';
  //     } else {
  //       while (num >= values[i]) {
  //         num -= values[i];
  //         result += keys[i];
  //       }
  //     }
  //   }
  //   return result;

  const lookup = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  let roman = '';
  let i = 1;
  while (num > 0) {
    let digit = num % 10;
    if (digit > 0) {
      if (lookup[digit * i]) {
        roman = lookup[digit * i] + roman;
      } else {
        let str = '';
        if (digit >= 5) {
          str += lookup[5 * i];
          digit -= 5;
        }
        for (let j = 0; j < digit; j++) {
          str += lookup[i];
        }
        roman = str + roman;
      }
    }
    i *= 10;
    num = Math.floor(num / 10);
  }
  return roman;
};
// console.log(intToRoman(41));
// console.log(intToRoman(58)); // "LVIII"
// console.log(intToRoman(1994)); // "MCMXCIV"
//? ==============================================
/*
Перед вами масив об'єктів. Кожен об'єкт – це співробітник у компанії. Кожен об'єкт має властивість
`sallary` - його зарплата на місяць, та `department` - відділ, в якому він працює.
Знайдіть та виведіть у консоль назву відділу з найбільшою середньою зарплатою.
*/
const employees = [
  {
    name: 'Андрей',
    sallary: 22000,
    department: 'sale',
  },
  {
    name: 'Святослав',
    sallary: 33000,
    department: 'lawyer',
  },
  {
    name: 'Мария',
    sallary: 44000,
    department: 'IT',
  },
  {
    name: 'Иван',
    sallary: 55000,
    department: 'IT',
  },
  {
    name: 'Юрий',
    sallary: 28000,
    department: 'lawyer',
  },
  {
    name: 'Алина',
    sallary: 78000,
    department: 'sale',
  },
  {
    name: 'Алекс',
    sallary: 105000,
    department: 'IT',
  },
];
const departments = employees.reduce((acc, { sallary, department }) => {
  const departmentObj = acc.find((item) => item.name === department);
  if (!departmentObj) {
    const newDepartment = {
      name: department,
      sallaries: [sallary],
    };
    return [...acc, newDepartment];
  }
  departmentObj.sallaries.push(sallary);
  return acc;
}, []);

const departmentList = departments.map(({ name, sallaries }) => {
  const sallariesSum = sallaries.reduce((total, item) => total + item, 0);
  const averageSallary = sallariesSum / sallaries.length;

  return { name, averageSallary };
});

const reachesDepartment = departmentList.reduce(
  (acc, { name, averageSallary }) => {
    if (averageSallary > acc.averageSallary) {
      return { name, averageSallary };
    }
    return acc;
  },
  departmentList[0]
);
// console.log(reachesDepartment.name);
//? ==============================================
/*
Bouncing Balls

Ребенок играет с мячом на n-м этаже высотного здания. Высота этого этажа над уровнем земли h известна.

Он бросает мяч из окна. Мяч отскакивает (например) на две трети своей высоты (отскок 0,66).

Его мать смотрит из окна в 1,5 метрах от земли.

Сколько раз мать увидит, как мяч проходит перед ее окном (в том числе когда он падает и подпрыгивает?

Для достоверности эксперимента должны быть соблюдены три условия:
Плавающий параметр "h" в метрах должен быть больше 0
Плавающий параметр "bounce" должен быть больше 0 и меньше 1
Плавающий параметр "окно" должен быть меньше h.
Если все три условия выше выполнены, вернуть положительное целое число, иначе вернуть -1.

Примечание:
Мяч можно увидеть только в том случае, если высота отскакивающего мяча строго больше параметра окна.

Примеры:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).
*/
function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let bounceValue = h;
    let counter = -1;

    while (bounceValue > window) {
      bounceValue = bounceValue * bounce;
      counter += 2;
    }
    return counter;
  }
  return -1;
}

// console.log(bouncingBall(3.0, 0.66, 1.5)); // 3
// console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
// console.log(bouncingBall(3.0, 1.0, 1.5)); // -1
//? ------------------------------------------------------
/*
849. Maximize Distance to Closest Person
Вам дан массив, представляющий строку seatsгде seats[i] = 1представляет человека, 
сидящего на сиденье, и представляет, что место пусто (индексировано 0) .ithseats[i] = 0ith

Есть по крайней мере одно свободное место и по крайней мере один сидящий человек.

Алекс хочет сесть на сиденье так, чтобы расстояние между ним и ближайшим к нему человеком было максимальным. 

Верните это максимальное расстояние ближайшему человеку .
*/
var maxDistToClosest = function (seats) {
  let max = 0;
  let count = 0;
  let i = 0;

  if (seats[i] === 0) {
    while (seats[i] === 0) {
      i++;
      count += 1;
    }
    max = count;
    count = 0;
  }

  for (; i < seats.length; i++) {
    if (i === seats.length - 1 && seats[i] === 0) {
      count += 1;
      max = Math.max(max, count);
      break;
    }
    if (seats[i] === 1) {
      count = 0;
    } else {
      count += 1;
      max = Math.max(max, Math.ceil(count / 2));
    }
  }
  return max;
};
// console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])); // 2
// console.log(maxDistToClosest([1, 0, 0, 0])); // 3
// console.log(maxDistToClosest([0, 1])); // 1
// console.log(maxDistToClosest([0, 0, 0, 0, 1, 0, 0, 0, 1])); // 4

//? ==============================================
/*
136. Single Number

Учитывая непустой  массив целых чисел nums, каждый элемент встречается дважды , кроме одного. Найди ту единственную.
Вы должны реализовать решение с линейной сложностью времени выполнения и использовать только постоянное дополнительное пространство.

Пример 1:
Ввод: числа = [2,2,1]
 Вывод: 1

Пример 2:
Ввод: числа = [4,1,2,1,2]
 Вывод: 4

Пример 3:
Ввод: число = [1]
 Вывод: 1
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const obj = {};

  nums.forEach((item) => {
    obj[item] = obj[item] + 1 || 1;

    if (obj[item] > 1) {
      delete obj[item];
    }
  });
  return Number(Object.keys(obj).join(''));
};
// console.log(singleNumber([2, 2, 1])); // 1
// console.log(singleNumber([4, 1, 2, 1, 2])); // 4
// console.log(singleNumber([1])); // 1
//? ==============================================
/*
169. Majority Element

Учитывая массив numssize n, вернуть элемент большинства .

Элемент большинства — это элемент, который встречается более одного ⌊n / 2⌋раза. 
Вы можете предположить, что в массиве всегда существует мажоритарный элемент.

Пример 1:
Ввод: числа = [3,2,3]
 Вывод: 3

Пример 2:
Ввод: числа = [2,2,1,1,1,2,2]
 Вывод: 2 

Ограничения:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 
Дополнение: Могли бы вы решить задачу в линейном времени и в O(1)пространстве?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Var 1
  //   const obj = {};

  //   nums.forEach((item) => {
  //     obj[item] = obj[item] + 1 || 1;
  //   });

  //   for (const key in obj) {
  //     if (obj[key] > Math.floor(nums.length / 2)) {
  //       return Number(key);
  //     }
  //   }

  // Var 2
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};
// console.log(majorityElement([3, 2, 3])); // 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

//? ==============================================
/*
Find the middle element

В рамках этой Ката вам нужно создать функцию, которая при наличии триплета 
возвращает индекс числового элемента, лежащего между двумя другими элементами.

Входными данными для функции будет массив из трех различных чисел (Haskell: кортеж).

Например:

gimme([2, 3, 1]) => 0
2 — это число, которое помещается между 1 и 3 , а индекс 2 во входном массиве 
равен 0 .

Другой пример (просто для ясности):

gimme([5, 10, 14]) => 1
10 — это число, которое находится между 5 и 14 , а индекс 10 во входном массиве 
равен 1 .
*/
function gimme(triplet) {
  //   const sortNums = [...triplet].sort((a, b) => a - b);
  //   const indexItem = triplet.indexOf(sortNums[1]);

  //   return indexItem;
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}

// console.log(gimme([2.1, 3.2, 1.4])); // 0
// console.log(gimme([5.9, 10.4, 14.2])); // 1
// console.log(gimme([-5, -10, -14])); // 1
// console.log(gimme([-5.2, -10.6, 14])); // 0
//?-------------------------------------------------------
/*
5. Longest Palindromic Substring

Учитывая строку s, вернуть самую длинную палиндромный подстрока в s.

Пример 1:
Ввод: s = "babad"
 Вывод: "bab"
 Объяснение: "aba" также является допустимым ответом.

Пример 2:
Ввод: s = "cbbd"
 Вывод: "bb"
*/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s;

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandCenter(s, i, i);
    let len2 = expandCenter(s, i, i + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2);
      end = Math.floor(i + len / 2);
    }
  }

  function expandCenter(s, L, R) {
    while (L >= 0 && R < s.length && s[L] === s[R]) {
      L--;
      R++;
    }
    return R - L - 1;
  }

  return s.substring(start, end + 1);
};

// console.log(longestPalindrome('babad')); // bab
// console.log(longestPalindrome('aaa')); // aaa
// console.log(longestPalindrome('cvbeebvd')); // vbeebv
//? ==============================================
/*
17. Letter Combinations of a Phone Number

Учитывая строку, содержащую цифры 2-9 включительно, вернуть все возможные комбинации букв, 
которые может представлять число. Верните ответ в любом порядке .

Отображение цифр в буквы (точно так же, как на телефонных кнопках)
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  //   const numbersData = {
  //     2: ['a', 'b', 'c'],
  //     3: ['d', 'e', 'f'],
  //     4: ['g', 'h', 'i'],
  //     5: ['j', 'k', 'l'],
  //     6: ['m', 'n', 'o'],
  //     7: ['p', 'q', 'r', 's'],
  //     8: ['t', 'u', 'v'],
  //     9: ['w', 'x', 'y', 'z'],
  //   };

  //   if (digits === '' || digits === 1) return [];
  //   if (digits.length === 1) return numbersData[digits];

  //   const lettersArr = [];

  //   digits.split('').forEach((elem) => lettersArr.push(numbersData[elem]));

  //   const result = lettersArr.reduce((acc, item) =>
  //     acc.flatMap((el) => item.map((num) => el + num))
  //   );

  //   return result;

  if (digits === '') return [];
  let obj = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let arr = [];
  function comb(index, str) {
    if (index === digits.length) {
      arr.push(str);
      return;
    }
    obj[digits[index]].forEach((item) => {
      comb(index + 1, str + item);
    });
  }
  comb(0, '');
  return arr;
};
// console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// console.log(letterCombinations('')); // []
// console.log(letterCombinations('2')); // ["a","b","c"]

//? ==============================================
/*
8. String to Integer (atoi)

Реализуйте myAtoi(string s)функцию, которая преобразует строку в 32-битное целое число 
со знаком (аналогично atoiфункции C/C++).

Алгоритм работы myAtoi(string s)следующий:

Прочтите и игнорируйте начальные пробелы.
Проверьте, является ли следующий символ (если он еще не находится в конце строки) '-'или '+'. 
Прочтите этот символ, если он есть. Это определяет, будет ли окончательный результат 
отрицательным или положительным соответственно. 
Предположим, что результат положительный, если ни один из них не присутствует.
Считайте следующие символы, пока не будет достигнут следующий нецифровой символ или конец ввода. 
Остальная часть строки игнорируется.
Преобразуйте эти цифры в целое число (т.е. "123" -> 123, "0032" -> 32). 
Если цифры не были прочитаны, то целое число равно 0. При необходимости измените знак (из шага 2).
Если целое число выходит за пределы диапазона 32-разрядных целых чисел со знаком , 
зафиксируйте целое число, чтобы оно оставалось в этом диапазоне. 
В частности, целые числа меньше должны быть зафиксированы до , а целые числа больше 
должны быть зафиксированы до .[-231, 231 - 1]-231-231231 - 1231 - 1
Возвращает целое число в качестве окончательного результата.
Примечание:

Только символ ' 'пробела считается символом пробела.
Не игнорируйте никакие символы, кроме начального пробела или остальной части строки после цифр.
 

Пример 1:
Ввод: s = "42"
 Вывод: 42
 Объяснение: Подчеркнутые символы - это то, что читается, знак вставки - это текущая позиция 
 считывателя.
Шаг 1: «42» (символы не читаются, потому что нет начального пробела)
         ^
Шаг 2: «42» (символы не читаются, потому что нет ни «-», ни «+»)
         ^
Шаг 3: " 42 " ("42" считывается)
           ^
Проанализированное целое число равно 42.
Поскольку 42 находится в диапазоне [-2 31 , 2 31 - 1], окончательный результат равен 42.

Пример 2:
Ввод: s = "-42"
 Вывод: -42
 Объяснение: 
Шаг 1: "    -42" (начальные пробелы читаются и игнорируются)
            ^
Шаг 2: "    - 42" (читается "-", поэтому результат должен быть отрицательным)
             ^
Шаг 3: "- 42 " ("42" считывается)
               ^
Проанализированное целое число равно -42.
Поскольку -42 находится в диапазоне [-2 31 , 2 31 - 1], окончательный результат равен -42.

Пример 3:
Ввод: s = "4193 со словами"
 Вывод: 4193
 Объяснение:
Шаг 1: «4193 со словами» (символы не читаются, потому что нет пробела в начале)
         ^
Шаг 2: «4193 со словами» (символы не читаются, потому что нет ни «-», ни «+»)
         ^
Шаг 3: " 4193 со словами" ("4193" считывается; чтение останавливается, так как следующий символ не является цифрой)
             ^
Проанализированное целое число равно 4193.
Поскольку 4193 находится в диапазоне [-2 31 , 2 31 - 1], окончательный результат равен 4193.
*/
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const str = s.trimStart();

  if (!str.match(/[\d+-]/)) return 0;

  const num = Number(str.match(/[-+]?\d*/)?.join(''));

  if (Number.isNaN(num)) return 0;

  const MAX_INT = 2 ** 31 - 1;
  const MIN_INT = 0 - MAX_INT - 1;

  if (num > MAX_INT) return MAX_INT;
  if (num < MIN_INT) return MIN_INT;

  return num;
};
// console.log(myAtoi('-91283472332')); // -2147483648
// console.log(myAtoi('21474836460')); // 2147483647
// console.log(myAtoi('words and 987')); // 0
//? ==============================================
/*
15. 3Sum

Дан целочисленный массив nums, вернуть все триплеты [nums[i], nums[j], nums[k]], 
такие что i != j, i != k, и j != k, и nums[i] + nums[j] + nums[k] == 0.

Обратите внимание, что в наборе решений не должно быть повторяющихся триплетов.

Пример 1:
Ввод: nums = [-1,0,1,2,-1,-4]
 Вывод: [[-1,-1,2],[-1,0,1]]
 Объяснение:  
nums[0] + nums [1] + nums[2] = (-1) + 0 + 1 = 0. 
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. 
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0. 
Различными триплетами являются [-1,0,1] и [-1,-1,2]. 
Обратите внимание, что порядок вывода и порядок троек не имеют значения.

Пример 2:
Ввод: nums = [0,1,1]
 Вывод: []
 Объяснение: Единственная возможная тройка не дает в сумме 0.

 Пример 3:
Ввод: nums = [0,0,0]
 Вывод: [[0,0,0]]
 Объяснение: Единственная возможная сумма троек до 0.
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sortArr = nums.sort((a, b) => a - b);
  const tripletArr = [];

  for (let i = 0; i < sortArr.length - 2; i++) {
    if (sortArr[i] > 0) return tripletArr;
    if (i > 0 && sortArr[i] === sortArr[i - 1]) continue;
    let j = i + 1;
    let k = sortArr.length - 1;

    while (j < k) {
      let sum = sortArr[i] + sortArr[j] + sortArr[k];
      if (sum === 0) {
        tripletArr.push([sortArr[i], sortArr[j], sortArr[k]]);
        j++;
        k--;
        while (sortArr[j] === sortArr[j - 1]) {
          j++;
        }
        while (sortArr[k] === sortArr[k + 1]) {
          k--;
        }
      } else if (sum > 0) {
        k--;
      } else j++;
    }
  }

  return tripletArr;
};
// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([0, 1, 1])); // []
// console.log(threeSum([-1, 0, 1, 0])); // [[-1,0,1]]
//? ==============================================
/*
7. Reverse Integer

Получив 32-битное целое число со знаком x, верните x его цифры в обратном порядке . 
Если реверсирование x приводит к тому, что значение выходит за пределы 
диапазона 32-разрядных целых чисел со знаком , то возвращается значение .[-231, 231 - 1]0

Предположим, что среда не позволяет хранить 64-битные целые числа (со знаком или без знака).

Пример 1:
Вход: х = 123
 Выход: 321

Пример 2:
Вход: х = -123
 Выход: -321

Пример 3:
Вход: х = 120
 Выход: 21
*/
/**
 * @param {number} x
 * @return {number}
 * 
 
var reverseX = parseInt(x.toString().split('').reverse().join(''));
    if (reverseX < (Math.pow(2, 31) * -1) || reverseX > Math.pow(2, 31) - 1) return 0;
    return reverseX* Math.sign(x);
-----------------------------------
	rev_string = x.toString()
    strArray = rev_string.split("")
    revArray = strArray.reverse()
    new_str =  revArray.join("")

    if (parseInt(new_str) < (Math.pow(2, 31) * -1) || parseInt(new_str) > Math.pow(2,31) - 1) {
         new_str = 0;
    }
    if (Math.sign(x) === -1) {
    
       new_str = parseInt(new_str) * Math.sign(x);
    }
  return new_str;

  -------------------------------
  let reversed = parseInt(Array.from(`${Math.sign(x) * x}`).reverse().join(''));
     return Math.sign(x)*(reversed > 0x7FFFFFFF?0:reversed);

---------------------------------

const reverse = (x) => {
    if (x < 10 && x > -10) {
        return x
    }
    if (x >= 0) {
        const rev = +([...`${x}`].reverse().join(''))
        return rev > 0x7FFFFFFF ? 0 : rev
    }
    const rev = +([...`${-x}`].reverse().join(''))
    return rev > 0x7FFFFFFF ? 0 : -rev
};
 */
var reverse = function (x) {
  let reverseNum = parseInt(x.toString().split('').reverse().join(''));

  return reverseNum > 2 ** 31 ? 0 : reverseNum * Math.sign(x);
};
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
//? ==============================================
/*
Give me a Diamond

 *
***
 *
 
  *
 ***
*****
 ***
  *

*/
function diamond(n) {
  //   const str = [];
  //   let countSpaces = 0;

  //   for (let i = n; i > 0; i -= 2) {
  //     str.push(' '.repeat(countSpaces) + '*'.repeat(i) + '\n');
  //     countSpaces += 1;
  //   }

  //   const strReverse = [...str].reverse().slice(0, str.length - 1);

  //   return [...strReverse, ...str].join('');

  str = '';
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += ' '.repeat(len);
    str += '*'.repeat(n - 2 * len);
    str += '\n';
  }
  return str;
}
// console.log(diamond(1)); // "*\n"
// console.log(diamond(3)); // " *\n***\n *\n"
// console.log(diamond(5)); // "  *\n ***\n*****\n ***\n  *\n"
// console.log(diamond(7));
//?-------------------------------------------------------
/*
7 kyu
Maximum Length Difference

Вам даны два массива a1 и a2 строки. Каждая строка состоит из букв от aдо z. 
Пусть x будет любая строка в первом массиве и y будет любой строкой во втором массиве.

Find max(abs(length(x) − length(y)))

Если a1 и/или a2 пусты, верните -1

Пример:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Примечание Баша:
ввод: 2 строки с подстроками, разделенными,
вывод: число в виде строки
*/

function mxdiflg(a1, a2) {
  return a1.reduce(
    (acc, item) =>
      Math.max(
        acc,
        a2.reduce(
          (acc2, item2) => Math.max(acc2, Math.abs(item.length - item2.length)),
          -1
        )
      ),
    -1
  );
}
// console.log(
//   mxdiflg(
//     [
//       'hoqq',
//       'bbllkw',
//       'oox',
//       'ejjuyyy',
//       'plmiis',
//       'xxxzgpsssa',
//       'xxwwkktt',
//       'znnnnfqknaz',
//       'qqquuhii',
//       'dvvvwz',
//     ],
//     ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
//   )
// ); // 13
//?-------------------------------------------------------

/*
Decipher this!

Вам дается секретное сообщение, которое необходимо расшифровать. 
Вот что вам нужно знать, чтобы расшифровать его:

Для каждого слова:
вторая и последняя буквы меняются местами (например, Hello становится Holle)
первая буква заменяется кодом символа (например, H становится 72)
Примечание: специальные символы не используются, только буквы и пробелы.
*/
function decipherThis(str) {
  //   const strArr = str.split(' ');
  //   const tempStrArr = [];
  //   let charNum = '';
  //   const finalArr = [];

  //   for (let i = 0; i < strArr.length; i++) {
  //     let tempStr = '';

  //     charNum = String.fromCodePoint(parseInt(strArr[i]));
  //     if (strArr[i].match(/[\D]\w*/g) == null) {
  //       tempStr = '';
  //     } else tempStr = strArr[i].match(/[\D]\w*/g);
  //     tempStrArr.push(charNum + '' + tempStr);
  //   }

  //   for (let el of tempStrArr) {
  //     if (el.length < 2) {
  //       finalArr.push(el);
  //     } else {
  //       const changeChar = el.split('');
  //       let tempChar = changeChar[changeChar.length - 1];
  //       changeChar[changeChar.length - 1] = changeChar[1];
  //       changeChar[1] = tempChar;

  //       finalArr.push(changeChar.join(''));
  //     }
  //   }

  //   return finalArr.join(' ');
  return str
    .split(' ')
    .map((w) =>
      w
        .replace(/^\d+/, (c) => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2')
    )
    .join(' ');
}

console.log(
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
); // 'Have a go at this and see how you do'
console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'

//?-------------------------------------------------------
function getCount(str) {
  const strMatch = str.match(/[aeiou]/gi);

  return strMatch ? strMatch.length : 0;
}
// console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13
//?-------------------------------------------------------
/*
Sums of Parts

Рассмотрим этот пример (массив, записанный в общем формате):
ls = [0, 1, 3, 6, 10]

Следующие его части:
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
Соответствующие суммы (составлены в виде списка): [20, 20, 19, 16, 10, 0]

Функция parts_sums(или ее варианты на других языках) будет принимать в качестве параметра список ls и возвращать список сумм его частей, как определено выше.

Другие примеры:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
Ноты
Взгляните на производительность: некоторые списки содержат тысячи элементов.
*/
function partsSums(ls) {
  const result = [];

  let firstSum = ls.reduce((acc, num) => acc + num, 0);

  result.push(firstSum);

  for (let i = 0; i < ls.length; i++) {
    const lastEl = result[result.length - 1];
    result.push(lastEl - ls[i]);
  }

  return result;
}

// console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]
// console.log(partsSums([1, 2, 3, 4, 5, 6])); // [21, 20, 18, 15, 11, 6, 0]
//? ------------------------------------------------------

/*
34. Find First and Last Position of Element in Sorted Array

Дан массив целых чисел, nums отсортированных в неубывающем порядке, 
найти начальную и конечную позицию заданного target значения.

Если target не найдено в массиве, вернуть [-1, -1].

Вы должны написать алгоритм со  O(log n) сложностью выполнения.

Пример 1:
Ввод: числа = [5,7,7,8,8,10], цель = 8
 Вывод: [3,4]

Пример 2:
Ввод: числа = [5,7,7,8,8,10], цель = 6
 Вывод: [-1,-1]

Пример 3:
Ввод: nums = [], цель = 0
 Вывод: [-1,-1]
 
Ограничения:
0 <= nums.length <= 105
-109 <= nums[i] <= 109
numsпредставляет собой неубывающий массив.
-109 <= target <= 109
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [nums.indexOf(target), nums.lastIndexOf(target)];
};

console.log(searchRange([3, 3, 3], 3)); // [0, 2]
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([1], 1)); // [0, 0]
console.log(searchRange([1, 2, 3], 8)); // [-1, -1]
//? ==============================================
function solve(s) {
  const upperLetter = (s.match(/[A-Z]/g) || []).length;
  const lowerLetter = (s.match(/[a-z]/g) || []).length;

  return upperLetter > lowerLetter
    ? s.toUpperCase()
    : upperLetter < lowerLetter
    ? s.toLowerCase()
    : s.toLowerCase();
}

console.log(solve('code')); // "code"
console.log(solve('CODe')); // "CODE"
console.log(solve('COde')); // "code"
console.log(solve('Code')); // "code"
//? ------------------------------------------------
/*
29. Divide Two Integers

Даны два целых числа dividend и divisor, разделите два целых числа без использования 
умножения, деления и оператора mod.

Целочисленное деление должно усекаться до нуля, что означает потерю дробной части. 
Например, 8.345будет усечено до 8, и -2.7335будет усечено до -2.

Верните частное после деления на dividend.divisor

Примечание. Предположим, что мы имеем дело со средой, которая может хранить целые 
числа только в диапазоне 32-битных целых чисел со знаком: . 
Для этой задачи, если частное строго больше , то вернуть , 
а если частное строго меньше , то вернуть .[−231, 231 − 1] 231 - 1231 - 1 -231-231

Пример 1:
Вход: делимое = 10, делитель = 3
 Выход: 3
 Объяснение: 10/3 = 3,33333.., которое усекается до 3.

Пример 2:
Вход: делимое = 7, делитель = -3
 Выход: -2
 Объяснение: 7/-3 = -2,33333.., которое усекается до -2.
 
Ограничения:
-231 <= dividend, divisor <= 231 - 1
divisor != 0
*/
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  //   let count = 0;

  //   let num1 = Math.abs(dividend);
  //   let num2 = Math.abs(divisor);
  //   const isNegativeNum = Math.sign(dividend) !== Math.sign(divisor);

  //   while (num2 <= num1) {
  //     let multiCounter = 1;
  //     let multiNum2 = num2;
  //     while (true) {
  //       const multiNum2X2 = multiNum2 + multiNum2;
  //       if (multiNum2X2 < num1) {
  //         multiCounter += multiCounter;
  //         multiNum2 = multiNum2X2;
  //       } else break;
  //     }
  //     num1 -= multiNum2;
  //     count += multiCounter;
  //   }

  //   const limit = 2 ** 31 - 1;
  //   if (count > limit) count = isNegativeNum ? limit + 1 : limit;
  //   return isNegativeNum ? -count : count;

  let dividendPositive = dividend > 0;
  let divisorPositive = divisor > 0;
  let count = 0;
  if (dividend === 0) {
    return 0;
  } else if (divisor === 1) {
    return dividend;
  }
  let max = Math.pow(2, 31);

  if (dividendPositive && divisorPositive) {
    while (dividend >= 0) {
      count++;
      dividend -= divisor;
      // if(count >= max){
      //     return max-1;
      // }
    }
    count--;
  } else if (!dividendPositive && !divisorPositive) {
    while (dividend <= 0) {
      count++;
      dividend -= divisor;
      // if(count >= max){
      //     return max-1;
      // }
    }
    count--;
  } else if (!dividendPositive && divisorPositive) {
    while (dividend <= 0) {
      count--;
      dividend += divisor;
      // if(count <= -1-max){
      //     return 0-max;
      // }
    }
    count++;
  } else if (dividendPositive && !divisorPositive) {
    while (dividend >= 0) {
      count--;
      dividend += divisor;
      // if(count <= -1-max){
      //     return 0-max;
      // }
    }
    count++;
  }
  if (count > max - 1) {
    return max - 1;
  }

  return count;
};

// console.log(divide(10, 3)); // 3
// console.log(divide(7, -3)); // -2
// console.log(divide(0, 1)); // 0
// console.log(divide(-1, -1)); // 1
// console.log(divide(-2147483648, -1)); // 2147483647
//? ==============================================
/*
22. Generate Parentheses

Имея nпары скобок, напишите функцию для генерации всех комбинаций правильно 
сформированных скобок .
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  const createParenthesis = (str, openP, closedP) => {
    if (str.length === n * 2) result.push(str);
    if (openP < n) createParenthesis(`${str}(`, openP + 1, closedP);
    if (closedP < openP) createParenthesis(`${str})`, openP, closedP + 1);
  };
  createParenthesis('', 0, 0);

  return result;
};
// console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
// console.log(generateParenthesis(1)); // ["()"]
// console.log(generateParenthesis(2));
//? ==============================================
function order(words) {
  return words
    .split(' ')
    .sort((a, b) => {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(' ');
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2')); // "Fo1r the2 g3ood 4of th5e pe6ople"
//? ==============================================
/*
7 kyu
Number Of Occurrences

Напишите функцию, которая возвращает количество вхождений элемента в массив.

Эта функция будет определена как свойство массива с помощью метода Object.defineProperty,
который позволяет определить новый метод непосредственно на объекте (подробнее об этом вы можете найти на MDN ).

Примеры
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1;
*/

Object.defineProperty(Array.prototype, 'numberOfOccurrences', {
  value: function numberOfOccurrences(val) {
    return this.reduce((acc, item) => {
      return val === item ? acc + 1 : acc;
    }, 0);
  },
});

//? ------------------------------------------------

/*
6 kyu
Multiplication table

Ваша задача — создать таблицу умножения N×N размера, указанного в параметре.

Например, когда дано size3:

1 2 3
2 4 6
3 6 9
Для данного примера возвращаемое значение должно быть:

[[1,2,3],[2,4,6],[3,6,9]]
*/
const multiplicationTable = (size) => {
  const table = [];

  for (let i = 1; i <= size; i++) {
    let nums = Array(size)
      .fill(1)
      .map((item, index) => (item + index) * i);
    table.push(nums);
  }
  return table;
};

// console.log(multiplicationTable(3)); // [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

//? ------------------------------------------------

/*
6
Build a pile of Cubes

Ваша задача построить здание, которое будет состоять из n кубиков. Куб внизу будет иметь объемн 3п^3н 
3
 , куб выше будет иметь объем(н−1)3(п-1)^3( н−1 ) 
3
 и так до вершины, которая будет иметь объем 131^31 
3
 .

Вам дан общий объем m здания. Получив m, сможете ли вы найти количество n кубиков, которое вам нужно построить?

Параметром функции findNb (find_nb, find-nb, findNb, ...)будет целое число m, и вы должны вернуть целое число n, напримерн3+(н−1)3+(н−2)3+...+13знак равномп ^ 3 + (п-1) ^ 3 + (п-2) ^ 3 + ... + 1 ^ 3 = мн 
3
 +( н−1 ) 
3
 +( н−2 ) 
3
 +...+1 
3
 знак равном если такое существует или -1, если такого n нет.

Примеры:
найти Nb(1071225) --> 45

найти Nb(91716553919377) --> -1
*/
function findNb(m) {
  let total = 0;
  let n = 0;

  while (total < m) {
    n += 1;
    total += n ** 3;
  }

  return total === m ? n : -1;
}

// console.log(findNb(4183059834009)); // 2022
// console.log(findNb(24723578342962)); // -1
// console.log(findNb(135440716410000)); // 4824
// console.log(findNb(40539911473216)); // 3568
//? ------------------------------------------------------
function duplicateEncode(word) {
  //   let str = word.toLowerCase();
  //   const obj = {};

  //   for (let i = 0; i < str.length; i++) {
  //     if (obj[str[i]]) {
  //       obj[str[i]] = ')';
  //     } else {
  //       obj[str[i]] = '(';
  //     }
  //   }

  //   let newStr = '';
  //   for (let i = 0; i < str.length; i++) {
  //     for (let el in obj) {
  //       if (str[i] === el) {
  //         newStr += obj[el];
  //       }
  //     }
  //   }
  //   return newStr;
  return word
    .toLowerCase()
    .split('')
    .map((item, i, array) => {
      return array.indexOf(item) === array.lastIndexOf(item) ? '(' : ')';
    })
    .join('');
}
// console.log(duplicateEncode('din'));
// console.log(duplicateEncode('Success')); //")())())"
// console.log(duplicateEncode('(( @')); // "))(("

//? ------------------------------------------------------
/*
6 kyu
Write Number in Expanded Form
*/
function expandedForm(num) {
  const arr = num.toString().split('');
  let str = [];

  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) === 0) continue;
    if (Number(arr[i]) > 0 && i !== arr.length - 1) {
      str.push(arr[i] + '0'.repeat(arr.length - 1 - i));
    } else {
      str.push(arr[i]);
    }
  }

  return str.join(' + ');
}

// console.log(expandedForm(12));
// console.log(expandedForm(42));
// console.log(expandedForm(86921720)); // '80000000 + 6000000 + 900000 + 20000 + 1000 + 700 +20'
// console.log(expandedForm(9000000)); // 9000000
//? ------------------------------------------------
/*
5 kyu
Extract the domain name from a URL

Напишите функцию, которая при задании URL-адреса в виде строки анализирует только доменное имя 
и возвращает его в виде строки. Например:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/
function domainName(url) {
  //   url = url.replace('https://', '');
  //   url = url.replace('http://', '');
  //   url = url.replace('www.', '');
  //   return url.split('.')[0];

  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
// console.log(domainName('http://google.co.jp'));
// console.log(domainName('https://github.com/carbonfive/raygun'));
// console.log(domainName('http://www.zombie-bites.com'));
// console.log(domainName('www.xakep.ru'));

//? ------------------------------------------------
/*
Is the string uppercase?

Создайте метод, чтобы увидеть, является ли строка ВСЕМИ ЗАГЛАВНЫМИ.

Примеры (ввод -> вывод)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
В этом Ката говорится, что строка написана ВСЕ ЗАГЛАВНЫМИ буквами, если она не содержит строчных букв, 
поэтому любая строка, вообще не содержащая букв, тривиально считается написанной ВСЕМИ ЗАГЛАВНЫМИ буквами.
*/
String.prototype.isUpperCase = function () {
  if (this == '') return true;
  return this == this.toUpperCase();
};

// console.log('$%&'.isUpperCase());
//? ---------------------------------------------------
function titleCase(title, minorWords) {
  if (title.length === 0) return '';
  if (title && minorWords) {
    const minorArr = minorWords.toLowerCase().split(' ');
    return title
      .toLowerCase()
      .split(' ')
      .map((item, index, array) => {
        if (
          (array.indexOf(item) === 0 && array.indexOf(item)) === index ||
          !minorArr.includes(item)
        ) {
          return item[0].toUpperCase() + item.slice(1);
        } else {
          return item;
        }
      })
      .join(' ');
  } else {
    return title
      .toLowerCase()
      .split(' ')
      .map((item, index, array) => item[0].toUpperCase() + item.slice(1))
      .join(' ');
  }
}

// console.log(titleCase('')); // ''
// console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // 'The Wind in the Willows'
// console.log(titleCase('the quick brown fox')); // 'The Quick Brown Fox'

//? ----------------------------------------------------
/*
6 kyu
The Supermarket Queue

В супермаркете очередь к кассам самообслуживания. 
Ваша задача — написать функцию для расчета общего времени, 
необходимого всем покупателям для оформления заказа!

вход
клиенты: массив положительных целых чисел, представляющих очередь. 
Каждое целое число представляет покупателя, а его значение — количество времени, 
которое ему требуется для оформления заказа.
n: положительное целое число, количество касс.
вывод
Функция должна возвращать целое число — общее требуемое время.

Важный
Пожалуйста, ознакомьтесь с примерами и пояснениями ниже, 
чтобы убедиться, что вы правильно поняли задачу :)

Примеры
queueTime([5,3,4], 1)
should return 12
because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
should return 10
because here n=2 and the 2nd, 3rd, and 4th people in the 
queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
should return 12
Уточнения
Существует только ОДНА очередь, обслуживающая множество касс, и
Порядок очереди НИКОГДА не меняется, и
Первый человек в очереди (то есть первый элемент в массиве/списке) переходит к кассе, 
как только она освобождается.
NB Вы должны исходить из того, что все входные данные теста будут действительными, 
как указано выше.

PS Ситуацию в этом ката можно сравнить с идеей пула потоков, более связанной с информатикой, 
в отношении одновременного запуска нескольких процессов: https://en.wikipedia.org/wiki/Thread_pool
*/
function queueTime(customers, n) {
  if (customers.length === 0) return 0;
  if (n >= customers.length) return Math.max(...customers);
  if (n === 1) return customers.reduce((acc, item) => acc + item, 0);

  const cashierQueues = [];

  for (let i = 0; i < n; i++) {
    cashierQueues.push(customers[i]);
  }

  for (let i = cashierQueues.length; i < customers.length; i++) {
    cashierQueues.sort((a, b) => a - b);
    cashierQueues[0] += customers[i];
  }

  return Math.max(...cashierQueues);
}
// console.log(queueTime([], 1)); // 0
// console.log(queueTime([1, 2, 3, 4, 5], 100)); // 5
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2)); // 9
// console.log(queueTime([10, 9, 3, 3, 8, 4], 3)); // 13
// console.log(queueTime([2, 3, 10, 2], 2)); // 12
//?-------------------------------------------------------
/*
5 kyu Best travel

Джон и Мэри хотят проехать между несколькими городами A, B, C... 
У Мэри есть на листе бумаги список расстояний между этими городами. ls = [50, 55, 57, 58, 60]. 
Джон устал водить машину и говорит Мэри, что не хочет больше водить машину t = 174 milesи будет посещать только 3города.

Какие расстояния и, следовательно, какие города они выберут, чтобы сумма расстояний была как можно больше, 
чтобы понравиться Мэри и Джону?

Пример:
Имея список lsи 3 города для посещения, они могут сделать выбор между: 
[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

Тогда суммы расстояний равны: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

174Тогда максимально возможная сумма с учетом лимита , 173а расстояние до 3 соответствующих городов равно [55, 58, 60].

Функция chooseBestSum(или choose_best_sumили ... в зависимости от языка) будет принимать в качестве параметров 
t (максимальная сумма расстояний, целое число >= 0), k(количество городов для посещения, k >= 1) и 
ls (список расстояний, все расстояния положительные или нулевые целые числа и этот список содержит хотя бы один элемент).
Функция возвращает «наилучшую» сумму, т. е. максимально возможную сумму расстояний, 
k меньшую или равную заданному пределу t, если эта сумма существует, или в противном случае null

Примеры:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nulll 

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

Примечания:
старайтесь не изменять входной список расстоянийls
в некоторых языках этот "список" на самом деле является строкой (см. Примеры тестов).
*/

function chooseBestSum(t, k, ls) {
  // Начинаем с проверки списка расстояний на минимально необходимое количество элементов
  if (ls.length < k) {
    return null;
  }

  let bestSum = null;

  // Рекурсивная функция, которая перебирает все возможные комбинации городов и находит ту, которая наиболее близка к максимальному расстоянию t
  function findBestSum(sum, count, index) {
    // Если мы посетили необходимое количество городов (k), то проверяем сумму расстояний и обновляем наилучшую сумму, если это возможно
    if (count === k) {
      if (sum <= t && (bestSum === null || sum > bestSum)) {
        bestSum = sum;
      }
      return;
    }

    // Если мы достигли конца списка расстояний, то возвращаем null
    if (index === ls.length) {
      return;
    }

    // Рекурсивно вызываем функцию с добавлением следующего расстояния и переходом к следующему городу
    findBestSum(sum + ls[index], count + 1, index + 1);

    // Рекурсивно вызываем функцию без добавления следующего расстояния и переходом к следующему городу
    findBestSum(sum, count, index + 1);
  }

  // Вызываем рекурсивную функцию с начальными значениями
  findBestSum(0, 0, 0);

  return bestSum;

  // var 1
  //   let arr = [];
  //   function rec(sum, ar, n) {
  //     if (n == 0) {
  //       arr.push(sum);
  //     } else {
  //       for (let i = 0; i < ar.length; i++) {
  //         rec(sum + ar[i], ar.slice(i + 1), n - 1);
  //       }
  //     }
  //   }

  //   rec(0, ls, k);

  //   var sol = arr.sort((a, b) => b - a).find((a) => a <= t);
  //   return typeof sol === 'undefined' ? null : sol;

  // var 2
  // ls
  // .reduce(
  //   (pre, val) => [
  //     ...pre,
  //     ...pre.filter((val) => val.length < k).map((v) => [...v, val]),
  //   ],
  //   [[]]
  // )
  // .filter((val) => val.length === k)
  // .map((val) => val.reduce((pre, val) => pre + val))
  // .filter((val) => val <= t)
  // .sort((a, b) => a - b)
  // .pop() || null;
}

// console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58])); // 163
// console.log(chooseBestSum(163, 3, [50])); // null
// console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87])); // 228
//? ------------------------------------------------
/*
5 kyu
Primes in numbers

Для положительного числа n > 1 найдите разложение n на простые множители.
 Результатом будет строка следующего вида:

 "(p1**n1)(p2**n2)...(pk**nk)"
с p (i) в порядке возрастания и n (i) пустым, если n (i) равно 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/
function primeFactors(n) {
  //   const obj = {};
  //   let number = 0;

  //   let i = 2;
  //   while (i <= n) {
  //     if (n % i === 0) {
  //       obj[i] = obj[i] + 1 || 1;
  //       n /= i;
  //     } else {
  //       i++;
  //     }
  //   }
  //   if (n > 1) {
  //     number = n;
  //   }

  //   const keyValue = Object.entries(obj);

  //   let strResult = keyValue.map((el) => {
  //     if (el[1] > 1) {
  //       return `(${el[0]}**${el[1]})`;
  //     } else {
  //       return `(${el[0]})`;
  //     }
  //   });

  // 	return number === 0 ? strResult.join('') : strResult.join('') + `(${number})`;

  // var !
  for (var s = '', d = 2; n > 1; d++) {
    for (var k = 0; n % d == 0; k++, n /= d);
    s += k ? (k == 1 ? `(${d})` : `(${d}**${k})`) : '';
  }
  return s;
}
// console.log(primeFactors(121)); // "(2**5)(5)(7**2)(11)"
// console.log(primeFactors(7775460)); // "(2**2)(3**3)(5)(7)(11**2)(17)"
//?-------------------------------------------------------
function dirReduc(arr) {
  const stack = []; // создаем пустой стек
  const opposite = {
    // объект для определения противоположного направления
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST',
  };

  for (let i = 0; i < arr.length; i++) {
    const direction = arr[i];
    const lastDirection = stack[stack.length - 1]; // получаем последний добавленный элемент в стек

    if (opposite[direction] === lastDirection) {
      stack.pop(); // удаляем последний элемент из стека, если он противоположен текущему направлению
    } else {
      stack.push(direction); // добавляем текущее направление в стек
    }
  }

  return stack;
}

// console.log(
//   dirReduc([
//     'NORTH',
//     'SOUTH',
//     'SOUTH',
//     'EAST',
//     'WEST',
//     'NORTH',
//     'WEST',
//     'SOUTH',
//   ])
// ); // [WEST, SOUTH]
// console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST'])); // ["NORTH", "WEST", "SOUTH", "EAST"]
// console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])); // []
//? -----------------------------------------------------
/*
6 kyu
Help the bookseller !

У продавца есть много книг, классифицированных по 26 категориям, обозначенным A, B, ... Z. 
Каждая книга имеет код cиз 3, 4, 5 или более символов. Первый символ кода — заглавная буква, 
определяющая категорию книги .

В номенклатуре книготорговца cза каждым кодом следует пробел и положительное целое число n (int n >= 0), 
которое указывает количество книг с этим кодом на складе.

Например, выдержка из номенклатуры может быть:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
Вам будет предоставлен список товаров (например: L) и список категорий заглавными буквами, например:

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
и ваша задача — найти все книги L с кодами, принадлежащими каждой категории M, 
и просуммировать их количество по каждой категории.

Для списков L и M примера вы должны вернуть строку (в Haskell/Clojure/Racket/Prolog список пар):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
где A, B, C, W — категории, 20 — сумма уникальной книги категории A, 114 — сумма, 
соответствующая «BKWRK» и «BTSQZ», 50 — соответствующая «CDXEF» и 0 — категория «W». так как нет кода, 
начинающегося с W.

Если L или M пусты, возвращается строка ""(вместо этого Clojure/Racket/Prolog должны возвращать 
пустой массив/список).

Примечания:
В результате коды и их значения идут в том же порядке, что и в M.
*/
function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) return '';

  const objCategories = {};

  for (const el of listOfArt) {
    objCategories[el.split(' ')[0][0]] =
      objCategories[el.split(' ')[0][0]] + Number(el.split(' ')[1]) ||
      Number(el.split(' ')[1]);
  }

  let result = '';
  const res = '(A : 0) - (B : 1290) - (C : 515) - (D : 600)';

  for (const el of listOfCat) {
    if (Object.keys(objCategories).includes(el)) {
      result += `(${el} : ${objCategories[el]}) - `;
    } else {
      result += `(${el} : 0) - `;
    }
  }

  return result.slice(0, -3);

  // var 2
  // 	if (!listOfArt.length || !listOfCat.length) return '';
  //   return listOfCat
  //     .map((w) => {
  //       const s = listOfArt.reduce(
  //         (a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0),
  //         0
  //       );
  //       return `(${w} : ${s})`;
  //     })
  //     .join(' - ');

  // var 3
  // listOfArt.length
  // ? listOfCat
  //     .map(
  //       (val) =>
  //         `(${val} : ${listOfArt.reduce(
  //           (pre, v) => pre + (v[0] === val) * v.split(` `)[1],
  //           0
  //         )})`
  //     )
  //     .join(` - `)
  // : ``;
}

// console.log(
//   stockList(
//     ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
//     ['A', 'B', 'C', 'D']
//   )
// ); // "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
// console.log(
//   stockList(
//     ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'],
//     ['A', 'B']
//   )
// ); // "(A : 200) - (B : 1140)"
//? ------------------------------------------------------------
/*
5 kyu
Maximum subarray sum

Задача о максимальной сумме подмассива состоит в нахождении максимальной суммы 
непрерывной подпоследовательности в массиве целых чисел:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) should be 6: [4, -1, 2, 1]
Простой случай — это когда массив состоит только из положительных чисел, 
а максимальная сумма — это сумма всего массива. 
Если массив состоит только из отрицательных чисел, вместо этого верните 0.

Пустой массив считается имеющим нулевую наибольшую сумму. 
Обратите внимание, что пустой массив также является допустимым подмассивом.
*/
var maxSequence = function (arr) {
  if (arr.length === 0) return 0;

  let prevSum = 0;
  let curentSum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    curentSum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      curentSum += arr[j];
      if (curentSum > prevSum) {
        prevSum = curentSum;
      }
    }
  }

  return prevSum;
};

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(maxSequence([])); // 0
// console.log(maxSequence([-1, -2, -3])); // 0
//? ------------------------------------------------------
function remove(s, n) {
  //   let countExlamation = 0;
  //   let newString = '';

  //   for (let i = 0; i < s.length; i++) {
  //     if (s[i] === '!') {
  //       countExlamation += 1;
  //       if (countExlamation <= n) continue;
  //     }
  //     newString += s[i];
  //   }

  // 	return newString;

  return n > 0 ? remove(s.replace('!', ''), n - 1) : s;
}
// console.log(remove('!!!Hi !!hi!!! !hi', 1)); // "!!Hi !!hi!!! !hi"
// console.log(remove('!!!Hi !!hi!!! !hi', 5)); // "Hi hi!!! !hi"
//? -------------------------------------------------------
/*
49. Group Anagrams

Учитывая массив строк strs, сгруппируйте анаграммы вместе. 
Вы можете вернуть ответ в любом порядке .

Анаграмма — это слово или фраза, образованная путем перестановки букв другого слова 
или фразы, обычно с использованием всех исходных букв ровно один раз.

Пример 1:
Ввод: strs = ["eat","tea","tan","ate","nat","bat"]
 Вывод: [["bat"],["nat","tan"],["ate","eat","tea"]]

Пример 2:
Ввод: strs = [""]
 Вывод: [[""]]

Пример 3:
Ввод: strs = ["a"]
 Вывод: [["a"]]
 

Ограничения:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i]состоит из строчных английских букв.
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  //   if (strs.length <= 1) return [strs];

  //   const sortSet = new Set(strs.map((el) => el.split('').sort().join('')));
  //   const obj = {};

  //   for (let item of sortSet) {
  //     obj[item] = [];
  //   }

  //   for (let i = 0; i < strs.length; i++) {
  //     if (sortSet.has(strs[i].split('').sort().join(''))) {
  //       obj[strs[i].split('').sort().join('')].push(strs[i]);
  //     }
  //   }

  // return Object.values(obj);

  let map = {};

  for (let str of strs) {
    let s = str.split('').sort().join('');
    if (!map[s]) map[s] = [];
    map[s].push(str);
  }
  return Object.values(map);
};

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// console.log(groupAnagrams(['a']));

//? ==============================================
// primes numbers from chatGPT
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function findPrimes(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// console.log(findPrimes(100, 110)); // [ 101, 103, 107, 109 ]
//? -----------------------------------------------
/*
5 kyu
Gap in Primes

Простые числа расположены неравномерно. Например, от 2до 3пробел 1. От 3до 5разрыв 2. От 7до 11это 4. Между 2 и 50 у нас есть следующие пары простых чисел с 2 пробелами: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43

Промежуток между простыми числами длины n – это серия из n-1 последовательных составных чисел между двумя последовательными простыми числами (см. http://mathworld.wolfram.com/PrimeGaps.html ).

Напишем функцию gap с параметрами:

g(целое число >= 2), что указывает на искомый пробел

m(целое число > 2), что дает начало поиска (m включительно)

n(целое число >= m), которое дает конец поиска (n включительно)

В приведенном выше примере gap(2, 3, 50)будет возвращена [3, 5] or (3, 5) or {3, 5}первая пара от 3 до 50 с разрывом в 2.

Таким образом, эта функция должна возвращать первую пару двух простых чисел, разделенных промежутком gмежду пределами m, nесли эти числа существуют, в противном случае `nil или null или None или Nothing (или... в зависимости от языка).

In such a case (no pair of prime numbers with a gap of `g`)
In C: return [0, 0]
In C++, Lua, COBOL: return `{0, 0}`. 
In F#: return `[||]`. 
In Kotlin, Dart and Prolog: return `[]`.
In Pascal: return Type TGap (0, 0).
Примеры:
- gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}

gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin, Dart and Prolog return []`

gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}

([193, 197] тоже такие 4-разрядные простые числа между 130 и 200, но это не первая пара)

gap(6,100,110) --> nil or {0, 0} or ...: между 100 и 110 у нас есть, 101, 103, 107, 109но 101-107это не 6-пробел, потому что 103между ними и 103-109не 6-пробел, потому что между ними 107.

Вы можете увидеть больше примеров возврата в Sample Tests.

Примечание для перехода
Для Go: ожидается нулевой срез, когда между m и n нет промежутка. Пример: пробел(11,30000,100000) --> ноль
*/
function gap(g, m, n) {
  let primeNum = 0;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (i - primeNum === g) {
        return [primeNum, i];
      }
      primeNum = i;
    }
  }
  return null;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(gap(2, 100, 110)); // [101, 103]
// console.log(gap(6, 100, 110)); // null
// console.log(gap(8, 300, 400)); // [359, 367]
//? ----------------------------------------------------------
function solve(s) {
  const consonant = s.replace(/[aeiou]/gi, '-');

  return Math.max(
    ...consonant
      .split('-')
      .map((el) =>
        el
          .split('')
          .reduce((sum, letter) => sum + (letter.charCodeAt() - 96), 0)
      )
  );
}
// console.log(solve('mischtschenkoana')); // 57
//? -----------------------------------------------------
const data1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];
function dataReverse(data) {
  //   const objBytes = {};
  //   let count = 1;
  //   for (let i = 0; i < data.length; i++) {
  //     if (!objBytes[count]) objBytes[count] = [];
  //     objBytes[count].push(data[i]);
  //     if (objBytes[count].length === 8) {
  //       count += 1;
  //     }
  //   }

  // 	return Object.values(objBytes).reverse().flat(1);

  const result = [];

  while (data.length) {
    result.push(...data.splice(-8));
  }

  return result;
}
// console.log(dataReverse(data1)); // [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
//? ---------------------------------------------------------------
function toBinary(n) {
  let num = n;
  let binary = (num % 2).toString();
  for (; num > 1; ) {
    num = parseInt(num / 2);
    binary = (num % 2) + binary;
  }
  return Number(binary);
}

// console.log(toBinary(5)); // 101
//?----------------------------------------------------------------
// function adjacentElementsProduct(array) {
//   let result = array[0] * array[1];
//   let tempSum = result;

//   for (let i = 1; i < array.length; i++) {
//     tempSum = array[i] * array[i + 1];
//     if (tempSum > result) {
//       result = tempSum;
//     }
//   }

//   return result;
// }
// console.log(adjacentElementsProduct([1, -2, 1, -1, 1000])); // -1
//? -------------------------------------------------------------
function fn(s) {
  return s.length === 1 && '0' <= s && s <= '9';
}

// console.log(fn('8'));
//? --------------------------------------------------------
function partlist(arr) {
  const resultArr = [];

  for (let i = 1; i < arr.length; i++) {
    resultArr.push([
      arr.slice(0, i).join(' '),
      arr.slice(i, arr.length).join(' '),
    ]);
  }

  return resultArr;
}

// console.log(partlist(['I', 'wish', 'I', "hadn't", 'come']));
// [["I", "wish I hadn't come"], ["I wish", "I hadn't come"],
// ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
//? ------------------------------------------------------
function isSortedAndHow(arr) {
  return arr.every((el, i) => i === 0 || arr[i] >= arr[i - 1])
    ? 'yes, ascending'
    : arr.every((el, i) => i === 0 || arr[i] <= arr[i - 1])
    ? 'yes, descending'
    : 'no';

  let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
  let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;

  return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no';
}

// console.log(isSortedAndHow([1, 2, 3, 5]));
// console.log(isSortedAndHow([15, 7, 3, -8]));
// console.log(isSortedAndHow([4, 2, 30]));
//? ----------------------------------------------------
// Leetcode 238
// var productExceptSelf = function (nums) {
//   if (nums.length <= 2) return nums.reverse();
//   const map = new Map();
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     map.set(i, nums[i]);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     let tempMap = new Map(map);
//     tempMap.delete(i);
//     result.push([...tempMap.values()].reduce((acc, el) => acc * el, 1));
//   }

//   return result;
// };
// console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
// console.log(productExceptSelf([0, 4, 0])); // [0,0,0]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]

var productExceptSelf = function (nums) {
  const result = new Array(nums.length);

  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};

// console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
// console.log(productExceptSelf([0, 4, 0])); // [0, 0, 0]
// console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]

//? --------------------------------------------------------
function seven(m) {
  //   let count = 0;
  //   let stringNum = String(m);

  //   while (stringNum.length > 2) {
  //     stringNum = String(
  //       Number(
  //         stringNum.slice(0, stringNum.length - 1) -
  //           stringNum[stringNum.length - 1] * 2
  //       )
  //     );
  //     count += 1;
  //   }

  //   return [Number(stringNum), count];

  let i = 0;
  while (m.toString().length > 2) {
    m = Math.floor(m / 10) - (m % 10) * 2;
    i++;
  }
  return [m, i];
}

// console.log(seven(1603)); // [7, 2]

//? -------------------------------------------------------
function calc(x) {
  let total1 = x
    .split('')
    .reduce((acc, el) => acc + String(el.charCodeAt()), '');
  let total2 = total1.replaceAll('7', '1');

  return (
    total1.split('').reduce((acc, el) => acc + Number(el), 0) -
    total2.split('').reduce((acc, el) => acc + Number(el), 0)
  );
}

console.log(calc('aaaaaddddr'));
//? -----------------------------------------------------
function rgb(r, g, b) {
  const arrParams = [...arguments];
  let hex = '';

  arrParams.forEach((el) => {
    if (el <= 0) return (hex += '00');
    if (el > 255) return (hex += 'ff');
    if (Number(el).toString(16).length < 2)
      return (hex += `0${Number(el).toString(16)}`);
    hex += Number(el).toString(16);
  });

  return hex.toUpperCase();
}

// console.log(rgb(153, 163, 6)); //'99A306'
// console.log(rgb(10, 165, 287)); // '0AA5FF'
// console.log(rgb(173, 255, 47)); // 'ADFF2F'

//? ----------------------------------------------------
// Самая длинная подстрока палиндром в строке
function longestPalindrome(s) {
  if (s.length === 0) {
    return 0;
  }

  let maxLength = 1;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const substring = s.slice(i, j + 1);
      const reversed = substring.split('').reverse().join('');
      if (substring === reversed && substring.length > maxLength) {
        maxLength = substring.length;
      }
    }
  }

  return maxLength;
}
// console.log(longestPalindrome('baablkj12345432133d')); // 9
// console.log(longestPalindrome('a')); // 1
// console.log(longestPalindrome('baa')); // 2
// console.log(longestPalindrome('BaaBcd')); // 4
// console.log(longestPalindrome('Aa')); // 1
//? ------------------------------------------------------------
// Поворот влево
function maxRot(n) {
  let numStr = n.toString();
  const rotations = [numStr];

  for (let i = 0; i < numStr.length - 1; i++) {
    numStr = numStr.slice(0, i) + numStr.slice(i + 1) + numStr[i];
    rotations.push(numStr);
  }
  const maxRotated = Math.max(...rotations.map((rot) => parseInt(rot, 10)));

  return maxRotated;
}

console.log(maxRot(38458215)); // 85821534
console.log(maxRot(195881031)); // 988103115
console.log(maxRot(56789)); // 68957
//? -----------------------------------------------------------
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let currentAttacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let opponent = currentAttacker === fighter1 ? fighter2 : fighter1;

  while (true) {
    opponent.health -= currentAttacker.damagePerAttack;

    if (opponent.health <= 0) {
      return currentAttacker.name;
    }

    const temp = currentAttacker;
    currentAttacker = opponent;
    opponent = temp;
  }
}

// console.log(
//   declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew')
// ); // "Lew"

// console.log(
//   declareWinner(
//     new Fighter('Harald', 20, 5),
//     new Fighter('Harry', 5, 4),
//     'Harry'
//   )
// ); // "Harald"
//? ---------------------------------------------------------
// Расширение функциональности встроенных классов
Array.prototype.square = function () {
  return this.map((el) => Math.pow(el, 2));
};

Array.prototype.cube = function () {
  return this.map((el) => Math.pow(el, 3));
};

Array.prototype.average = function () {
  return this.length === 0
    ? NaN
    : this.reduce((acc, el) => acc + el, 0) / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((acc, el) => acc + el, 0);
};

Array.prototype.even = function () {
  return this.filter((el) => el % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((el) => el % 2 !== 0);
};

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.square()); // [1, 4, 9, 16, 25]
console.log(numbers.cube()); // [1, 8, 27, 64, 125]
console.log(numbers.average()); // 3
console.log(numbers.sum()); // 15
console.log(numbers.even()); // [2, 4]
console.log(numbers.odd()); // [1, 3, 5]

//? -----------------------------------------------------
const fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
];

function streetFighterSelection(fighters, position, moves) {
  const result = [];

  moves.forEach(function (move) {
    if (move === 'up') {
      position[0] = 0;
    } else if (move === 'down') {
      position[0] = 1;
    } else if (move === 'right') {
      position[1] = position[1] === 5 ? 0 : position[1] + 1;
    } else if (move === 'left') {
      position[1] = position[1] === 0 ? 5 : position[1] - 1;
    }

    result.push(fighters[position[0]][position[1]]);
  });

  return result;
}

// console.log(
//   streetFighterSelection(
//     fighters,
//     [0, 0],
//     ['up', 'left', 'right', 'left', 'left']
//   )
// ); // ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// console.log(
//   streetFighterSelection(
//     fighters,
//     [0, 0],
//     ['right', 'down', 'left', 'left', 'left', 'left', 'right']
//   )
// ); // ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
//? -------------------------------------------------------------
// Преобразование в двоичный код и обратно
function ipToInt32(ip) {
  const binary = ip
    .split('.')
    .reduce((acc, el) => acc + Number(el).toString(2).padStart(8, '0'), '');

  return parseInt(binary, 2);
}
console.log(ipToInt32('128.32.10.1')); // 2149583361
//? -------------------------------------------------------------
// Определение произведения простых чисел
function numPrimorial(n) {
  let primeCount = 0;
  let result = 1;

  nextPrime: for (let i = 2; primeCount < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) continue nextPrime;
    }
    primeCount += 1;
    result *= i;
  }

  return result;
}

// console.log(numPrimorial(3)); // 30
// console.log(numPrimorial(5)); // 2310
// console.log(numPrimorial(9)); // 223092870
//? --------------------------------------------------
// Тире между нечетными числами
function dashatize(num) {
  return isNaN(num)
    ? 'NaN'
    : num
        .toString()
        .match(/([13579]|[02468]+)/g)
        .join('-');
}

// console.log(dashatize(NaN)); // "NaN"
// console.log(dashatize(974302)); // "9-7-4-3-02"
// console.log(dashatize(5311)); // "5-3-1-1"
// console.log(dashatize(-1)); // "1"
// console.log(dashatize(-28369)); // "28-3-6-9"
//? -----------------------------------------------------
// Тире между нечетными числами
function insertDash(num) {
  return num
    .toString()
    .split('')
    .reduce((acc, c, i, arr) => {
      if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
        acc = acc + '-';

      return acc + c;
    }, '');
}
// console.log(insertDash(454793)); // '4547-9-3'
//? ------------------------------------------------------
function arithmeticSequenceElements(a, d, n) {
  return Array.from({ length: n }, (_, i) => a + d * i);
}
// console.log(arithmeticSequenceElements(1, 2, 5)); // "1, 3, 5, 7, 9"
// console.log(arithmeticSequenceElements(1, 0, 5)); // "1, 1, 1, 1, 1"
// console.log(arithmeticSequenceElements(1, -3, 10)); // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
// console.log(arithmeticSequenceElements(100, -10, 10)); // "100, 90, 80, 70, 60, 50, 40, 30, 20, 10"
//? ------------------------------------------------------
const str = 'Hello World';
const offset = 3;

const toCezar = (a, b) => {
  let encodeStr = '';

  for (const ch of a) {
    let tempCh = ch.charCodeAt();
    encodeStr += String.fromCharCode(tempCh + b);
  }

  return encodeStr;
};

// console.log(toCezar(str, offset));
//? ------------------------------------------------------
function colorOf(r, g, b) {
  const toString = (x) => {
    const res = x.toString(16);

    return res.length === 1 ? `0${x}` : res;
  };
  return `#${toString(r)}${toString(g)}${toString(b)}`;
}

// console.log(colorOf(122, 11, 225)); // #7a011e1
//? ------------------------------------------------------

/*
6 kyu
A Rule of Divisibility by 13

«Правило делимости — это сокращенный способ определения, делится ли заданное целое число 
на фиксированный делитель без выполнения деления, обычно путем проверки его цифр».

Когда вы делите последовательные степени 10 на 13, вы получаете следующие остатки от целочисленных делений:

1, 10, 9, 12, 3, 4 потому что:

10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)

Затем весь узор повторяется. Отсюда следующий метод:

Умножить

самая правая цифра числа с самой левой цифрой в последовательности, показанной выше,
вторая самая правая цифра со второй самой левой цифрой числа в последовательности.
Цикл продолжается, и вы суммируете все эти продукты. Повторяйте этот процесс, 
пока последовательность сумм не станет стационарной .

Пример:
Какой остаток при 1234567делении на 13?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)
Следовательно, следуя методу, мы получаем:

 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

Повторяем процесс с числом 178:

8x1 + 7x10 + 1x9 = 87

и снова с 87:

7x1 + 8x10 = 87

С этого момента последовательность является стационарной (мы всегда получаем 87), 
а остаток от 1234567by 13такой же, как остаток от 87by 13(т.е. 9).

Задача:
Вызовите thirtфункцию, которая обрабатывает эту последовательность операций над целым числом n (>=0). 
thirt вернет стационарный номер.

thirt(1234567)вычисляет 178, затем 87, затем 87 и возвращает 87.

thirt(321)вычисляет 48, 48 и возвращает48
*/
function thirt(n) {
  const modNum = [1, 10, 9, 12, 3, 4];
  let reverseNumsArr = n.toString().split('').reverse();

  let sum = 0;

  let idx = 0;
  for (let i = 0; i < reverseNumsArr.length; i++) {
    if (idx > modNum.length - 1) {
      idx = 0;
    }
    sum += reverseNumsArr[i] * modNum[idx];
    idx += 1;
  }

  n = sum;

  if (n.toString().length > 2) {
    return thirt(n);
  } else {
    return n;
  }
}

// console.log(thirt(8529)); // 79
// console.log(thirt(85299258)); // 31
// console.log(thirt(5634)); // 57
// console.log(thirt(1111111111)); // 71
// console.log(thirt(987654321)); // 30
// console.log(thirt(1234567)); // 87
//? ------------------------------------------------------------

function lowercaseCount(str) {
  const regex = str.match(/[a-z]/g);
  return regex ? regex.length : 0;
}

// console.log(lowercaseCount("ABC123!@sdhsd€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
//? ------------------------------------------------------------
/*
6 kyu
Reverse or rotate?
Вход представляет собой строку str цифр. 
Разрежьте строку на куски (кусок здесь — это подстрока исходной строки) 
размера sz (игнорируйте последний кусок, если его размер меньше sz).

Если блок представляет собой целое число, например, сумма кубов его цифр делится на 2, 
переверните этот блок; в противном случае поверните его влево на одну позицию. 
Соедините вместе эти измененные фрагменты и верните результат в виде строки.

Если

sz is <= 0 or if str is empty return ""
sz больше (>), чем длина str невозможно взять кусок размера, sz следовательно, вернуть "".
*/

function revrot(str, sz) {
  if (str === '' || sz < 1 || sz > str.length) return '';
  const strArr = [];

  for (let i = 0; i < str.length; i += sz) {
    if (str.slice(i, i + sz).length < sz) break;
    strArr.push(str.slice(i, i + sz));
  }

  return strArr
    .map((el) => {
      if (
        el.split('').reduce((acc, item) => acc + Math.pow(Number(item), 3), 0) %
        2
      ) {
        return el.slice(1) + el.slice(0, 1);
      } else {
        return el.split('').reverse().join('');
      }
    })
    .join('');
}

// console.log(revrot('1234', 0)); // ''
// console.log(revrot('', 0)); // ''
// console.log(revrot('1234', 5)); // ''
// console.log(revrot('123456987654', 6)); // "234561876549"
// console.log(revrot('664438769', 8)); // "67834466"
//? -----------------------------------------------------
// Создание матрицы
const MATRIX_WIDTH = 3;
const MATRIX_HEIGTH = 3;
const matrix = Array.from({ length: MATRIX_WIDTH }).map(() =>
  Array.from({ length: MATRIX_HEIGTH }).map((_) => '*')
);

// console.log(matrix);

//? ------------------------------------------------------------
/*
6 kyu Salesman's Travel
Функция travelпримет два параметра r(список адресов всех клиентов в виде строки) и zipcode. 
Верните строку в следующем формате:
zipcode:street and town,street and town,.../house number,house number,...

Номера улиц должны быть в том же порядке, что и улицы, которым они принадлежат.

Если данный почтовый индекс не существует в списке адресов клиентов, верните"zipcode:/"
*/
const ad =
  '123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,' +
  '54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,' +
  '10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,' +
  '22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,' +
  '45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,' +
  '100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,' +
  '2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,' +
  '45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,' +
  '100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,' +
  '2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,' +
  '2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,' +
  '2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000';

const code =
  'OH 43071,NY 56432,ZP 32908,AE 56210,RE 13000,EX 34342,SW 43098,AA 45521,GG 30654,ZP 32908,AE 56215,RE 13200,EX 34345,' +
  'RE 13222,RE 13001,SW 43198,AA 45522,GG 30655,XX 32321,YY 45098';

function travel(r, zipcode) {
  if (!zipcode) return `:/`;

  const filterAd = r.split(',').filter((el) => el.slice(-8) === zipcode);

  const number = filterAd.map((el) => parseInt(el));
  const address = filterAd
    .map((el, i) =>
      el.slice(String(number[i]).length + 1).replace(` ${zipcode}`, '')
    )
    .join(',');

  return `${zipcode}:${address}/${number.join(',')}`;
}
// console.log(travel(ad, ''));
// console.log(travel(ad, 'AA 45522')); // "AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670"
// console.log(travel(ad, 'EX 34342')); // "EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100"
// console.log(travel(ad, 'EX 34345')); // "EX 34345:Pussy Cat Rd. Chicago/100"
// console.log(travel(ad, 'AA 45521')); // "AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67"
// console.log(travel(ad, 'AE 56215')); // "AE 56215:Main Al. Bern/320"
// console.log(travel(ad, 'OH 430')); // "OH 430:/"
// ? ------------------------------------------------------------------------
/*
6 kyu Transform To Prime

Учитывая список [] из n целых чисел , найдите минимальное число , 
которое нужно вставить в список , 
чтобы сумма всех элементов списка равнялась ближайшему простому числу .
*/
function minimumNumber(numbers) {
  let sum = numbers.reduce((acc, el) => acc + el, 0);

  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  while (!isPrime(sum)) {
    sum++;
  }

  return sum - numbers.reduce((acc, el) => acc + el, 0);
}

console.log(minimumNumber([3, 1, 2])); // 1
console.log(minimumNumber([5, 2])); // 0
console.log(minimumNumber([50, 39, 49, 6, 17, 28])); // 2

// ? -------------------------------------------------------------------------
/*
6 kyu
Prefill an Array
Создайте функцию prefill, которая возвращает массив nэлементов, 
имеющих одинаковое значение v. Посмотрите, сможете ли вы сделать это без 
использования цикла.

Вам необходимо подтвердить ввод:

v может быть чем угодно (примитивным или другим)
если v он опущен, заполните массив undefined
если n 0, вернуть пустой массив
если n это что-то иное, чем целочисленная строка или строка в целочисленном 
формате '123' (например , ), то есть >=0 бросить TypeError
При выдаче TypeError сообщения должно быть n is invalid, где вы заменяете n 
фактическое значение, переданное в функцию.

Примеры кода

    prefill(3,1) --> [1,1,1]
    
    prefill(2,"abc") --> ['abc','abc']
    
    prefill("1", 1) --> [1]
    
    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"
*/
function prefill(n, v) {
  const repeatNum = Number(n);

  if (!Number.isInteger(repeatNum) || repeatNum < 0 || typeof n === 'boolean') {
    throw new TypeError(`${n} is invalid`);
  }

  return Array(repeatNum).fill(v);
}

// console.log(prefill(3, 1)); // [1,1,1]
// console.log(prefill(2, 'abc')); // ['abc','abc']
// console.log(prefill('1', 1)); // [1]
// console.log(prefill(3, prefill(2, '2d'))); // [['2d','2d'],['2d','2d'],['2d','2d']]
// console.log(prefill('3')); // [undefined, undefined, undefined]
// console.log(prefill(true, 1)); // 'xyz is invalid'
// ? -------------------------------------------------------------------
function toStrReverse(str) {
  const symbolRegExp = (str) => str.match(/\W/gi);

  return str
    .split(' ')
    .map((el) => {
      if (el.includes(symbolRegExp(el)?.join(''))) {
        const symbol = symbolRegExp(el).join('');
        const symbolIdx = el.split('').findIndex((item) => item === symbol);
        return (
          el.slice(0, symbolIdx).split('').reverse().join('') + el[symbolIdx]
        );
      } else {
        return el.split('').reverse().join('');
      }
    })
    .join(' ');
}

// console.log(toStrReverse('Hello Yar, you are amazing!')); // 'olleH raY, ouy era gnizama!'

//? ----------------------------------------------
