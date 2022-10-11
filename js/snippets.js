//? ========= Округление вниз - Math.floor (~~)=========
let n1 = 445.67;
console.log(Math.floor(n1)); // 445
console.log(~~n1); // 445 (с помощью сниппета ~~)

//? ========= Возведение в степень (**)==========
let n2 = 3;
console.log(Math.pow(n2, 3)); // 8
console.log(n2 ** 3); // 8 (с помощью сниппета **)

//? ========= Преобразование строки в число (+) ========
let n3 = '3';
console.log(parseInt(n3)); // 3
console.log(+n3); // 3 (с помощью сниппета +) ! Если строка будет '3а', то выведет NaN !

//? ========= && =========
let n4 = 5;
if (n4 === 5) {
  console.log('#4');
}
n4 && console.log('#4'); // ! если значение переменной - false или 0, сниппет работает некорректно !

//? =========  ==========
let n5 = 3;
console.log(n5.toString());
console.log(`${n5}`);

//? ========= Вызов функции по условию =========
function f6_1() {
  console.log('6_1');
}
function f6_2() {
  console.log('6_2');
}

let n6 = 7;
if (n6 === 7) {
  f6_1();
} else {
  f6_2();
}

(n6 === 7 ? f6_1 : f6_2)(); // сниппет

//? ========= Задание обязательного значения ========
function f7(param) {
  if (param === undefined) {
    throw new Error('problem');
  }
  return param;
}
console.log(f7(4));

let checkParam = () => {
  throw new Error('problem');
};

let f7_1 = (param = checkParam()) => {
  return param;
};
console.log(f7_1(444));

//? ========= Получение символа строки =========
let n8 = 'sample string';
console.log(n8.charAt(4));
console.log(n8[4]);

//? ========= Значение по дефолту ========
let n9 = 34;
let result = n9 || false;

console.log(result);
