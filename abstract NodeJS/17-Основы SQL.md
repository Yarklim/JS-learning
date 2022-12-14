Работа с базами SQL
CREATE TABLE: Создаём таблицу
Для создания таблиц в SQL, используется выражение CREATE TABLE. Оно принимает в качестве параметров имена столбцов, которые мы хотим внести, а также их типы данных.

Создадим три таблицы с названием "genders", "users" и "contacts",

В таблице "genders" будет три столбца:

id - порядковый номер гендера тип INT, это уникальный ключ
name - название гендера тип VARCHAR(30)
created_at - время создания записи тип TIMESTAMP, значение по умолчанию текущее время и дата
Код для создания:

CREATE TABLE genders (
    id INT PRIMARY KEY,
    name VARCHAR(30),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

В таблице "users" у нас будет семь столбцов:

id - порядковый номер контакта тип INT, это уникальный ключ
name - имя пользователя, тип VARCHAR(30)
email - электронный адрес пользователя, тип VARCHAR(30)
password - пароль пользователя, тип VARCHAR(30)
age - возраст пользователя, тип TINYINT UNSIGNED
gender_id - это foreign key, который связывает таблицу "users" и "genders" связью один ко многим. Один гендер может быть у многих пользователей.
created_at - время создания записи тип TIMESTAMP, значение по умолчанию текущее время и дата
Код для создания:

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(30),
    age TINYINT UNSIGNED,
    gender_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (gender_id) REFERENCES genders (id)
          ON DELETE SET NULL
          ON UPDATE CASCADE
);

Здесь у нас появилась инструкция:

    FOREIGN KEY (gender_id) REFERENCES genders (id)
          ON DELETE SET NULL
          ON UPDATE CASCADE

Она говорит, что для столбца gender_id в таблице users необходимо создать референ ссылку на таблицу genders, причем значение столбца будет совпадать со значением столбца id в таблице genders для конкретной записи. Запись ON DELETE SET NULL говорит, что если будет удалена запись в таблице genders мы должны значение для столбца gender в таблице users установить в значение NULL. Запись ON UPDATE CASCADE говорит, что если будет изменено значение поля id в таблице genders, то значение для столбца gender_id в таблице users также автоматически будет изменено.

В таблице "contacts" будет семь столбцов:

id - порядковый номер контакта тип INT, это уникальный ключ
name - название контакта тип VARCHAR(30)
email - электронный адрес контакта тип VARCHAR(30)
phone - телефон контакта тип VARCHAR(30)
favorite - контакт находится в избранном или нет, логического типа
user_id - это foreign key, который связывает таблицу "contacts" и "users" связью один ко многим. Один пользователь может иметь много контактов.
created_at - время создания записи тип TIMESTAMP, значение по умолчанию текущее время и дата
Код будет выглядеть вот так:

CREATE TABLE contacts (
    id INT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30),
    phone VARCHAR(30),
    favorite BOOLEAN,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
          ON DELETE CASCADE
          ON UPDATE CASCADE
);

После этого наша база данных будет иметь следующую ER-диаграмму

ER

INSERT: Ввод данных
Теперь давайте заполним наши таблицы. Сделать это можно с помощью команды INSERT. Формат команды перед вводом данных мы указываем названия колонок. В случае, если мы не укажем один из столбцов, на его место будет записано NULL или заданное значение по умолчанию.

Вставим значения в таблицу genders:

INSERT INTO genders (id, name)
VALUES (1, 'male'), (2, 'female');

Мы не указали при вставке значение для поля created_at, но благодаря инструкции DEFAULT CURRENT_TIMESTAMP значение будет подставлено автоматически.

Вставим значение в таблицу users:

INSERT INTO users (id, name, email, password, age, gender_id)
VALUES (1, 'Boris', 'boris@test.com', 'password', 23, 1),
(2, 'Alina', 'alina@test.com', 'password', 32, 2),
(3, 'Maksim', 'maksim@test.com', 'password', 40, 1);

