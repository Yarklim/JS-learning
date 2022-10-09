/* ============= JavaScript Review =========== */

// Базовые примитивные типы: number, bigInt, symbol, string, boolean, null, undefined.

//? ========= Ввод пользователя ==========
// ======================================

//? Методы confirm() и prompt()
//? confirm() - виводить модальне вікно з повідомленням, і дві кнопки, Ok і Cancel.
// Натискаючи на Ok, результатом будет true, натискаючи на Cancel - повертається false.

// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
const isComing = confirm('Please confirm hotel reservation');
console.log(isComing);

//? prompt() - виводить модальне вікно з полем введення і кнопками Ok і Cancel.
// Натискаючи на Ok, результатом буде те, що ввів користувач, у випадку Cancel - повертається null.

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// і зберігаємо результат виклику prompt у змінну.
const hotelName = prompt('Please enter desired hotel name');
console.log(hotelName);

// Важлива особливість prompt полягає в тому, що незалежно від того, що ввів користувач, завжди повернеться рядок. Тобто, якщо користувач ввів 5, то повернеться не число 5, а рядок "5".

const value = prompt('Please enter a number!');
console.log(typeof value); // "string"
console.log(value); // "5"

// Чтобы привести prompt к числу, необходимо поставить перед ним Number(prompt('Enter number')) или +prompt('Enter number'), или привести к числу позже:
const shouldRenew = confirm('Do you whant subscribe?');

console.log(shouldRenew);

// Enter quantity items
let quantity = prompt('Enter quantity items'); /* prompt return string */
quantity = Number(quantity); /* переназначение в число */

console.log(quantity);
console.log(typeof quantity);

// =====================================
// =====================================

//? ========= Переменные и типы ===========
// Переменные используются для хранения данных и состоят из идентификатора (имени) и области в памяти,
// где хранится их значение.
// Идентификатор - это имя переменной, функции или класса.
// Неопределенная (undefined) - это переменная, которая была объявлена ключевым слово let, но не инициализирована значением.
// По умолчанию ей присваивается начальное значение undefined.
// Необъявленная (undeclared или not defined) - это переменная, которая не была объявлена в доступной области видимости.
// Попытка обратиться к пременной до её объявления вызовет ошибку.
