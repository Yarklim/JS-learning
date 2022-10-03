/* ============ Логические операторы (Boolean) (&& - и) (|| - или) (! - не) ============ */

// Приведение к булю на примере Boolean(value)
console.log(Boolean(5)); // true
console.log(Boolean('Yar')); // true
console.log(Boolean('0')) // true
console.log(Boolean('falce')) // true
// Всего шесть значений приводится к false:
console.log(Boolean(0)); // false
console.log(Boolean(NaN)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean('')) // false
console.log(Boolean("")) // false
console.log(Boolean(false)) // false

// Логичесоке И - &&
console.log(5 && 6 && 7 && 'hello'); // hello (если все значения true - возвращается значение последнего операнда)
console.log(5 && false && 7 && 'hello') // false (логическое И запинается на false и возвращает его)
console.log(5 && 6 && 0 && 'hello') // 0 (логическое И запинается на false и возвращает его (0 - это false))

// Логическое ИЛИ - ||
// Заапинается на true, возвращает то, на чём запнулось или последний операнд
console.log(5 || 6 || 0 || 'hello') // 5
console.log(false || 6 || 0 || 'hello') // 6
console.log(false || '' || 0 || 'hello') // hello
console.log(false || '' || 0 || null) // null (если ни одно из значение не true, то возвращается последнее значение)

// Логическое НЕ - ! (не true, не false)
// Делает инверсию правда > ложь и ложь > правда
console.log(!false); // true
console.log(!true); // false
console.log(!0); // true
console.log(!1); // false

/*
 * Логические операторы (&& || !)
 */

//* && - запинается на лжи
//* Если все операнды были истинными, возвращается последний.
//* Если результат false, останавливается и возвращает исходное значение этого операнда.
// const result = 4 && 0 && 'Hello!';

// console.log(result);

//* || - запинается на правде
//* Возвращает первое истинное значение или последнее, если такое значение не найдено.

// const username = prompt('Your name?').trim() || 'Anonymus';

// console.log(`Hello ${username}`);

//* ! - инвертирует правду в ложь, а ложь в правду

// console.log(!1);

//? Логические операторы
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);

//? Преобразование типов
// console.log(2 + 5 + '' + 1 + 0);
// console.log('1' / 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);
// console.log(4 + 5 === 8 || 5 * 4 === 20 || 'q' + 'w' >= 'qw');