Вставим значение в таблицу contacts:

INSERT INTO contacts (id, name, email, phone, favorite, user_id)
VALUES (1, 'Allen Raymond', 'nulla.ante@vestibul.co.uk', '(992) 914-3792', 0, 1),
(2, 'Chaim Lewis', 'dui.in@egetlacus.ca', '(294) 840-6685', 1, 1),
(3, 'Kennedy Lane', 'mattis.Cras@nonenimMauris.net', '(542) 451-7038', 1, 2),
(4, 'Wylie Pope', 'est@utquamvel.net', '(692) 802-2949', 0, 2),
(5, 'Cyrus Jackson', 'nibh@semsempererat.com', '(501) 472-5218', 0, null);

SELECT: Получение данных
Данный запрос используется в случае, если нам нужно показать данные в таблице. Наверное, самым простым примером использования SELECT будет следующий запрос:

SELECT * FROM contacts

Результатом данного запроса будет таблица со всеми данными в таблице contacts.

id	name	email	phone	favorite	user	created_at
1	Allen Raymond	nulla.ante@vestibul.co.uk	(992) 914-3792	0	1	2021-06-06 23:18:08
2	Chaim Lewis	dui.in@egetlacus.ca	(294) 840-6685	1	1	2021-06-06 23:18:08
3	Kennedy Lane	mattis.Cras@nonenimMauris.net	(542) 451-7038	1	2	2021-06-06 23:18:08
4	Wylie Pope	est@utquamvel.net	(692) 802-2949	0	2	2021-06-06 23:18:08
5	Cyrus Jackson	nibh@semsempererat.com	(501) 472-5218	0		2021-06-06 23:18:08
Знак звёздочки * означает то, что мы хотим показать все столбцы из таблицы без исключений. Так как в базе данных обычно больше одной таблицы, нам необходимо указывать название таблицы, данные из которой мы хотим посмотреть. Это делается используя ключевое слово FROM.

Когда вам нужны лишь некоторые столбцы из таблицы, то вы можете указать их имена через запятую вместо звёздочки.

SELECT name, email FROM contacts ORDER BY name

Также иногда нам нужно отсортировать выводимые данные. Для этого мы используем ORDER BY "название столбца". ORDER BY имеет два модификатора: ASC сортировать по возрастанию, значение по умолчанию и DESC сортировать по убыванию

name	email
Allen Raymond	nulla.ante@vestibul.co.uk
Chaim Lewis	dui.in@egetlacus.ca
Cyrus Jackson	nibh@semsempererat.com
Kennedy Lane	mattis.Cras@nonenimMauris.net
Wylie Pope	est@utquamvel.net
Если необходимо включить в вывод лишь некоторые конкретные записи по условию, для этого используется ключевое слово WHERE. Оно позволяет фильтровать данные по определённому условию.

В следующем запросе мы выведем только избранные контакты.

SELECT name, email
FROM contacts
WHERE favorite = true
ORDER BY name

Вывод:

name	email
Chaim Lewis	dui.in@egetlacus.ca
Kennedy Lane	mattis.Cras@nonenimMauris.net
Условия в WHERE могут быть написаны с использованием логических операторов AND и OR, а также математических операторов сравнения (=, <, >, <=, >=, <>).

Условия в WHERE могут быть записаны с использованием ещё нескольких команд, которыми являются:

IN - сравнивает значение в столбце с несколькими возможными значениями и возвращает true, если значение совпадает хотя бы с одним значением
SELECT name, email
FROM users
WHERE age IN(20, 30, 40)
ORDER BY name

Вывод:

name	email
Maksim	maksim@test.com
BETWEEN - проверяет, находится ли значение в каком-то промежутке
SELECT name, email, age
FROM users
WHERE age BETWEEN 30 AND 40
ORDER BY name

Вывод:

name	email	age
Alina	alina@test.com	32
Maksim	maksim@test.com	40
LIKE - ищет по шаблону
Также, если мы хотим вывести все контакты, в имени которых есть буква 'L', мы можем использовать следующую запись:

