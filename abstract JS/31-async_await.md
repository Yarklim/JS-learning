Асинхронные функции
Работа с бэкендом может быть запутанной, после одной асинхронной операции необходимо сделать еще один запрос на сервер по полученным данным, и так несколько раз. Например, на странице профиля пользователь хочет посмотреть список друзей. Первое, что необходимо сделать, это подтвердить его права доступа к этой странице у бэкенда. Для этого нужно сделать запрос к my-api.com/me. Если бэкенд разрешит доступ, в ответе мы получим уникальный токен доступа к защищенным ресурсам.

const fetchFriends = () => {
  return fetch("my-api.com/me").then(token => {
    console.log(token);
  });
};

Далее необходимо запросить профиль пользователя от my-api.com/profile, но профиль не полный, он содержит только критически важную информацию - идентификатор пользователя, без списка друзей.

const fetchFriends = () => {
  return fetch("my-api.com/me")
    .then(token => {
      return fetch(`my-api.com/profile?token=${token}`);
    })
    .then(user => {
      console.log(user.id);
    });
};

И только после этого можно запросить список друзей от my-api.com/users/:userId/friends.

const fetchFriends = () => {
  return fetch("my-api.com/me")
    .then(token => {
      return fetch(`my-api.com/profile?token=${token}`);
    })
    .then(user => {
      return fetch(`my-api.com/users/${user.id}/friends`);
    });
};

fetchFriends()
  .then(friends => console.log(friends))
  .catch(error => console.error(error));

Согласитесь, не самый легкочитаемый код, хотя операции относительно простые. Из-за того, что мы передаем функции-обработчики методу then(), получаются ёлки вложенности.

Асинхронные функции помогают избавиться от коллбэков и вложенных конструкций. При этом они отлично работают в связке с методами then() и catch(), потому что гарантированно возвращают промис.

const fetchFriends = async () => {
  const token = await fetch("my-api.com/me");
  const user = await fetch(`my-api.com/profile?token=${token}`);
  const friends = await fetch(`my-api.com/users/${user.id}/friends`);
  return friends;
};

fetchFriends()
  .then(friends => console.log(friends))
  .catch(error => console.error(error));

Синтаксис async/await
Асинхронные функции (async/await) - удобный способ написания асинхронного кода, который внешне становится похож на синхронный. В основе синтаксиса async/await лежат промисы, поэтому он не блокирует главный поток выполнения программы.

Для объявления асинхронной стрелочной функции, перед списком параметров добавляем ключевое слово async. Внутри неё можно использовать оператор await и справа от него поставить что-то, что вернёт промис. Метод response.json() также возвращает промис, поэтому ставим await.

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

fetchUsers().then(users => console.log(users));

Когда интерпретатор встречает await, он приостановливает выполнение этой функции (не всего скрипта) и ждет, пока не выполнится промис справа от await. Как только промис выполнился - исполнение функции возобновляется и на строке ниже нам доступен результат асинхронной операции.

Оператор await можно использовать только в теле асинхронной (async) функции.
Оператор await приостанавливает функцию пока промис не выполнится (fulfilled или rejected).
Если промис выполнился успешно (fulfilled), оператор await вернет его значение.
Если промис был отклонен с ошибкой (rejected), оператор await выбросит ошибку.
Асинхронная функция всегда возвращает промис, поэтому любое возвращаемое значение будет его значением.
Если не указать возвращаемое значение, вернется промис со значением undefined.
Любая функция может быть асинхронной, будь-то метод обьекта, класса, коллбэк, объявление или инлайн функция. Все они смогут использовать оператор await и обязательно вернут промис, потому что будут асинхронными функциями.

// Function declaration
async function foo() {
  // ...
}

// Functional expression
const foo = async function () {
  // ...
};

// Arrow function
const foo = async () => {
  // ...
};

// Object method
const user = {
  async foo() {
    // ...
  },
};

// Class method
class User {
  async foo() {
    // ...
  }
}

Обработка ошибок
Если результат асинхронной функции (промис) не используется во внешнем коде, ошибки обрабатываются в теле функции конструкцией try...catch. Значение параметра error в блоке catch это ошибка которую сгенерирует await если промис будет отклонен.

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

fetchUsers();

Если результат асинхронной функции (промис) используется во внешнем (глобальном) коде, то есть вне других асинхронных функций, ошибки обрабатываются коллбэком методом catch(). Значение параметра error в методе catch() это ошибка которую сгенерирует await если промис будет отклонен.

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

fetchUsers()
  .then(users => console.log(users))
  .catch(error => console.log(error));

Так работать не будет - await можно использовать только в теле асинхронной функции.

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

// ❌ SyntaxError: await is only valid in async function
const users = await fetchUsers();

Если результат асинхронной функции используется в другой асинхронной функции, ошибки обрабатываются конструкцией try...catch. Значение параметра error в блоке catch это ошибка которую сгенерирует await если промис будет отклонен.

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

const doStuff = async () => {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

doStuff();

Параллельные запросы
Если одновременно необходимо сделать несколько запросов, использовать синтаксис async/await нужно очень аккуратно. В следующем примере будут выполнены три последовательных запроса, потому что выполнение асинхронной функции приостанавливается когда интерпретатор встречает await. Кроме того, парс результатов запросов также будет последовательный, что займет больше времени.

const fetchUsers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const firstResponse = await fetch(`${baseUrl}/users/1`);
  const secondResponse = await fetch(`${baseUrl}/users/2`);
  const thirdResponse = await fetch(`${baseUrl}/users/3`);

  const firstUser = await firstResponse.json();
  const secondUser = await secondResponse.json();
  const thirdUser = await thirdResponse.json();

  console.log(firstUser, secondUser, thirdUser);
};

fetchUsers();

На вкладке Network хорошо видно, что запуск каждого последующего запроса ожидает пока завершится предыдущий. То есть выолняются они последовательно, что занимает больше времени, которое равно сумме длительностей всех запросов. Это нормально, если запросы зависят друг от друга, то есть следующий использует результат предыдущего.

Concurrent requests
В нашем случае они полностью независимы, поэтому нужно запустить их параллельно. Для этого создаётся массив промисов, после чего используется метод Promise.all(), для ожидания их выполнения. Массив промисов создается методами map(), filter() и так далее, зависит от задачи.

const fetchUsers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3];

  // 1. Создаём массив промисов
  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // 2. Запускаем все промисы параллельно и ждем их завершения
  const users = await Promise.all(arrayOfPromises);
  console.log(users);
};

fetchUsers();

При таком подходе запросы запускаются параллельно, что экономит время ожидания их выполнения, которое равно длительности самого «медленного» из них. Такой приём подходит только если запросы не зависят друг от друга.

Parallel requests
Убедитесь в этом, открыв инструменты разработчика в живом примере. Также мы добавили кнопку при клике на которую выполняется запрос, и обработали возможную ошибку конструкцией try...catch. Это стандартный AJAX-код с использованием асинхронных функций.

