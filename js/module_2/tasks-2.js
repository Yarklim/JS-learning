//? ---------
// function calculateEngravingPrice(message, pricePerWord) {
	
//    const arrWords = message.split(' ');
// 	let valueWords = 0;
// 	let result = 0;
	
// 	for (let i = 0; i < arrWords.length; i += 1) {
// 		valueWords += 1;
// 		result = valueWords * pricePerWord;
// 	}
// 	return result;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));;

//? ---------
// function slugify(title) {
// 	const titleArr = title.toLowerCase().split(' ').join('-');
	
// 	return titleArr;
// }
// console.log(slugify("Arrays for begginers"));;

//? Посчитать общую сумму покуплк в магазине
// const cart = [54, 28, 105, 70, 98, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
// 	total += cart[i];
// }
// console.log('Total: ', total);

/*---- var 2 ---- */
// const cart = [54, 28, 105, 70, 98, 17, 120];
// let total = 0;

// for (const i of cart) {
// 	total += i;
// }
// console.log('Total: ', total);

/* ------ Прибавить к цене налог 20% ----- */
// const cart = [54, 28, 105, 70, 98, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
// 	cart[i] = Math.round(cart[i] * 1.2);
// 	total += cart[i];
// }
// console.log(cart);
// console.log('Total: ', total);

//? Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
// 	if (numbers[i] % 2 === 0) {
// 		total += numbers[i];
// 	}
// }
// console.log('Total: ', total);

/* --- var 2 --- */
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (const number of numbers) {
// 	if (number % 2 === 0) {
// 		total += number;
// 	}
// }
// console.log('Total: ', total);

//? Напиши скрипт поиска логина
// - Если логина нет, вывести сообщение "Пользователь (логин) не найден"
// - Если логин найден, вывести сообщение "Пользователь (логин) найден"
// ***
// - Сначала через for
// - Потом через for...of
// - Логика break
// - Метод includes() с тернарным оператором
// const logins = ['sdgsdsdhns', 'sdgsdgdsggf', 'login888', 'dgsdgsdgsdg'];
// const loginToFind = 'login888';

