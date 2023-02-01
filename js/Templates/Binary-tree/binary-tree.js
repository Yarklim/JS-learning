/* ===== Пример бинарного дерева (объект):
const tree = {
  value: 8,
  left: {
    value: 6,
    left: null,
    right: null,
  },
  right: {
    value: 10,
    left: {
      value: 9,
      left: null,
      right: null,
    },
  },
};
*/

// ======== Обход бинарного дерева =========
// ---- Breadth First Search (BFS) - обход в ширину
// ---- Depth First Search (DFS) - обход в глубину:
// * In Order:
// 1 - Идём по левому под-дереву.
// 2 - Действие с node.
// 3 - Идём по правому под-дереву.
// * Pre Order:
// 1 - Действие с node.
// 2 - Идём по левому под-дереву.
// 3 - Идём по правому под-дереву.
// * Post Order:
// 1 - Идём по левому под-дереву.
// 2 - Идём по правому под-дереву.
// 3 - Действие с node.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null; // корень дерева
  }

  // добавление значений в дерево
  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // обход в глубину
  // метод preOrder
  preOrder(node, callback) {
    if (!node) {
      return;
    }
    if (callback) {
      callback(node);
    }
    this.preOrder(node.left, callback);
    this.preOrder(node.right, callback);
  }

  // метод inOrder
  inOrder(node, callback) {
    if (!node) {
      return;
    }
    this.inOrder(node.left, callback);
    if (callback) {
      callback(node);
    }

    this.inOrder(node.right, callback);
  }

  // метод postOrder
  postOrder(node, callback) {
    if (!node) {
      return;
    }
    this.postOrder(node.left, callback);
    this.postOrder(node.right, callback);
    if (callback) {
      callback(node);
    }
  }

  traverseDFS(callback, method) {
    if (method === 'preOrder') {
      return this.preOrder(this.root, callback);
    }
    if (method === 'inOrder') {
      return this.inOrder(this.root, callback);
    }
    return this.postOrder(this.root, callback);
  }

  // обход в ширину
  traverseBFS() {}
}

const myTree = new BinaryTree();
myTree.add(8);
myTree.add(7);
myTree.add(9);
myTree.add(5);
myTree.add(10);
myTree.add(20);
myTree.add(6);
myTree.add(2);
myTree.add(11);

/*
       8
    7     9
  5         10
2   6         20
            11
*/
console.log(myTree);

// myTree.traverseDFS((node) => {
//   console.log(node.value);
// }, 'preOrder'); // 8 7 5 2 6 9 10 20 11

// myTree.traverseDFS((node) => {
//   console.log(node.value);
// }, 'inOrder'); // 2 5 6 7 8 9 10 11 20

// myTree.traverseDFS((node) => {
//   console.log(node.value);
// }, 'postOrder'); // 2 6 5 7 11 20 10 9 8
