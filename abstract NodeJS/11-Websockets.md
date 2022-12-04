WebSockets
WebSockets
WebSocket - это протокол двунаправленного обмена данными, который характеризует полностью дуплексный характер взаимодействия. На практике это означает следующее. WebSockets устанавливает одно, причем единственное, соединение клиента с сервером. После необходимых проверок, подтверждающих, что сервер может работать с WebSocket, сервер и клиент могут отправлять через него текстовые сообщения, причем передача происходит сразу же, при отсылке WebSockets создает двунаправленные каналы связи. Соединение постоянно держится открытым, что позволяет не передавать лишних НТГР-заrоловков. При этом в веб-сокетах нет ограничений не на количество соединений, не на очередность запросов.

Модуль ws
Для того чтобы начать работать с веб-сокетами, нужны всего две вещи - браузер, поддерживающий WebSocket, и сервер, реализующий эту технологию. На стороне браузера все просто - WebSockets поддерживается большинством современных версий браузеров. Проверить поддержку браузером этой технологии можно по этой ссылке http://websocket.org/echo.html Там же можно скачать код и создать свой тест с помощью страницы websocket.html

На сервере нужно поставить соответствующий модуль:

npm install ws

Давайте рассмотрим пример

const WebSocketServer = new require('ws');

И запустим WebSocket-cepвep:

const wss = new WebSocketServer.Server({ port: 8080 });

WebSocket-cepвep будет работать, ожидая запросов по протоколу ws:// на заданный порт (в нашем случае 8080). Напишем функцию обратного вызова на событие соединения:

wss.on('connection', ws => {
  console.log('Hoвoe соединение');
});

Затем необходимо написать небольшого клиента - веб-страницу, размещенную на обычном веб-сервере:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>WebSocket</title>
  </head>
  <script>
    window.onload = () => {
      const ws = new WebSocket('ws://localhost:8080');
    };
  </script>
  <body></body>
</html>

Теперь при открытии страницы в браузере будет создано соединение, и, соответственно, в консоли сервера появится надпись - Новое соединение.

Пока это взаимодействия по направлению от сервера к клиенту, сделаем обмен сообщениями обоюдным. Добавим нужный функционал на сервер:

const WebSocketServer = new require('ws');

const wss = new WebSocketServer.Server({ port: 8080 });

let clients = [];

wss.on('connection', ws => {
  let id = clients.length;
  clients[id] = ws;
  console.log(`Hoвoe соединение #${id}`);
  // отправляем клиенту сообщение
  clients[id].send(`Привет, вам присвоен номер №${id}`);
  // отправляем все остальным
  clients.forEach((item, index) => {
    if (index !== id) {
      item.send(`К нам присоединился номер - ${id}`);
    }
  });
});

На клиенте надо дописать код для приема сообщений:

window.onload = () => {
  const ws = new WebSocket('ws://localhost:8080');
  ws.onmessage = e => {
    console.log(e.data);
  };
};

Теперь попробуем открыть страницу в нескольких окнах браузера. Мы увидим сообщения в консолях как браузеров так и сервера. Обмен сообщениями пошел.

Socket.io
Эта библиотека призвана осуществлять взаимодействие реального времени тем способом, который наиболее подходит для его участников. Socket.io обеспечивает двустороннюю связь в реальном времени и на основе событий. Он работает на любой платформе, браузере или устройстве, уделяя одинаковое внимание надежности и скорости. Socket.io состоит из двух частей:

Сервер, который интегрируется (или монтируется) с HTTP-сервером Node.JS socket.io
Клиентская библиотека, загружаемая на стороне браузера socket.io-client
Во время разработки, socket.io как мы увидим, автоматически обслуживает и клиента, поэтому пока нам нужно установить только один модуль:

npm install socket.io

Так же добавим express в наше приложение и создадим файл app.js

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', socket => {
  console.log('User connected!');
  socket.emit('message', 'User connected!');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

Обратите внимание, что при инициализации экземпляра socket.io, мы передаем http объект (HTTP-сервер). Затем прослушиваем событие connection для входящих сокетов и выводим сообщение User connected! в консоль, а после отправляем событие message на клиент с тем же сообщением. В папке public расположим файл index.html, который будет нашей клиентской частью

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <script src="/socket.io/socket.io.js"></script>
    <title>SocketIO</title>
  </head>
  <body>
    <script>
      const socket = io.connect('/');
      socket.on('message', data => {
        console.log(data);
      });
    </script>
  </body>
</html>

Все, что требуется, чтобы начать работать с вебсокетами это загрузить socket.io-client (делаем GET запрос /socket.io/socket.io.js), скрипт предоставляет глобальную переменную io, а затем можно подключиться к серверу io.connect('/') и поставить обработчик на событие message

Если запустим сервер, то при обращении на адрес http://localhost:3000/ в консоли браузера мы увидим сообщение User connected!

Рассмотрим более подробно события серверной и браузерной частей socket.io.

