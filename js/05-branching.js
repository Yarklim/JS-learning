/* Оператор ветвления if */
if (5 > 15) {
	console.log('выполнится, если if = true');
}
console.log('выполнится, если if = false');

/* Оператор ветвления if...else */
if (5 > 30) {
	console.log('x > y');
} else {
	console.log('x < y');
}

/* Оператор ветвления else...if */
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

/* Тернарный оператор */
const balance = 1000;
let message = balance > 0 ? 'Позитивный баланс' : 'Негативный баланс'; 

console.log(message);

/* Блочная область видимости переменных */
const a = 5; // видима глобально

if (true) {
	const b = 7; // видима только внутри if

	console.log(b);
}

console.log(a);