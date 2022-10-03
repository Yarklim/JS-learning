/* Напиши скрипт, который проверяет вхождение числа в отрезок, обозначенный х1 и х2
До х1
После х1
От х1 до х2
До х1 или после х2 */

const x1 = 10;
const x2 = 30;
const number = 20;

console.log(`Число ${number} попадает в отрезок до ${x1}? - `, number < x1);
console.log(`Число ${number} попадает в отрезок после ${x1}? - `, number > x1);
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? - `, number >= x1 && number <= x2);

function location() {
	let result;
	if (number < x1 && number != x1) {
		result = `Число ${number} попадает в отрезок до ${x1} или после ${x2}? - до ${x1}`;
	} else if (number != x2 && number > x2) {
		result = `Число ${number} попадает в отрезок до ${x1} или после ${x2}? - после ${x2}`;
	} else {
		result = `Число ${number} попадает в отрезок до ${x1} или после ${x2}? - число ${number} находится в отрезке от ${x1} до ${x2}`;
	}

	console.log(result);;
}
location()