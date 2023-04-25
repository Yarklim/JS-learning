/*
19. Remove Nth Node From End of List

Учитывая head связанный список, удалите узел из конца списка и верните его голову.nth

Пример 1:
Ввод: голова = [1,2,3,4,5], n = 2
 Вывод: [1,2,3,5]

Пример 2:
Ввод: голова = [1], n = 1
 Вывод: []

Пример 3:
Ввод: голова = [1,2], n = 1
 Вывод: [1]
 

Ограничения:
Количество узлов в списке равно sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 
Дополнение: Могли бы вы сделать это за один проход?
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {};

// console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2)); // [1,2,3,5]

//? ==============================================

/*
36. Valid Sudoku

Определите,  9 x 9 действительна ли доска судоку. 
Только заполненные ячейки должны быть проверены  в соответствии со 
следующими правилами :

Каждая строка должна содержать цифры  1-9 без повторения.
Каждый столбец должен содержать цифры  1-9 без повторения.
Каждый из девяти  3 x 3 подблоков сетки должен содержать цифры  1-9 без повторения.

Примечание:
Доска судоку (частично заполненная) может быть действительной, но не обязательно 
решаемой.
Только заполненные ячейки должны быть проверены в соответствии с указанными правилами.
 
Пример 1:

Вход: доска =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",",","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",",","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Вывод: правда

Пример 2:

Вход: доска =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Вывод: false
 Объяснение: То же, что и в примере 1, за исключением того, что 5 в верхнем левом углу 
 изменено на 8 . 
 Поскольку в верхнем левом подблоке 3x3 есть две восьмерки, это неверно.
 
Ограничения:

board.length == 9
board[i].length == 9
board[i][j]это цифра 1-9или '.'.
*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {};
//? ==============================================
/*
38. Count and Say

Последовательность « считай и скажи » — это последовательность строк цифр, 
определяемая рекурсивной формулой:

countAndSay(1) = "1"
countAndSay(n)это то, как вы бы «произнесли» строку цифр из countAndSay(n-1), 
которая затем преобразуется в другую строку цифр.
Чтобы определить, как вы «произносите» строку цифр, разбейте ее на 
минимальное количество подстрок, чтобы каждая подстрока содержала ровно одну 
уникальную цифру. Затем для каждой подстроки произнесите количество цифр, 
затем произнесите цифру. Наконец, соедините каждую указанную цифру.

Например, высказывание и преобразование для строки цифр "3322251":

Учитывая положительное целое число n, вернуть член последовательности 
« считай и скажи » .nth

Пример 1:
Вход: n = 1
 Выход: "1"
 Объяснение: Это базовый случай.

Пример 2:
Ввод: n = 4
 Вывод: "1211"
 Объяснение:
countAndSay(1) = "1"
countAndSay(2) = сказать "1" = один 1 = "11"
countAndSay(3) = сказать "11" = две единицы = "21"
countAndSay(4) = сказать "21" = один 2 + один 1 = "12" + "11" = "1211"
countAndSay(5) = сказать 1211 = одна 1 + одна 2 + две 1 = 111221
*/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {};

