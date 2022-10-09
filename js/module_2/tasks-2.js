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
//? - Если логина нет, вывести сообщение "Пользователь (логин) не найден"
//? - Если логин найден, вывести сообщение "Пользователь (логин) найден"
//? ***
//? - Сначала через for
//? - Потом через for...of
//? - Логика break
//? - Метод includes() с тернарным оператором

// const logins = ['sdgsdsdhns', 'sdgsdgdsggf', 'login888', 'dgsdgsdgsdg'];
// const loginToFind = 'login888';
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1) {
// 	const login = logins[i];

// 	if (login === loginToFind) {
// 		message = `Пользователь ${loginToFind} найден`;
// 		break;
// 	}
// }
// console.log(message);

/*
 ? Створіть масив genres з елементами Jazz і Blues. ✅
 ? Додайте "Рок-н-рол" в кінець. ✅
 ? Виведіть у консоль перший елемент масиву. ✅
 ? Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини. ✅
 ? Видаліть перший елемент і виведіть його в консоль.  ✅
 ? Вставте «Country» та «Raggy» на початок масиву.  ✅
 */

//? Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray.
//? Параметр maxLength містить максимально допустиму довжину нового масиву.
//? Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів.
//? В іншому випадку функція повинна повернути новий масив повністю.
// function makeArray(firstArray, secondArray, maxLength) {

// const concatArr = firstArray.concat(secondArray);
// 	let newArr = [];
// 	if (concatArr.length > maxLength) {
// 		newArr = concatArr.slice(0, maxLength);
// 	} else {
// 		newArr = concatArr;
// 	}
// 	return newArr;
// }
//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 2));

//? Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів,
//? розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.
// function findLongestWord(string) {
// 	const newArr = string.split(' ');
// 	let maxWord = newArr[0];

// 	for (let i = 0; i < newArr.length; i += 1) {
// 		if (newArr[i].length > maxWord.length) {
// 		  maxWord = newArr[i];
// 		}
// 	  }
// 	return maxWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// ? Создайте массив genres с элементами «Jazz» и «Blues».
// ? Добавьте «Rock&Roll» в конец.
// ? Выведите в консоль первый элемент массива.
// ? Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// ? Удалите первый и последний элемент и выведите его в консоль.
// ? Вставьте «Country» и «Reggy» в начало массива.
// const genres = ['Jazz', 'Blues'];

// genres.push('Rock&Roll');

// console.log(genres);

// console.log(genres[0]);

// console.log(genres[genres.length - 1]);

// genres.shift();

// console.log(genres);

// genres.pop();

// console.log(genres);

// genres.unshift('Country', 'Reggy');

// genres.splice(0, 0, 'Country', 'Reggy');

// console.log(genres);

// genres[2] = 'Rock&Roll'

// const newArray = genres.concat('Rock&Roll');

// console.log(newArray);

//? У нас есть несколько массивов с зарплатами сотрудников из разных отделов, нужно посчитать общую сумму зарплат.
//? Придумай варіанти рішення через цикли, через push та через concat
// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// const allSalaries = managerSalaries.concat(developersSalaries);

// const allSalaries = [];

// allSalaries.push(managerSalaries, developersSalaries);

// const flattedArray = allSalaries.flat();

// console.log(flattedArray);

// allSalaries.push(...managerSalaries, ...developersSalaries);

// allSalaries.splice(0, 0, ...managerSalaries, ...developersSalaries);

// let total = 0;

// for (let salary of flattedArray) {
//   total += salary;
// }

// console.log(total);

//? Напиши скрипт для вычисления площади прямоугольника со сторонами,
//? значения которых хранятся в переменной values в виде строки.
//? Значения гарантированно разделены пробелом.
// const values = '8 11';

// const numbers = values.split(' ');

// console.log(numbers);

// let flat = 1;

// for (let number of numbers) {
//   flat *= number;
// }

// const values = '8 11';

// const numbers = values.split(' ');

// const flat = numbers[0] * numbers[1];

// console.log(flat);

//? Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
//? В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
//? Порядковый номер имен и телефонов в строках указывают на соответствие.
//? Количество имен и телефонов гарантированно одинаковое.
// const names = 'Jacob,William,Solomon,Artemis';

// const phones = '89001234567,89001112233,890055566377,890055566300';

// const newNames = names.split(',');
// const newPhones = phones.split(',');

// console.log(newNames);
// console.log(newPhones);

// for (let index = 0; index <= newNames.length - 1; index += 1) {
//   const message = `${newNames[index]}: ${newPhones[index]}`;

//   console.log(message);
// }

//? Напиши скрипт который «разворачивает» строку (обратный порядок букв)
//? и выводит ее в консоль.
//? Покажи три варіанти з push + join, цикл, метод reverse
// const str = 'Toyota';

// const splitedStr = str.split('');

// console.log(splitedStr);

// const reversed1 = splitedStr.slice().reverse();

// console.log(splitedStr);

// console.log(reversed1.join(''));

// const str = 'Toyota';

// const splitedStr = str.split('');

// console.log(splitedStr);

// const reversedArray = [];

// for (let str of splitedStr) {
//   reversedArray.unshift(str);
//   //   console.log(reversedArray);
// }

// console.log(reversedArray.join(''));

//? У нас есть массив сотрудников, отфльтруйте его, чтобы сотрудники не повторялись
//? Показати варіанти з indexOf, includes
// const employees = ['Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];

// const filteredEmployees = [];

// for (let index = 0; index < employees.length; index += 1) {
//   if (employees.indexOf(employees[index]) === index) {
//     filteredEmployees.push(employees[index]);
//   }
// }

// for (let index = 0; index < employees.length; index += 1) {
//   if (employees.indexOf(employees[index]) !== index) {
//     continue;
//   }

//   filteredEmployees.push(employees[index]);

//   console.log(filteredEmployees);
// }

// for (let employee of employees) {
//   if (!filteredEmployees.includes(employee)) {
//     filteredEmployees.push(employee);
//   }
// }

// console.log(filteredEmployees);

// filteredEmployees.splice(filteredEmployees.indexOf('Shaw'), 1, 'Thornton');

// console.log(filteredEmployees);

//? Сотрудник Shaw уволился, удалите его из массива з допомогою splice + indexOf
//? Добавьте нового сотрудника Thornton, перед Watkins;
// Розділення з допомогою split та join

//? slug
//? Отримати результат title-about-array-methods зі строки 'Title about array methods', дайте якомога більше варіантів

// const str = 'Title about array methods';

// console.log(str);

// const splitedStr = str.toLowerCase().split(' ');

// const slug = splitedStr.join('-');

// console.log(slug);

//? Доповни код функції createArrayOfNumbers(min, max) таким чином,
//? щоб вона повертала масив усіх цілих чисел від значення min до max.
// function createArrayOfNumbers(min, max) {
// 	const numbers = [];

// 	for (let i = min; i <= max; i += 1) {
// 	  numbers.push(i);
// 	}
// 	return numbers;
// }
// console.log(createArrayOfNumbers(14, 17));

//? Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і повертає новий масив,
//? в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).
// function filterArray(numbers, value) {
//    const newArr = [];

//    for (const number of numbers) {
// 	 if (number > value) {
// 	   newArr.push(number);
// 	 }
//    }
//  return newArr;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));

//? Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
//? Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
//? оскільки вони присутні в обох вихідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.
//? Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1
//? і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
// function getCommonElements(array1, array2) {

// 	const newArr = [];

// 	for (let element of array1) {
// 	  if (array2.includes(element)) {
// 		newArr.push(element)
// 	  }
// 	}
// 	return newArr
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//? Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
//? Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).
// function getEvenNumbers(start, end) {

//    const pairNum = [];
// 	for (let i = start; i <= end; i += 1) {
// 	 if (i % 2 === 0) {
// 	   pairNum.push(i);
// 	 }
//    }
//    return pairNum;
// }
// console.log(getEvenNumbers(3, 11));

//? Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення)
//? - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
//? При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).
// function includes(array, value) {
// 	let element = '';
// 	for (let i = 0; i < array.length; i += 1) {
// 		element = array[i];

// 	  if (element === value) {
// 		return true;
// 	  }
// 	}
// 	return false;
// }
// console.log(includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter'));