Идея построения sосkеt.iо-приложений состоит в том, что обе её части — серверная и клиентская — имеют одинаковые свойства и методы, однако список обработчиков событий у них разный

У сервера предопределенных событий только три:

connection — событие наступает при установке соединения с клиентом;
message — событие наступает при получении сообщения от клиента;
disconnect (дисконект) — разрыв соединения.
Документацию говорит, что есть еще событие anything, и оно, наверное, самое главное — мы можем создавать свои события. Вы можете создавать сколь угодно много своих событий. Например, извещение о достижении определенного числа участников или наступлении нового времени суток и т.д.

У браузерной части socket.io событий больше:

connecting — событие наступает в процессе установления соединения с сервером;
connect_failed — событие наступает при неудачной попытке соединения;
connect — событие наступает при установке соединения с сервером;
message — событие наступает при получении сообщения от сервера;
disconnect — событие наступает при разрыве соединения с сервером;
reconnecting (может возникать неоднократно) — событие наступает при попытке восстановления соединения;
reconnect — событие наступает при восстановлении соединения;
error — события ошибки;
anything — любое событие.
После вводной части самое время реализовать простой чат на библиотеке Socket.io

Создаем чат
Давайте разберем создание простейшего чата с помощью библиотеки Socket.io Это наш пример который мы будем рассматривать


Реализация серверной части достаточно проста

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

server.listen(process.env.PORT || 3000, function () {
  console.log('Server running in port 3000');
});

app.use(express.static(__dirname + '/public'));

Мы подключаем все необходимые нам модули, запускаем сервер и указываем где будут лежать статические ресурсы, в нашем случае клиентская часть мини-чата

После мы создаем объект

const users = {};

в нем мы будем хранить, по уникальному ключу клиента, имя для каждого подключаемого пользователя.

Все работа чата будет заключена внутри конструкции

io.sockets.on('connection', (client) => { … })

Этот код выполнится для каждого вновь подключаемого пользователя по событию connection.

Внутри мы создаем функцию

const broadcast = (event, data) => {
  client.emit(event, data);
  client.broadcast.emit(event, data);
};

Это функция выполняет событие event и пересылает данные data конкретно для текущего пользователя client.emit(event, data), а после инициирует событие для всех остальных подключившихся пользователей client.broadcast.emit(event, data)

При первом подключении пользователя мы выполняем событие user

broadcast('user', users);

и сообщаем всем участникам чата, наш текущий список пользователей

Еще нам понадобятся два обработчика для событий message - отправка сообщения в чате и disconnect - пользователь вышел из чата (закрыл вкладку браузера)

Отправка сообщения

client.on('message', message => {
  if (users[client.id] !== message.name) {
    users[client.id] = message.name;
    broadcast('user', users);
  }
  broadcast('message', message);
});

Мы проверяем есть пользователь в списке users или возможно сменил имя при отправке сообщения и если условие выполнилось сообщаем всем пользователям событием user, что это произошло. После происходит событие message и мы отправляем полученное сообщение всем пользователям.

Если пользователь обновил страницу или закрыл вкладку браузера произойдет событие disconnect

client.on('disconnect', () => {
  delete users[client.id];
  client.broadcast.emit('user', users);
});

Мы удаляем текущего пользователя из списка users и отправляем всем остальным пользователям через событие user обновленный список. Обратите внимание, что отправляем только остальным пользователям. Вот и все, что касается серверной части нашего приложения.

Клиентский код не намного сложнее

Мы собираем в переменные все необходимые нам DOM элементы

const usersList = document.getElementById('users');
const board = document.getElementById('board');
const userMessage = document.getElementById('msg_txt');
const userName = document.getElementById('msg_name');
const sendButton = document.getElementById('msg_btn');

Подключаем экземпляр socket.io

const socket = io();

Создаем массив где будем хранить полученные от сервера сообщения

const messages = [];

и устанавливаем лимит на максимальное количество сообщений на экране

const LIMIT_MESSAGES = 10;

Функция renderListOfMessages каждый раз при получении события message выводит обновленный список сообщений пользователей на странице

Функция renderListOfUsers каждый раз при получении события user выводит обновленный список пользователей на странице

За подключения соответствующих обработчиков отвечает следующий фрагмент кода

socket.on('user', renderListOfUsers);
socket.on('message', renderListOfMessages);

Сама отправка сообщения на сервер выполняется функцией sendUserMessage

const sendUserMessage = () => {
  let name = userName.value;
  const message = userMessage.value;

  if (message === '' || name === '') {
    return;
  }

  socket.emit('message', {
    message,
    name,
  });

  userMessage.value = '';
  userMessage.focus();
};

sendButton.addEventListener('click', sendUserMessage);

Функция

const pressEnterKey = e => {
  if (e.keyCode === 13) {
    sendUserMessage();
  }
};

будет вызывать функцию sendUserMessage если мы нажимаем клавишу Enter

Как видим вся логика работы клиентского кода построена на обработке событий user и message, которые нам генерирует сервер. А также генерирования события message для отправки на сервер внутри функции sendUserMessage