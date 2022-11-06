/*
? =========== Стрелочные функции ===========
*/

// Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, особенно когда функция маленькая или если она используется как коллбек.
// Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.

// Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

// Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, за которыми следует символ => и тело функции.
// Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.

const add = (a, b, c) => {
  return a + b + c;
};

// Если параметр один, его объявление может быть без круглых скобок.

const add2 = (a) => {
  return a + 5;
};

// Если параметров нет, то обязательно должны быть пустые круглые скобки.

const greet = () => {
  console.log('Привет!');
};

// ? Неявный возврат
// В стрелочной функции после символа => идёт её тело.
// Здесь может быть два варианта: с фигурными скобками и без них.

const add3 = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

// Если фигурные скобки есть, и функция должна возвращать какое - то значение, необходимо явно поставить return.
// Это называется явный возврат(explicit return).
// Такой синтаксис используется в том случае, если в теле функции нужно выполнить ещё какие - то инструкции кроме возврата значения.

const add4 = (a, b, c) => a + b + c;

// Если фигурных скобок нет, то возвращается результат выражения стоящего после =>.
// Это называется неявный возврат(implicit return).
// В примере вернётся результат выражения сложения параметров a, b и c.

// Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением,
// но подходит только в случае когда в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

// ? Псевдомассив arguments
// У стрелочных функций нет локальной переменной arguments, содержащей все аргументы.
// Если необходимо собрать все аргументы в массив, используется операция rest.

const add5 = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

// ? Стрелочные функции как коллбеки
// Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из - за более краткого синтаксиса объявления,
// особенно если не нужно тело функции.

const numbers = [5, 10, 15, 20, 25];

// Объявление функции
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

// Анонимная стрелочная функция
numbers.forEach((number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
});

// Стрелочную коллбек - функцию также можно объявлять отдельно и передавать на неё ссылку.
// Это стоит делать если одна функция используется в нескольих местах программы или если она громоздкая.
const numbers2 = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers.forEach(logMessage);

// ? Чистые функции
// Чистая функция(pure function) - это функция результат которой зависит только от значений переданных аргументов.
// При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, то есть не изменяет значения аргументов.

// Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные,
// изменять значение аргументов ссылочного типа, выполнять операции ввода - вывода и т.п.

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers3 = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Произошла мутация исходных данных - массива numbers
console.log(numbers); // [2, 4, 6, 8, 10]

// Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. Она изменяет (мутирует) исходный массив по ссылке.
// Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не изменяя исходный.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach((element) => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers4 = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
