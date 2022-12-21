==========================================================================
========================= String.prototype.repeat() ======================
==========================================================================
Метод repeat() конструирует и возвращает новую строку, 
содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.

Синтаксис
str.repeat(count)

Параметры
count
Целое число от 0 до +∞: [0, +∞), определяющее число повторений строки во вновь создаваемой и возвращаемой строке.

Возвращаемое значение
Новая строка, содержащая указанное количество копий строки, для которой был вызван метод.

Исключения
RangeError: число повторений не должно быть отрицательным.
RangeError: число повторений должно быть меньше бесконечности и не должно превышать максимально допустимую длину строки.

Примеры
'абв'.repeat(-1);   // RangeError
'абв'.repeat(0);    // ''
'абв'.repeat(1);    // 'абв'
'абв'.repeat(2);    // 'абвабв'
'абв'.repeat(3.5);  // 'абвабвабв' (количество будет преобразовано в целое число)
'абв'.repeat(1/0);  // RangeError

({ toString: () => 'абв', repeat: String.prototype.repeat }).repeat(2);
// 'абвабв' (метод repeat() является обобщённым методом)


==========================================================================
======================== String.prototype.replace() ======================
==========================================================================
Метод replace() возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель. Шаблон может быть строкой или регулярным выражением, а заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении.

Синтаксис
str.replace(regexp|substr, newSubStr|function[, flags])
Параметры
regexp
Объект регулярного выражения RegExp. Сопоставление заменяется возвращаемым значением второго параметра.

substr
Строка, заменяемая на newSubStr. Обратите внимание, будет заменено только первое вхождение искомой строки.

newSubStr
Строка, заменяющая подстроку из первого параметра. Поддерживает несколько специальных шаблонов замены; смотрите ниже раздел Передача строки в качестве второго параметра.

function
Функция, вызываемая для создания новой подстроки (помещаемой вместо подстроки из первого параметра). Аргументы, передаваемые функции, описаны ниже в разделе Передача функции в качестве второго параметра.

flags Non-standard
Обратите внимание: аргумент flags не работает в ядре v8 (движок JavaScript в Chrome и NodeJs). Строка, задающая комбинацию флагов регулярного выражения. Параметр flags в методе String.prototype.replace() является нестандартным расширением. Вместо использования этого параметра используйте объект RegExp с соответствующими флагами. Значение этого параметра, если он используется, должно быть строкой, состоящей из одного или более следующих символов, следующим образом влияющих на обработку регулярного выражения:

g
глобальное сопоставление

i
игнорировать регистр

m
сопоставление по нескольким строкам

y Экспериментальная возможность
«липкий» поиск, сопоставление начинается с текущей позиции в строке

Возвращаемое значение
Новая строка с некоторыми или всеми сопоставлениями шаблона, заменёнными на заменитель.

Описание
Этот метод не изменяет объект String, на котором он вызывается. Он просто возвращает новую строку.

Для выполнения глобального поиска и замены либо включите флаг g в регулярное выражение, либо, если первый параметр является строкой, включите флаг g в параметр flags.

Пример: использование флагов global и ignore с методом replace()
В следующем примере регулярное выражение включает флаги для глобального поиска и игнорирования регистра, которые позволяют методу replace() заменить все вхождения слова «яблоки» в строке на слово «апельсины».

var re = /яблоки/gi;
var str = 'Яблоки круглые и яблоки сочные.';
var newstr = str.replace(re, 'апельсины');
console.log(newstr); // апельсины круглые и апельсины сочные.
Copy to Clipboard
Пример: передача регулярного выражения в метод replace()
В следующем примере в метод replace() передаётся регулярное выражение вместе с флагом игнорирования регистра.

// Ночь перед Рождеством, Xmas - сокращение для Christmas
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr); // Twas the night before Christmas...
Copy to Clipboard
Пример выведет строку 'Twas the night before Christmas...'

Пример: смена местами слов в строке
Следующий скрипт меняет местами слова в строке. В качестве текста замены он использует шаблоны замены $1 и $2.

