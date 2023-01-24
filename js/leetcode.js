/*
7. Reverse Integer

Получив 32-битное целое число со знаком x, верните x его цифры в обратном порядке . 
Если реверсирование x приводит к тому, что значение выходит за пределы 
диапазона 32-разрядных целых чисел со знаком , то возвращается значение .[-231, 231 - 1]0

Предположим, что среда не позволяет хранить 64-битные целые числа (со знаком или без знака).

Пример 1:
Вход: х = 123
 Выход: 321

Пример 2:
Вход: х = -123
 Выход: -321

Пример 3:
Вход: х = 120
 Выход: 21
*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {};
// console.log(reverse(123)); // 321
// console.log(reverse(-123)); // -321
// console.log(reverse(120)); // 21
//? ==============================================
/*
2. Add Two Numbers

Вам даны два непустых связанных списка, представляющих два неотрицательных целых числа. 
Цифры хранятся в обратном порядке , и каждый из их узлов содержит одну цифру. 
Добавьте два числа и верните сумму в виде связанного списка.

Вы можете предположить, что эти два числа не содержат начальных нулей, кроме самого числа 0.

Пример 1:
Ввод: l1 = [2,4,3], l2 = [5,6,4]
 Вывод: [7,0,8]
 Объяснение: 342 + 465 = 807.

Пример 2:
Вход: l1 = [0], l2 = [0]
 Выход: [0]

Пример 3:
Ввод: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 Вывод: [8,9,9,9,0,0,0,1]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {};
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
//? ==============================================
/*
22. Generate Parentheses

Имея nпары скобок, напишите функцию для генерации всех комбинаций правильно сформированных скобок .
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {};
// console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
// console.log(generateParenthesis(1)); // ["()"]

//? ==============================================
/*

*/

//? ==============================================
/*

*/

//? ==============================================
/*

*/

//! ==============================================

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
136. Single Number

Учитывая непустой  массив целых чисел nums, каждый элемент 
встречается дважды , кроме одного. Найди ту единственную.

Вы должны реализовать решение с линейной сложностью времени
выполнения и использовать только постоянное дополнительное 
пространство.

Пример 1:
Ввод: числа = [2,2,1]
 Вывод: 1

Пример 2:
Ввод: числа = [4,1,2,1,2]
 Вывод: 4

Пример 3:
Ввод: число = [1]
 Вывод: 1 

Ограничения:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Каждый элемент в массиве появляется дважды, за исключением одного элемента, который появляется только один раз.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {};
// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));
// console.log(singleNumber([1]));

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

Учитывая rootбинарное дерево, вернуть обратный порядок значений 
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
//
