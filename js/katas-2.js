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

// console.log(decrypt('304152', 2)); // "012345"
// console.log(decrypt('This is a test!', 0)); // "This is a test!"
// console.log(decrypt('hsi  etTi sats!', 1)); // "This is a test!"
// console.log(decrypt('s eT ashi tist!', 2)); // "This is a test!"
// console.log(decrypt(' Tah itse sits!', 3)); // "This is a test!"
// console.log(decrypt('This is a test!', 4)); // "This is a test!"
// console.log(decrypt('This is a test!', -1)); // "This is a test!"
// console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1)); // "This kata is very interesting!"

// console.log(encrypt('012345', 2)); // "304152"
// console.log(encrypt('This is a test!', 0)); // "This is a test!"
// console.log(encrypt('This is a test!', 1)); // "hsi  etTi sats!"
// console.log(encrypt('This is a test!', 2)); // "s eT ashi tist!"
// console.log(encrypt('This is a test!', 3)); // " Tah itse sits!"
// console.log(encrypt('This is a test!', 4)); // "This is a test!"
// console.log(encrypt('This is a test!', -1)); // "This is a test!"
// console.log(encrypt('This kata is very interesting!', 1)); // "hskt svr neetn!Ti aai eyitrsig"

//? ------------------------------------------------

/*
6 kyu
A Rule of Divisibility by 13

«Правило делимости — это сокращенный способ определения, делится ли заданное целое число 
на фиксированный делитель без выполнения деления, обычно путем проверки его цифр».

Когда вы делите последовательные степени 10 на 13, вы получаете следующие остатки от целочисленных делений:

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
/*
6 kyu
Reverse or rotate?
Вход представляет собой строку str цифр. 
Разрежьте строку на куски (кусок здесь — это подстрока исходной строки) 
размера sz (игнорируйте последний кусок, если его размер меньше sz).

Если блок представляет собой целое число, например, сумма кубов его цифр делится на 2, 
переверните этот блок; в противном случае поверните его влево на одну позицию. 
Соедините вместе эти измененные фрагменты и верните результат в виде строки.

Если

szis <= 0or if str is empty return ""
sz больше (>), чем длина str невозможно взять кусок размера, sz следовательно, вернуть "".
Примеры:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

function revrot(str, sz) {
  // your code
}

// console.log(revrot('1234', 0)); // ''
// console.log(revrot('', 0)); // ''
// console.log(revrot('1234', 5)); // ''
// console.log(revrot('123456987654', 6)); // "234561876549"
// console.log(revrot('664438769', 8)); // "67834466"
//? -----------------------------------------------------
/*
4 kyu
Strings Mix

Имея две строки s1 и s2, мы хотим визуализировать, насколько они различаются. 
Мы будем учитывать только строчные буквы (от a до z). 
Сначала давайте подсчитаем частоту каждой строчной буквы в s1 и s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

Таким образом, максимум для «a» в s1 и s2 равен 4 из s1; максимум для «b» равен 3 из s2. 
В дальнейшем мы не будем рассматривать буквы, максимальное количество которых меньше 
или равно 1.

Мы можем резюмировать различия между s1 и s2 в следующей строке: 
"1:aaaa/2:bbb" где 1 in 1:aaaa означает строку s1 и aaaa потому, что максимум для a равен 4. 
Таким же образом 2:bbb обозначается строка s2 и bbb потому что максимум для bравен 3.

Задача состоит в том, чтобы создать строку, в которой каждая строчная буква s1 или s2 
встречается столько раз, сколько ее максимум, если этот максимум строго больше 1 ; 
перед этими буквами будет стоять номер строки, в которой они появляются, 
с их максимальным значением и :. Если максимум находится как в s1, так и в s2, 
префикс равен =:.

В результате подстроки (например, подстрока 2:nnnnn или 1:hhh; она содержит префикс) 
будут располагаться в порядке убывания их длины, а при одинаковой длине — 
в возрастающем лексикографическом порядке (буквы и цифры — более точно отсортированы 
по кодовой точке); различные группы будут разделены символом '/'. 


Надеюсь, другие примеры могут прояснить это.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

function mix(s1, s2) {
  if (s1 === s2) return '';
  const arrS1 = s1.match(/[a-z]/g).sort();
  const arrS2 = s2.match(/[a-z]/g).sort();

  const objS1 = {};
  const objS2 = {};

  for (let letter of arrS1) {
    if (!objS1[letter]) objS1[letter] = 0;
    objS1[letter] += 1;
  }

  for (let letter of arrS2) {
    if (!objS2[letter]) objS2[letter] = 0;
    objS2[letter] += 1;
  }

  const letters1 = Object.entries(objS1)
    .filter((el) => el[1] > 1)
    .sort((a, b) => b[1] - a[1]);

  const letters2 = Object.entries(objS2)
    .filter((el) => el[1] > 1)
    .sort((a, b) => b[1] - a[1]);

  return letters2;
}

// console.log(mix('Are they here', 'yes, they are here')); // "2:eeeee/2:yy/=:hh/=:rr"
// console.log(mix('A generation must confront the looming ', 'codewarrs')); // "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr"
// console.log(mix('codewars', 'codewars')); // ''

//? ------------------------------------------------------
/*
5 kyu
Common Denominators

Общие знаменатели

У вас будет список рациональных чисел в виде

{ {numer_1, denom_1} , ... {numer_n, denom_n} } 
or
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or
[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
где все числа являются положительными целыми числами. 
Вы должны получить результат в виде:

(N_1, D) ... (N_n, D) 
or
[ [N_1, D] ... [N_n, D] ] 
or
[ (N_1', D) , ... (N_n, D) ] 
or
{{N_1, D} ... {N_n, D}} 
or
"(N_1, D) ... (N_n, D)"
в зависимости от языка (см. примеры тестов), в котором D как можно меньше и

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Пример:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Примечание:
В связи с тем, что первые переводы были написаны давно - более 6 лет 
- в этих первых переводах есть только несократимые дроби.

В более новых переводах есть некоторые сократимые дроби. 
Чтобы быть в безопасности, лучше проделать немного больше работы, упростив дроби, 
даже если это не обязательно.
*/