var re = /([А-ЯЁа-яё]+)\s([А-ЯЁа-яё]+)/;
var str = 'Джон Смит';
var newstr = str.replace(re, '$2, $1');
console.log(newstr); // Смит, Джон
Copy to Clipboard
Пример выведет строку 'Смит, Джон'.

==========================================================================
====================== String.prototype.replaceAll() =====================
==========================================================================
Метод replaceAll() возвращает новую строку со всеми совпадениями pattern , который меняется на replacement. pattern может быть строкой или регулярным выражением, и replacement может быть строкой или функция возвращающая каждое совпадение.

Исходная строка остаётся без изменений.

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"


// global flag required when calling replaceAll with regex
const regex = /Dog/ig;
console.log(p.replaceAll(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"


==========================================================================
========================= String.prototype.at() ==========================
==========================================================================
Метод at()принимает целочисленное значение и возвращает новое String значение, 
состоящее из одной единицы кода UTF-16, расположенной по указанному смещению. 
Этот метод позволяет использовать положительные и отрицательные целые числа. 
Отрицательные целые числа отсчитываются от последнего символа строки.

Синтаксис
at(index)
Скопировать в буфер обмена
Параметры
index
Индекс (позиция) возвращаемого строкового символа. 
Поддерживает относительную индексацию с конца строки при передаче отрицательного индекса; т.е. 
если используется отрицательное число, возвращаемый символ будет найден путем обратного отсчета от конца строки.

Возвращаемое значение
Состоящий Stringиз одной единицы кода UTF-16, расположенной в указанной позиции. 
Возвращает undefined, если заданный индекс не может быть найден.

Примеры
Возвращает последний символ строки
В следующем примере представлена ​​функция, которая возвращает последний символ, найденный в указанной строке.

// A function which returns the last character of a given string
function returnLast(arr) {
  return arr.at(-1);
}

let invoiceRef = "myinvoice01";

console.log(returnLast(invoiceRef)); // '1'

invoiceRef = "myinvoice02";

console.log(returnLast(invoiceRef)); // '2'
Скопировать в буфер обмена
Сравнение методов
Здесь мы сравниваем различные способы выбора предпоследнего (предпоследнего) символа String. 
Хотя все приведенные ниже методы действительны, они подчеркивают краткость и удобочитаемость метода at().

const myString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // 't'

==========================================================================
========================= String.prototype.charAt() ======================
==========================================================================
Метод charAt() возвращает указанный символ из строки.

Синтаксис
str.charAt(index)
Параметры
index
Целое число от 0 до длины строки минус 1.

Описание
Символы в строке идут слева направо. Индекс первого символа равен 0, а последнего символа в строке stringName равен stringName.length - 1. Если предоставленный вами параметр index выходит за пределы этого диапазона, JavaScript вернёт пустую строку.

Примеры
Пример: отображение символов из различных позиций строки
Следующий пример показывает символы в различных позициях в строке "Дивный новый мир":

var anyString = 'Дивный новый мир';

console.log("Символ по индексу 0   равен '" + anyString.charAt(0)   + "'");
console.log("Символ по индексу 1   равен '" + anyString.charAt(1)   + "'");
console.log("Символ по индексу 2   равен '" + anyString.charAt(2)   + "'");
console.log("Символ по индексу 3   равен '" + anyString.charAt(3)   + "'");
console.log("Символ по индексу 4   равен '" + anyString.charAt(4)   + "'");
console.log("Символ по индексу 5   равен '" + anyString.charAt(5)   + "'");
console.log("Символ по индексу 999 равен '" + anyString.charAt(999) + "'");
Copy to Clipboard
Этот код отобразит следующее:

Символ по индексу 0   равен 'Д'
Символ по индексу 1   равен 'и'
Символ по индексу 2   равен 'в'
Символ по индексу 3   равен 'н'
Символ по индексу 4   равен 'ы'
Символ по индексу 5   равен 'й'
Символ по индексу 999 равен ''
Copy to Clipboard
Пример: получение целых символов
Следующий пример показывает, как обойти строку в цикле, каждый раз гарантированно получая целый символ, даже если строка содержит символы, не помещающиеся на Базовую многоязыковую плоскость (БМП).

var str = 'A \uD87E\uDC04 Z'; // Также можно использовать не-БМП символы напрямую
for (var i = 0, chr; i < str.length; i++) {
  if ((chr = getWholeChar(str, i)) === false) {
    continue;
  }
  // Поместите эти строки в самое начало каждого цикла, передавая в функцию строку
  // и текущую итерацию; возвращаемая переменная будут представлять
  // отдельный символ

  console.log(chr);
}

function getWholeChar(str, i) {
  var code = str.charCodeAt(i);

  if (isNaN(code)) {
    return ''; // Позиция не найдена
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return str.charAt(i);
  }

  // Старшая часть суррогатной пары (последнее число можно изменить на 0xDB7F,
  // чтобы трактовать старшую часть суррогатной пары в частной плоскости как
  // одиночный символ)
  if (0xD800 <= code && code <= 0xDBFF) {
    if (str.length <= (i + 1)) {
      throw 'Старшая часть суррогатной пары без следующей младшей';
    }
    var next = str.charCodeAt(i + 1);
      if (0xDC00 > next || next > 0xDFFF) {
        throw 'Старшая часть суррогатной пары без следующей младшей';
      }
      return str.charAt(i) + str.charAt(i + 1);
  }
  // Младшая часть суррогатной пары (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw 'Младшая часть суррогатной пары без предшествующей старшей';
  }
  var prev = str.charCodeAt(i - 1);

  // (последнее число можно изменить на 0xDB7F, чтобы трактовать старшую
  // часть суррогатной пары в частной плоскости как одиночный символ)
  if (0xD800 > prev || prev > 0xDBFF) {
    throw 'Младшая часть суррогатной пары без предшествующей старшей';
  }
  // Теперь мы можем пропустить младшую часть суррогатной пары,
  // которую мы уже обработали
  return false;
}

==========================================================================
========================= String.prototype.search() ======================
==========================================================================
Метод search() выполняет поиск сопоставления между регулярным выражением и этим объектом String.

Синтаксис
str.search([regexp])
Параметры
regexp
Необязательный параметр. Объект регулярного выражения. Если будет передан не объект регулярного выражения, он будет неявно преобразован в объект RegExp через вызов конструктора new RegExp(regexp).

Описание
При успехе метод search() возвращает индекс первого сопоставления с регулярным выражением внутри строки. В противном случае метод вернёт -1.

Если вы хотите узнать, находится ли шаблон в строке, используйте метод search() (он работает почти так же, как и метод test() регулярного выражения, но вместо наличия подстроки возвращает её индекс); для получения дополнительной информации (за счёт более медленного выполнения) используйте метод match() (работает так же, как метод exec() регулярного выражения).

Примеры
Пример: использование метода search()
В следующем примере в журнал попадает сообщение, зависящее от успешности или неуспешности прохождения проверки.

function testInput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' содержит ';
  } else {
    midstring = ' не содержит ';
  }
  console.log(str + midstring + re);
}

