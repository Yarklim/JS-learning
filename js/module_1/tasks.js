// ? Створіть змінну str і дайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка, виведіть на екран символ 'a', символ 'b', символ 'e'.
// const str = 'abcde';
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[str.length -1]);

// ? Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --.
// ? Кількість рядків коду не повинна змінитися. Код для переробки:
// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;

// let num = 1;
// console.log(num += 12);
// console.log(num -= 14);
// console.log(num *= 5);
// console.log(num /= 7);
// console.log(++num);
// console.log(--num);


// ? Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenseBots = 50;

// console.log(`${companyName} has ${repairBots}` );


// ? Напишіть інструкцию, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// const str = "string not starting with capital";
// console.log(str[0].toUpperCase() + str.slice(1));


// ? Ви просите користувача ввести суму його зарплати. Потім розраховуєте:
// ? Добавку у вигляді премії у сумі 15% від зарплати.
// ? Податки у сумі 10% від суми всіх нарахувань (зарплата + премія).
// ? Витрату в магазині в сумі 190.
// ? Розділяєте суму, що залишилася, між користувачем і його "дружиною"/"чоловіком".
// const sum = Number(prompt('Введить суму зарплати'));
// const gift = +prompt('Ваша зарплата із премією - $', sum + (sum * 0.15));
// const tax = +prompt('Податок на дохід - $', gift * 0.1);
// const purchases = +prompt('Витрати в магазині - $', 190)
// const result = +prompt('Ви, та ваша дружина, отримуєте по $', (gift - tax - purchases) / 2);

// console.log(`Ви, та ваша дружина, отримуєте по $${result}`);


// ? Потрібно попросити користувача задумати число. Потім він повинен помножити це число на 2 і додати отриманого результату 7.
// ? Те, що сталося в результаті, потрібно ввести в діалоговому вікні prompt().
// ? Ви повинні видати користувачеві, скільки він задумав.
// alert('Загадайте число');
// alert('Помножте ваше число на 2, та додайте до отриманого результату 7');
// const resultNumber = +prompt('Введить число, яке вийшло');
// const userNumber = +prompt('Число, яке ви загадали - ', (resultNumber - 7) / 2);
// console.log(userNumber);

/* ========================== */

// ? Підрахуйте суму чисел у діапазоні від 1 до 10 за допомогою циклу for, while та do...while.
// ? Підказка: у результаті має вийти 55.
// let sum = 0;

// for (let i = 0; i <= 10; i += 1) {
// 	sum += i;
// }
// console.log(sum); // 55

/*--------------*/

// let sum = 0;
// let i = 0;

// while (i <= 10) {
// 	sum += i;
// 	i += 1;
// }
// console.log(sum); // 55

/*-------------*/

// let sum = 0;
// let i = 0;

// do {
// 	sum += i;
// 	i += 1;
// } while (i <= 10);
// console.log(sum);

/*----------------*/

//? За допомогою методу prompt() отримайте спочатку ім'я користувача, потім рік народження і збережіть у 2 змінні. Обчисліть вік користувача та виведіть
//? його в абзаці за допомогою alert() у такому форматі "Антон: 24".
//? Визначте залишок від розподілу кількості років на 10. Залежно від цього виведіть в абзаці
//? "Антон: 21 рік" або "Антон: 24 роки" або "Антон: 25 років".
//? Тобто. всім чисел з першого в кінці має бути "_1 рік", для чисел з 2,3,4
//? наприкінці - "_3 роки", а всіх інших - "_7 років".
//? Ви можете використовувати для цього умовні конструкції if...else або switch...case.

// const userName = prompt('Enter your name');
// const birthdayYear = Number(prompt('Enter your year of birthday'));
// const date = new Date();
// const userAge = date.getFullYear() - birthdayYear;
// const result = userAge % 10;
// let msg = `${userName}: ${userAge}`;

// switch (result) {
// 	case 1:
// 		msg += ' рік';
// 		break;
// 	case 2:
// 	case 3:
// 	case 4:
// 		msg += ' роки'
// 		break;
// 	default:
// 		msg += ' років'
// }
// alert(msg) // Yar: 50 років

/*----------------------*/

//? Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль. Якщо було введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".

// const userNumber = Number(prompt('Enter number'));

// if (userNumber > 0) {
// 	console.log('Це позитивне число');
// } else if (userNumber < 0) {
// 	console.log(`Це від'ємне число`);
// } else {
// 	console.log('Це нуль');
// }

/*-----------------------*/

//? Щасливим квитком називають такий квиток із шестизначним номером, де сума перших трьох цифр дорівнює сумі останніх трьох.
//? Напишіть функцію checkTicket(number), яка перевіряє щасливість квитка.

//? checkTicket('005212') === true
//? checkTicket('133700') === true
//? checkTicket('123032') === false

// function checkTicket(numberStr) {
// 	let firstPart = 0;
// 	let secondPart = 0;
// 	for (let i = 0; i < numberStr.length; i += 1) {
// 		if (i < numberStr.length / 2) {
// 			firstPart += Number(numberStr[i]);
// 		} else {
// 			secondPart += Number(numberStr[i]);
// 		}
// 		return firstPart === secondPart;
// 	}
// }
// console.log(checkTicket('005212'));

/*---------------------*/

//? Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
// 	link += '/'
// }
// console.log(link);

// let link = 'https://my-site.com/about';

// if (link[link.length - 1] !== '/') {
// 	link += '/'
// }
// console.log(link);

// let link = 'https://my-site.com/about';

// if (!link.includes('/', link.length -1)) {
// 	link += '/';
// }
// console.log(link);

/*----------------------*/

//? Попросіть користувача ввести 3 імені та прізвища, наприклад, студентів.
//? Виведіть введені дані методом console.log у вигляді абзаців та нумерованого списку.

// for (let i = 1; i <= 3; i += 1) {
// 	let userName = prompt('Enter name');
// 	console.log(`${i + 1}) ${userName}`);
// }