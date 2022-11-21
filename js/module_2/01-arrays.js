//? =============== arrays ============== //

// Вывод массива в консоль console.table()

//? Масив - структура даних для зберігання і маніпулювання колекцією індексованих значень.
// Використовується для зберігання впорядкованих колекцій даних, наприклад, списку курортів, товарів, клієнтів в готелі тощо.

//? Створення
// Масив оголошується і береться у квадратні дужки [] - літералом масиву. Всередині дужок кожен елемент масиву розділяється комою.

// const clients = ["Mango", "Poly", "Ajax"];

//? Перевизначення
// На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення.

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

//? Ітерація по масиву - цикл for
// Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

// for (let i = 0; i < clients.length; i += 1) {
// 	clients[i] += '-1';
// }
// console.table(clients);

// Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс],
// де індекс - це значення лічильника циклу від 0 і до останнього індексу масиву, тобто менше, але не дорівнює його довжині.

//? Цикл for...of
// Конструкція for...of оголошує цикл, що перебирає ітерабельні об'єкти, як-от масиви і рядки.
// Тіло циклу буде виконуватися для значення кожного елемента.
// Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

// for (const variable of iterable) {
//   // тіло циклу
// }

// variable — змінна, яка буде зберігати значення елемента на кожній ітерації.
// iterable — колекція, яка містить ітерабельні (що можна порахувати) елементи, наприклад масив.

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

//? Будемо шукати ім'я клієнта в масиві імен, якщо знайшли - перериваємо цикл, оскільки немає сенсу шукати далі, імена у нас унікальні.
// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   // Якщо не збігається, то на цій ітерації нічого не робимо
// }

// console.log(message); // Клієнт з таким ім'ям є в базі даних!

//? Використовуємо цикл для виведення тільки чисел, більших за певне значення.
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

//? Складні типи - об'єкти, масиви, функції присвоюються за посиланням, тобто змінна просто отримує посилання на вже існуючий об'єкт.
// const a = ["Mango"];
// Оскільки a - це масив, в b записується посилання на вже існуючий
// масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// b також змінилось, тому що b, як і a,
// просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]

//? ============= Методи масиву ============//

//? ---- Метод split() -----
// Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter.
// Якщо роздільник - це порожній рядок, то створиться масив окремих символів.
// Роздільником може бути один або декілька символів.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

//? ------ Метод join(delimiter) об'єднує елементи масиву у рядок -------
// У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter.
// Тобто ця операція протилежна методу рядків split(delimiter).

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

//? ------ Метод indexOf() --------
// indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві, або число - 1, якщо такий елемент відсутній.
// Використовуйте indexOf тоді, коли необхідно отримати сам індекс елемента.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

//? ------ Метод includes() -------
// includes(value) перевіряє, чи містить масив елемент зі значенням value і повертає true або false відповідно.
// Застосування цього методу корисне в ситуаціях, коли необхідно перевірити, чи є елемент в масиві і не важлива його позиція(індекс).

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

//? ------ Методи push() і pop(), shift i unshift -------
// Додають або видаляють крайні елементи масиву.
// Працюють тільки з крайнім лівим і крайнім правим елементом, і не можуть вставити або видалити елемент з довільної позиції.
//? Метод push() додає один або декілька елементів наприкінці масиву, без необхідності зазначати індекси елементів, що додаються.
// Повертає довжину масиву після додавання елементів.

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3, 10, 12);
// console.log(numbers); // [1, 2, 3, 10, 12]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 10, 12, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 10, 12, 4, 5]

//? ------ Методы .shift() удаляет элемент из начала массива, .unshift() добавляет элемент в начало массива
// const array = [1, 2, 3, 4, 5];

// const firstEl = array.shift();

// console.log(array);
// console.log(firstEl);

/* --------- */

// const array = [1, 2, 3, 4, 5];

// array.unshift(8);

// console.log(array);

/* --------- */

// const array = [1, 2, 3, 4, 5];

// const newArray = array.concat([[1]], [['STR']]);

// newArray.shift();

// console.log(array);
// console.log(newArray);

//? ------ Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент. Якщо масив порожній, метод повертає undefined -------
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

//? -------- Метод slice() -------
// slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його.
// Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

//? --------- Метод splice() ---------
// Швейцарський ніж для роботи з масивами, якщо вихідний масив необхідно змінити. Видаляє, додає і замінює елементи у довільному місці масиву.

//? Видалення
// Щоб видалити елементи в масиві, передаються два аргументи.

// splice(position, num)

// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
// Метод splice змінює вихідний масив і повертає масив, що містить видалені елементи.
// Наприклад, у нас є масив оцінок, який містить п'ять чисел від 1 до 5.

// const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

//? Додавання
// Для того, щоб додати один або декілька елементів в масив, необхідно передати три або більше аргументи, за такої умови, другий аргумент повинен дорівнювати нулю.

// splice(position, 0, new_element_1, new_element_2, ...)

// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
// Наприклад, у нас є масив з назвами кольорів у вигляді рядків. Додамо новий колір перед елементом з індексом 2.

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

//? Заміна
// Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових.
// Для цього необхідно передати мінімум три аргументи.
// Кількість елементів, що видаляються і додаються, може не збігатися.

// splice(position, num, new_element_1, new_element_2, ...)

// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
// Наприклад, у нас є масив мов програмування з чотирьох елементів.

// const languages = ["C", "C++", "Java", "JavaScript"];

// Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

//? ------- Метод concat() --------
// Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий.
// Порядок аргументів методу впливає на порядок елементів нового масиву.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]
