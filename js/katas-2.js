//?-------------------------------------------------------
//?-------------------------------------------------------

//?--------------------------------------------------------
//?--------------------------------------------------------
/*
Persistent Bugger.

Напишите функцию , persistence которая принимает положительный параметр 
num и возвращает его мультипликативную постоянство, 
то есть количество раз, которое вы должны умножить на цифры num, 
пока не получите одну цифру.

Например (Ввод --> Вывод) :

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/
function persistence(num) {}

// console.log(persistence(39)); // 3
// console.log(persistence(4)); // 0
// console.log(persistence(25)); // 2
// console.log(persistence(999)); // 4
//? -----------------------------------------------
/*
Grasshopper - Grade book

Зачетная книжка
Завершите функцию, чтобы она нашла среднее значение трех переданных ей 
баллов и вернула буквенное значение, связанное с этой оценкой.

Числовая оценка	Письмо Оценка
90 <= оценка <= 100	«А»
80 <= оценка < 90	'Б'
70 <= оценка < 80	'С'
60 <= оценка < 70	'Д'
0 <= оценка < 60	'Ф'
Все проверенные значения находятся в диапазоне от 0 до 100. 
Нет необходимости проверять наличие отрицательных значений или значений, 
превышающих 100.
*/
function getGrade(s1, s2, s3) {
  // Code here
}

// console.log(getGrade(95, 90, 93)); // A
// console.log(getGrade(100, 85, 96)); // A
// console.log(getGrade(82, 85, 87)); // B
// console.log(getGrade(70, 70, 100)); // B
//? ------------------------------------------------
/*
Money, Money, Money

У мистера Скруджа есть сумма денег «P», которую он хочет инвестировать. 
Прежде чем он это сделает, он хочет знать, сколько лет «Y» 
эта сумма «P» должна храниться в банке, чтобы она составила 
желаемую сумму денег «D».

Сумма хранится в течение Y лет в банке, где проценты I выплачиваются 
ежегодно. После уплаты налогов «Т» за год новая сумма реинвестируется.

Примечание к налогам: налогом облагается не инвестированная основная 
сумма, а только начисленные проценты за год.

Пример:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Таким образом, г-н Скрудж должен ждать 3 года, чтобы первоначальный 
основной капитал составил желаемую сумму.

Ваша задача — завершить предоставленный метод и вернуть количество лет
 «Y» в целом, чтобы мистер Скрудж получил желаемую сумму.

Предположение: предположим, что желаемый принципал «D» всегда больше, 
чем первоначальный принципал. Однако лучше принять во внимание, 
что если желаемый основной «D» равен основному «P», 
это должно вернуть 0 лет.
*/
function calculateYears(principal, interest, tax, desired) {
  // your code
}

// console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
// console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // 14
// console.log(calculateYears(1000, 0.05, 0.18, 1000)); // 0
//? ------------------------------------------------
