# Объектная модель документа
Когда мы работаем с браузером, доступный функционал состоит из нескольких модулей, так как JavaScript сам по себе не имеет инструментов для работы с браузером.

javascript in browser
Объектная модель документа (Document Object Model) - независимый от языка интерфейс для работы с HTML-документом. Содержит набор свойств и методов позволяющих искать, создавать и удалять элементы, реагировать на действия пользователя и многое другое. То есть соединяет страницу с языком программирования.

DOM это отражение HTML-документа - древовидная структура, в которой каждый узел это JavaScript-объект со свойствами и методами, представляющий часть HTML-документа. Каждый элемент в документе, весь документ в целом, заголовок, ссылка, абзац - это части DOM этого документа, поэтому все они могут быть изменены из JavaScript-кода.

Объектная модель браузера (Browser Object Model) - независимый от языка интерфейс для работы с вкладкой браузера. Содержит набор свойств и методов, позволяющих получить доступ непосредственно к текущей вкладке и ряду функций браузера. Включает объект работы с историей навигации, местоположением и многое другое.

# HTML-документ и DOM
Согласно DOM-модели, каждый тег образует отдельный элемент-узел, каждый фрагмент текста - текстовый элемент. HTML-документ это иерархическое дерево, в котором у каждого элемента (кроме корневого) есть только один родитель, т. е. элемент, внутри которого он располагается. Это дерево образуется за счет вложенной структуры тегов и текстовых элементов.

dom tree
Чтобы отобразить HTML-документ, браузер сначала преобразовывает его в формат, который он понимает - DOM. У движка браузера есть специальный фрагмент кода - HTML-парсер, который используется для преобразования HTML в DOM.

В HTML вложенность определяет отношения родитель-ребенок между элементами. В DOM объекты связаны в древовидной структуре данных, фиксируя эти отношения.

Браузер строит DOM постепенно, как только приходят первые фрагменты кода, он начинает парсить HTML, добавляя узлы в древовидную структуру.

dom parsing
После того как DOM-дерево построено, в нем можно найти элемент с помощью JavaScript и выполнять с ним какие-то действия, так как каждый элемент имеет интерфейс с множеством свойств и методов.

js engine and html parser
DOM-дерево
Визуализируем дерево HTML-документа используя сервис генератора DOM-дерева.

<!DOCTYPE html>
<html>
  <head>
    <title>Document title</title>
  </head>
  <body>
    <h1>Page title</h1>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </body>
</html>


В этом дереве выделены два типа узлов.

Узлы-элементы (element node) - образуются тегами, естественным образом одни элементы вложены в другие. Структура дерева образована исключительно за счет них.
Текстовые узлы (text node) - образуются текстом внутри элементов. Текстовый узел содержит только строку текста и не может иметь потомков, то есть он всегда на самом нижнем уровне иерархии. Пробелы и переносы строк - это тоже текстовые узлы.
ИНТЕРЕСНО
Из этого правила есть исключения: пробелы до head игнорируются, а любое содержимое после body не создаёт элемент, браузер переносит его в конец body.

# Навигация по DOM
DOM предоставляет широкий спектр возможностей при работе с элементом и его содержимым, но для этого на него сначала нужно получить ссылку. Доступ к DOM начинается с объекта document, от него можно добраться до любых элементов.

ИНТЕРЕСНО
document это часть глобального объекта window, который доступен в скрипте, когда он выполняется в браузере. Также как alert, console.log, prompt и многие другие.

Элементы DOM-дерева имеют иерархическое отношение друг к другу. Для описания отношений используются термины предок (ancestor), потомок (descendant), родитель (parent), ребенок (child) и сосед (sibling).

Самый верхний элемент называется корневым (root node).
Каждый элемент, кроме корневого, имеет только одного родителя.
У элемента может быть сколько угодно детей.
Соседи - это элементы с общим родителем.
Дочерние элементы (дети) - элементы, которые лежат непосредственно внутри текущего (первая вложенность).
Потомки – все элементы, которые лежат внутри текущего, вместе с их детьми, детьми их детей и так далее. То есть всё поддерево.
DOM traversal
Для навигации по этой иерархии у элементов есть следующие свойства.

elem.parentNode - выберет родителя elem.
elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).
Открой этот пример в отдельном окне и посмотри логи в консоли разработчика.


ИНТЕРЕСНО
DOM-коллекции, такие как childNodes и children - псевдомассивы (NodeList), у них нет большинства методов массива.