SELECT name, email
FROM contacts
WHERE name LIKE '%L%'
ORDER BY name

Знак % означает любую последовательность символов (0 символов тоже считается за последовательность).

Вывод:

name	email
Allen Raymond	nulla.ante@vestibul.co.uk
Chaim Lewis	dui.in@egetlacus.ca
Kennedy Lane	mattis.Cras@nonenimMauris.net
Wylie Pope	est@utquamvel.net
В SQL также есть инверсия. Для этого надо написать NOT перед любым логическим выражением в условии (NOT BETWEEN и так далее).

SELECT name, email, age
FROM users
WHERE age NOT BETWEEN 30 AND 40
ORDER BY name

Вывод:

name	email	age
Boris	boris@test.com	23
Функции агрегации
SQL имеет множество встроенных функций для выполнения разных операций. Мы рассмотрим наиболее часто используемые:

COUNT() - возвращает число строк
SUM() - возвращает сумму всех полей с числовыми значениями в них
AVG() - возвращает среднее значение среди строк
MIN()/MAX() - возвращает минимальное/максимальное значение среди строк
Найти минимальный возраст среди пользователей

SELECT min(age) as minAge
FROM users

Вывод:

minAge
23
Найти средний возраст пользователей:

SELECT avg(age) as averageAge
FROM users

Вывод:

averageAge
31.666666666666668
Давайте найдем количество контактов для каждого пользователя, с помощью функции COUNT. Но в операторе SELECT нам следует добавить строку GROUP BY user_id. Так как функция является агрегированной по полю user_id, и необходимо группировать значения по имени.

SELECT COUNT(user_id) as total_contacts, user_id
FROM contacts
GROUP BY user_id

Вывод:

total_contacts	user_id
0	
2	1
2	2
Как и ожидалось, у каждого пользователя мы добавили по два контакта. И есть контакт без пользователя.

Вложенные SELECT
Пока мы рассматривали только простые запросы. Но часто необходимо использовать так называемые вложенные запросы или подзапросы.

Пусть необходимо вывести контакты для пользователей, возраст которых меньше 30 лет.

Первый запрос, найти id пользователей младше 30 лет

SELECT id
FROM users
WHERE age < 30

Потом мы объеденяем запросы с поомщью WHERE:

SELECT *
FROM contacts
WHERE user_id IN (SELECT id
    FROM users
    WHERE age < 30)

Вывод:

id	name	email	phone	favorite	user_id	created_at
1	Allen Raymond	nulla.ante@vestibul.co.uk	(992) 914-3792	0	1	2021-06-07 07:59:35
2	Chaim Lewis	dui.in@egetlacus.ca	(294) 840-6685	1	1	2021-06-07 07:59:35
Псевдонимы
В предыдущих примерах мы уже использовали псевдонимы. Чтобы присвоить столбцу псевдоним, можно использовать ключевое слово AS:

SELECT id, name as fullName, phone as mobile
FROM contacts


Вывод:

id	fullName	mobile
1	Allen Raymond	(992) 914-3792
2	Chaim Lewis	(294) 840-6685
3	Kennedy Lane	(542) 451-7038
4	Wylie Pope	(692) 802-2949
5	Cyrus Jackson	(501) 472-5218
Псевдонимы часто используют когда начинают работать со связанными таблицами.

JOIN: Присоединение таблиц
В базах данных чаще всего таблицы связаный между собой. К примеру, у нас таблицы users и genders связаны между собой по полю gender_id, а таблицы contacts и users по полю user_id.

Для присоеденения таблиц используют оператор JOIN. Рассмотрим конкретные примеры.

Как мы уже говорили в таблице users есть столбец gender_id, в данном случае он является так называемым foreign key и связующим звеном между двумя таблицами. Если мы хотим вывести всю информацию о пользователе, включая информацию о его гендере, нам необходимо подключить вторую таблицу genders. Чтобы это сделать, можно использовать INNER JOIN, где условие объединения задается с помощью ON:

