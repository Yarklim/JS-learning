//? =============== Function ================== //

// Функція - це підпрограма, незалежна частина коду, призначена для багаторазового виконання конкретної задачі з різними початковими значеннями.
// Функції дозволяють структурувати великі програми, зменшують повторення та ізолюють код.

// Функцію можна уявити у вигляді чорного ящика: вона отримує щось на вході (дані), і повертає щось на виході (результат виконання коду всередині неї).

//? Оголошення функції
// 1. Оголошення функції multiply
// function multiply() {
	// Тіло функції
//   console.log("Це лог на момент виклику функції multiply");
// }

// 2. Виклики функції multiply
// multiply(); // 'Це лог на момент виклику функції multiply'
// multiply(); // 'Це лог на момент виклику функції multiply'
// multiply(); // 'Це лог на момент виклику функції multiply'

// Оголошення функції(function declaration) починається з ключового слова function, після якого стоїть ім'я - дієслово,
// що відповідає на запитання «Що зробити ?» і пара круглих дужок.

// Тіло функції береться у фігурні дужки { } і містить інструкції, які необхідно виконати на момент її виклику.
// 	Потім, коли необхідно, функція викликається за допомогою імені і пари круглих дужок.

// В круглих дужках після імені функції зазначаються параметри - перелік даних, які функція очікує на момент виклику.
// Параметри - це локальні змінні, доступні тільки у тілі функції.
// Вони розділяються комами.
// Параметрів може бути декілька, або взагалі не бути, у такому випадку записуються просто порожні круглі дужки.
// На момент виклику функції, в круглих дужках можна передати аргументи - значення для оголошених параметрів функції.

//? 1. Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

//? 2. Передача аргументів
// multiply(2, 3, 5); // Результат множення дорівнює 30
// multiply(4, 8, 12); // Результат множення дорівнює 384
// multiply(17, 6, 25); // Результат множення дорівнює 2550

//? Оператор return використовується для передачі значення з тіла функції у зовнішній код.
// Коли інтерпретатор зустрічає return, він відразу ж виходить з функції(припиняє її виконання), і повертає вказане значення у те місце коду, де була викликана функція.

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// Результат роботи функції можна зберегти у змінну
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550

// Оператор return без явно вказаного значення повертає спеціальне значення undefined.
// За відсутності return в тілі функції, вона все одно поверне undefined.

//? Параметри за замовчуванням
// Іноді необхідно оголосити функцію, у параметрів якої будуть значення, відмінні від undefined, навіть якщо для них не передали аргументи.
// Це робиться дуже простим та очевидним чином - достатньо вказати значення за замовчуванням безпосередньо на момент оголошення параметрів у підписі функції.
// У випадку такого запису, якщо для параметра не було передано значення аргументу, використовується значення за замовчуванням.

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

//? Термін slug - це людино - зрозумілий унікальний ідентифікатор, який використовується у веб - розробці для створення читабельних URL - адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com / posts / 1q8fh74tx, можна зробити slug з назви статті.
// В результаті адреса буде приємнішою для сприйняття: mysite.com / posts / arrays -for-begginers.
//!Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.


//? Напиши функцию поиска логина
//? - Если логина нет, вывести сообщение "Пользователь (логин) не найден"
//? - Если логин найден, вывести сообщение "Пользователь (логин) найден"
/* ----- for... of ------- */
// const logins = ['sdgsdsdhns', 'sdgsdgdsggf', 'login888', 'dgsdgsdgsdg'];

// function findLogin(allLogins, loginToFind) {
// 	for (const login of logins) {
// 		if (login === loginToFind) {
// 			return `Пользователь ${loginToFind} найден`;
// 		}
// 	}
// 	return `Пользователь ${loginToFind} не найден`;
// }
// console.log(findLogin(logins, 'login888'));

/* -------- тернарный оператор -------- */
// const logins = ['sdgsdsdhns', 'sdgsdgdsggf', 'login888', 'dgsdgsdgsdg'];

// function findLogin(allLogins, loginToFind) {
// 	return allLogins.includes(loginToFind)
// 		? `Пользователь ${loginToFind} найден`
// 		: `Пользователь ${loginToFind} не найден`;
// };
// console.log(findLogin(logins, 'login888'));



/*
? Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека.
? Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
? Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7,
? то есть в качестве разделителя дробной части может быть запятая.
? Индекс массы тела необходимо округлить до одной цифры после запятой;
*/

// function calcBMI(weight, height) {
//   const rightWeight = Number(weight.replace(',', '.'));
//   const rightHeight = Number(height.replace(',', '.'));

//   const result = rightWeight / rightHeight ** 2;

