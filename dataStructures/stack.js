// our own stack with singlyLinkedList approach
// let's imagine we are storing a what a user is drawing
// so, best way in terms of Big O notation is add to the beginning and remove from the end
// so unshift and shift

// insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O (N)
class DrawingHistoryNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first =  null;
        this.last = null
        this.size = 0;
    }
    //unshift
    add(value){
        let node = new DrawingHistoryNode(value);
      
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            let oldFirst =  this.first;
            node.next = oldFirst;
            this.first = node;

        }
        // this.size++;
        return ++this.size;
    }
    //shift
    remove(){
        if(!this.first) return null
        let oldFirst = this.first;
      
        if(this.size === 1){  // or this.first === this.last // this.last = null
            this.first = null;
            this.last = null;
        }
            
        this.first = oldFirst.next;
        oldFirst.next = null;

       
        this.size--;
        return oldFirst.value;
      
    }
}


// Stack is LIFO

// We are going to take the elem out from the beginning because on singlyLinkedList we would have to traverse
// the entire list if we were to remove the elem at the end of the list
// let node =  new DrawingHistoryNode('head');
// node.next = new DrawingHistoryNode('body');
// console.log(node)

const stack = new Stack();
// stack.add('head')
// stack.add('body')
// stack.add('eyes')
// stack.add('hair')
console.log(stack.remove())
// stack.remove()
// stack.remove()
// stack.remove()
// console.log(stack)
