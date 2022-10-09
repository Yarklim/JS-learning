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

// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.
const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
console.log(keys);
console.log(values);
