//? ============ Преобразование в JSON формат ============
const user = {
  name: 'Mango',
  age: 25,
};

const savedUserData = JSON.stringify(user);

console.log(savedUserData); // строка {"name":"Mango","age":25}

// ============ Преобразование JSON строки в JS-объект ==============

console.log(JSON.parse(savedUserData)); // объект {name: 'Mango', age: 25}

//? ============= localeStorage ==============
localStorage.setItem('my-data', JSON.stringify(user)); // загрузить данные (строку) в localStorage
const savedData = localStorage.getItem('my-data'); // получение данных из localStorage
const parsedData = JSON.parse(savedData); // распарсил строку в JS-объект
localStorage.removeItem('my-data'); // удаляет данные по ключу из localStorage
localStorage.clear(); // полностью очищает все записи в хранилище
localStorage.length; // хранит количество записей в хранилище

//? ============== Сервис для localStorage ===============
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export default {
  save,
  load,
};

//? ============= sessionStorage =============
/*
 * Такой же API, только данные не сохраняются при перезагрузке
 */
