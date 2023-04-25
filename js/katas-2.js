//?-------------------------------------------------------
/*
6
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
function encrypt(text, n) {
  if (text === '' || n <= 0) {
    return text;
  }
  let result = text;
  for (let i = 0; i < n; i++) {
    let odd = '';
    let even = '';

    for (let j = 0; j < result.length; j++) {
      if (j % 2 === 0) {
        even += result[j];
      } else {
        odd += result[j];
      }
    }
    result = odd + even;
  }
  return result;
}

function decrypt(encryptedText, n) {
  if (encryptedText === '' || n <= 0) {
    return encryptedText;
  }
  let result = encryptedText;

  for (let i = 0; i < n; i++) {
    let halfLen = Math.floor(result.length / 2);
    let odd = result.slice(0, halfLen + (result.length % 2));
    let even = result.slice(halfLen + (result.length % 2));
    result = '';
    for (let j = 0; j < halfLen + (result.length % 2); j++) {
      result += odd[j] + (even[j] || '');
    }
  }
  return result;
}

// console.log(encrypt('012345', 2)); // "135024"  ->  "304152"
// console.log(encrypt('This is a test!', 0)); // "This is a test!"
// console.log(encrypt('This is a test!', 1)); // "hsi  etTi sats!"
// console.log(encrypt('This is a test!', 2)); // "s eT ashi tist!"
// console.log(encrypt('This is a test!', 3)); // " Tah itse sits!"
// console.log(encrypt('This is a test!', 4)); // "This is a test!"
// console.log(encrypt('This is a test!', -1)); // "This is a test!"
// console.log(encrypt('This kata is very interesting!', 1)); // "hskt svr neetn!Ti aai eyitrsig"

// console.log(decrypt('This is a test!', 0)); // "This is a test!"
// console.log(decrypt('hsi  etTi sats!', 1)); // "This is a test!"
// console.log(decrypt('s eT ashi tist!', 2)); // "This is a test!"
// console.log(decrypt(' Tah itse sits!', 3)); // "This is a test!"
// console.log(decrypt('This is a test!', 4)); // "This is a test!"
// console.log(decrypt('This is a test!', -1)); // "This is a test!"
// console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1)); // "This kata is very interesting!"

//? ------------------------------------------------

const str = 'fjd3I R9';
const str2 = 'DSJKHD23';
const REGEXP = str2.match(/[A-z + \d + \S]/g);

// console.log(REGEXP);

//? ------------------------------------------------
/*
7 kyu
Recursion 101

В этом Ката вам будут даны два положительных целых числа a, b и ваша задача будет состоять 
в том, чтобы применить следующие операции:

i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
a и b оба будут ниже 10E8.
*/

function solve(a, b) {
  if (a === 0 || b === 0) return [a, b];
}

// console.log(solve(6, 19)); // [6,7]
// console.log(solve(2, 1)); // [0, 1]
// console.log(solve(22, 5)); // [0, 1]
// console.log(solve(2, 10)); // [2, 2]

//? ------------------------------------------------
/*
8 kyu
Simple validation of a username with regex
Напишите простое регулярное выражение для проверки имени пользователя. Допустимые символы:
строчные буквы,
числа,
нижнее подчеркивание
Длина должна быть от 4 до 16 символов (включая оба).
*/
function validateUsr(username) {
  const res = /[a-z]?(\d*)?(\_*)/g.test(username);
  return res;
}

// console.log(validateUsr('asddsa')); // true
// console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas')); // false
// console.log(validateUsr('asd43_34')); // true

//? ------------------------------------------------
/*
6 kyu
A Rule of Divisibility by 13

«Правило делимости — это сокращенный способ определения, делится ли заданное целое число 
на фиксированный делитель без выполнения деления, обычно путем проверки его цифр».

Когда вы делите последовательные степени на, 10вы 13получаете следующие остатки от целочисленных делений:

1, 10, 9, 12, 3, 4потому что:

10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)

Затем весь узор повторяется. Отсюда следующий метод:

Умножить

самая правая цифра числа с самой левой цифрой в последовательности, показанной выше,
вторая самая правая цифра со второй самой левой цифрой числа в последовательности.
Цикл продолжается, и вы суммируете все эти продукты. Повторяйте этот процесс, 
пока последовательность сумм не станет стационарной .

Пример:
Какой остаток при 1234567делении на 13?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)
Следовательно, следуя методу, мы получаем:

 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

Повторяем процесс с числом 178:

8x1 + 7x10 + 1x9 = 87

и снова с 87:

7x1 + 8x10 = 87

С этого момента последовательность является стационарной (мы всегда получаем 87), 
а остаток от 1234567by 13такой же, как остаток от 87by 13(т.е. 9).

Задача:
Вызовите thirtфункцию, которая обрабатывает эту последовательность операций над целым числом n (>=0). 
thirt вернет стационарный номер.

thirt(1234567)вычисляет 178, затем 87, затем 87 и возвращает 87.

thirt(321)вычисляет 48, 48 и возвращает48
*/
function thirt(n) {
  // your code
}

// console.log(thirt(8529)); // 79
// console.log(thirt(85299258)); // 31
// console.log(thirt(1111111111)); // 71
// console.log(thirt(987654321)); // 30
//? ------------------------------------------------------------
let value = 0;
let i = 0;

function rec(n) {
  i++;
  if (i > n) return;
  return 1 + rec(n - 1);
}
console.log(rec(15));
// console.log(value);
