// ? ========= Оператор ветвления if ==========
// Если условие в if true, то выполнится тело if
if (5 > 15) {
	console.log('выполнится, если if = true');
}
console.log('выполнится, если if = false');

// ? ========= Оператор ветвления if...else ==========
// Если условие в if true, то выполнится тело if, если условие в if будет false, то выполнится тело else
if (5 > 30) {
	console.log('x > y');
} else {
	console.log('x < y');
}

// ? ========= Оператор ветвления else...if =========
const salary = 1600;
if (salary <= 500) {
	console.log('Уровень - 1');
} else if (salary > 500 && salary <= 1000) {
	console.log('Уровень - 2');
} else if (salary > 1000 && salary <= 1500) {
	console.log('Уровень - 3');
} else {
	console.log('Уровень - 4');
}

// ? ========= Тернарный оператор ==========
// Працює за наступною схемою:
// Обчислюється умова.
// Якщо умова правдива, тобто приводиться до true, обчислюється вираз після ?.
// Якщо умова хибна, тобто приводиться до false, обчислюється вираз після :.
// Значення обчисленого виразу повертається у якості результату роботи тернарного оператора.

const balance = 1000;
let message = balance > 0 ? 'Позитивный баланс' : 'Негативный баланс'; 

console.log(message); // Позитивный баланс

// ? ========= Блочная область видимости переменных =========
const a = 5; // видима глобально

if (true) {
	const b = 7; // видима только внутри if

	console.log(b);
}

console.log(a);

// ? ===================== //
/*
 * Ветвления if
 */

// const bool = false;

// let a;

// if (!bool) {
//   console.log('i was here');
// } else if (bool === 5) {
//   console.log('it was else if block');
// } else if (true) {
//   console.log('it was true');
// } else {
//   console.log('it was false');
// }

// if (условие) {
// тело if
// }

// const num = 6;

// const num2 = 8;

// if (num > 5 && num2 > 7) {
//   console.log('Hello!');
// }

/*
? Дана строка, состоящая из символов, например, 'abcde'.
? Проверьте, что первым символом этой строки является буква 'a'.
? Если это так - выведите 'да', в противном случае выведите 'нет'.
*/

// const str = 'Abcde';

// if (str[0] === 'a') {
//   console.log('так!');
// } else {
//   console.log('ні!');
// }

/*
? Запросить у пользователя число, если число равно 10,
? то выведите 'Верно', иначе выведите 'Неверно'.
*/

// const num = Number(prompt('write your number'));

// if (num === 10) {
//   console.log('вірно');
// } else {
//   console.log('невірно');
// }

/*
? В переменной min лежит число от 0 до 59.
? Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
? [0 до 15) - первая четверть часа
? [15 до 30) - вторая четверть часа
? [30 до 45) - третья четверть часа
? [45 до 60) - четвёртая четверть часа
*/

// const min = 59;

// if (0 <= min && min < 15) {
//   console.log('first quarter');
// } else if (15 <= min && min < 30) {
//   console.log('second quarter');
// } else if (30 <= min && min < 45) {
//   console.log('third quarter');
// } else if (45 <= min && min < 60) {
//   console.log('fourth quarter');
// }

/*
? Напишите код, который будет спрашивать:
? 'Какое «официальное» название JavaScript?'
? Если пользователь вводит «ECMAScript»,
? то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
*/

// const typedName = prompt('write js official name');

// if (typedName === 'ECMAScript') {
//   console.log('Вірно!');
// } else {
//   console.log('Не знаєте? ECMAScript!');
// }

/*
? Напишите код, который получает число через prompt, а затем выводит в console.log:
? 1, если значение больше нуля,
? -1, если значение меньше нуля,
? 0, если значение равно нулю.
? Предполагается, что пользователь вводит только числа.
*/

// const num = prompt('write your number');

// if (num > 0) {
//   console.log(1);
// } else if (num < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
? Проверьте с помощью объекта navigator и свойства userAgent
? какой браузер у пользователя, результат вывести в консоль
*/

// const userBrowser = navigator.userAgent;

// if (userBrowser.includes('Chrome')) {
//   console.log('Your browser is Chrome');
// }

/*
 * Switch case
 */

// const num = 5;

// switch (num) {
//   case 5:
//     console.log('is eight');
//     break;

//   case 5:
//     console.log('is fifth');
//     break;

//   default:
//     console.log('number was not found');
// }

// switch (значение) {
//   case значение: {
//     инструкции;
//     break;
//   }

//   case значение:
//     инструкции;
//     break;

//   default:
//     инструкции;
// }

/*
?  Перепишите код с использованием одной конструкции switch:
*/

// const number = Number(prompt('Введите число между 0 и 3'));

// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;
//   case 1:
//     alert('Вы ввели число 1');
//     break;
//   case 2:
//     alert('Вы ввели число 2');
//     break;
//   case 3:
//     alert('Вы ввели число 3');
//     break;
//   default:
//     alert('Вы ввели какое-то другое число');
// }

// if (number === 0) {
//   alert('Вы ввели число 0');
// } else if (number === 1) {
//   alert('Вы ввели число 1');
// } else if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// } else {
//   alert('Вы ввели какое-то другое число');
// }

/*
 * Тернарный оператор
 */

// {/* <условие> ? <выражение_если_условие_истинно> : <выражение_если_условие_ложно> */}

// const tern = 8 > 7 ? 35 * 5 : false;

// console.log(tern);

/*
? Перепишите конструкцию if с использованием условного оператора '?':
*/

// const a = 2;
// const b = 1;

// const result = a + b < 4 ? 'Мало' : 'Багато';

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Багато';
// }

// console.log(result);

/*
?  Перепишите if..else с использованием нескольких тернарных операторов '?'.
*/

// const login = 'FFF';

// const message =
//   login === 'Сотрудник'
//     ? 'Привет'
//     : login === 'Директор'
//     ? 'Здравствуйте'
//     : login == ''
//     ? 'Нет логина'
//     : '';

// if (login === 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// console.log(message);