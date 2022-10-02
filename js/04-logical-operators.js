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