// console.log(countAndSay(4)); // 1211
// console.log(countAndSay(5)); // 111221
//? ==============================================
/*
46. Permutations

Учитывая массив nums различных целых чисел, вернуть все возможные перестановки . 
Вы можете вернуть ответ в любом порядке .

Пример 1:
Ввод: nums = [1,2,3]
 Вывод: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Пример 2:
Ввод: nums = [0,1]
 Вывод: [[0,1],[1,0]]

Пример 3:
Ввод: nums = [1]
 Вывод: [[1]]
 

Ограничения:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
Все целые nums числа уникальны .
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {};
//? ==============================================
/*
48. Rotate Image

Вам дано n x n 2D matrix изображение, поверните изображение на 90 градусов 
(по часовой стрелке).

Вы должны повернуть изображение на месте , что означает, что вы должны изменить 
входную 2D-матрицу напрямую. НЕ выделяйте другую 2D-матрицу и не выполняйте поворот.

Пример 1:
Ввод: матрица = [[1,2,3],[4,5,6],[7,8,9]]
 Вывод: [[7,4,1],[8,5,2],[9,6,3]]

Пример 2:
Ввод: матрица = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 Вывод: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 
Ограничения:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const result = [];
};
//? ==============================================
/*
49. Group Anagrams

Учитывая массив строк strs, сгруппируйте анаграммы вместе. 
Вы можете вернуть ответ в любом порядке .

Анаграмма — это слово или фраза, образованная путем перестановки букв другого слова 
или фразы, обычно с использованием всех исходных букв ровно один раз.

Пример 1:
Ввод: strs = ["eat","tea","tan","ate","nat","bat"]
 Вывод: [["bat"],["nat","tan"],["ate","eat","tea"]]

Пример 2:
Ввод: strs = [""]
 Вывод: [[""]]

Пример 3:
Ввод: strs = ["a"]
 Вывод: [["a"]]
 

Ограничения:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i]состоит из строчных английских букв.
*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length <= 1) return strs;

  const sortLetters = strs.map((el) => el.split('').sort().join('')).sort();
  const obj = {};

  for (let i = 0; i < sortLetters.length; i++) {
    obj[sortLetters[i]] = [sortLetters[i]];
    if (sortLetters[i] === sortLetters[i + 1]) {
      obj[sortLetters[i]].push(sortLetters[i]);
    }
  }

  return obj;
};

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// console.log(groupAnagrams(['a']));

//? ==============================================
/*
53. Maximum Subarray

Дан целочисленный массив nums, найти подмассив с наибольшей суммой и вернуть ее сумму.

Пример 1:
Ввод: nums = [-2,1,-3,4,-1,2,1,-5,4]
 Вывод: 6
 Объяснение: Подмассив [4,-1,2,1] имеет наибольшую сумму 6.

Пример 2:
Ввод: nums = [1]
 Вывод: 1
 Объяснение: Подмассив [1] имеет наибольшую сумму 1.

Пример 3:
Ввод: nums = [5,4,-1,7,8]
 Вывод: 23
 Объяснение: Подмассив [5,4,-1,7,8] имеет наибольшую сумму 23.
 
Ограничения:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
 
Последующие действия: если вы нашли O(n)решение, попробуйте написать другое решение, 
используя подход « разделяй и властвуй », который является более тонким.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {};
//? ==============================================
/*
54. Spiral Matrix

Учитывая m x n matrix, вернуть все элементы matrix в порядке спирали .

Пример 1:
Ввод: матрица = [[1,2,3],[4,5,6],[7,8,9]]
 Вывод: [1,2,3,6,9,8,7,4,5]

Пример 2:
Ввод: матрица = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 Вывод: [1,2,3,4,8,12, 11,10,9,5,6,7]
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {};
//? ==============================================
/*
55. Jump Game

Вам дан массив целых чисел nums. 
Изначально вы находитесь в первом индексе массива , и каждый элемент массива 
представляет максимальную длину прыжка в этой позиции.

Возврат true, если вы можете достичь последнего индекса, или в false противном случае.

Пример 1:
Ввод: nums = [2,3,1,1,4]
 Вывод: true
 Объяснение: Перейти на 1 шаг от индекса 0 к 1, затем на 3 шага к последнему индексу.

Пример 2:
Ввод: nums = [3,2,1,0,4]
Вывод: false
Объяснение: Вы всегда будете приходить к индексу 3, несмотря ни на что. 
Его максимальная длина перехода равна 0, что делает невозможным достижение 
последнего индекса.
 
Ограничения:
1 <= nums.length <= 104
0 <= nums[i] <= 105
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {};
//? ==============================================
/*
56. Merge Intervals

Учитывая массив intervals where , объединить все перекрывающиеся интервалы 
и вернуть массив неперекрывающихся интервалов, которые охватывают все интервалы 
во входных данных .intervals[i] = [starti, endi]

Пример 1:
Ввод: интервалы = [[1,3],[2,6],[8,10],[15,18]]
 Вывод: [[1,6],[8,10],[15,18]]
 Объяснение: Поскольку интервалы [1,3] и [2,6] перекрываются, объедините их в [1,6].

Пример 2:
Ввод: интервалы = [[1,4],[4,5]]
 Вывод: [[1,5]]
 Объяснение: Интервалы [1,4] и [4,5] считаются перекрывающимися. 

Ограничения:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {};
//? ==============================================
/*
62. Unique Paths

Есть робот на m x nсетке. 
Робот изначально расположен в верхнем левом углу (т.е. grid[0][0]). 
Робот пытается переместиться в правый нижний угол (т.е. grid[m - 1][n - 1]). 
Робот может двигаться только вниз или вправо в любой момент времени.

Учитывая два целых числа mи n, верните количество возможных уникальных путей, 
по которым робот может добраться до правого нижнего угла .

Тестовые примеры генерируются таким образом, чтобы ответ был меньше или равен 
.2 * 109

Пример 1:
Вход: m = 3, n = 7
 Выход: 28

Пример 2:
Ввод: m = 3, n = 2
 Выход: 3
 Объяснение: Из левого верхнего угла есть 3 способа попасть в правый нижний угол:
1. Вправо -> Вниз -> Вниз
2. Вниз -> Вниз -> Вправо
3. Вниз -> Вправо -> Вниз
 
Ограничения:

1 <= m, n <= 100
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {};
//? ==============================================
/*
73. Set Matrix Zeroes

Для заданной m x nцелочисленной матрицы matrix, если элемент равен 0, 
установите для всей строки и столбца значение 0s.

Вы должны сделать это на месте .

Пример 1:
Ввод: матрица = [[1,1,1],[1,0,1],[1,1,1]]
 Вывод: [[1,0,1],[0,0,0],[1 ,0,1]]

Пример 2:
Ввод: матрица = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 Вывод: [[0,0,0,0],[0] . ,4,5,0],[0,3,1,0]]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {};
//? ==============================================
/*
75. Sort Colors

Получив массив numsс nобъектами, окрашенными в красный, белый или синий цвет, 
отсортируйте их на месте так, чтобы объекты одного цвета были смежными, 
а цвета располагались в порядке красный, белый и синий.

Мы будем использовать целые числа 0, 1и 2для представления красного, 
белого и синего цветов соответственно.

Вы должны решить эту проблему, не используя библиотечную функцию сортировки.

Пример 1:
Ввод: числа = [2,0,2,1,1,0]
 Вывод: [0,0,1,1,2,2]

Пример 2:
Ввод: числа = [2,0,1]
 Вывод: [0,1,2]
 
Ограничения:
n == nums.length
1 <= n <= 300
nums[i]либо 0, 1либо 2.
 
Дополнение:  не могли бы вы придумать однопроходный алгоритм, 
использующий только постоянное дополнительное пространство?
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {};
//? ==============================================
/*
78. Subsets

Учитывая целочисленный массив уникальныхnums элементов , вернуть все возможные 
подмножества
 (силовой набор) .

Набор решений не должен содержать повторяющихся подмножеств. 
Верните решение в любом порядке .

Пример 1:
Ввод: nums = [1,2,3]
 Вывод: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1, 2,3]]

Пример 2:
Ввод: nums = [0]
 Вывод: [[],[0]]

Ограничения:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
numsВсе номера  уникальны .
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {};
//? ==============================================
/*
79. Word Search

Учитывая m x nсетку символов boardи строку word, вернуть, true если word существует 
в сетке .

Слово может быть построено из букв последовательно соседних ячеек, 
где соседние ячейки являются соседними по горизонтали или по вертикали. 
Одна и та же буквенная ячейка не может быть использована более одного раза.

Пример 1:
Вход: доска = [["A","B","C","E"],["S","F","C","S"],["A","D", "E","E"]], 
слово = "ABCCED"
 Вывод: true

Пример 2:
Вход: доска = [["A","B","C","E"],["S","F","C","S"],["A","D", "E","E"]], 
word = "SEE"
 Вывод: true

Пример 3:
Вход: доска = [["A","B","C","E"],["S","F","C","S"],["A","D", "E","E"]], 
слово = "ABCB"
 Вывод: false
 
Ограничения:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
boardи wordсостоит только из строчных и прописных английских букв.
 

Дополнение: не могли бы вы использовать сокращение поиска, чтобы ускорить решение 
с помощью большего board?
*/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {};
//? ==============================================
/*
91. Decode Ways

Сообщение, содержащее буквы из A-Z, может быть закодировано в числа с помощью 
следующего отображения:

«А» -> «1»
«Б» -> «2»
...
'Я' -> "26"
Чтобы декодировать закодированное сообщение, все цифры должны быть сгруппированы, 
а затем преобразованы обратно в буквы, используя обратное сопоставление выше 
(может быть несколько способов). Например, "11106"может быть отображено в:

"AAJF"с группировкой(1 1 10 6)
"KJF"с группировкой(11 10 6)
Обратите внимание, что группировка (1 11 06)недействительна, 
так как "06"не может быть сопоставлена, 'F'так "6"как отличается от "06".

Учитывая строку , содержащую только цифрыs , вернуть количество способов ее 
декодирования .

Тестовые примеры генерируются таким образом, чтобы ответ соответствовал 
32-битному целому числу.

Пример 1:
Ввод: s = "12"
 Вывод: 2
 Объяснение: "12" можно расшифровать как "AB" (1 2) или "L" (12).

Пример 2:
Ввод: s = "226"
 Вывод: 3
 Объяснение: "226" можно расшифровать как "BZ" (2 26), "VF" (22 6) или "BBF" (2 2 6).

Пример 3:
Ввод: s = "06"
 Вывод: 0
 Объяснение: "06" не может быть преобразовано в "F" из-за ведущего нуля 
 ("6" отличается от "06").
 
Ограничения:
1 <= s.length <= 100
sсодержит только цифры и может содержать ведущие нули.
*/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {};
//? ==============================================

