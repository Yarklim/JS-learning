CRUD
Create, read, update and delete operations
Для взаимодействия с ресурсами бэкенда используется четыре операции: создание (create), чтение (read), обновление (update) и удаление (delete). Для каждой из них определен стандартный HTTP-метод.

Method	Description
POST	Операция create - создать новый ресурс.
GET	Операция read - получить набор ресурсов или один ресурс по идентификатору.
PUT и PATCH	Операция update - обновить ресурс по идентификатору.
DELETE	Операция delete - удалить ресурс по идентификатору
Будем делать запросы к JSONPlaceholder API, который предоставляет коллекцию не настоящих постов в ресурсе /posts, представленных объектами со свойствами id, author и body.

Чтение
HTTP-метод GET используется для получения существующих данных. Метод fetch() должен отправить на сервер GET-запрос без тела. Бэкенд, по получению запроса, обработает его и в ответе вернет необходимые ресурсы.

Получим массив всех постов. Для этого обращаемся к ресурсу /posts описанному в документации бэкенда. Метод fetch() по умолчанию делает GET-запрос, поэтому переопределять опции запроса не обязательно.

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.log(error));

Получим один пост по идентификатору (свойство id) добавив его к ресурсу /posts/:postId. Последняя часть этого пути называется динамический параметр и в документации описывается как /ресурс/:параметр. Ресурс неизменен, это путь к целой коллекции, а значение параметра меняется для каждого её элемента.

// Change this number to fetch different post
const postId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));

Создание
Метод POST используется для добавления нового ресурса. Метод fetch() должен отправить на сервер POST-запрос, в теле которого будет объект с полями author и body, идентификатор будет автоматически создан базой данных. Результатом такого запроса будет объект добавленный в базу данных.

const postToAdd = {
  author: "Mango",
  body: "CRUD is awesome",
};

const options = {
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));

Делаем запрос на создание поста обращаясь к ресурсу /posts, но в настройках метода fetch() изменяем HTTP-метод на POST. Так бэкенд знает, что нужно не прочитать уже существующее, а создать новый ресурс в этой коллекции.

Тело запроса должно быть строкой, потому что протокол HTTP передает все как текст. При передаче сложных типов данных, их обязательно необходимо привести к строке методом JSON.stringify(). Не забываем указать заголовок Content-Type, который уточняет для бэкенда тип передаваемых данных.

В ответ, если все хорошо, получим JSON с добавленным id. Идентификатор будет уникальным для каждого объекта.

{
  "id": 1,
  "author": "Mango",
  "content": "CRUD is awesome"
}

Обновление
Методы PUT и PATCH используются для обновления существующих данных. Какой метод использовать будет написано в документации бэкенда. Метод fetch() должен отправить на сервер запрос, в теле которого необходимо указать объект с полями для изменения. Путь указывает в какой коллекции и какой элемент мы хотим обновить. Бекенд, по получению запроса, обработает его и в ответе вернет обновленный ресурс.

// Change value of id property to update different post
const postToUpdate = {
  id: 1,
  body: "CRUD is really awesome",
};

const options = {
  method: "PATCH",
  body: JSON.stringify(postToUpdate),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log("ERROR" + error));

В ответ, если все хорошо, получим обновленный объект.

{
  id: 1,
  author: 'Mango',
  content: 'CRUD is really awesome',
}

ИНТЕРЕСНО
Метод PATCH заменяет в существующем ресурсе значения переданные в теле запроса свойств. Метод PUT полностью заменяет ресурс.

Удаление
Метод DELETE используется для удаления существующих данных. Метод fetch() должен отправить на сервер DELETE-запрос без тела. Путь указывает в какой коллекции и какой элемент мы хотим удалить. Бекенд, по получению запроса, обработает его, удалит ресурс из коллекции и в ответе вернет статус результата.

const postIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
  method: "DELETE",
})
  .then(() => console.log("Post deleted"))
  .catch(error => console.log("Error:", error));