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
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const values = Object.values(salaries);
  for (let i of values) {
    totalSalary += i;
  }
  // Change code above this line
  return totalSalary;
}
console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
