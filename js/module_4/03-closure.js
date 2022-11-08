/*
? ================ Замыкания ===============
- Функция может вернуть из себя другую функцию.
- Возвращаемая функция во время вызова, будет иметь доступ ко всем локальным переменным (область видимости) родительской функции.

const fnA = function (parameter) {
	const innerVariable = 'Значение внутренней переменной функции fnA';

	const innerFunction = function () {
	console.log('Это выхов innerFunction');
	};

	return innerFunction;
}

const fnB = fnA();

console.log(fnB); // fnB = innerFunction
*/

//? -------- Пример: ----------

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} cooking ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'кофе');

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} cooking ${dish}`);
  };

  return makeDish;
};

const mango = makeSheff('Mango');
const poly = makeSheff('Poly');

mango('омлет');
poly('кофе');

//? ------- Пример 2 - округлятор: --------

const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

function rounder(places) {
  return function (num) {
    return Number(num.toFixed(places));
  };
}

const rounder1 = rounder(1);
const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(floatingPoint)); // 3.46
console.log(rounder3(floatingPoint)); // 3.457
console.log(rounder1(15.8693)); //15.9

//? ---------- Использование замыканий для приватных данных -----------
const salaryManagerFactory = function (employeName, baseSalary = 0) {
  let salary = baseSalary;

  const changeBy = function (amount) {
    salary += amount;
  };

  return {
    raise(amount) {
      if (amount > 1000) {
        return 'Are you crazy???';
      }
      changeBy(amount);
    },
    lower(amount) {
      changeBy(amount);
    },
    current() {
      return `Current salary ${employeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.raise(10000));

console.log(salaryManager.current());

// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const newProducts = [];

  for (const product of products) {
    if (Object.keys(product) === propName) {
      newProducts.push(Object.values(product));
    }
  }

  return newProducts;
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('quantity'));
console.log(getAllPropValues('online'));