/*
94. Binary Tree Inorder Traversal

Учитывая root бинарное дерево, 
вернуть неупорядоченный обход значений его узлов .

Пример 1:
Ввод: корень = [1,null,2,3]
 Вывод: [1,3,2]

Пример 2:
Ввод: корень = []
 Вывод: []

Пример 3:
Ввод: корень = [1]
 Вывод: [1]
 
Ограничения:
Количество узлов в дереве находится в диапазоне [0, 100].
-100 <= Node.val <= 100 

Продолжение: рекурсивное решение тривиально, 
можете ли вы сделать это итеративно?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {};

// console.log(inorderTraversal([1, null, 2, 3]));
// console.log(inorderTraversal([]));
// console.log(inorderTraversal([1]));

//? ==============================================
/*
100. Same Tree

Имея корни двух бинарных деревьев p и q, напишите функцию, 
проверяющую, совпадают ли они или нет.

Два бинарных дерева считаются одинаковыми, 
если они структурно идентичны, а узлы имеют одинаковое значение.

 Пример 1:
Вход: p = [1,2,3], q = [1,2,3]
 Выход: правда

Пример 2:
Ввод: p = [1,2], q = [1,null,2]
 Вывод: false

Пример 3:
Вход: p = [1,2,1], q = [1,1,2]
 Выход: ложь
 
Ограничения:

Количество узлов в обоих деревьях находится в диапазоне [0, 100].
-104 <= Node.val <= 104
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {};
// console.log(isSameTree([1, 2, 3]));
// console.log(isSameTree([1, 2]));
// console.log(isSameTree([1, 2, 1]));

//? ==============================================
/*
101. Symmetric Tree

Учитывая root бинарное дерево, проверьте, 
является ли оно зеркалом самого себя 
(т. е. симметричным относительно своего центра).

Пример 1:
Ввод: корень = [1,2,2,3,4,4,3]
 Вывод: правда

Пример 2:
Ввод: root = [1,2,2,null,3,null,3]
 Вывод: false
 
Ограничения:
Количество узлов в дереве находится в диапазоне [1, 1000].
-100 <= Node.val <= 100
 
Дополнение: Могли бы вы решить это как рекурсивно, так и итеративно?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {};
// console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]));
// console.log(isSymmetric([1, 2, 2, null, 3, null, 3]));

//? ==============================================
/*
104. Maximum Depth of Binary Tree

Учитывая root бинарное дерево, вернуть его максимальную глубину .

Максимальная глубина бинарного дерева  — 
это количество узлов на самом длинном пути от корневого узла 
до самого дальнего конечного узла.

Пример 1:
Ввод: корень = [3,9,20,ноль,нуль,15,7]
 Вывод: 3

Пример 2:
Ввод: корень = [1, ноль, 2]
 Вывод: 2
 
Ограничения:
Количество узлов в дереве находится в диапазоне .[0, 104]
-100 <= Node.val <= 100
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {};
// console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
// console.log(maxDepth([1, null, 2]));

//? ==============================================
/*
108. Convert Sorted Array to Binary Search Tree

Дан целочисленный массив nums, в котором элементы отсортированы 
в порядке возрастания , преобразовать его в
сбалансированный по высоте
 бинарное дерево поиска .

Пример 1:
Ввод: nums = [-10,-3,0,5,9]
 Вывод: [0,-3,9,-10,null,5]
 Объяснение: [0,-10,5,null,-3,null ,9] также принимается:

Пример 2:
Ввод: nums = [1,3]
 Вывод: [3,1]
 Объяснение: [1,null,3] и [3,1] — BST со сбалансированной высотой.
 
Ограничения:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
numsсортируется в строго возрастающем порядке.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {};
// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
// console.log(sortedArrayToBST([1, 3]));

//? ==============================================
/*
110. Balanced Binary Tree

Имея бинарное дерево, определите, является ли оно
сбалансированный по высоте

Пример 1:
Ввод: root = [3,9,20,null,null,15,7]
 Вывод: true

Пример 2:
Ввод: root = [1,2,2,3,3,null,null,4,4]
 Вывод: false

Пример 3:
Ввод: корень = []
 Вывод: правда

Ограничения:
Количество узлов в дереве находится в диапазоне [0, 5000].
-104 <= Node.val <= 104
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {};
// console.log(isBalanced([3, 9, 20, null, null, 15, 7]));
// console.log(isBalanced([1, 2, 2, 3, 3, null, null, 4, 4]));
// console.log(isBalanced([]));

//? ==============================================
/*
111. Minimum Depth of Binary Tree

Для заданного бинарного дерева найти его минимальную глубину.

Минимальная глубина — это количество узлов на кратчайшем 
пути от корневого узла до ближайшего конечного узла.

Примечание.  Лист — это узел без дочерних элементов.

Пример 1:
Ввод: корень = [3,9,20,ноль,нуль,15,7]
 Вывод: 2

Пример 2:
Ввод: корень = [2, null, 3, null, 4, null, 5, null, 6]
 Вывод: 5 

Ограничения:
Количество узлов в дереве находится в диапазоне .[0, 105]
-1000 <= Node.val <= 1000
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {};
// console.log(minDepth([3, 9, 20, null, null, 15, 7]));
// console.log(minDepth([2, null, 3, null, 4, null, 5, null, 6]));

//? ==============================================
/*
112. Path Sum

Учитывая root бинарное дерево и целое число targetSum, вернуть, 
true если дерево имеет путь от корня к листу , 
такой что сумма всех значений на пути равна targetSum.

Лист — это узел без потомков.

Пример 1:
Ввод: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 Вывод: true
 Объяснение: Путь от корня к листу с целью показана сумма.

Пример 2:
Ввод: root = [1,2,3], targetSum = 5
 Вывод: false
 Объяснение: В дереве есть два пути от корня к листу:
(1 --> 2): сумма равна 3.
(1 --> 3): сумма равна 4.
Не существует пути от корня к листу с суммой = 5.

Пример 3:
Ввод: root = [], targetSum = 0
 Вывод: false
 Объяснение: Поскольку дерево пусто, путей от корня к листу нет.

Ограничения:
Количество узлов в дереве находится в диапазоне [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {};
// console.log(hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]));
// console.log(hasPathSum([1, 2, 3]));
// console.log(hasPathSum([]));

//? ==============================================
/*
118. Pascal's Triangle

Учитывая целое число numRows, вернуть первые numRows треугольника
Паскаля .

В треугольнике Паскаля каждое число является суммой двух чисел 
непосредственно над ним, как показано:

Пример 1:
Ввод: numRows = 5
 Вывод: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Пример 2:
Ввод: numRows = 1
 Вывод: [[1]]

Ограничения:
1 <= numRows <= 30
*/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {};
// console.log(generate(5));
// console.log(generate(1));

