// Breadth First Search is a way to visit each node in a tree (no matter if it is a simple tree or binary tree..etc)
// It's peculiarity is that it traverses the TREE node HORIZONTALLY
//    10
//  6    15
//3  8    20

/// result would be: [10,6,15,3,8,20]

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

    BFSearch(){
        // traverse the tree horizontally
      
        let queue = []; // queue should be represented with a singly linked list/ enqueue = push, dequeue= shift
        let visitedNodes = [];
        queue.push(this.root);

        while(queue.length){
            let visited = queue.shift();
            visitedNodes.push(visited.value);

            if(visited.left){
                queue.push(visited.left);
                

            }
            if(visited.right){
                queue.push(visited.right);
               
               
            }
          

        }
    return visitedNodes;

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
  bst.insert(6);
  bst.insert(8);
  bst.insert(3);
  bst.insert(15);
  bst.insert(20);
  console.log(bst.BFSearch())



  