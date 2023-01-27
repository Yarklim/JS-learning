//?-------------------------------------------------------
/*


*/

//?-------------------------------------------------------

/*
6 kyu
Count the smiley faces!

Учитывая массив (arr) в качестве аргумента, завершите функцию countSmileys, 
которая должна вернуть общее количество улыбающихся лиц.

Правила улыбающегося лица:

Каждый смайлик должен содержать допустимую пару глаз. Глаза могут быть отмечены как :или;
У смайлика может быть нос, но не обязательно. Допустимые символы для носа -или~
Каждое улыбающееся лицо должно иметь улыбающийся рот, который должен быть отмечен либо значком, )либоD
Не допускается использование дополнительных символов, кроме упомянутых.

Примеры допустимых смайликов: :) :D ;-D :~)
Недопустимые смайлики: ;( :> :} :]

Пример
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Примечание
В случае пустого массива верните 0. Вы не будете тестироваться с недопустимым вводом (ввод всегда будет массивом). 
Порядок элементов лица (глаза, нос, рот) всегда будет одинаковым.
*/
function countSmileys(arr) {
  const trueSmiles = [':)', ':D', ';-D', ';~D', ':~)'];
  let count = 0;

  for (const el of arr) {
    if (trueSmiles.includes(el)) count += 1;
  }

  return count;
}

// console.log(countSmileys([])); // 0
// console.log(countSmileys([':D', ':~)', ';~D', ':)'])); // 4
// console.log(countSmileys([':~>', ';)', ';>', ';-(', ':>', ';D', ':>'])); // 2
// console.log(countSmileys([':---)', '))', ';~~D', ';D'])); // 1
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
Decipher this!

Вам дается секретное сообщение, которое необходимо расшифровать. 
Вот что вам нужно знать, чтобы расшифровать его:

Для каждого слова:
вторая и последняя буквы меняются местами (например, Hello становится Holle)
первая буква заменяется кодом символа (например, H становится 72)
Примечание: специальные символы не используются, только буквы и пробелы.
*/
function decipherThis(str) {
  const strArr = str.split(' ');
  const tempStrArr = [];
  let charNum = '';
  const finalArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let tempStr = '';

    charNum = String.fromCodePoint(parseInt(strArr[i]));
    if (strArr[i].match(/[\D]\w*/g) == null) {
      tempStr = '';
    } else tempStr = strArr[i].match(/[\D]\w*/g);
    tempStrArr.push(charNum + '' + tempStr);
  }

  for (let el of tempStrArr) {
    if (el.length < 2) {
      finalArr.push(el);
    } else {
      let tempChar = el[el.length - 1];

      el = el.replace(el[el.length - 1], el[1]);

      el = el.replace(el[1], tempChar);

      finalArr.push(el);
    }
  }

  return tempStrArr;
}

// console.log(
//   decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')
// ); // 'Have a go at this and see how you do'
// console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
// console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'

// const str = ['eva', 'dima'];
// for (let el of str) {
//   el = el.replace(el[0], el[el.length - 1]);
// }

// console.log(str);
//?-------------------------------------------------------
/*
Build a pile of Cubes

Ваша задача построить здание, которое будет состоять из n кубиков. Куб внизу будет иметь объемн 3п^3н 
3
 , куб выше будет иметь объем(н−1)3(п-1)^3( н−1 ) 
3
 и так до вершины, которая будет иметь объем131^31 
3
 .

Вам дан общий объем m здания. Получив m, сможете ли вы найти количество n кубиков, которое вам нужно построить?

Параметром функции findNb (find_nb, find-nb, findNb, ...)будет целое число m, и вы должны вернуть целое число n, напримерн3+(н−1)3+(н−2)3+...+13знак равномп ^ 3 + (п-1) ^ 3 + (п-2) ^ 3 + ... + 1 ^ 3 = мн 
3
 +( н−1 ) 
3
 +( н−2 ) 
3
 +...+1 
3
 знак равном если такое существует или -1, если такого n нет.

Примеры:
найти Nb(1071225) --> 45

найти Nb(91716553919377) --> -1
*/
function findNb(m) {
  // your code
  return -1;
}

// console.log(findNb(4183059834009)); // 2022
// console.log(findNb(24723578342962)); // -1
// console.log(findNb(135440716410000)); // 4824
// console.log(findNb(40539911473216)); // 3568
//? ------------------------------------------------------
/*
Sums of Parts

Рассмотрим этот пример (массив, записанный в общем формате):
ls = [0, 1, 3, 6, 10]

Следующие его части:
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
Соответствующие суммы (составлены в виде списка): [20, 20, 19, 16, 10, 0]

Функция parts_sums(или ее варианты на других языках) будет принимать в качестве параметра список ls и возвращать список сумм его частей, как определено выше.

Другие примеры:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
Ноты
Взгляните на производительность: некоторые списки содержат тысячи элементов.
*/
function partsSums(ls) {
  const result = [];

  for (let i = 0; i < ls.length; i++) {
    result.push(ls.slice(i).reduce((acc, item) => acc + item, 0));
  }

  result.push(0);

  return result;
}

// console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]
// console.log(partsSums([1, 2, 3, 4, 5, 6])); // [21, 20, 18, 15, 11, 6, 0]
//? ------------------------------------------------------
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
function encrypt(text, n) {
  const cryptStr1 = [];
  const cryptStr2 = [];

  if (text === '' || n <= 0) {
    return text;
  }

  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      cryptStr2[i] = text[i];
    } else {
      cryptStr1[i] = text[i];
    }
  }
  let newStr = cryptStr1.join('') + cryptStr2.join('');
  let count = 0;

  //! Рекурсия?
  //   while (count <= n) {
  //     for (let j = 0; j < newStr.length; j++) {
  //       if (j % 2 === 0) {
  //         cryptStr2[j] = newStr[j];
  //       } else {
  //         cryptStr1[j] = newStr[j];
  //       }
  //     }
  //     count += 1;
  //   }

  return newStr;
}

function decrypt(encryptedText, n) {}

// console.log(encrypt('012345', 2)); // "135024"  ->  "304152"
// console.log(encrypt('This is a test!', 1)); // "hsi  etTi sats!"
// console.log(encrypt('This is a test!', 2)); // "s eT ashi tist!"
// console.log(encrypt("This kata is very interesting!", 1)); // "hskt svr neetn!Ti aai eyitrsig"

// console.log(decrypt(' Tah itse sits!', 3)); // "This is a test!"
// console.log(decrypt("This is a test!", 4)); // "This is a test!"
// console.log(decrypt('This is a test!', -1)); // "This is a test!"
// console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1)); // "This kata is very interesting!"

//? ------------------------------------------------

/*
5 Product of consecutive Fib numbers

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