SELECT u.id, u.name, u.email, g.name AS gender
FROM users AS u
INNER JOIN genders AS g ON g.id = u.gender_id

Вывод:

id	name	email	gender
1	Boris	boris@test.com	male
2	Alina	alina@test.com	female
3	Maksim	maksim@test.com	male
Это простой пример использования JOIN. Есть ещё несколько вариантов его использования:

(INNER) JOIN: Возвращает записи, значения которых совпадают в обеих таблицах.
LEFT (OUTER) JOIN: Возвращает все записи из левой таблицы и соответствующие записи из правой таблицы.
RIGHT (OUTER) JOIN: Возвращает все записи из правой таблицы и соответствующие записи из левой таблицы.
FULL (OUTER) JOIN: Возвращает все записи, если есть совпадения в левой или правой таблице
JOIN

В круглых скобках слово можно по умолчанию не писать, т.е. записи INNER JOIN и JOIN эквивалентны

Рассмотрим конкретный пример, чтобы понять разницу между INNER JOIN и LEFT JOIN

SELECT c.id, c.name, c.email, u.name AS owner
FROM contacts AS c
JOIN users AS u ON u.id = c.user_id

Вывод:

id	name	email	owner
1	Allen Raymond	nulla.ante@vestibul.co.uk	Boris
2	Chaim Lewis	dui.in@egetlacus.ca	Boris
3	Kennedy Lane	mattis.Cras@nonenimMauris.net	Alina
4	Wylie Pope	est@utquamvel.net	Alina
В этом случае, в выборке, мы не получаем контакт без пользователя, так как использовалось пересечение таблиц. Чтобы получить все контакты, даже если у них нет владельцев из таблицы users нам надо использовать LEFT JOIN

SELECT c.id, c.name, c.email, u.name AS owner
FROM contacts AS c
LEFT JOIN users AS u ON u.id = c.user_id

Вывод:

id	name	email	owner
1	Allen Raymond	nulla.ante@vestibul.co.uk	Boris
2	Chaim Lewis	dui.in@egetlacus.ca	Boris
3	Kennedy Lane	mattis.Cras@nonenimMauris.net	Alina
4	Wylie Pope	est@utquamvel.net	Alina
5	Cyrus Jackson	nibh@semsempererat.com	NULL
UPDATE: Изменение данных
Изменение данных в таблице SQL это делается с помощью команды UPDATE.

Использование UPDATE включает в себя: первое выбор таблицы, в которой находится поле, которое мы хотим изменить, второе установка в запись нового значения с помощью SET и третье это использование WHERE, чтобы обозначить конкретное место в таблице

В таблице contacts у нас есть запись с id = 5 у которой нет значения поля user_id. Давайте установим, что владельцем этого контакта будет пользователь Maksim с id = 3 в таблице users

UPDATE contacts SET user_id = 3 WHERE id = 5;

DELETE: Удаление записей из таблицы
Удаление записи из таблицы через SQL, тоже простая операция. Главное обозначить с помощью WHERE, что именно мы хотим удалить. Иначе мы удалим все записи из таблицы, чего бы хотелось избежать.

DELETE FROM contacts WHERE id = 4;

Удаление таблиц
Если мы хотим удалить все данные из таблицы, но при этом саму таблицу оставить, то следует использовать команду TRUNCATE:

TRUNCATE TABLE contacts;

В случае, если мы хотим удалить именно саму таблицу, то нам следует использовать команду DROP:

DROP TABLE contacts;

Реляционные базы данных
Основы
База данных (БД) — это набор из одной и более таблиц с данными. Каждая таблица содержит информацию в 1 и более столбцах (полях). Один элемент данных (запись) — это одна строка в таблице.

Ключ — уникальное поле, которое однозначно идентифицирует запись.

Primary key — уникальный ключ, который не повторяется в таблице.

Foreign key — ссылка на уникальный ключ, который НЕ ПОВТОРЯЕТСЯ в своей таблице.

