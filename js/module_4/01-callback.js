// ? ========== Колбэк-функции ===========

/*
? Функция обратного вызова (callback) - это функция, которая передаётся другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию.
? Нужна в случаях, когда выполнение этой функции должно произойти после наступления какого-то события (например при нажатии на кнопку, или после получения результата от бекенда).
? Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров другие функции или возвращающая функцию как результат.
*/

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// // Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внури функции registerGuest через круглые скобки.
// // Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.

// /*
// ? Инлайн колбэки
// Если колбэк - функция маленькая и нужна только для передачи аргументом, её можно объявить прямо при вызове функции в которую передаём колбэк.
// Такая функция будет доступна только как значение параметра и больше нигде в коде.
// */

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest('Манго', function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest('Поли', function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// /*
// ? Несколько колбэков
// Функция может принимать произвольное количество колбэков.
// Колбэки применяются для обработки действий пользователя на странице, при обработке запросов на сервер, выполнения заранее неизвестных функций и т. п.
// В этом и заключается их суть - это функции предназначенные для отложенного выполнения.
// */

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

/*
? Абстрагирование повторения
Абстракция - скрытие деталей реализации. Позволяет думать о задачах на более высоком (абстрактном) уровне. Функции это хороший способ построения абстракций.
Например, скрипт выполняет какое-то действие определенное количество раз. Для этого можно написать цикл for.
for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

Можем ли мы абстрагировать «делать что-то N раз» как функцию? - да, напишем функцию, которая вызывает console.log() N раз.
function repeatLog(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

repeatLog(5);

Но что, если мы хотим сделать что-то, кроме логирования чисел? 
Поскольку «делать что-то» можно представить как функцию, а функции - это просто значения, мы можем передать действие как аргумент.
function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Передаем printValue как callback-функцию
repeat(3, printValue);
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2
*/

/*
? --------- Метод forEach --------
Перебирающий метод массива который используется как замена циклов for и for...of при работе с коллекцией данных.
массив.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
});

- Поэлементно перебирает массив.
- Вызызвает коллбек-функцию для каждого элемента массива.
- Ничего не возвращает.

Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array. 
бъявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, это задачи с прерыванием выполнения цикла. 
Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.
*/

/*
? ------------ setTimeout -----------
Отложенный вызов через n миллисекунд

const callback = function () {
	console.log('Выполнится через 2 секунды, после вызова этой функции')
}
setTimeout(callback, 2000);
*/