# Поиск элементов
Итак, мы уже знаем что DOM-элемент - это объект со свойствами и методами. Самое время научиться быстро находить элемент по произвольному CSS-селектору. Группа методов elem.querySelector* это современный стандарт для поиска элементов. Они позволяют найти элемент или группу элементов по CSS-селектору любой сложности.

element.querySelector(selector);

Используется если необходимо найти только один, чаще всего уникальный элемент.

Возвращает первый найденный элемент внутри element, соответствующий CSS-селектору selector.
Если ничего не найдено, вернет null.
element.querySelectorAll(selector);

Используется если необходимо найти коллекцию элементов, то есть получить массив ссылок на элементы с одинаковым селектором. Например, все элементы списка с классом menu-item.

Возвращает псевдомассив всех элементов внутри element, удовлетворяющих CSS-селектору selector.
Если ничего не найдено, вернет пустой массив.

const listWithId = document.querySelector('#menu');
const listWithClass = document.querySelector('.menu');

const menuItemsByTagName = document.querySelectorAll("li")
const menuItemsByClass = document.querySelectorAll(".menu-item");



# Свойства и атрибуты
Во время построения DOM-дерева, некоторые стандартные HTML-атрибуты становятся свойствами элементов. Посмотрим на несколько часто использующихся свойств.

value - содержит текущий текстовый контент элементов форм.
checked - хранит состояние чекбокса или радиокнопки.
name - хранит значение, указанное в HTML-атрибуте name.
src - путь к изображению тега <img>.

//===================================================
const message = document.querySelector("#message");
console.log(message.value); // Default textarea message

//===================================================
const activeLink = document.querySelector(".btn.active");
console.log(activeLink.href); // https://s.codepen.io/about

//===================================================
const image = document.querySelector(".image");
console.log(image.src); // https://placeimg.com/640/480/animals
image.src = 'https://placeimg.com/640/480/tech';

Свойство textContent
elem.textContent возвращает текстовый контент внутри элемента. Доступно для чтения и записи. Не зависимо что будет передано в textContent, данные всегда будут записаны как текст.

const text = document.querySelector(".article-text");
console.log(text.textContent); // text inside p.article-text

const title = document.querySelector(".article-title");
title.textContent = 'Welcome to Bahamas!';


Свойство classList
В свойстве classList хранится объект с методами для работы с классами элемента.

elem.classList.contains(cls) - возвращает true или false в зависимости от того, есть ли у элемента класс cls.
elem.classList.add(cls) - добавляет класс cls в список классов элемента.
elem.classList.remove(cls) - удаляет класс cls из списка классов элемента.
elem.classList.toggle(cls) - если класса cls нет, то добавляет его, если есть, наоборот удаляет.
elem.classList.replace(oldClass, newClass) - заменяет существующий класс oldClass на указанный newClass.

const text = document.querySelector("#paragraph");

console.log(text.classList); // ["text", "red", "big", value: "text red big"]

console.log(text.classList.contains("red")); // true

text.classList.remove("big");
console.log(text.classList); // ["text", "red", value: "text red"]

text.classList.add("new-class");
console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// Can add multiple classes
text.classList.add("a", "b", "c");
console.log(text.classList);

text.classList.toggle("is-hidden"); // will add is-hidden class
text.classList.toggle("is-hidden"); // will remove is-hidden class

// classList has a forEach method
text.classList.forEach(cls => {
  console.log(cls); // text, red, new-class
});

Свойство style
Используется для чтения и изменения инлайновых стилей. Возвращает объект CSSStyleDeclaration, который содержит список всех свойств, определенных только во встроенных стилях элемента, а не весь CSS. При записи свойства записываются в camelCase, то есть background-color превращается в element.style.backgroundColor и т. д.

const button = document.querySelector(".btn");

button.style.backgroundColor = "teal";
button.style.fontSize = "24px";
button.style.textAlign = "center";

console.log(button.style); // inline styles object

ИНТЕРЕСНО
На практике стилизация элементов выполняется добавленим CSS-классов. Свойство style используется для добавления каких-то динамических стилей, например во время анимации.

# Атрибуты
DOM-элементам соответствуют HTML-теги у которых есть текстовые атрибуты. Доступ к атрибутам осуществляется при помощи стандартных методов. Эти методы работают со значением, которое находится в HTML.

