// Queue is FIFO  - push and shift
// our own queue with singlyLinkedList approach
// let's imagine we are storing call in queue
// so, best way in terms of Big O notation is add to end and remove from the beginning
// because removing from the end requires traverse the entire queue to find the last element
// so push and shift

// insertion O(1)
// Removal O(1)
// Searching O(N)
// Access O(N)
class CallNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first =  null;
        this.last = null
        this.size = 0;
    }
    //push
    enqueue(value){
        let node = new CallNode(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        }
     
        let lastInQueue = this.last;
        lastInQueue.next = node;
        this.last = node;

       return ++this.size;
    }
    //shift
    dequeue(){
        if(!this.first) return null
        
        let oldFirst = this.first;
        
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }else{
            this.first = oldFirst.next;
            oldFirst.next = null;
            
        }
      
        this.size--;
       return oldFirst.value;
      
    }
}


const queue = new Queue ();
queue.enqueue('David Allen')
console.log(queue.enqueue('Jess Ramirez'))
queue.enqueue('Dylan Sun')
queue.enqueue('Sammy Taylor')
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue)