var testString  = 'hey JuDe';
var re = /[A-Z]/g;

testInput(re, testString); // выведет: hey Jude содержит /[A-Z]/g

==========================================================================
========================= String.prototype.slice() =======================
==========================================================================
Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.

Синтаксис
str.slice(beginIndex[, endIndex])
Параметры
beginIndex
Индекс, с которого начинать извлечение (нумерация начинается с нуля). Если аргумент отрицателен, то трактуется как str.length + beginIndex (например, если beginIndex равен -3, то он трактуется как str.length - 3). Если beginIndex не является числом при проверке Number(beginIndex), он трактуется как 0.

Если beginIndex больше или равен str.length, возвращается пустая строка.

endIndex
Индекс, перед которым заканчивать извлечение (нумерация начинается с нуля). Символ по этому индексу не будет включён.

Если *endIndex *опущен или является undefined или больше чем str.length, slice() извлечёт всё до конца строки. Если аргумент отрицателен, то трактуется как str.length + endIndex (например, если endIndex равен -3, то он трактуется как str.length - 3). Если аргумент не undefined и не является числом при проверке Number(endIndex), возвращается пустая строка.

Если endIndex указан и меньше startIndex, то возвращается пустая строка (например, slice(-1, -3) или slice(3, 1) вернут "").

