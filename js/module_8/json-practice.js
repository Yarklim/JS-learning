//? ============ Преобразование в JSON формат ============
const user = {
  name: 'Mango',
  age: 25,
};

const savedUserData = JSON.stringify(user);

console.log(savedUserData); // строка {"name":"Mango","age":25}

// ============ Преобразование JSON строки в JS-объект ==============

console.log(JSON.parse(savedUserData)); // объект {name: 'Mango', age: 25}

//? ============= LocaleStorage ==============
localStorage.setItem('my-data', JSON.stringify(user)); // загрузить данные (строку) в localStorage
const savedData = localStorage.getItem('my-data'); // получение данных из localStorage
const parsedData = JSON.parse(savedData); // распарсил строку в JS-объект
localStorage.removeItem('my-data'); // удаляет данные из localStorage
