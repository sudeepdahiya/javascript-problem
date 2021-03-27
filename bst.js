function bstNode(value) {
  let val = value;
  let left = null;
  let right = null;
  return {
    val,
    left,
    right
  }
}

function bstTree(initValue) {
  let root = new bstNode(initValue);
  let printArray = [];

  const addIntoTree = (newNode, node) => {
    if (node === null) {
      return newNode;
    }
    if (node.val < newNode.val) {
      node.right = addIntoTree(newNode, node.right)
    } else if (node.val > newNode.val) {
      node.left = addIntoTree(newNode, node.left)
    }
    return node;
  }

  const find = (value, node) => {
    if (value === node.val) {
      return node;
    }
    if (node.val < value) {
      return find(value, node.right)
    } else if (node.val > newNode.val) {
      return find(value, node.left)
    }
  }

  const removeFromNode = (value, node) => {
    if (node.val === value) {
      if (node.left && node.right) {
        let tempNode = node.right.left;
        let prev = node.right;
        let prevtoPrev = node;
        while (tempNode !== null) {
          prevtoPrev = prev;
          prev = tempNode;
          tempNode = tempNode.left
        }
        prev.left = node.left;
        prev.right = node.right;
        prevtoPrev.left = null;
        return prev;
      } else if (node.left) {
        return node.left;
      } else if (node.right) {
        return node.right;
      } else {
        return null
      }

    }
    if (node.val < value) {
      node.right = removeFromNode(value, node.right)
    } else if (node.val > value) {
      node.left = removeFromNode(value, node.left)
    }
    return node;
  }

  const removeNode = (value) => {
    root = removeFromNode(value, root)
  }

  const add = (newValue) => {
    const newNode = new bstNode(newValue);
    root = addIntoTree(newNode, root)
  }

  function printPre() {
    printArray = [];
    preOrder(root)
    return printArray;
  }

  function printIn() {
    printArray = [];
    inOrder(root)
    return printArray;
  }

  function preOrder(node) {
    printArray.push(node.val)
    if (node.left) {
      preOrder(node.left)
    }
    if (node.right) {
      preOrder(node.right)
    }
  }

  function inOrder(node) {
    if (node.left) {
      inOrder(node.left)
    }
    printArray.push(node.val)
    if (node.right) {
      inOrder(node.right)
    }
  }

  function printByLevel(arr) {
    let level = []
    let nextLeavel = []
    arr.map(node => {
      level.push(node.val);
      if (node.left) {
        nextLeavel.push(node.left);
      }
      if (node.right) {
        nextLeavel.push(node.right);
      }
    })

    if (nextLeavel.length) {
      return level.concat(printByLevel(nextLeavel))
    }
    return level
  }

  function printLeafLoop(node) {
    if (node.left === null && node.right === null) {
      printArray.push(node.val)
    } else {
      if (node.left) {
        printLeafLoop(node.left);
      }
      if (node.right) {
        printLeafLoop(node.right);
      }
    }

  }

  function printLeaf() {
    printArray = []
    printLeafLoop(root)
    return printArray;
  }

  function toString() {
    return root;
  }
  return {
    root,
    add,
    removeNode,
    toString,
    printPre,
    printIn,
    printLeaf,
    printByLevel,
  }
}

const bst = new bstTree(50)

bst.add(75);
bst.add(65);
bst.add(25);
bst.add(15);
bst.add(85);
bst.add(35);

console.log('--------------------')
console.log('bst', bst.printByLevel([bst.root]))