Возвращаемое значение
Новая строка, содержащая извлечённую часть строки.

let str1 = 'Приближается утро.';
let str2 = str1.slice(1, 8);
let str3 = str1.slice(4, -2);
let str4 = str1.slice(12);
let str5 = str1.slice(30);

console.log(str2); // ВЫВОД: риближа
console.log(str3); // ВЫВОД: лижается утр
console.log(str4); // ВЫВОД:  утро.
console.log(str5); // ВЫВОД: ""

let str = 'Приближается утро.';
str.slice(-3);     // вернёт 'ро.'
str.slice(-3, -1); // вернёт 'ро'
str.slice(0, -1);  // вернёт 'Приближается утро'

==========================================================================
=================== Методы toLowerCase() и toUpperCase() =================
==========================================================================
Возвращают новую строку в соответствующем регистре, не изменяя оригинальную строку.

const message = "Welcome to Bahamas!";
console.log(message.toLowerCase()); // "welcome to bahamas!"
console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
console.log(message); // "Welcome to Bahamas!"

Бывают ситуации когда все символы в строке необходимо преобразовать в один регистр, верхний или нижний. Например, при поиске по ключевому слову, когда пользователь вводит строку 'saMsUng', а сравнить её надо со строкой 'samsung' или 'SAMSUNG'.

console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false

Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию» введённой пользователем строки, то есть преобразовать все её символы в верхний или нижний регистр. Методы строки toLowerCase() и toUpperCase() вернут новую строку в соответствующем регистре, не изменяя оригинальную.

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

==========================================================================
====================== String.prototype.substring() ======================
==========================================================================
Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

Синтаксис
str.substring(indexA[, indexB])
Параметры
indexA
Целое число от 0 до длины строки, определяющее смещение в строке первого символа, который будет включён в результирующую подстроку.

indexB
Необязательный параметр. Целое число от 0 до длины строки, определяющее смещение в строке первого символа, который не будет включён в результирующую подстроку.

Описание
Метод substring() извлекает символы, начиная с индекса indexA до, но не включая, индекс indexB. В частности:

Если аргумент indexA равен аргументу indexB, метод substring() вернёт пустую строку.
Если аргумент indexB опущен, метод substring() извлечёт символы до конца строки.
Если любой из аргументов меньше, либо равен нулю или равен NaN, он будет трактоваться как равный 0.
Если любой из аргументов больше, чем stringName.length, он будет трактоваться как равный stringName.length.
Если аргумент indexA будет больше аргумента indexB, то метод substring() сработает так, как если бы аргументы были поменяны местами; например, str.substring(1, 0) == str.substring(0, 1).

Примеры
Пример: использование метода substring()
В следующем примере метод substring() используется для отображения символов из строки 'Mozilla':

var anyString = 'Mozilla';

// Отобразит 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));

// Отобразит 'lla'
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Отобразит 'Mozill'
console.log(anyString.substring(0, 6));

// Отобразит 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));

Пример: использование метода substring() вместе со свойством length
Следующий пример использует метод substring() и свойство length для извлечения последних символов из строки. Этот метод может оказаться легче для запоминания, особенно если учесть, что вам не нужно знать начальный и конечный индексы, как это было в примере выше.

// Отобразит 'illa' - последние 4 символа
var anyString = 'Mozilla';
var anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// Отобразит 'zilla' - последние 5 символов
var anyString = 'Mozilla';
var anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);

