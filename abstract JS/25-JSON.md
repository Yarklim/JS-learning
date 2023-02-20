# Формат JSON
JSON (JavaScript Object Notation) - современный текстовый формат хранения и передачи структурированных данных в текстовом виде. Привычный объектоподобный синтаксис JSON очень удобен. Именно в этом формате данные будут приходить и отправляться на сервер, сохраняться в локальном хранилище и т. п.

Но JSON - это не объект, а его строковое представление. Ниже приведен пример JSON файла. Синтаксис похож на объект, за исключением того, что ключи это всегда строки в двойных кавычках. Строчные значения также обязательно должны быть заключены в двойные кавычки. Значениями свойств могут быть типы string, number, object, array, boolean и null.

user.json
{
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "The Last Kingdom",
    "author": "Bernard Cornwell",
    "rating": 8.38
  }
}

Javascript и JSON отлично работают вместе благодаря методам встроенного класса JSON, которые преобразуют JavaScript объект в JSON и обратно. Независимо от того, что у вас есть, можно легко получить обратное.

# Метод JSON.stringify()
Принимает значение и преобразовывает его в JSON. Значением может быть число, буль, null, массив или обьект. Строки это уже валидный JSON поэтому их преобразование не имеет смысла.

const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

Результат вызова JSON.stringify(dog) это валидный JSON (строка), который может быть сохранен в файл или передан по сети.

Не любой JavaScript объект может быть преобразован один к одному в JSON. Например, если у объекта есть методы, то при преобразовании они будут проигнорированы.

const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
  bark() {
    console.log("Woof!");
  },
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

Также при попытке преобразовать функцию в JSON, результатом будет undefined.

JSON.stringify(() => console.log("Well, this is awkward")); // undefined

# Метод JSON.parse()
Чтобы получить из JSON валидное JavaScript значение, его необходимо распарсить (parse). Это операция обратная преобразованию в строку (stringify). Теперь, когда dog это валидный объект, с ним можно работать как обычно.

const json = '{"name":"Mango","age":3,"isHappy":true}';

const dog = JSON.parse(json);
console.log(dog); // {name: "Mango", age: 3, isHappy: true}
console.log(dog.name); // "Mango"

# Обработка ошибок
Если методам класса JSON передать невалидный JSON, то они «выбросят» ошибку и весь скрипт упадёт. Для того чтобы избежать этого, используется конструкция try...catch, которая позволяет «ловить» и обрабатывать ошибки выполнения скрипта.

try {
  // Code that may throw a runtime error
} catch (error) {
  // Error handling
}

Сначала выполняется код внутри блока try.
Если ошибок нет, блок catch игнорируется и управление передаётся дальше.
Если в блоке try произошла ошибка, его выполнение останавливается и интерпретатор переходит в блок catch.
Переменная error это объект ошибки с информацией о том, что произошло. У этого объекта есть несколько полезных свойств:

name - тип ошибки. Для ошибки парса это SyntaxError.
message - сообщение о деталях ошибки.
stack - стек вызовов функций на момент ошибки. Используется для отладки.
Например, парс строки приведет к такому сценарию, потому что строка с символами это не валидный JSON, так как не может быть преобразована к валидному JavaScript значению.

// Script will crash during parse
const data = JSON.parse("Well, this is awkward");
console.log("❌ You won't see this log");

Используя конструкцию try...catch мы можем обработать это исключение так, чтобы скрипт продолжил работать даже в случае ошибки.

try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parse error in try...catch");

Тоже самое будет при попытке парса невалидного JSON, который, например, может прийти от бэкенда или быть прочитан из файла. В примере у свойства username не хватает обрамляющих двойных кавычек.

try {
  const data = JSON.parse('{username: "Mango"}');
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // "Unexpected token u in JSON at position 1"
}

console.log("✅ This is fine, we handled parse error in try...catch");

# Фазы выполнения кода
В JavaScript код исполняется не сразу, для начала движку нужно прочитать код и узнать можно ли его вообще выполнить.

Фаза интерпретации или оценки (compile time, evaluation time) - подготовка перед исполнением кода, движок находит синтаксические ошибки, ошибки типизации и т. д. То есть код еще не выполняется, только оценивается. Если эта фаза прошла успешно, это как минимум значит, что в коде нет синтаксических ошибок и его можно запустить на исполнение.

Фаза исполнения (runtime) - скрипт начинает исполняться, выполняются инструкции вызовов функций и оценки выражений, происходит поиск необходимых идентификаторов в соответствующих областях видимости и тому подобное.

Если эта фаза завершилась успешно, значит скрипт написан без явных ошибок и закончил свою работу. На этой фазе могут быть ошибки, связанные с отсутствующими свойствами и переменными, преобразованием типов и т. д., то есть что-то, что происходит только во время выполнения кода.

Попробуйте выполнить следующий код. Так как мы сделали опечатку и вместо const пытаемся объявить переменную value ключевым словом cos, на фазе компиляции будет выявлена синтаксическая ошибка и фаза исполнения даже не запустится. В консоли мы сразу увидим сообщение об ошибке.

console.log('This message will not appear in the console');

cos value = 5;

ИНТЕРЕСНО
try...catch ловит только ошибки которые произошли во время выполнения кода (runtime errors). Это значит, что код должен быть синтаксически правильным, иначе фаза выполнения просто не запустится. Ошибки, которые возникают во время фазы оценки, называются ошибками парсинга.

# Веб-хранилище
Каждый раз когда вы изменяете цветовую тему между светлой и темной, просматриваете видео, добавляете товар в корзину, открываете или закрываете сайдбар, популярные веб-приложения запоминают состояние интерфейса и при следующем посещении его восстанавливают.

