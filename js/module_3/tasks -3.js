//? Доповни код, оновивши значення властивостей об'єкта apartment:
//? ціну у властивості price на 5000;
//? рейтинг квартири у властивості rating на 4.7;
//? ім'я власника у вкладеній властивості name на "Henry Sibola";
//? масив тегів у властивості tags, додавши в кінець рядок "trusted".

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4,
// 	price: 2153,
// 	tags: ["premium", "promoted", "top"],
// 	owner: {
// 	  name: "Henry",
// 	  phone: "982-126-1588",
// 	  email: "henry.carter@aptmail.com",
// 	},
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);

//? Додай об'єкту apartment кілька нових властивостей:
//? area - площа в квадратних метрах, число 60;
//? rooms - кількість кімнат, число 3;
//? location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
//? country - країна, рядок "Jamaica";
//? city - місто, рядок "Kingston".

// const apartment = {
// 	imgUrl: "https://via.placeholder.com/640x480",
// 	descr: "Spacious apartment in the city center",
// 	rating: 4.7,
// 	price: 5000,
// 	tags: ["premium", "promoted", "top", "trusted"],
// 	owner: {
// 	  name: "Henry Sibola",
// 	  phone: "982-126-1588",
// 	  email: "henry.carter@aptmail.com",
// 	},
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
// 		country: "Jamaica",
// 		city: "Kingston",
// };
// console.log(apartment);

//? Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
//? Выполни рефакторинг решения, добавив в цикл for...in проверку на собственное свойство.
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(values);

//? Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object.
//? Используй переменную propCount для хранения количества свойств объекта.
// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

//? Перебери объект apartment используя метод Object.keys() и цикл for...of.
//? Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//? Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата.
//? Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
//? Используй переменную totalSalary для хранения общей суммы зарплаты.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (let i of values) {
//     totalSalary += i;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//? ====== Карточка товаров =======
const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (productName === name) {
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }

    return total;
  },
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: '🍅', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 60 });
cart.add({ name: '🍏', price: 110 });
cart.add({ name: '🍏', price: 110 });
cart.add({ name: '🍏', price: 110 });

console.table(cart.getItems());

cart.remove('🍅');
console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity('🍓');
// console.table(cart.getItems);

// cart.decreaseQuantity('🍏');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems);

console.log('Total: ', cart.countTotalPrice());

//? ====== spread ======
// const array = [1, 2, 3];
// const arrayBig = ['A', 'B', 'C'];
// const newArray = [0, ...array, 4, 5, 6, 7, ...arrayBig];

// console.log(newArray);
// console.log(array);

//? Найти самое маленькое число в массиве
// const numbers = [18, 17, 46, 90, 4, 24, 32];

// console.log(Math.min(...numbers));

//? Распыление объектов
//? Object.assign() и spread
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({}, a, b); // старый метод

// const c = { ...a, ...b }; // современный метод

// console.log(c); // {x: 0, y: 2, z: 3}

//? --------------------------------------

// function findMatches(arr, ...args) {
//   const matches = [];

//   for (const arg of args) {
//     if (arr.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

//? --------------------------------------

// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
    // Change code above this line
  },
};

// После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]