==========================================================================
========================= String.prototype.trim() ======================
==========================================================================
Метод trim() удаляет пробельные символы с начала и конца строки. Пробельными символами в этом контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (LF, CR и прочие).

Синтаксис
str.trim()
Описание
Метод trim() возвращает строку с вырезанными пробельными символами с её концов. Метод trim() не изменяет значение самой строки.

Примеры
Пример: использование метода trim()
Следующий пример покажет строку 'foo':

var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// Другой пример, в котором .trim() убирает пробельные символы только с одной стороны.

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'

==========================================================================
========================= String.prototype.concat() ======================
==========================================================================
Метод concat() объединяет текст из двух или более строк и возвращает новую строку.

Синтаксис
str.concat(string2, string3[, ..., stringN])
Параметры
string2...stringN
Строки, объединяемые в эту строку.

Описание
Метод concat() объединяет текст из двух или более строк и возвращает новую строку. 
Изменения в тексте в одной строке не затрагивают остальные строки.

Примеры
Пример: использование метода concat()
В следующем примере несколько строк объединяются в одну.

var hello = 'Привет, ';
console.log(hello.concat('Кевин', ', удачного дня.'));

/* Привет, Кевин, удачного дня. */

==========================================================================
============== String.prototype.endsWith() и .startsWith() ===============
==========================================================================
Метод endsWith() позволяет определить, заканчивается ли строка символами указанными в скобках, 
возвращая, соответственно, true или false.

Метод startsWith() помогает определить, начинается ли строка с символов указанных в скобках, 
возвращая, соответственно, true или false.

Синтаксис
str.endsWith(searchString[, length])

str.startsWith(searchString[, position])


Параметры
searchString
Символы, искомые в конце строки.

length
Необязательный параметр. Позволяет искать внутри строки, обрезая её по диапазону; 
по умолчанию равен длине строки.

position
Необязательный параметр. Позиция в строке, с которой начинать поиск searchString; по умолчанию 0.

Возвращаемое значение
true если данные символы находятся в конце строки; в противном случае, false.

Описание .endsWith()
Этот метод позволяет определять, заканчивается ли строка искомыми символами. 
Метод чувствителен к регистру.

Описание .startsWith()
Этот метод позволяет определять, начинается ли строка с указанных в скобках символов.

Примеры .endsWith()
Пример: использование метода endsWith()
var str = 'Быть или не быть, вот в чём вопрос.';

console.log(str.endsWith('вопрос.'));   // true
console.log(str.endsWith('быть'));      // false
console.log(str.endsWith('быть', 16));  // true

Примеры .startsWith()
var str = 'Быть или не быть, вот в чём вопрос.';

console.log(str.startsWith('Быть'));        // true
console.log(str.startsWith('не быть'));     // false
console.log(str.startsWith('не быть', 9));  // true

==========================================================================
========================= String.prototype.includes() ====================
==========================================================================
Метод includes() проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.

Синтаксис
str.includes(searchString[, position])
Параметры
searchString
Строка для поиска в данной строке.

position Необязательный
Позиция в строке, с которой начинать поиск строки searchString, по умолчанию 0.

Возвращаемое значение
true, если искомая строка была найдена в данной строке; иначе false.

Описание
Этот метод позволяет вам определять, содержит ли строка другую строку.

Чувствительность к регистру символов
Метод includes() является регистрозависимым. Например, следующее выражение вернёт false:

'Синий кит'.includes('синий'); // вернёт false
Copy to Clipboard
Примеры
Использование includes()
var str = 'Быть или не быть вот в чём вопрос.';

console.log(str.includes('Быть'));       // true
console.log(str.includes('вопрос'));    // true
console.log(str.includes('несуществующий')); // false
console.log(str.includes('Быть', 1));    // false
console.log(str.includes('БЫТЬ'));       // false

==========================================================================
========================= String.prototype.indexOf() =====================
==========================================================================
Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.

Синтаксис
str.indexOf(searchValue, [fromIndex])
Параметры
searchValue
Строка, представляющая искомое значение.

