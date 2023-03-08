//?-------------------------------------------------------
/*
6 kyu
The Supermarket Queue

В супермаркете очередь к кассам самообслуживания. 
Ваша задача — написать функцию для расчета общего времени, 
необходимого всем покупателям для оформления заказа!

вход
клиенты: массив положительных целых чисел, представляющих очередь. 
Каждое целое число представляет покупателя, а его значение — количество времени, 
которое ему требуется для оформления заказа.
n: положительное целое число, количество касс.
вывод
Функция должна возвращать целое число — общее требуемое время.

Важный
Пожалуйста, ознакомьтесь с примерами и пояснениями ниже, 
чтобы убедиться, что вы правильно поняли задачу :)

Примеры
queueTime([5,3,4], 1)
should return 12
because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
should return 10
because here n=2 and the 2nd, 3rd, and 4th people in the 
queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
should return 12
Уточнения
Существует только ОДНА очередь, обслуживающая множество касс, и
Порядок очереди НИКОГДА не меняется, и
Первый человек в очереди (то есть первый элемент в массиве/списке) переходит к кассе, 
как только она освобождается.
NB Вы должны исходить из того, что все входные данные теста будут действительными, 
как указано выше.

PS Ситуацию в этом ката можно сравнить с идеей пула потоков, более связанной с информатикой, 
в отношении одновременного запуска нескольких процессов: https://en.wikipedia.org/wiki/Thread_pool
*/
function queueTime(customers, n) {
  if (customers.length === 0) return 0;
  if (n >= customers.length) return Math.max(...customers);
  if (n === 1) return customers.reduce((acc, item) => acc + item, 0);

  const cashierQueues = new Set();

  for (let i = 0; i < n; i++) {
    cashierQueues.add(i);
  }

  for (let i = 0; i < customers.length; i++) {
    cashierQueues.add(
      cashierQueues.indexOf(Math.min(cashierQueues)),
      Math.min(cashierQueues) + customers[i]
    );
  }

  return Math.max(cashierQueues);

  //   const cashierQueues = [0] * n;

  //   for (let i = 0; i < customers.length; i++) {
  //     cashierQueues.sort();
  //     cashierQueues[0] += i;
  //   }

  //   return Math.max(cashierQueues);
}
// console.log(queueTime([], 1)); // 0
// console.log(queueTime([1, 2, 3, 4, 5], 100)); // 5
// console.log(queueTime([10, 2, 3, 3], 2)); // 10
// console.log(queueTime([10, 9, 3, 3, 8, 4], 3)); // 13
// console.log(queueTime([5, 3, 4], 1)); // 12
//?-------------------------------------------------------

/*
5 kyu
Primes in numbers

Для положительного числа n > 1 найдите разложение n на простые множители.
 Результатом будет строка следующего вида:

 "(p1**n1)(p2**n2)...(pk**nk)"
с p (i) в порядке возрастания и n (i) пустым, если n (i) равно 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/
function primeFactors(n) {
  //your code here
}
// console.log(primeFactors(7775460)); // "(2**2)(3**3)(5)(7)(11**2)(17)"
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

/*
5 kyu
Sum of Pairs

Учитывая список целых чисел и одно значение суммы, верните первые два значения 
(анализируйте слева) в порядке появления, которые в сумме образуют сумму.

Если имеется две или более пар с требуемой суммой, то решением является пара, 
второй элемент которой имеет наименьший индекс.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Отрицательные числа и повторяющиеся числа могут и будут появляться.

ПРИМЕЧАНИЕ. Также будут тестироваться списки длиной более 10 000 000 элементов. 
Убедитесь, что ваш код не истекает по тайм-ауту.

O(n) time | O(n) space
*/
function sumPairs(ints, s) {
  const nums = {};
  for (const currentNum of ints) {
    const potentialMatch = s - currentNum;

    if (potentialMatch in nums) {
      return [currentNum, potentialMatch];
    } else {
      nums[currentNum] = true;
    }
  }
  return [];
}
// console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)); // [1, 7]
// console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)); // [0, -6]
// console.log(sumPairs([20, -13, 40], -7)); // undefined
// console.log(sumPairs([2, 1, 3, 4, 1, 0], 2)); // [1, 1]
// console.log(sumPairs([4, -2, 3, 3, 4], 8)); // [4, 4]

//? ------------------------------------------------
/*
5 kyu
Extract the domain name from a URL

Напишите функцию, которая при задании URL-адреса в виде строки анализирует только доменное имя 
и возвращает его в виде строки. Например:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/
function domainName(url) {
  let indexStart = null;
  let indexEnd = url.lastIndexOf('.');

  if (url.indexOf('/') !== -1) {
    indexStart = url.indexOf('/') + 2;
  } else {
    indexStart = url.indexOf('.') + 1;
  }
  return url.slice(indexStart, indexEnd);
  //   return indexStart;
}
console.log(domainName('http://google.com'));
console.log(domainName('https://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('www.xakep.ru'));

//user.match(/(?<=\<)(\S+)(?=>)/gm).join('');
//? ------------------------------------------------
/*
5 kyu
Calculating with Functions

На этот раз мы хотим написать вычисления с использованием функций и получить результаты. 
Давайте посмотрим на некоторые примеры:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Требования:

Должна быть функция для каждого числа от 0 ("ноль") до 9 ("девять")
Должна быть функция для каждой из следующих математических операций: плюс, минус, умножить, разделить на
Каждое вычисление состоит ровно из одной операции и двух чисел
Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
Деление должно быть целочисленным . Например, это должно возвращать 2, а не 2.666666...:
eight(dividedBy(three()));
*/
function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {}
function dividedBy() {}

// console.log(seven(times(five()))); // 35
// console.log(four(plus(nine()))); // 13
// console.log(eight(minus(three()))); // 5
// console.log(six(dividedBy(two()))); // 3
// console.log(eight(dividedBy(three()))); // 2
//? ---------------------------------------------------