elem.hasAttribute(name) - проверяет наличие аттрибута, возвращает true или false.
elem.getAttribute(name) - получает значение атрибута и возвращает его.
elem.setAttribute(name, value) - устанавливает атрибут.
elem.removeAttribute(name) - удаляет атрибут.
elem.attributes - свойство, возвращает объект всех атрибутов элемента.

const image = document.querySelector(".image");

console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

console.log(image.hasAttribute("src")); // true

console.log(image.getAttribute("alt")); // "Lake and clouds"

image.setAttribute("alt", "Amazing nature");

console.log(image.getAttribute("alt")); // Amazing nature

data-атрибуты
Позволяют добавить тегу произвольный атрибут и получить его значение в JavaScript. Эту возможность используют для того, чтобы упростить написание кода, например связать данные и разметку по уникальному идентификатору, указать тип действия кнопки и т. п.

<button type="button" data-action="save">Save</button>
<button type="button" data-action="close">Close</button>

Для получения значения data-атрибута используется свойство dataset, после которого идет имя атрибута. То есть data- отбрасывается, а остальное имя записывается как имя свойства объекта.

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"

========================
const saveBtn = document.querySelector('.editor button[data-action="save"]');
const closeBtn = document.querySelector('.editor button[data-action="close"]');

console.log(saveBtn.dataset.action); //save
console.log(closeBtn.dataset.action); //close

const dishes = document.querySelectorAll(".dishes > li");
dishes.forEach((dish) => {
  console.log(dish.dataset.id);
});


# Создание и удаление элементов
DOM API позволяет не только выбирать или изменять уже существующие, но и удалять, а так же создавать новые элементы, после чего добавлять их в документ.

Создание
document.createElement(tagName);

Создает элемент с именем tagName и возвращает ссылку на него как результат своего выполнения. tagName - это строка, указывающая тип создаваемого элемента. Элемент создается в памяти, в DOM его еще нет.

const heading = document.createElement("h1");
console.log(heading); // <h1></h1>

heading.textContent = "This is a heading";
console.log(heading); // <h1>This is a heading</h1>

const image = document.createElement("img");
image.src = "https://placeimg.com/640/480/nature";
image.alt = "Nature";
console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

Добавление
Чтобы созданный элемент был отображен на странице, его необходимо добавить к уже существующему элементу в DOM-дереве. Допустим, что добавляем в некий элемент element, для этого есть методы.

element.append(el1, el2, ...) - добавляет один или несколько элементов после всех детей элемента element.
element.prepend(el1, el2, ...) - добавляет один или несколько элементов перед всеми детьми элемента element.
element.after(el1, el2, ...) - добавляет один или несколько элементов после элемента element.
element.before(el1, el2, ...) - добавляет один или несколько элементов перед элементом element.
Во всех этих методах, el это элементы или строки, в любом сочетании и количестве. Строки добавляются как текстовые узлы.

---------------------------------
const list = document.querySelector(".usernames");

// Adds an item to the end of the list
const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);

// Adds an item to the beginning of the list
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list.prepend(firstItem);

// Adds a title before the list
const title = document.createElement("h2");
title.textContent = "USERNAMES";
list.before(title);

// Adds a paragraph after the list
const text = document.createElement("p");
text.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(text);
-----------------------------

ИНТЕРЕСНО
Если элемент для вставки уже находится в DOM, то он изымается из своего старого места и добавляется в новое. Отсюда вытекает правило - один и тот же элемент не может быть одновременно в двух местах.

Удаление
elem.remove();

const text = document.querySelector('.text');
text.remove();

Для того, чтобы удалить элемент используется метод remove(). Он вызывается на самом элементе elem, который необходимо удалить


# Оптимизация работы с DOM
Современные браузеры стараются оптимизировать процесс отрисовки страницы без вмешательства разработчика. Тем не менее, изменение DOM-дерева это дорогая операция, поэтому необходимо стараться минимизировать количество обращений к DOM.

Repaint - происходит, когда изменения затронули стили влияющие на внешний вид элемента, но не на геометрию. Например opacity, background-color, visibility и outline. Браузер отрисовывает элемент заново, с учётом нового стиля. Также проверяется видимость других элементов, один или более могут оказаться скрыты под изменившим внешний вид.

Reflow - происходит когда изменения затрагивают содержимое, структуру документа, положение элементов. Идет пересчет позиционирования и размеров, что ведет к перерисовке части или всего документа. Изменение размера одного родительского контейнера повлияет на всех его детей и предков. Имеет значительно большее влияние на производительность, чем repaint.