fromIndex
Необязательный параметр. Местоположение внутри строки, откуда начинать поиск. Может быть любым целым числом. Значение по умолчанию установлено в 0. Если fromIndex < 0, поиск ведётся по всей строке (так же, как если бы был передан 0). Если fromIndex >= str.length, метод вернёт -1, но только в том случае, если searchValue не равен пустой строке, в этом случае он вернёт str.length.

Описание
Символы в строке идут слева направо. Индекс первого символа равен 0, а последнего символа в строке stringName равен stringName.length - 1.

'Синий кит'.indexOf('Синий');   // вернёт  0
'Синий кит'.indexOf('Голубой');  // вернёт -1
'Синий кит'.indexOf('кит', 0);    // вернёт  6
'Синий кит'.indexOf('кит', 5);    // вернёт  6
'Синий кит'.indexOf('', 8);       // вернёт  8
'Синий кит'.indexOf('', 9);      // вернёт 9
'Синий кит'.indexOf('', 10);      // вернёт 9
Copy to Clipboard
Регистрозависимость
Метод indexOf() является регистрозависимым. Например, следующее выражение вернёт -1:

'Синий кит'.indexOf('синий'); // вернёт -1
Copy to Clipboard
Проверка на вхождение
Обратите внимание, что значение 0 не вычисляется в true, а значение -1 не вычисляется в false. Поэтому, для проверки того, что конкретная строка содержится в другой строке, правильно делать так:

'Синий кит'.indexOf('Синий') !== -1; // true
'Синий кит'.indexOf('Голубой') !== -1; // false
Copy to Clipboard
Примеры
Пример: использование методов indexOf() и lastIndexOf()
В следующем примере используются методы indexOf() и lastIndexOf() для нахождения значений в строке "Дивный новый мир".

var anyString = 'Дивный новый мир';

console.log('Индекс первого вхождения «й» с начала строки равен ' + anyString.indexOf('й'));
// Отобразит 5
console.log('Индекс первого вхождения «й» с конца строки равен ' + anyString.lastIndexOf('й'));
// Отобразит 11

console.log('Индекс вхождения «новый» с начала строки равен ' + anyString.indexOf('новый'));
// Отобразит 7
console.log('Индекс вхождения «новый» с конца строки равен ' + anyString.lastIndexOf('новый'));
// Отобразит 7
Copy to Clipboard
Пример: метод indexOf() и регистрозависимость
В следующем примере определяются две строковых переменных. Переменные содержат одинаковые строки, за исключение того, что слова во второй строке начинаются с заглавных букв. Первый вызов метода console.log() отобразит 18. Но поскольку метод indexOf() является регистрозависимым, строка "чеддер" в переменной myCapString не будет найдена, так что второй вызов метода console.log() отобразит -1.

var myString    = 'бри, пеппер джек, чеддер';
var myCapString = 'Бри, Пеппер Джек, Чеддер';

console.log('Вызов myString.indexOf("чеддер") вернул ' + myString.indexOf('чеддер'));
// Отобразит 18
console.log('Вызов myCapString.indexOf("чеддер") вернул ' + myCapString.indexOf('чеддер'));
// Отобразит -1
Copy to Clipboard

Пример: использование метода indexOf() для подсчёта вхождений буквы в строку
Следующий пример устанавливает значение переменной count в количество вхождений буквы в в строку str:

var str = 'Быть или не быть, вот в чём вопрос.';
var count = 0;
var pos = str.indexOf('в');

while (pos !== -1) {
  count++;
  pos = str.indexOf('в', pos + 1);
}

console.log(count); // отобразит 3

==========================================================================
========================= String.prototype.lastIndexOf() =================
==========================================================================
Метод lastIndexOf() возвращает индекс последнего вхождения указанного значения в строковый объект String, на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу, начиная с индекса fromIndex.

str.lastIndexOf(searchValue[, fromIndex])
Параметры
searchValue
Строка, представляющая искомое значение.

