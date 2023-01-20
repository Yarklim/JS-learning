/*
Завдання 1
Напишите две функции letMeSeeYourName(callback) - спрашивает имя пользователя 
через prompt и вызывает callback функцию greet(name) - коллбек принимающий имя и логирующий 
в консоль строку "Привет <name>" 
Реализуй проверку, что prompt не пустой
*/

/*
Завдання 2
Напишите функцию makeCounter, которая возвращает другую функцию, которая считает 
и логирует количество своих вызовов
*/

/*
Завдання 3
Напишите функцию savePassword(password) которая принимает пароль и возвращает внутреннюю функцию, 
которая принимает строку и возвращает буль true, если строка совпадает с сохраненным паролем и false - если не совпадает
*/
// const passwordUser = prompt('Enter password');

// function savePassword(password) {
//   const savedPassword = ['qwerty', '111', 'ytrewq'];
//   const checkPassword = (password) => savedPassword.includes(password);

//   return checkPassword(password);
// }

// console.log(passwordUser);
// console.log(savePassword(passwordUser));

/*
Завдання 4
Напиши функцию конструктор Storage который создаёт объкты для управления складом товаров. 
При вызове будет получать один агрумент - начальный массив товаров, и записывать его в свойство items. 
Добавь методы класса: getItems() - возвращайте массив товаров addItems(item) - получает новый товар 
и добавляет его к текущим removeItem(item) - плучает товар и, если он есть, удаляет его из текущих
*/
// const Storage = function (itemsArray) {
// 	this.items = itemsArray;
//  };

// Storage.proptype.

// const storage = new Storage(['apple', 'banana', 'mango']);

/*
Завдання 5
Напиши функцию конструктор Storage который создаёт объкты для управления складом товаров. 
При вызове будет получать один агрумент - начальный массив товаров, и записывать его в свойство items. 
Добавь методы класса: getItems() - возвращайте массив товаров addItems(item) - получает новый товар 
и добавляет его к текущим removeItem(item) - плучает товар и, если он есть, удаляет его из текущих
*/

/*
Завдання 6
Напиши класс Client котрорый создает объект со свойствами login email 
Объяви приватные свойства #login #email, доступ к которым сделай через геттер и сеттер login email
*/
class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get clientData() {
    return {
      login: this.#login,
      email: this.#email,
    };
  }

  set changeEmail(newEmail) {
    this.#email = newEmail;
  }

  set changeLogin(newLogin) {
    this.#login = newLogin;
  }
}

const client = new Client('Yar', 'mail@gmail.com');
client.changeEmail = '2@mail.com';
client.changeLogin = 'Yarklim';

// console.log(client);
/*
Завдання 7
Напиши класс Notes который управляет коллекцией заметок в свойстве items. 
Заметка это объект со свойствами text priority 
Добавь классу статическое свойство Priopity, в котором будет храниться объект с приоритетами. 
Добавь методы addNote(note), removeNote(text) updatePriority(text, newPriority)
*/