function convertFrac(lst) {
  //Your code here
}

// console.log(
//   convertFrac([
//     [1, 2],
//     [1, 3],
//     [1, 4],
//   ])
// ); // "(6,12)(4,12)(3,12)"

//? --------------------------------------------------------
function closeCompare(a, b, margin) {
  return (margin && Math.abs(a - b)) >= margin
    ? 1
    : a < b
    ? -1
    : a === b
    ? 0
    : 1;
}
// console.log(closeCompare(8.1, 5, 3));
//? ----------------------------------------------------------
class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z'];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
  return players.length >= goose
    ? players[goose - 1].name
    : players[(goose % players.length) - 1].name;
}

// console.log(duckDuckGoose(players, 10)); // z
// console.log(duckDuckGoose(players, 28)); // g
//? --------------------------------------------------------
function lowercaseCount(str) {
  return str.match(/[a-z]/g).length;
}

// console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));

//? --------------------------------------------------------
/*
Вы «компьютерный эксперт» местной спортивной ассоциации (CAA). 
На соревнования приезжает множество команд бегунов. 
Каждый раз вы получаете строку со всеми результатами гонок каждой участвовавшей команды. 
Например, вот строка, показывающая индивидуальные результаты команды из 5 бегунов:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Каждая часть строки имеет следующий вид: h|m|s где h, m, s 
(h — часы, m — минуты, s — секунды) — положительное или нулевое целое число 
(представленное в виде строк) с одной или двумя цифрами. 
Подстроки во входной строке разделяются знаком , или ,.

Для сравнения результатов команд вас просят предоставить три статистики; 
диапазон, среднее и медианное значение .

Range: разница между самым низким и самым высоким значениями. В {4, 6, 9, 3, 7} 
самое низкое значение — 3, а самое высокое — 9, поэтому диапазон составляет 9 — 3 = 6.

Mean or Average: Чтобы вычислить среднее значение, сложите все числа, 
а затем разделите сумму на общее количество чисел.

Median: В статистике медиана — это число, отделяющее верхнюю половину выборки данных от нижней половины. 
Медиану конечного списка чисел можно найти, расположив все наблюдения от наименьшего значения 
к наибольшему и выбрав среднее (например, медиана {3, 3, 5, 9, 11} равна 5), 
когда существует нечетное количество наблюдений. Если имеется четное количество наблюдений, 
то не существует единого среднего значения; тогда медиана определяется как среднее значение 
двух средних значений (медиана {3, 5, 6, 9} равна (5 + 6)/2 = 5,5).

Ваша задача — вернуть строку, содержащую эти три значения. Для примера, приведенного выше, 
строковый результат будет

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

вида: "Диапазон: чч|мм|сс Среднее: чч|мм|сс Медиана: чч|мм|сс"`

где hh, mm, ss — целые числа (представленные строками), состоящие из двух цифр .

Примечания :
если результат в секундах равен ab.xy... он будет сокращен до ab.
если данная строка равна "", вы вернете ""
*/

function stat(strg) {
  // your code
}

// console.log(stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17')); // "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"
// console.log(
//   stat('02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41')
// ); // "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"
//? --------------------------------------------------------
function alignRight(text, width) {
  if (text.length === width) return text;
  if (text.length < width) return text.padStart(width, ' ');

  let countIndex = 0;
  const trimStr = [];

  while (text.length > countIndex) {
    trimStr.push(text.slice(countIndex, width + countIndex));
    countIndex += width;
  }

  return trimStr.map((str) => str.padStart(width, ' ')).join('\n');
}

// console.log(alignRight('Two lines, I am', 10)); // 'Two lines,\n      I am'
// console.log(alignRight('abc def', 10)); // '   abc def'
// console.log(alignRight('I take up the whole line', 24)); // 'I take up the whole line'

//? -----------------------------------------------------------
// Создание матрицы
const MATRIX_WIDTH = 3;
const MATRIX_HEIGTH = 3;
const matrix = Array.from({ length: MATRIX_WIDTH }).map(() =>
  Array.from({ length: MATRIX_HEIGTH }).map((_) => '*')
);

// console.log(matrix);

//? ------------------------------------------------------------