fromIndex
Необязательный параметр. Местоположение внутри строки, откуда начинать поиск, нумерация индексов идёт слева направо. Может быть любым целым числом. Значение по умолчанию установлено в str.length. Если оно отрицательно, трактуется как 0. Если fromIndex > str.length, параметр fromIndex будет трактоваться как str.length.

Описание
Символы в строке идут слева направо. Индекс первого символа равен 0, а последнего символа в строке stringName равен stringName.length - 1.

'канал'.lastIndexOf('а');     // вернёт 3
'канал'.lastIndexOf('а', 2);  // вернёт 1
'канал'.lastIndexOf('а', 0);  // вернёт -1
'канал'.lastIndexOf('ч');     // вернёт -1
Copy to Clipboard
Регистрозависимость
Метод lastIndexOf() является регистрозависимым. Например, следующее выражение вернёт -1:

'Синий кит, касатка'.lastIndexOf('синий'); // вернёт -1

==========================================================================
====================== String.prototype.localeCompare() ==================
==========================================================================
Метод localeCompare() возвращает число, указывающее, должна ли данная строка находиться до, после или в том же самом месте, что и строка, переданная через параметр, при сортировке этих строк.

Новые аргументы locales и options позволяют приложениям определять язык, чей порядок сортировки оно хочет использовать и настраивать поведение этой функции. В старых реализациях, игнорирующих аргументы locales и options, используемая локаль и порядок сортировки целиком зависят от реализации.

Синтаксис
str.localeCompare(compareString[, locales[, options]])
Параметры
Проверьте раздел Совместимость с браузерами, чтобы увидеть, какие браузеры поддерживают аргументы locales и options, и Пример: проверка поддержки аргументов locales и options для определения этой возможности.

compareString
Строка, с которой сравнивается данная.

{{page('/ru/docs/Web/JavaScript/Reference/Global_Objects/Collator', 'Parameters')}}
Описание
Возвращает число, указывающее, должна данная строка находится до, после или в том же самом месте, что и строка, переданная через параметр, при сортировке этих строк. Если данная строка предшествует строке compareString, возвращает отрицательное число, если она следует за строкой compareString, возвращает положительное значение и возвращает 0, если строки находятся на одном уровне.

Примеры
Пример: использование метода localeCompare()
Следующий пример демонстрирует различные потенциальные результаты для строки, находящейся до, после или на том же самом уровне, что и другая строка:

console.log(new Intl.Collator().compare('a', 'c')); // -2, -1 или другое отрицательное значение
console.log(new Intl.Collator().compare('c', 'a')); // 2, 1 или другое положительное значение
console.log(new Intl.Collator().compare('a', 'a')); // 0
Copy to Clipboard
Обратите внимание, что результат, показанный в коде выше, может сильно различаться в зависимости от браузера и его версии. Происходит это потому, что возвращаемые значения зависят от реализации. То есть, спецификация требует только того, чтобы значение было отрицательным, если строка данная следует до переданной, и положительным — если после.

Пример: проверка поддержки аргументов locales и options
Аргументы locales и options поддерживаются ещё не всеми браузерами. Для проверки того, поддерживает ли их уже реализация, можно затребовать несуществующую метку языка и проверить, будет ли выброшено исключение RangeError:

function localeCompareSupportsLocales() {
  try {
    'a'.localeCompare​('b', 'i');
  } catch (e) {
    return e​.name === 'RangeError';
  }
  return false;
}

==========================================================================
========================= String.prototype.match() =======================
==========================================================================
Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением.

Синтаксис
str.match(regexp)
Параметры
regexp
Объект регулярного выражения. Если будет передан объект obj, не являющийся регулярным выражением, он будет неявно преобразован в объект RegExp через вызов конструктора new RegExp(obj).

Возвращаемое значение
array
Объект Array, содержащий результаты сопоставления, или null, если ничего не было сопоставлено.

