// Функция создания последовательности Фибоначи

function fib(n) {
  let a = 0;
  let b = 1;

  for (let i = 1; i <= 7; i++) {
    let c = a + b;
    a = b;
    b = c;

    console.log(c); // 1, 2, 3, 5, 8, 13, 21
  }
}

fib();

//? Task 1
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

[F(n), F(n+1), false]

Некоторые примеры возврата:

productFib(714) # should return [21, 34, true], 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return [34, 55, false], 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
*/
function productFib(prod) {
  let a = 0;
  let b = 1;

  const arr = [];

  while (prod / b > a) {
    let c = a + b;
    a = b;
    b = c;

    if (prod / b === a) {
      arr.push(a, b, true);
      break;
    }
    if (prod / b < a) {
      arr.push(a, b, false);
      break;
    }
  }

  return arr;
}
// console.log(productFib(4895)); // [55, 89, true]
// console.log(productFib(5895)); // [89, 144, false]
// console.log(productFib(74049690)); // [6765, 10946, true]

// console.log(89 * 144);
//? ------------------------------------------------