//   return Number(result.toFixed(1));
// }

// const result = calcBMI('70,5', '1,85');

// console.log(result);

/*
? Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.
*/

// function min(a, b) {
//   return Math.min(a, b);
// }

// function min(a, b) {
//   if (a > b) {
//     return b;
//   }

//   return a;
// }

// console.log(min(-101, -0));

/*
? Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
? значения которых будут переданы в параметр dimensions в виде строки.
? Значения гарантированно разделены пробелом.
*/

// function getRectArea1(dimensions) {
//   const dmsArray = dimensions.split(' ');

//   return dmsArray[0] * dmsArray[1];
// }

// function getRectArea2(dimensions) {
//   const dmsArray = dimensions.split(' ');

//   let area = 1;

//   for (let num of dmsArray) {
//     area *= num;
//   }

//   return area;
// }

// console.log(getRectArea1('10 100'));
// console.log(getRectArea2('3 4'));

/*
? Напиши функцию logItems(items), которая получает массив и использует цикл for,
? который для каждого элемента массива будет выводить в консоль сообщение
? в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.
? Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango',
? а для индекса 2 выведет '3 - Ajax'.
*/

// const logItems = function (items) {
//   for (let index = 0; index < items.length; index += 1) {
//     console.log(`${index + 1} - ${items[index]}`);
//   }
// };

// const numbers = ['Mango', 'Poly', 'Ajax'];

// logItems(['Mango', 'Poly', 'Ajax']);

/*
? Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
? В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
? Порядковый номер имен и телефонов в строках указывают на соответствие.
? Количество имен и телефонов гарантированно одинаковое.
*/

// function printContactsInfo(names, phones) {
//   const namesArray = names.split(',');
//   const phonesArray = phones.split(',');

//   // console.log(namesArray, phonesArray);

//   for (let index = 0; index < namesArray.length; index += 1) {
//     console.log(`${namesArray[index]} - ${phonesArray[index]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// printContactsInfo(
//   'Vera,Carr,Violet,Sherman',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/*
? Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.
*/

// const findLargestNumber = function (numbers) {
//   let largestNumber = numbers[0];

//   for (let index = 1; index < numbers.length; index += 1) {
//     if (largestNumber < numbers[index]) {
//       largestNumber = numbers[index];
//     }
//   }

//   return largestNumber;
// };

// const result = findLargestNumber([1, 24, -0]);

// console.log(result);

/*
? Напишите функцию calcAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение.
? Все аругменты будут только числами. Тут покажи решение с псевдомасивом arguments и расскажи про его особенности
*/

// function calcAverage() {
//   let total = 0;

//   for (let num of arguments) {
//     console.log(num);
//     total += num;
//   }

//   console.log(arguments.length);

//   return total / arguments.length;
// }

// const result = calcAverage(5, 10, 17, 18);

// console.log(result);

/*----------------------*/

/*
? Напишите функции для работы с коллекцией обучающих курсов courses:
? addCourse(name) - добавляет курс в конец коллекции
? removeCourse(name) - удаляет курс из коллекции
? updateCourse(oldName, newName) - изменяет имя на новое
? Додати виключення (логи) у випадках коли курс є/нема в масиві
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//   courses.push(name);
//   console.log('Adding new course was successful');
// }

// function removeCourse(name) {
//   const courseIndex = courses.indexOf(name);

//   if (courseIndex === -1) {
//     console.log('Sorry, this course does not exist in array');
//     return;
//   }

//   courses.splice(courseIndex, 1);
//   console.log('Removing course was successful');
// }

// function updateCourse(oldName, newName) {
//   const courseIndex = courses.indexOf(oldName);

//   if (courseIndex === -1) {
//     console.log('Sorry, this course does not exist in array');
//     return;
//   }

//   courses.splice(courseIndex, 1, newName);
//   console.log('Updating of course name was successful');
// }

// // addCourse('TypeScript');

// // removeCourse('Java');

// updateCourse('C++', 'Java');

// const b = function () {
//   console.log(`HI!`);
// };

// function a(func) {
//   //   func();

//   return func;
// }

// console.log(a(b));

// console.log(courses);

// first()

// example 2

// function bar() {
//   console.log('bar');
// }

// function baz() {
//   console.log('baz');
// }

// function foo() {
//   console.log('foo');
//   bar();
//   baz();
// }

// foo();

// example 3

// const fn1 = function () {
//   console.log('fn1');
// };

// const fn2 = function () {
//   console.log('fn2');

//   fn1();
// };

// const fn3 = function () {
//   console.log('fn3');

//   fn2();
// };

// fn3();