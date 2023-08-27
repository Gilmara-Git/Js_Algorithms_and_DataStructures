//Dijkstra algorithm is about finding the shortest path between two nodes in a graph
// We will create our 'Binary Heap priority queue' that is very efficient
// We enqueue nodes with a priority and we dequeue by shortest weight/distance


//building Priority queue with sort
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
  class PriorityQueue_With_MinBinaryHeap {
    constructor() {
      this.values = [];
    }
  
    enqueue(val, priority) {
      let node = new PQueueNode(val, priority);
  
      if (!this.values.length) {
        this.values.push(node);
        return;
      }
      this.bubbleUp(node);
    }
  
    bubbleUp(entry) {
      this.values.push(entry);
      let childIdx = this.values.length - 1;
      let parentIdx = Math.floor((childIdx - 1)/2);
      let temp;
      let checkingPriority = true;
     
      while (checkingPriority) {
        if (this.values[parentIdx].priority > this.values[childIdx].priority) {
          temp = this.values[parentIdx];
          this.values[parentIdx] = this.values[childIdx];
          this.values[childIdx] = temp;
        }
  
        if (parentIdx >= 0) break;
      }
    }
  
    dequeue() {
      let min = this.values[0];
      let end = this.values.pop();
  
      if (this.values.length > 0) {
        this.values[0] = end;
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
          
          let leftChild = this.values[leftChildIdx];
          let rightChild = this.values[rightChildIdx];
        if (leftChildIdx < this.values.length) {
          if (leftChild.priority < this.values[parentIdx].priority) {
            swap = leftChildIdx;
          }
        }
  
        if (rightChildIdx < this.values.length) {
          if (
            (rightChild.priority < this.values[parentIdx].priority &&
              swap === null) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
  
        if (swap === null) break;
  
        temp = this.values[parentIdx];
        this.values[parentIdx] = this.values[swap];
        this.values[swap] = temp;
        parentIdx = swap;
      }
    }
  }
  
// Building our weighted graph
class weightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2, weight){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        if(!this.adjacencyList[vertex1].includes(vertex2)){
            this.adjacencyList[vertex1].push({ node: vertex2, weight});
        }
    
        if(!this.adjacencyList[vertex2].includes(vertex1)){
            this.adjacencyList[vertex2].push({ node: vertex1, weight});
        }
    }
//    print(){
//     console.log(this.adjacencyList);
//    }
    dijkstraShortestPath(startPoint, endPoint){
        if(!startPoint || !endPoint) return "Enter a start point and a end point."
        let distanceTrack = {};
        let previousPoint = {};
        let pathFromPreviousPoint = [];
        let smallest;
       
        let minPriorityQueue = new PriorityQueue_With_MinBinaryHeap();
        
        for (let key in this.adjacencyList){  
            if(key === startPoint){
                distanceTrack[key]= 0;
                minPriorityQueue.enqueue(key, 0);
            }else{
                distanceTrack[key] = Infinity;
                minPriorityQueue.enqueue(key, Infinity);  
                //It works without initiating the with the other node (B to E), because we enqueue neighbors nodes
            }
            previousPoint[key]= null;
         
       }
       
       while(minPriorityQueue.values.length){
        
                smallest =  minPriorityQueue.dequeue().value; //A: 0 //C: 2

                if(smallest === endPoint){
                   while(smallest){
                       pathFromPreviousPoint.push(smallest)
                       smallest = previousPoint[smallest];  
                }

                break;

                }
                
             
                for(let neighbor in this.adjacencyList[smallest]){ 
                    console.log(this.adjacencyList[smallest], 'line196', neighbor)
                    let candidate;
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let nextNeighbor = nextNode.node;
                    
                    candidate = distanceTrack[smallest] + nextNode.weight;
                  
                    
                    if(candidate <  distanceTrack[nextNeighbor]){
                        distanceTrack[nextNeighbor] =  candidate; // updating the distanceTrack to later enqueue on the minPriorityQueue
                        previousPoint[nextNeighbor] = smallest;  // updating previousPoint of nextNeighbor (how we got to nextNeighbor)
                        minPriorityQueue.enqueue(nextNeighbor, candidate)
                    }

             
             }
               
            }
            return pathFromPreviousPoint.reverse();
    }

}

let distanceGraph = new weightedGraph();
distanceGraph.addVertex("A");
distanceGraph.addVertex("B");
distanceGraph.addVertex("C");
distanceGraph.addVertex("D");
distanceGraph.addVertex("E");
distanceGraph.addVertex("F");

distanceGraph.addEdge("A", "B", 4);
distanceGraph.addEdge("A", "C", 2);
distanceGraph.addEdge("B", "E", 3);
distanceGraph.addEdge("C", "D", 2);
distanceGraph.addEdge("C", "F", 4);
distanceGraph.addEdge("D", "E", 3);
distanceGraph.addEdge("D", "F", 1);
distanceGraph.addEdge("F", "E", 1);


// distanceGraph.print()
console.log(distanceGraph.dijkstraShortestPath("D", "B"));

// console.log(distanceGraph);