Взаимоотношения:

один к одному — таблицы связаны один к одному тогда, когда одной строке (записи) таблицы A соответствует одна строка таблицы B, и одной записи таблицы B соответствует одна запись таблицы A;
один ко многим — это связь в реляционных базах данных реализуется тогда, когда одной строке таблицы A может принадлежать или же соответствовать несколько записей в таблице B, но записи из таблицы B может соответствовать только одна запись таблицы А. Пример: у пользователя может быть несколько телефонных номеров;
многие ко многим — реализуется в том случае, когда нескольким записям из таблицы A может соответствовать несколько записей из таблицы B, и в тоже время нескольким записям из таблицы B соответствует несколько записей из таблицы A;
многие к одному — обратная ситуация один ко многим, только теперь таблицы A и B надо поменять местами;
Нормализация — процесс приведения структуры БД к виду, обеспечивающему минимальную логическую избыточность, и не имеет целью уменьшение или увеличение производительности работы или же уменьшение или увеличение физического объёма базы данных. Конечной целью нормализации является уменьшение потенциальной противоречивости хранимой в базе данных информации.

Основной инструмент общения с реляционными БД — SQL (Structured Query Language).

SQL — язык структурированных запросов.

Основные операторы SQL:
операторы определения данных (Data Definition Language, DDL):
CREATE создаёт объект БД (саму базу, таблицу, представление, пользователя и т. д.),
ALTER изменяет объект,
DROP удаляет объект;
операторы манипуляции данными (Data Manipulation Language, DML):
SELECT выбирает данные, удовлетворяющие заданным условиям,
INSERT добавляет новые данные,
UPDATE изменяет существующие данные,
DELETE удаляет данные;
операторы определения доступа к данным (Data Control Language, DCL):
GRANT предоставляет пользователю (группе) разрешения на определённые операции с объектом,
REVOKE отзывает ранее выданные разрешения,
операторы управления транзакциями (Transaction Control Language, TCL):
COMMIT применяет транзакцию,
ROLLBACK откатывает все изменения, сделанные в контексте текущей транзакции,
SAVEPOINT делит транзакцию на более мелкие участки.
ER (Entity–relationship) - диаграммы.
ER-модель — модель данных, позволяющая описывать концептуальные схемы предметной области. ER-модель используется при высокоуровневом (концептуальном) проектировании баз данных. С её помощью можно выделить ключевые сущности и обозначить связи, которые могут устанавливаться между этими сущностями.

ER

Подключение
Программ для работ с SQL базами достаточно много, но рекомендовать мы будем две: HeidiSQL и DBeaver.

В качестве объяснений по подключению мы будем использовать DBeaver, который работает с большинством известных баз данных.

Скачиваем с сайта разработчиков https://dbeaver.io/download/

Для запуска базы данных postgres мы используем Docker. В командной строке необходимо выполнить такую команду

docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

Вместо some-postgres выберите свое название контейнера, а вместо mysecretpassword придумайте свой пароль для подключения к базе данных

Теперь нам нужно подключиться к нашей базе.

connect

Начальные настройки уже должны быть правильные, в поле password впишите пароль который вы установили.

password

Нажимаем Тест соединения... должно быть следующее сообщение.

test

Если все хорошо, у вас в списке появиться сервер, откройте его, у вас будет как на скрине ниже

done-pg

И уже есть готовая база данных с именем postgres

Подключение к SQLite базе данных происходит еще проще. По сути это локальный файл, который необходимо создать.

sqlite

Пропишите путь и имя файла где вы хотите, чтобы сохранялся наш файл c базой данных

sqlite

Если все хорошо, у вас в списке появиться база данных SQLite, откройте ее, у вас будет как на скрине ниже

sqlite

Типы данных
Числовые типы данных
Числа делятся на целые и вещественные (число с точкой)

