/* ============= Strings ============= */

// Длина строки .length
const message = 'В этой строке 26 символов.';
console.log(message.length);

// Конкатенация строк
const firstName = 'Chelsy';
const lastName = 'Emerald';

console.log(firstName + ' ' + lastName);
console.log(5 + '5'); /* выведет строку 55 */

// Шаблонные строки
const guestFirstName = 'Yar';
const guestLastName = 'Klim';
const hotelName = 'Aria';
const roomNumber = 1082;

const guestDescription = `Гость ${guestFirstName} ${guestLastName} поселился в гостинице ${hotelName}, комната ${roomNumber}`;
 
console.log(guestDescription);

// Нормализация методами toLowerCase(), toUpperCase
let brand = 'Samsung';
brand = brand.toLowerCase();

let inSearch = 'SamSung';
inSearch = inSearch.toLowerCase();

let searchResult = brand === inSearch;

console.log(searchResult);

// Индексация строки
let stringIndex = 'Dynamo';
console.log(stringIndex[4]);
console.log(stringIndex.slice(5));
console.log(stringIndex[0].toLowerCase() + stringIndex.slice(1).toUpperCase());

// Поиск в строке
const blackListWord1 = 'спам';
const blackListWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропусти!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blackListWord1));
console.log(string1.includes(blackListWord2));

console.log(string2.includes(blackListWord1));
console.log(string2.toLowerCase().includes(blackListWord2));

console.log(string3.includes(blackListWord1));
console.log(string3.includes(blackListWord2));