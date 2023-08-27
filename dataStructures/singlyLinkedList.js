
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
};

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    } 
    push(data){
       const node = new Node(data);
       if(!this.head){
        this.head = node;
        this.tail = this.head;
       }
       this.tail.next = node;
       this.tail = node;
       
       this.length++;
       return this; 

    }
    pop(){
        if(!this.head){
            return 'Undefined. There is no Nodes on this Linked List';
        }
        let current = this.head;
        let prevToTail  = current;
        let poppedTail = current;

       if(this.length === 1){
        this.length--;
        this.head = null;
        this.tail = null;
      
        return poppedTail;

       }    
      
        while(current){

            let isNextNull = current.next === null;
          
           if(isNextNull){
            poppedTail = current;
            prevToTail.next = null;
            this.tail = prevToTail;
            this.length--;
            return poppedTail;
            
        }
        prevToTail= current;
        current = current.next;
    }
}

shift(){
    let shifted;
    if(!this.head){
        return 'Undefined. There is no Nodes on this Linked List';
    }

    if(this.length === 1){
        this.length--;
        this.head = null;
        this.tail = null;

        return this.head;
    }
    shifted = this.head;
    this.head = shifted.next;
    this.length--;
    return shifted;

}

unshift(data){
    let node =  new Node(data);
    let prevHead;
    if(!this.head){
        this.head = node;
        this.tail = this.head;
       
    }else {
        node.next = this.head;
        this.head = node; 
        
    }
    this.length++;
    return this;
}


// myGet(index){
//     // returns the item.data at the given index
//     if(!this.head){
//         return 'Undefined. There is no Nodes on this Linked List';
//     }

//     if(index < 0 || index >= this.length) return null;

//     let count = 0;
//     let current = this.head;
    
//     while(current){
//         if(index === count){
//             return current;
//         }

//         count++;
//         current = current;
        
       
//     }

// }

hisGet(index){
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index){
        current = current.next;
        counter++;
    }
  
    return current;
}

set(index, value){
    if(index < 0 || index >= this.length) return 'There is no Node at that position';
    let nodeFound = this.hisGet(index);
    if(nodeFound){
      nodeFound.data = value;
      return true;
    }
  return false;

}
insert(index, value){
    let newNode =  new Node(value);
    let prevNode;
    let holdNext;

    if(index < 0 || index > this.length) return false;

    if(index === 0){
        return !!this.unshift(value);
    }

    if(index === this.length) return !!this.push(value);

        prevNode = this.hisGet(index-1);
        holdNext = prevNode.next;
        prevNode.next = newNode;
        newNode.next = holdNext;
        this.length++;
    return true;

}
remove(index){
    let prevNode;
    let removedNode;
    
    if(index < 0 || index >= this.length) return 'Undefined. There is no Node at that position';
    if(index === 0 ){
        return this.shift();
    }
    if(index === this.length -1) {
        return this.pop();
    }

     prevNode = this.hisGet(index-1);
     removedNode = prevNode.next;
     prevNode.next = removedNode.next;
    this.length--;
    return removedNode;

}
reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for(let i=0; i < this.length; i++){
        next = node.next;
        node.next = prev;
        
        prev = node;
        node = next;
       

    }
    return this;
}
print(){
    let current =  this.head;
    let reversedList = [];

    while(current){
        reversedList.push(current.data);
        current =  current.next;
    }

    console.log(reversedList);


}

myReverse(){
    if(!this.head){
        return 'Undefined. There is no Nodes on this Linked List';
    }

    if(this.length === 1){
        return 'This list has just one Node';
    }

    let node =  this.head;
    this.head =  this.tail;
    this.tail = node;
    
    let prev= null;
    let forward;
    let count = 0; 

 
    
    while(count <= this.length){
        count++;
        console.log(count)
        forward = node.next;
        node.next = prev;
        prev = node;
        node = forward;

        if(node.next === null){
            // console.log('sou o node que o next e null',node, 'sou o node que o next e null')
            this.head = node;
            // console.log(this.head, 'this head')
            node.next = prev;
            return this
        }
      

    }

    console.log(this)
    return this;
 
 
}
printMyReversedList(){
    let current =  this.head;
    let reversedList = [];

    while(current){
        reversedList.push(current.data);
        current =  current.next;
    }
    console.log(reversedList)
    return reversedList;
}
    traverse(){
        if(!this.head){
            return 'There is no Nodes on this Linked List';
        }
        let current = this.head;
      
   

        while(current){
           
            console.log(current, 'I am traversing this list')
            current =  current.next;

        }
    }
}

const list = new SinglyLinkedList();
list.push(100)
list.push(201)
list.push(250)
list.push(350)

// console.log(list.pop());
// console.log(list);
// list.push(89)
// list.traverse();


// console.log(list.push('Hello'))
// console.log(list.push('Good Bye'))
// console.log(list.push('!!!'))
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

// // list.unshift('Pimentel');
// // list.unshift('Gilmara');
// // list.unshift('My name is');
// list.unshift(3);
// list.unshift(2);
// list.unshift(1);
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// console.log(list.pop());


// console.log(list.hisGet(2))
// console.log(list.myGet(5))
// console.log(list.hisGet(4))
// console.log(list.myGet(4))

// console.log(list.set(4, 'Pimentel'))
// console.log(list.hisGet(4));
// console.log(list.hisGet(3))
// console.log(list.set(3, 'Gilmara'))
// console.log(list.head.next.next)
// console.log(list.set(-1, 'Gilmara'))
// console.log(list.insert(3, 'HELLO'))
// console.log(list.insert(0, 'First'))
// console.log(list.insert(0, 'Minus First'))
// console.log(list.insert(8, 'Plus Last'))
// console.log(list.remove(1))
// console.log(list.hisGet(9))
// console.log(list.head.next.next.next.next.next.next)
// console.log(list.remove(7))
// console.log(list)
// console.log(list.remove(8))
// console.log(list)
// console.log(list.remove(6))
// console.log(list.remove(7))

// console.log(list.remove(0));
// console.log(list.remove(2));
// console.log(list.remove(1));
// console.log(list.remove(0));
// console.log(list.remove(-1));
// console.log(list.remove(100));

console.log(list.myReverse());
// console.log(list.head);
// console.log(list.tail);
console.log(list.printMyReversedList(), 'reversed');
// console.log(list.head.next)
// console.log(list.reverse())
// console.log(list.print())





// 100 201 250 350