Целые числа
Типы	Байт	От	До	Если UNSIGNED
TINYINT	1	-128	127	255
SMALLINT	2	-32768	32767	65535
MEDIUMINT	3	-8388698	8388607	16777215
INT	4	-2137483648	2147483647	4294967295
BIGINT	8	-9223372036854775808	9223372036854775807	18446744073709551615
Также целые числа разделяют на типы:

SIGNED – знаковые (один бит уходить на знак плюс или минус)
UNSIGNED – беззнаковые, если значения только положительные, например расстояние, площадь и т.д. Это увеличить положительное значение для типа в двое, то-есть TINYINT UNSIGNED будет от 0 до 255
Дробные числа
Все вещественные числа в SQL строго оговоренной точности

Псевдонимы типа:

REAL(10,2)
DECIMAL(10,2)
FIXED(10,2)
FLOAT(10,2)
Эти все 4 функции псевдонимы, и принципиальной разницы в SQL между ними нет. Но реализациях лучше уточнить в документации.

Типы данных: дата и время
Типы	Значение	Байт
DATETIME	0000-00-00 00:00:00	8
TIMESTAMP	00000000000000	4
DATE	0000-00-00	3
TIME	00:00:00	3
YEAR	0	1
Подробнее:

DATETIME – для полноценной даты и времени, большой по объему, приблизительно 4-8 байт. Записывается в виде строки, и всегда записывается от большого к меньшему: год, месяц, день, часы, минуты, секунды. Поддерживаемый диапазон от ‘1000-01-01 00:00:00’ до ‘9999-12-31 23:59:59’. Если нужно ниже, просто пишем с минусом ‘-500-01-09 00:00:00’.
TIMESTAMP – временная метка, диапазон эпохи Юникса 1970-01-01 00:00:00 — 2038-12-31 00:00:00
DATE – это только дата без времени
TIME – только время
YEAR – только год
Символьные типы данных
Типы CHAR и VARCHAR
Эти типы данных хранят строку определенной длины.

CHAR – хранит символы всегда одинаковой длины, так для CHAR(10) будет всегда записано 10 символов (не байтов). Если задана граница типа 10, то будет всегда записано 10. Если в строке не хватает символов - будет дополнено пробелами, если символов много - они будут обрезаны.

VARCHAR – это переменный CHAR, у него есть дополнительный байт символизирующий конец, так сказать маркер конца. Таким образом символы, будут водиться ровно столько, сколько мы ввели плюс 1 байт. То есть при CHAR(4), пустая строка весит 4 байта, а при VARCHAR(4) весит 1 байт, вес только маркера. При переполнении строка тоже обрезается.

Сравнительная таблица

Величина	CHAR(4)	Требуемая память	VARCHAR(4)	Требуемая память
''	'                '	4 байта	''	1 байт
'ab'	'ab        '	4 байта	'ab'	3 байта
'abcd'	'abcd'	4 байта	'abcd'	5 байтов
'abcdefgh'	'abcd'	4 байта	'abcd'	5 байтов
Причина тогда использовать CHAR, если VARCHAR явно удобнее. Но проблема не в экономии места, 1 байт на миллионных таблицах даст много места. Главное, что поиск по CHAR работает намного быстрее. Если у нас есть явное значение, которое больше быть не может, как номер телефона, паспорта и т.д., нет смысла делать это типом VARCHAR, вы замедлите базу и потеряете по байту на запись.

Предположим у нас строки CHAR(3) запишем их в базу.

code
abc
bac
cab
Но в базе оно будет храниться приблизительно так

abc bac cab

И если мы хотим получить третью запись, то база точно знает, что количество символов в базе по 3, и она просто начнет чтение с 7-го символа. В случае если бы это был VARCHAR(3) ей бы в этой же структуре пришлось бы просмотреть все записи для поиска их маркеров конца записи, она уже не может пролистать 6 символов, так как строки могут быть не полными и разной длины.

Типы данных TEXT
Это типы для хранения большого текста кроме TINYTEXT - это синоним VARCHAR. Если нам нужно хранить описание, отзывы или даже книги, то это тот тип, который нужен.

TEXT - используется чаще всего из этих типов