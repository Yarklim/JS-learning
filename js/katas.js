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
