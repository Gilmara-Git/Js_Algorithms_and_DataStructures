// Depth First Search is a way to visit each node in a tree (no matter if it is a simple tree or binary tree..etc)
// DFS INOrder It's peculiarity is that it traverses the TREE node VERTICALLY, and we start printing all the way deep to the left,
// then the right side
// We will also do recursive and we also start from the root
//    10
//  6    15
//3  8    20

/// result would be: [3,6,8,10,15,20]

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    let isNodeToBePlaced = true;
    // instructor did while(true) and broke out of the loop returning this;
    // if we return this; instead of setting isNodeToBePlaced = false it works as well

    while (isNodeToBePlaced) {
      if (node.value === current.value) {
        return undefined;
      }

      if (node.value < current.value) {
        if (current.left === null) {
          current.left = node;
          isNodeToBePlaced = false;
          // return this;
        } else {
          current = current.left;
          // console.log(current, 'CURRENT LEFT')
        }
      }

      if (node.value > current.value) {
        if (current.right === null) {
          current.right = node;
          isNodeToBePlaced = false;
          //  return this;
        } else {
          current = current.right;
          // console.log(current, 'CURRENT RIGHT')
        }
      }
    }
    return this;
  }

  find(nodeValue) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let found = false;

    while (!found && current) {
      if (nodeValue === current.value) {
        found = true;
        return current.value;
      } else {
        found = false;
      }

      if (nodeValue < current.value) {
        current = current.left;
      } else if (nodeValue > current.value) {
        current = current.right;
      }
    }
    return found;
  }
  depthFirstSearchInOrder() {
    let checkedNodes = [];

    const traverse = (node) => {
      // if (node.left) {
      //   traverse(node.left);
      // }
      // if node.left is truthy(&&), then traverse(node.left);
      node.left && traverse(node.left);

      checkedNodes.push(node.value);

      // if (node.right) {
      //   traverse(node.right);
      // }

      node.right && traverse(node.right)

    };

    traverse(this.root);

    return checkedNodes;
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(8);
bst.insert(3);
bst.insert(15);

bst.insert(20);
console.log(bst.depthFirstSearchInOrder());