//? ==============================================
/*
119. Pascal's Triangle II

Учитывая целое число rowIndex, вернуть ( индексированную 0 ) строку 
треугольника Паскаля .rowIndexth

В треугольнике Паскаля каждое число является суммой двух чисел 
непосредственно над ним, как показано: 

Пример 1:
Ввод: rowIndex = 3
 Вывод: [1,3,3,1]

Пример 2:
Ввод: rowIndex = 0
 Вывод: [1]

Пример 3:
Ввод: rowIndex = 1
 Вывод: [1,1]

Ограничения:
0 <= rowIndex <= 33

Дополнение: не могли бы вы оптимизировать свой алгоритм, чтобы использовать только O(rowIndex)дополнительное пространство?
*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {};
// console.log(getRow(3));
// console.log(getRow(0));
// console.log(getRow(1));

//? ==============================================

/*
125. Valid Palindrome

Фраза является палиндромом , если после преобразования всех 
прописных букв в строчные и удаления всех не буквенно-цифровых 
символов она читается одинаково вперед и назад. Буквенно-цифровые 
символы включают буквы и цифры.

Если задана строка s, возврат, trueесли это палиндром , 
или falseиначе . 

Пример 1:
Ввод: s = "Человек, план, канал: Панама"
 Вывод: true
 Объяснение: "аманапланаканалпанама" - палиндром.

Пример 2:
Ввод: s = "гонка на машине"
 Выход: false
 Объяснение: "гонка на машине" не является палиндромом.

Пример 3:
Ввод: s = " "
 Вывод: true
 Объяснение: s является пустой строкой "" после удаления не 
 буквенно-цифровых символов.
Поскольку пустая строка одинаково читается вперед и назад, 
это палиндром. 

Ограничения:
1 <= s.length <= 2 * 105
sсостоит только из печатных символов ASCII.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {};
// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('race a car'));
// console.log(isPalindrome(' '));

//? ==============================================
/*
141. Linked List Cycle

Учитывая head, заголовок связанного списка, определите, 
есть ли в связанном списке цикл.

В связанном списке есть цикл, если в списке есть какой-то узел, 
к которому можно снова обратиться, непрерывно следуя  next указателю. Внутри pos используется для обозначения индекса узла, к которому  next подключен указатель хвоста. Обратите внимание, что  pos это не передается как параметр .

Возврат  true, если в связанном списке есть цикл . 
В противном случае возвращайтесь false. 

Пример 1:
Ввод: head = [3,2,0,-4], pos = 1
 Вывод: true
 Объяснение: В связанном списке есть цикл, где хвост 
 соединяется с 1-й вершиной (0-индексированной).

Пример 2:
Ввод: head = [1,2], pos = 0
 Вывод: true
 Объяснение: В связанном списке есть цикл, хвост которого 
 соединяется с 0-й вершиной.

Пример 3:
Ввод: head = [1], pos = -1
 Вывод: false
 Объяснение: В связанном списке нет цикла. 

Ограничения:
Количество узлов в списке находится в диапазоне .[0, 104]
-105 <= Node.val <= 105
pos-1или допустимый индекс в связанном списке. 

Продолжение: можете ли вы решить это, используя O(1)(т.е. постоянную) 
память?
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {};
// console.log(hasCycle([3, 2, 0, -4])); // pos = 1
// console.log(hasCycle([1, 2])); // pos = 0
// console.log(hasCycle([1])); // pos = -1

//? ==============================================
/*
144. Binary Tree Preorder Traversal

Учитывая rootбинарное дерево, верните предварительный обход значений 
его узлов . 

Пример 1:
Ввод: корень = [1,нуль,2,3]
 Вывод: [1,2,3]

Пример 2:
Ввод: корень = []
 Вывод: []

Пример 3:
Ввод: корень = [1]
 Вывод: [1] 

Ограничения:
Количество узлов в дереве находится в диапазоне [0, 100].
-100 <= Node.val <= 100 

Продолжение: рекурсивное решение тривиально, 
можете ли вы сделать это итеративно?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {};
// console.log(preorderTraversal([1, null, 2, 3]));
// console.log(preorderTraversal([]));
// console.log(preorderTraversal([1]));

//? ==============================================
/*
145. Binary Tree Postorder Traversal

Учитывая root бинарное дерево, вернуть обратный порядок значений 
его узлов . 

Пример 1:
Ввод: корень = [1, ноль, 2,3]
 Вывод: [3,2,1]

Пример 2:
Ввод: корень = []
 Вывод: []

Пример 3:
Ввод: корень = [1]
 Вывод: [1] 

Ограничения:
Количество узлов в дереве находится в диапазоне [0, 100].
-100 <= Node.val <= 100 

Продолжение: рекурсивное решение тривиально, 
можете ли вы сделать это итеративно?
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {};
// console.log(postorderTraversal([1, null, 2, 3]));
// console.log(postorderTraversal([]));
// console.log(postorderTraversal([1]));

//? ==============================================
/*

*/

//? ==============================================
/*

*/

//? ==============================================
/*

*/

//? ==============================================