Все вышеперечисленные операции блокируют браузер. Страница не может выполнять никакие другие операции в то время, когда происходит reflow или repaint. Причинами могут быть:

Манипуляции с DOM (добавление, удаление, изменение, перестановка элементов)
Изменение содержимого, в т.ч. текста в полях форм
Расчёт или изменение CSS-свойств
Добавление и удаление таблиц стилей
Манипуляции с атрибутом class
Манипуляции с окном браузера (изменения размеров, прокрутка)
Активация псевдоклассов (например :hover)

# Свойство innerHTML
Еще один способ создать DOM-элементы и поместить их в дерево - это использовать строки с тегами и позволить браузеру сделать всю тяжелую работу. У такого подхода есть свои плюсы и минусы.

Чтение
Свойство innerHTML хранит содержимое элемента, включая теги, в виде строки. Возвращаемое значение это всегда валидный HTML-код.

const article = document.querySelector(".article");
console.log(article.innerHTML);

const title = document.querySelector(".article .title");
console.log(title.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);

Изменение
Свойство innerHTML доступно как для чтения, так и для записи. Если записать в него строку с HTML-тегами, то браузер во время парсинга строки превратит их в валидные элементы и добавит в DOM-дерево.

const title = document.querySelector(".article .title");
title.innerHTML = 'New and <span class="accent">improved</span> title';

ИНТЕРЕСНО
Если в свойство innerHTML записать пустую строку, то содержимое элемента будет очищено. Это простой и быстрый способ удаления всего содержимого.

При таком подходе, в отличии от document.createElement(), мы не получаем ссылку на созданный DOM-элемент. Это первый шаг на пути к шаблонизации - создания большого количества однотипной разметки с разными данными по заранее определённому шаблону. Например, как в списке товаров интернет магазина и т. п.

Однотипная (шаблонная) разметка создается из массива данных. Приём заключается в переборе этого массива и составлении одной строки с HTML тегами, которую потом записываем в innerHTML элемента.

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

const markup = technologies
  .map((technology) => `<li class="list-item">${technology}</li>`)
  .join("");

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;


Добавление
Изменение elem.innerHTML полностью удалит и пересоздаст всех потомков элемента elem. Если элемент изначально не пустой, то будут дополнительные затраты на сериализацию уже существующей разметки, а это плохо.

const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference? 
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString;

ИНТЕРЕСНО
Используйте свойство elem.innerHTML для добавления только в случае когда элемент elem пустой или если надо полностью заменить его содержимое.

# Метод insertAdjacentHTML()
Современный метод для добавления строки с HTML-тегами до, после или внутрь элемента. Решает проблему innerHTML с повторной сериализацией содержимого элемента при добавлении разметки к уже существующей.

elem.insertAdjacentHTML(position, string);

Аргумент position - это строка, позиция относительно элемента elem. Принимает одно из четырёх значений.

inserAdjacentHTML method
"beforebegin" - перед elem
"afterbegin" - внутри elem, перед всеми детьми
"beforeend" - внутри elem, после всех детей
"afterend" - после elem

const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

ИНТЕРЕСНО
"beforebegin" и "afterend" работают только в том случае, если elem уже находится в DOM-дереве.

# Подключение скриптов
Загрузка и выполнение скрипта указанного в теге <script> без каких-либо атрибутов, блокируют обработку HTML-документа и построение DOM. Это проблема.

<script src="path-to-script.js"></script>

Когда анализатор встречает такой тег, обработка HTML-документа приостанавливается и начинается загрузка файла скрипта указанного в атрибуте src. После загрузки скрипт выполняется, и только потом возобновляется обработка HTML. Это называется «блокирующий» скрипт.

Атрибуты defer и async были введены чтобы дать разработчикам возможность лучше контролировать как загружать скрипты и когда именно их выполнять.

Атрибут defer
<script defer src="path-to-script.js"></script>

Атрибут defer указывает браузеру загружать файл скрипта в фоновом режиме, паралельно обработке HTML-документа и построению DOM. Скрипт будет выполнен только после того как HTML-документ обработан, а DOM построен. Такие скрипты не блокируют построение DOM-дерева и гарантированно выполняются в том порядке, в котором указаны в HTML-документе.

s
Атрибут async
<script async src="path-to-script.js"></script>

Загрузка скрипта с атрибутом async не блокирует построение DOM, но он выполняется сразу после загрузки. Это значит, что такие скрипты могут заблокировать построение DOM, и выполняются в произвольном порядке.