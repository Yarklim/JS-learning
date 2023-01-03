//?-------------------------------------------------------

/*
Simple Encryption #1 - Alternating Split

Реализуйте алгоритм псевдошифрования, который для заданной строки 
S и целого числа N объединяет все символы с нечетным индексом S со всеми 
символами с четным индексом S, этот процесс следует повторять несколько N раз.

Примеры:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Вместе с функцией шифрования вы также должны реализовать функцию дешифрования, 
которая меняет процесс.

Если строка S является пустым значением или целое число N не является 
положительным, вернуть первый аргумент без изменений.
*/
function encrypt(text, n) {}

function decrypt(encryptedText, n) {}

// console.log(encrypt('This is a test!', 0)); // "This is a test!"
// console.log(encrypt('This is a test!', 1)); // "hsi  etTi sats!"
// console.log(encrypt('This is a test!', 2)); // "s eT ashi tist!"
// console.log(encrypt("This kata is very interesting!", 1)); // "hskt svr neetn!Ti aai eyitrsig"

// console.log(decrypt(' Tah itse sits!', 3)); // "This is a test!"
// console.log(decrypt("This is a test!", 4)); // "This is a test!"
// console.log(decrypt('This is a test!', -1)); // "This is a test!"
// console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1)); // "This kata is very interesting!"

//? ------------------------------------------------

/*
Rot13

ROT13 — это простой шифр с заменой букв, который заменяет букву буквой через 13 букв после нее в алфавите. 
ROT13 является примером шифра Цезаря.

Создайте функцию, которая принимает строку и возвращает строку, зашифрованную с помощью Rot13. 
Если в строку включены числа или специальные символы, они должны быть возвращены как есть. 
Сдвинуты должны быть только буквы латинского/английского алфавита, как в оригинальной "реализации" Rot13.
*/
function rot13(message) {
  //your code here
}
// console.log(rot13(input)); // expected

//? ------------------------------------------------
/*
Product of consecutive Fib numbers

Числа Фибоначчи — это числа в следующей целочисленной последовательности (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

такие как

F(n) = F(n-1) + F(n-2), где F(0) = 0 и F(1) = 1.

Имея число, скажем, prod (для произведения), мы ищем два числа Фибоначчи F(n) и F(n+1), проверяя

F(n) * F(n+1) = произв.

Ваша функция productFib принимает целое число (prod) и возвращает массив:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
в зависимости от языка, если F(n) * F(n+1) = prod.

Если вы не найдете два последовательных подтверждения F (n) F(n) * F(n+1) = prod, вы вернетесь

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) является наименьшим из таких, как F(n) * F(n+1) > prod.

Некоторые примеры возврата:
(зависит от языка)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
Примечание:
Вы можете увидеть примеры для вашего языка в разделе "Образцы тестов".
*/
function productFib(prod) {
  // ...
}
// console.log(productFib(4895)); // [55, 89, true]
// console.log(productFib(5895)); // [89, 144, false]
// console.log(productFib(74049690)); // [6765, 10946, true]
//? ------------------------------------------------
