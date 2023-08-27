// there are TREES
// there TREES, BINARY TREES, and BINARY SEARCH TREES.
//BINARY SEARCH TREES (BST) excel in searching and that is the one we will work/explore

// Tree: nodes can have more than 2 children and their node store data in any order
// Binary Tree: nodes can have from 0 to 2 children and their node store data in any order
// Binary SEARCH Tree: nodes can have from 0 to 2 children and their node store data IN ORDER
// node to the left store smaller values and nodes to the right store larger values

// Binary SEARCH Tree (BST)
// they don't have a head/tail  or first/second  concept, they just have ROOT
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
}

// creating nodes manually

//  let node = new Node(10);
//  node.right = new Node(15)
//  node.left = new Node(7)
//  node.left.right = new Node(9)
//  console.log(node)

// let's start adding the insert method or our BST
let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(7);
bst.insert(14);
bst.insert(145);
bst.insert(11);
//  console.log(bst.insert(5));
 console.log(bst.root)
console.log(bst.find(144));
