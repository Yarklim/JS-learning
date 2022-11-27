//? ================== События ======================
/*
Событие это сигнал от браузера о том, что на веб - странице что - то произошло.События используются для реакции на действия пользователя и исполнения кода связанного с определенным событием.Существует много видов событий: мыши, клавиатуры, элементов форм, загрузки изображений, буфера обмена, изменение стадии CSS анимации или перехода, изменение размеров окна и много других.

Одно действие может вызывать несколько событий. Например, клик вызывает сначала mousedown, а затем mouseup и click. В тех случаях, когда одно действие генерирует несколько событий, их порядок фиксирован. То есть, обработчики вызовутся в порядке mousedown → mouseup → click.

Для того, чтобы элемент реагировал на действия пользователя, ему необходимо добавить слушателя (обработчик) события. То есть функцию, которая будет вызвана, как только событие произошло.

Метод addEventListener()
Добавляет слушателя события на элемент.

element.addEventListener(event, handler, options);

event - имя события, строка, например "click".
handler - коллбэк-функция которая будет вызвана при наступлении события.
options - необязательный объект параметров с расширенными настройками.
const button = document.querySelector(".my-button");

button.addEventListener("click", () => {
  console.log("Button was clicked");
});

Для коллбэка можно (и желательно) использовать отдельную функцию и передавать на неё ссылку. Именованная функция повышает читаемость кода.

const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("Button was clicked");
};

button.addEventListener("click", handleClick);

На одном элементе может быть сколько угодно обработчиков событий, даже событий одного типа. 
Коллбэк-функции будут вызываться в порядке регистрации их в коде.

Метод removeEventListener()
Удаляет слушателя события с элемента. Аргументы аналогичны методу addEventListener().

element.removeEventListener(event, handler, options);

Для удаления нужно передать ссылку именно на ту коллбэк-функцию, которая была назначена в addEventListener(). 
В таком случае для коллбэков используют отдельную функцию и передают её по имени (ссылку).

Ключевое слово this
Если коллбэком будет функция которая использует this, по умолчанию контекст внутри неё будет ссылаться на DOM-элемент на котором висит слушатель.

const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

const btn = document.querySelector(".js-btn");

// ✅ Работает
mango.showUsername();

// ❌ this будет ссылаться на button если использовать showUsername как callback
btn.addEventListener("click", mango.showUsername); // не работает

// ✅ Не забывайте привязывать контекст методов объекта
btn.addEventListener("click", mango.showUsername.bind(mango));

Объект события
Чтобы обработать событие, недостаточно знать о том, что это клик или нажатие клавиши, могут понадобиться детали. Например текущее значение текстового поля, элемент, на котором произошло событие, встроенные методы и другое.

Каждое событие представляет собой объект, который содержит информацию о деталях события и автоматически передается первым аргументом в обработчик события. Все события происходят от базового класса Event.

const handleClick = event => {
  console.log(event);
};

button.addEventListener("click", handleClick);

Параметр event это и есть обьект события, который автоматически передается первым аргументом при вызове коллбэк функции. Мы можем называть его как угодно, но обычно его объявляют как e, evt или event.

Некоторые свойства объекта события:

event.type - тип события.
event.currentTarget - элемент, на котором выполняется обработчик события.

Действия браузера по умолчанию
Некоторые события вызывают действие браузера встроенное по умолчанию как реакция на определенный тип события. Например клик по ссылке инициирует переход на новый адрес, указанный в href, а отправка формы перезагружает страницу. Чаще всего это поведение нежелательно и его необходимо отменить.

Для отмены действия браузера по умолчанию на объекте события есть стандартный метод preventDefault().

События клавиатуры
Есть два основных события клавиатуры: keydown и keyup. В отличии от других, события клавиатуры обрабатываются на документе, а не на конкретном элементе. Объекты событий клавиатуры происходят от базового класса KeyboardEvent.

document.addEventListener("keydown", event => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", event => {
  console.log("Keyup: ", event);
});

При нажатии клавиши сначала происходит keydown, после чего keyup, когда клавишу отжали. На практике, в основном обрабатывают только событие keydown, так как оно происходит быстрее чем keyup и пользователь раньше видит результат нажатия. События keydown и keyup срабатывают при нажатии любой клавиши, включая служебные (Ctrl, Shift, Alt, Escape и другие).

ИНТЕРЕСНО
Раньше было еще одно событие клавиатуры - keypress. Многие посты на форумах и блогах по-прежнему могут его использовать, но будьте осторожны - оно устарело и поддержка в новых браузерах может прекратиться в любой момент.

Свойства key и code
Свойство key возвращает символ сгенерированный нажатием клавиши, принимая во внимание состояние клавиш модификаторов, например Shift, а так же текущий язык. Свойство code возвращает код физической клавиши на клавиатуре и не изменяется между языками.

document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});

*/