По умолчанию состояние интерфейса хранится в памяти вкладки браузера и теряется при закрытии веб-приложения. Чтобы избежать этого, необходимо где-то сохранить данные о состоянии интерфейса между посещениями страницы. На помощь приходит хранение информации о состоянии веб-приложения на компьютере пользователя.

# Web Storage API
Веб-хранилище состоит из локального хранилища (localStorage) и хранилища сеансов (sessionStorage). Предоставляет способ хранения данных интуитивно понятным способом в виде пар ключ:значение. Технически в веб-хранилище можно записать только строки, но это не проблема если использовать методы класса JSON для преобразования сложных типов. В веб-хранилище не записывают методы объектов или функции, только данные.

Локальное хранилище (localStorage) уникально для каждого веб-приложения и будет одинаковым между несколькими вкладками в которых оно (веб-приложение) запущено. Данные в локальном хранилище не удаляются даже при закрытии браузера или выключении компьютера. Чтобы их удалить, необходимо использовать JavaScript.

Хранилище сеансов (sessionStorage) похоже на локальное, оно также уникально для кажого веб-приложения, но время жизни сохраненных данных огрничено сессией вкладки браузера. Как только пользователь закрывает вкладку или браузер, данные очищаются. На практике хранилище сеансов используется значительно реже.

ИНТЕРЕСНО
В веб-хранилище не хранят пароли, номера банковских карт и тому подбную конфиденциальную информацию. Если вредоносный скрипт получит доступ к веб-странице, то без проблем прочитает эти данные.

# Локальное хранилище
Позволяет хранить данные без истечения срока действия в формате пар ключ:значение на компьютере пользователя и читать их при повторном посещении страницы. Локальное и хранилище сессии это часть браузера, поэтому они доступны как свойства объекта window, имеют одинаковый набор свойств и методов и различаются только поведением.

setItem(key, value) - делает новую, или обновляет уже существующую запись в хранилище.
getItem(key) - возвращает из хранилища значение с ключом key.
removeItem(key) - удаляет из хранилища запись с ключом key.
clear() - полностью очищает все записи в хранилище.
length - хранит количество записей в хранилище.
Сохранение
Используя метод setItem(key, value) можно добавить новую запись в виде пары ключ:значение.

localStorage.setItem("ui-theme", "light");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");

Если необходимо сохранить что-то кроме строки, например массив или объект, необходимо преобразовать их в строку методом JSON.stringify().

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

Чтение
Метод getItem(key) позволяет прочитать из хранилища запись с ключом key. Если в хранилище нет записи с таким ключом, метод возвращает null. Когда значение это обычная строка - нет необходимости её парсить.

localStorage.setItem("ui-theme", "dark");

const theme = localStorage.getItem("ui-theme");
console.log(theme); // "dark"

В противном случае, необходимо распарсить значение методом JSON.parse(), чтобы получить валидные данные.

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings); // settings object

ИНТЕРЕСНО
Не забывайте использовать конструкцию try...catch с методом JSON.parse(), чтобы избежать «падения» скрипта если вдруг прочитали не валидный JSON.

Удаление
Метод removeItem(key) удаляет из хранилища уже существующую запись с ключом key.

localStorage.setItem("ui-theme", "dark");
console.log(localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log(localStorage.getItem("ui-theme")); // null

Очистка хранилища
Операция полной очистки хранилища занятие опасное, так как может затронуть записи сделанные другими разработчиками проекта. Тем не менее, если вы хотите полностью очистить хранилище, вызовите метод clear().

localStorage.setItem("ui-theme", "light");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");
console.log(localStorage.getItem("ui-theme")); // "light"
console.log(localStorage.getItem("sidebar")); // "expanded"
console.log(localStorage.getItem("notification-level")); // "mute"

localStorage.clear();
console.log(localStorage.getItem("ui-theme")); // null
console.log(localStorage.getItem("sidebar")); // null
console.log(localStorage.getItem("notification-level")); // null

# Сохраняем сообщение
Создадим форму для ввода сообщения и будем сохранять его в localStorage при сабмите. Изменяйте значение текстового поля и нажимате кнопку «Save». Текст в поле вывода изменится на введенный. Перезагрузите страницу, и вы увидите все тот же текст, хотя ничего еще не вводили. При загрузке страницы мы берем из localStorage последнее сохраненное значение. Изначально такой записи в хранилище нет, поэтому будет выведена пустая строка.

const form = document.querySelector("#message-form");
const output = document.querySelector("#output");
const LOCALSTORAGE_KEY = "goit-example-message";

updateOutput();
form.addEventListener("submit", saveMessage);

function saveMessage(evt) {
  evt.preventDefault();
  localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
  updateOutput();
  form.reset();
}

function updateOutput() {
  output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
}


Посмотреть содержимое веб-хранилища можно в инструментах разработчика на вкладке Application. Там же можно вручную удалять и добавлять записи. На практике это используется во время разработки и отладки работы приложения.


# Сервис для localStorage
Для того чтобы сократить количество повторяющегося кода при работе с веб-хранилищем, можно написать сервис с стандартными методами, например save и load. Они будут абстрагировать повторяющийся код проверки ошибок парса и тому подобную рутину.

storage.js
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

export default {
  save,
  load,
};

Теперь мы можем безопасно добавлять и читать записи из локального хранилище. Попробуйте самостоятельно дописать метод remove(key) для удаления записи, аналогично load(key) и save(key, value).