Описание
Если регулярное выражение не содержит флаг g, возвращаемый результат будет тем же самым, что и при вызове метода RegExp.exec(). Возвращаемый объект массива имеет дополнительное свойство input, которое содержит оригинальную строку. Кроме того, он имеет свойство index, которое представляет индекс (нумерация с нуля) сопоставления в строке.

Если регулярное выражение содержит флаг g, метод вернёт массив, содержащий все сопоставления. Если сопоставлений не было, метод вернёт значение null.

Пример: использование метода match()
В следующем примере метод match() используется для поиска слова 'Глава', за которым следуют 1 или более цифр, за которыми следуют 0 или более раз группы из точки и цифры. Регулярное выражение включает флаг i, так что регистр букв игнорируется.

var str = 'Смотри главу 3.4.5.1 для дополнительной информации';
var re = /смотри (главу \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// выведет [ 'Смотри главу 3.4.5.1',
//           'главу 3.4.5.1',
//           '.1',
//           index: 0,
//           input: 'Смотри главу 3.4.5.1 для дополнительной информации' ]

// 'Смотри главу 3.4.5.1' - это полное сопоставление
// 'главу 3.4.5.1' - первое значение, сопоставленное с группой "(главу \d+(\.\d)*)".
// '.1' - это последнее значение, сопоставленное с группой "(\.\d)".
// Свойство 'index' содержит значение (0) индекса совпадения
// относительно начала сопоставления
// Свойство 'input' содержит значение введённой строки.
Copy to Clipboard
Пример: использование флагов глобальности и игнорирования регистра с методом match()
Следующий пример демонстрирует использование флагов глобального поиска и игнорирования регистра символов вместе с методом match(). Возвращаются все буквы от А до Д и от а до д, каждая в своём элементе массива.

var str = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯабвгдеёжзийклмнопрстуфхцчшщьыъэюя';
var regexp = /[А-Д]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['А', 'Б', 'В', 'Г', 'Д', 'а', 'б', 'в', 'г', 'д']

==========================================================================
======================= String.prototype.matchAll() ======================
==========================================================================
Метод matchAll() возвращает итератор по всем результатам при сопоставлении строки с регулярным выражением.

Синтаксис
str.matchAll(regexp)
Параметры
regexp
Объект регулярного выражения. Если передано значение, не являющееся объектом регулярного выражения, оно неявно преобразуется в RegExp используя new RegExp(obj).

Возвращаемое значение
Возвращается iterator (не перезапускаемый).

Примеры
Regexp.exec() и matchAll()
До добавления метода matchAll в JavaScript, можно было использовать метод regexp.exec (и регулярные выражения с флагом /g ) в цикле для получения доступа к совпадениям:

const regexp = RegExp('foo*','g');
const str = 'table football, foosball';

while ((matches = regexp.exec(str)) !== null) {
  console.log(`Found ${matches[0]}. Next starts at ${regexp.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}
Copy to Clipboard
С появлением matchAll, нет необходимости использовать цикл while и метод exec с флагом /g. Используя вместо этого метод matchAll, вы получаете итератор, который вы можете использовать более удобно с конструкциями for...of, array spread, или Array.from() :

const regexp = RegExp('foo*','g');
const str = 'table football, foosball';
let matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(match);
}
// Array [ "foo" ]
// Array [ "foo" ]

// итерация больше недоступна после вызова for of
// Для создания нового итератора вызовите matchAll повторно
matches = str.matchAll(regexp);

Array.from(matches, m => m[0]);
// Array [ "foo", "foo" ]
Copy to Clipboard
Улучшенный доступ к группам захвата
Ещё одна веская причина использовать matchAll это улучшенный доступ к группам захвата. 
Группы захвата игнорируются при использовании match() с глобальным флагом /g:

var regexp = /t(e)(st(\d?))/g;
var str = 'test1test2';

str.match(regexp);
// Array ['test1', 'test2']
Copy to Clipboard
С matchAll у вас появляется к ним доступ:

let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]

==========================================================================
=========================  ======================
==========================================================================


==========================================================================
=========================  ======================
==========================================================================