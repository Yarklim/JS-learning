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

//? ----------------------------------------------------------
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

Median: В статистике медиана — это число, отделяющее верхнюю половину 
выборки данных от нижней половины. 
Медиану конечного списка чисел можно найти, расположив все наблюдения от наименьшего 
значения 
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

//? -----------------------------------------------------------

function mix(s1, s2) {
  if (s1 === s2) return '';

  const obj1 = {};
  const obj2 = {};
  const lettersArrr = s1.match(/[a-z]/g);

  for (const el of s1) {
    if (lettersArrr.includes(el)) {
      if (!obj1[el]) obj1[el] = 0;
      obj1[el] += 1;
    }
  }

  for (const el of s2) {
    if (lettersArrr.includes(el)) {
      if (!obj2[el]) obj2[el] = 0;
      obj2[el] += 1;
    }
  }

  const sortLetters1 = Object.entries(obj1)
    .filter((el) => el[1] > 1)
    .sort((a, b) => b[1] - a[1]);
  const sortLetters2 = Object.entries(obj2)
    .filter((el) => el[1] > 1)
    .sort((a, b) => b[1] - a[1]);

  let result = '';

  return sortLetters2;
}
// console.log(mix('Are they here', 'yes, they are here')); // "2:eeeee/2:yy/=:hh/=:rr"
// console.log(mix('A generation must confront the looming ', 'codewarrs')); // "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr"
// console.log(mix('codewars', 'codewars')); // ''

//? ------------------------------------------------------
/*
5 kyu
Integers: Recreation One

1, 246, 2, 123, 3, 82, 6, 41являются делителями числа 246. 
Возводя эти делители в квадрат, получаем: 1, 60516, 4, 15129, 9, 6724, 36, 1681. 
Сумма этих квадратов 84100 равна 290 * 290.

Задача
Найдите все целые числа между m и n(m и n целых чисел с 1 <= m <= n) такие, 
что сумма их квадратов делителей сама является квадратом.

Мы вернем массив подмассивов или кортежей (в C — массив пар) или строку. 
Подмассивы (или кортежи, или пары) будут состоять из двух элементов: сначала числа, 
квадраты делителей которого являются квадратами, а затем суммы квадратов делителей.
*/

function listSquared(m, n) {
  // your code
}
// console.log(listSquared(1, 250)); // [[1, 1], [42, 2500], [246, 84100]]
// console.log(listSquared(42, 250)); // [[42, 2500], [246, 84100]]
// console.log(listSquared(250, 500)); // [[287, 84100]]
//? ----------------------------------
function rank(st, we, n) {
  if (st.length < 1) return 'No participants';
  const participantsArr = st.split(',');

  if (n > participantsArr.length) return 'Not enough participants';

  const charsSum = participantsArr.reduce((acc, el, i) => {
    acc[el] =
      el
        .split('')
        .reduce((acc, i) => acc + i.toLowerCase().charCodeAt() - 95, 0) * we[i];

    return acc;
  }, {});

  return charsSum;
}
// console.log(
//   rank(
//     'Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin',
//     [4, 2, 1, 4, 3, 1, 2],
//     4
//   )
// ); // Benjamin
// console.log(rank('Lagon,Lily', [1, 5], 2)); // Lagon
// console.log(
//   rank('COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH', [1, 4, 4, 5, 2, 1], 4)
// ); // "PauL"
// console.log(rank('', [4, 2, 1, 4, 3, 1, 2], 6)); // "No participants"

// ? ------------------------------------------------------------------------
/*
4 kyu
Explosive Sum

Сколькими способами можно получить сумму чисел?
Из Википедии: https://en.wikipedia.org/wiki/Partition_(number_theory)

В теории чисел и комбинаторике разбиение натурального числа n , 
также называемое целочисленным разбиением , — это способ записи n в виде суммы 
положительных целых чисел. Две суммы, отличающиеся только порядком слагаемых, 
считаются одним и тем же разбиением. Если порядок имеет значение, сумма становится 
композицией. Например, число 4 можно разделить пятью различными способами:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
Примеры
Базовый
sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) // 42
Взрывной
sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
*/
function sum(num) {
  return 0;
}
// console.log(sum(1)) // 1
// console.log(sum(4)) // 5
// console.log(sum(10)) // 42
// console.log(sum(50)) // 204226
// ? -------------------------------------------------------
/*
4 kyu Square into Squares. Protect trees!

Учитывая положительное целое число n, вернуть строго возрастающую 
последовательность чисел (список/массив/строку в зависимости от языка) так, 
чтобы сумма квадратов была равна n².

Если решений несколько (а они будут), верните, насколько это возможно, 
результат с максимально возможными значениями:

Примеры
decompose(11)должен вернуться [1,2,4,10]. Обратите внимание, 
что на самом деле существует два способа разложить 
11²: 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10², 
но не возвращать результат [2,6,9], поскольку 9 меньше 10.

For decompose(50)не возвращать [1, 1, 4, 9, 49], но [1, 3, 5, 8, 49] 
поскольку [1, 1, 4, 9, 49] не образует строго возрастающую последовательность.

Примечание
Ни то [n], ни другое не [1,1,1,…,1]являются действительными решениями. 
Если допустимого решения не существует, верните nil, null,
*/
function decompose(n) {
  // your code
}
// console.log(decompose(11)); // [1,2,4,10]
// console.log(decompose(50)); // [1, 3, 5, 8, 49]
// console.log(decompose(5)); // [3, 4]
// ? -------------------------------------------------------
