class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  hisPush(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  push(data) {
  
    let node = new Node(data);
    let oldTail;
    if (!this.head) {
      // or  this.length === 0
      this.head = node;
      this.tail = node;
    }
    oldTail = this.tail;
    oldTail.next = node;
    node.prev = oldTail;
    this.tail = node;

    this.length++;
    return this;
  }
  pop() {
    console.log(this.head);
    if (!this.head) {
      return undefined;
    }
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      poppedNode.prev.next = null;
      this.tail = poppedNode.prev;
      poppedNode.prev = null; // important to remove the prev connection as well
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    let currentHead = this.head;
    currentHead.prev = node;
    node.next = currentHead;
    this.head = node;

    this.length++;
    return this;
  }

  get(index) {
    let count = 0;
    let current;

    if (index < 0 || index >= this.length) return undefined;

    if (index <= this.length / 2) {
      console.log('Searching from beginning')
      current = this.head;

      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      console.log('Searching from end')
      current = this.tail;
      count = this.length - 1;

      while (count != index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, value){
   if(value.length === 0){
    return 'Enter a valid value.'
   }
    let foundNode = this.get(index);
    
    if(foundNode != null){
      foundNode.data = value;
      return true;
    }
    return false;
  }
  insert(index, value){
 
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(value);
    if(index === this.length) return !!this.push(value);
    
    let newNode =  new Node(value);
    let beforeNode =  this.get(index -1);
    let afterNode =  beforeNode.next;
    
    
    afterNode.prev = newNode;
    newNode.next =  afterNode;

    newNode.prev = beforeNode;
    beforeNode.next = newNode; 

    this.length++;
   return true;

    
  }
  remove(index){
    if(index < 0 || index >= this.length ) return false; // or index > this.length -1 works as well
    if(index === 0) return this.shift();
    if(index === this.length-1 ) return this.pop();

    let removedNode =  this.get(index);
    let beforeRemoved =  removedNode.prev;
    let afterRemoved = removedNode.next;

    beforeRemoved.next = afterRemoved;
    afterRemoved.prev = beforeRemoved;

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;

    return removedNode;

  }

  reverse(){
    let node = this.tail;
    let previous = null;
    let temp;
    this.tail = this.head;
    this.head = node;
    
    // 5 10 15 20 
    for(let i= this.length-1 ; i >=0; i--){
      temp =  node.prev;
      node.next = node.prev;
      node.prev = previous;

      previous = node;
      node = temp;
      
      this.tail.next = null
      
      }
      
      return this;

  }
 
}

const list = new DoublyLinkedList();
// list.push("Harry");
// list.push("Ron");
// list.push("Hermione");
// list.push("Gilmara");
// list.push("Janaina");
// list.push("Polyana");
// list.hisPush(99)
// list.hisPush(100)
// list.hisPush('Last Item')

// list.pop();
// list.pop();
// list.pop();
// console.log(list.pop());

// console.log(list.shift(), "node shifted");
// console.log(list.shift(), "node shifted");
// console.log(list.shift(), "node shifted");
// console.log(list.shift(),"node shifted");
// list.shift();
// list.shift();
// list.shift();
// console.log(list.shift());
// list.unshift(1);
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.unshift(10);
// list.unshift(100);
// list.unshift(1000);

// list.push("Harry");
// list.push("Ron");
// list.push("Hermione");
// list.push("Gilmara");
// list.push("Alzira");
// list.push("Gilmara");
// list.push("Janaina");
// list.push("Polyana");
// list.push("Papai");
// list.push("Mamae");
// list.push("Dayana");
// console.log(list);
// console.log(list.get(5), "Sou o node no get");
// console.log(list.set(0, 'GILMARA'))
// console.log(list.set(2, ''))
// console.log(list.insert(0, 'Familia'))
// console.log(list.insert(10, 'Pereira Pimentel'))
// console.log(list.insert(4, 'Best Family'))
// console.log(list.push('Pereira Pimentel'))
// console.log(list.insert(3, 'Tereza'))
// console.log(list.insert(1, 'Tom'))
// console.log(list.insert(5, 'Eric'))
// console.log(list.insert(0, 'Albert'))
// console.log(list.insert(0, 'Deb'))
// console.log(list.remove(0))
// console.log(list.remove(1))
// console.log(list.remove(2))

list.push(5).push(10).push(15).push(20);
// console.log(list.insert(2,12))
// console.log(list.insert(100,12))
// console.log(list.length)
// console.log(list.head.data)
// console.log(list.head.next.data)
// console.log(list.head.next.next.data)
// console.log(list.head.next.next.next.data)
// console.log(list.head.next.next.next.next.data)
// console.log(list.head.prev)
// console.log(list.head.next.next.next.next.next)
console.log(list.reverse());
console.log(list.tail.prev)
// console.log(list)
// console.log(list.head.next.next.next === this.head)


// let first = new Node(1)
// let second = new Node(2)
// first.next =  second
// second.prev = first
// console.log(first)
// console.log(second)
