// Building a Priority Queue with MinBinaryHeap Log O(n)
// enqueue  - terminology to add
// dequeue - terminology to remove

// This priority queue is based on MinBinaryHeap.
// The lowest number priority is has the highest priority

// This code the way it is does not handle siblings with the same priority
// You could add a Date.now() to determine each one was enqueued first

class PQueueNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.pq = [];
  }

  enqueue(val, priority) {
    let node = new PQueueNode(val, priority);
    if (!this.pq.length) {
      this.pq.push(node);
      return;
    }
    this.bubbleUp(node);
  }

  bubbleUp(entry) {
    this.pq.push(entry);
    let childIdx = this.pq.length - 1;
    let parentIdx = Math.floor(childIdx - 1 / 2);
    let temp;
    let checkingPriority = true;
   
    while (checkingPriority) {
      if (this.pq[parentIdx].priority > this.pq[childIdx].priority) {
        temp = this.pq[parentIdx];
        this.pq[parentIdx] = this.pq[childIdx];
        this.pq[childIdx] = temp;
      }

      if (parentIdx >= 0) break;
    }
  }

  dequeue() {
    let min = this.pq[0];
    let end = this.pq.pop();

    if (this.pq.length > 0) {
      this.pq[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let parentIdx = 0;
    let temp;
    let checkingSwaps = true;
    
    
    while (checkingSwaps) {
        let swap = null;
        let leftChildIdx = parentIdx * 2 + 1;
        let rightChildIdx = parentIdx * 2 + 2;
        
        let leftChild = this.pq[leftChildIdx];
        let rightChild = this.pq[rightChildIdx];
      if (leftChildIdx < this.pq.length) {
        if (leftChild.priority < this.pq[parentIdx].priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < this.pq.length) {
        if (
          (rightChild.priority < this.pq[parentIdx].priority &&
            swap === null) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      temp = this.pq[parentIdx];
      this.pq[parentIdx] = this.pq[swap];
      this.pq[swap] = temp;
      parentIdx = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("Common cold", 5);
ER.enqueue("GunShot", 1);
ER.enqueue("High Fever", 4);
ER.enqueue("Broken Arm", 2);
ER.enqueue("Glass in foot", 3);


console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());

console.log(ER);
