# ========= FormData =========
XMLHttpRequest 2 добавляет поддержку для нового интерфейса FormData. Объекты FormData позволяют вам легко конструировать наборы пар ключ-значение, представляющие поля формы и их значения, которые в дальнейшем можно отправить с помощью метода send().

FormData использует такой же формат на выходе, как если бы мы отправляли обыкновенную форму с encoding установленным в "multipart/form-data".

Конструктор
FormData()
Создаёт объект FormData.

Методы
FormData.append()
Добавляет новое значение существующего поля объекта FormData, либо создаёт его и присваивает значение.

FormData.delete()
Удаляет пару ключ-значение из объекта FormData.

FormData.get()
Возвращает первое значение ассоциированное с переданным ключом из объекта FormData.

FormData.getAll()
Возвращает массив всех значений ассоциированных с переданным ключом из объекта FormData.

FormData.has()
Возвращает булево значение касательно наличия в объекте FormData конкретной пары ключ-значение.

FormData.set()
Устанавливает новое значение для существующего ключа объекта FormData, или добавляет пару ключ-значение, если таковой не обнаружено в объекте.

FormData.keys()
Возвращает iterator , который позволяет пройтись по всем ключам для каждой пары "ключ-значение" , содержащимся внутри объекта FormData

FormData.entries()
Возвращает iterator который позволяет пройтись по всем парам "ключ-значение", содержащимся внутри объекта FormData

FormData.values()
Возвращает iterator , который позволяет пройтись по всем значениям , содержащимся в объекте FormData

Примечание: Важно: Разница между FormData.set() и FormData.append() заключается в том, что если указанный ключ найден в объекте, FormData.set() перезапишет его новым значением, тогда как FormData.append() добавит новое значение в конец существующего. 

Использование Объектов FormData
Объект FormData позволяет создать набор пар ключ/значение и передать их, используя XMLHttpRequest. Объект FormData предназначен для передачи данных форм, однако может быть использован для передачи пар ключ/значение независимо от форм. Данные передаются в том же формате, как и данные, передаваемые методом submit() формы, с установленной кодировкой enctype="multipart/form-data".

Создание объекта FormData
Вы можете самостоятельно создать пустой объект FormData, наполнив его затем данными, используя его метод append():

var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // число 123456 немедленно преобразуется в строку "123456"

// Файл, выбранный пользователем
formData.append("userfile", fileInputElement.files[0]);

// JavaScript Blob объект
var content = '<a id="a"><b id="b">hey!</b></a>'; // содержимое нового файла...
var blob = new Blob([content], { type: "text/xml"});

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);


Примечание: Поля "userfile" и "webmasterfile" оба содержат файлы. Число, переданное полю "accountnum" немедленно преобразуется в строку. Преобразование осуществляется методом FormData.append() (Значение поля может быть Blob, File, или строкой: если значение не является ни Blob, ни File, то оно автоматически преобразуется в строку).

Данный пример показывает создание экземпляра FormData, содержащего поля "username", "accountnum", "userfile" и "webmasterfile". Экземпляр FormData затем отправляется при помощи метода send() объекта XMLHttpRequest. Поле "webmasterfile" является экземпляром класса Blob. Объект класса Blob является файлом-подобным объектом, содержащим "сырые" данные. Определение данных как Blob не является обязательным в нативном javascript. ИнтерфейсFileбазируется на Blob, наследуя его функциональность и расширяя его для поддержки файлов в ОС пользователя. Для создания объектов класса Blob используйте Blob() constructor.


Получение объекта FormData из HTML формы
Для создания объекта FormDatа, содержащего данные существующей формы (<form>) передайте форму в качестве аргумента при создании объекта FormData:

**Примечание:**FormData будет использовать только те поля ввода, которые используют атрибут name.

var formData = new FormData(someFormElement);
Copy to Clipboard
Например:

var formElement = document.querySelector("form");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
Copy to Clipboard
Вы так же можете добавить дополнительные данные в объект FormData после его создания и до отправки данных:

var formElement = document.querySelector("form");
var formData = new FormData(formElement);
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
formData.append("serialnumber", serialNumber++);
request.send(formData);
Copy to Clipboard
Такой приём позволяет включать в форму дополнительную информацию, которая, например, не нуждается в демонстрации пользователю.

Отправка файлов при помощи объекта FormData
Вы так же можете отправлять файлы при помощи FormData. Просто включите <input> с типом file в форму.

<form enctype="multipart/form-data" method="post" name="fileinfo">
  <label>Your email address:</label>
  <input type="email" autocomplete="on" autofocus name="userid" placeholder="email" required size="32" maxlength="64" /><br />
  <label>Custom file label:</label>
  <input type="text" name="filelabel" size="12" maxlength="32" /><br />
  <label>File to stash:</label>
  <input type="file" name="file" required />
  <input type="submit" value="Stash the file!" />
</form>
<div></div>
Copy to Clipboard
Затем вы сможете отправить выбранный файл следующим образом:

var form = document.forms.namedItem("fileinfo");
form.addEventListener('submit', function(ev) {

  var oOutput = document.querySelector("div"),
      oData = new FormData(form);

  oData.append("CustomField", "This is some extra data");

  var oReq = new XMLHttpRequest();
  oReq.open("POST", "stash.php", true);
  oReq.onload = function(oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Uploaded!";
    } else {
      oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
    }
  };

  oReq.send(oData);
  ev.preventDefault();
}, false);
Copy to Clipboard
Примечание: Если для формы указан атрибут method, то будет использован именно этот метод для отправки данных на сервер, а не метод, указанный в вызове open()

Вы так же можете добавить File или Blob непосредственно к объекту FormData:

data.append("myfile", myBlob, "filename.txt");
Copy to Clipboard
Метод append() принимает 3й опциональный параметр - название файла, которое добавляется в заголовок Content-Disposition при отправке на сервер. Если название файла не указано (или данный параметр не поддерживается) используется имя "blob".

Вы так же можете использовать FormData с jQuery:

var fd = new FormData(document.querySelector("form"));
fd.append("CustomField", "This is some extra data");
$.ajax({
  url: "stash.php",
  type: "POST",
  data: fd,
  processData: false,  // Сообщить jQuery не передавать эти данные
  contentType: false   // Сообщить jQuery не передавать тип контента
});