/* ============ Операторы сравнения ============ */
console.log(10 < 15);
console.log(10 > 15);

// Приведение (преаобразование) типов к числу
console.log('10' < 15); // '10' приводится к числу

// Операторы равенства (== и ===) и неравенства (!= и !===)
// Нестрогое равенство и нестрогое неравенство преобразовывают в дпугой тип
// Всегда используем строгое равенство (===) и строгое неравенство (!==)
console.log(1 == '1'); // нестрогое равенство приводит строку к числу (или наоборот)
console.log(1 === '1'); // строгое равенство сравнивает и значения и типы, не преобразовывая их

/*
 * Операторы сравнения (<, >, <=, >=, ==, ===, !=, !==)
a > b і a < b - більше/менше
a >= b і a <= b - більше/менше або дорівнює
a == b - рівність «Нестрогі» оператори рівності == і != виконують перетворення типів порівнюваних значень у число
a != b - нерівність
a === b - строга рівність
a !== b - строга нерівність
 */

/*
 * Результатом сравнения будет буливое значение.
 * Строки сравниваются по unicode.
 * При сравнении строк, строки сравниваются посимвольно.
 * При сравнении разных типов, операнды приводятся к числу.
 * null не равен ничему кроме себя и undefined.
 * undefined не равен ничему кроме себя и null.
 */

/*
 * Приведение различных типов к числу:
 * true --> 1
 * false --> 0
 * '' --> 0
 * null --> 0
 * undefined --> 0
 */

//* Оператор меньше (<)
console.log(2 < 12); // true
console.log(12 < 2); // false
console.log('a' < 'b'); // true
console.log('b' < 'a'); // false
console.log('A' < 'a'); // true
console.log('apple' < 'Appleb'); // false
console.log('bananana' < 'apple'); // false
console.log(true < false); // false
console.log(false < true); // true

// * Оператор больше (>)
// console.log(10 > 20); // false
// console.log(20 > 10); // true

//* Оператор меньше или равно (<=)
console.log(5 <= 6); // true
console.log(5 <= 5); // true
console.log(5 <= 4); // false

//* Оператор больше или равно (>=)
console.log(5 >= 3); // true
console.log(5 >= 5); // true
console.log(3 >= 4); // false

//* Не строгое равно (==)
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == null); // true

console.log('123' == 123); // true
console.log(true == '1'); // true
console.log(4 == 5); // false

//* Строгое равно (===)
console.log('123' === 123); // false
console.log(null === null); // true
console.log(2 + 2 === 4); // true
console.log(0 === -0); // true

//* Не равно (!=)
console.log('4' != 4); // false

//* Строго не равно (!==)
console.log('4' !== 4); // true