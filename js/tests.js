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
