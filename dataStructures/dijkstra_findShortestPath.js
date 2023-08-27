//Dijkstra algorithm is about finding the shortest path between two nodes in a graph

// we will need a weighted graph and a priority queue
// At first, we are going to create a naive priority queue, by using the sort() method and 
// using the 'priority value' to sort()
// but this is naive because sort() is O(N)

// Then afterwards we will create our 'Binary Heap priority queue' that is very efficient

// Let's explore both 


//building naive priority queue with sort
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority){
        if(!val || priority === null || priority === undefined) return "Enter a value and a valid priority!."
        this.values.push({val, priority});
        this.sort();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }

    dequeue(){
        let min =  this.values.shift();
        return min; 
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
    print(vertex){
        // console.log(this.adjacencyList[vertex])
    }
    dijkstraShortestPath(startPoint, endPoint){
        if(!startPoint || !endPoint) return "Enter a start point and a end point."
        let distanceTrack = {};
        let previousPoint = {};
        let pathFromPreviousPoint = [];
        let smallest;
       
        let minPriorityQueue = new PriorityQueue();

       for (let key in this.adjacencyList){   
            if(key === startPoint){
                distanceTrack[key]= 0;
               minPriorityQueue.enqueue(key, 0);
            }else{
                distanceTrack[key] = Infinity;
                // minPriorityQueue.enqueue(key, Infinity);  It works without initiating the with the other node (B to E), because we enqueue neighbors nodes
            }
          previousPoint[key]= null;
       }

            while(minPriorityQueue.values.length){
                smallest =  minPriorityQueue.dequeue().val; //A
                if(smallest === endPoint){
                    
                   while(smallest){
                       pathFromPreviousPoint.push(smallest)
                       smallest = previousPoint[smallest];
                     
                       console.log(previousPoint, 'previous point', pathFromPreviousPoint);
                    }
                    break;

                }
                
                // console.log(distanceTrack, 'distance track')
                // console.log(minPriorityQueue, 'Priority Queue', 'lin86')
                for(let neighbor in this.adjacencyList[smallest]){
                   
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


distanceGraph.print("F")
console.log(distanceGraph.dijkstraShortestPath("A", "E"));

// console.log(distanceGraph);



// const testPriorityQueue = new PriorityQueue();
// console.log(testPriorityQueue.enqueue("B", 0), 'line 122')
// console.log(testPriorityQueue.enqueue("C", 6))
// console.log(testPriorityQueue.enqueue("E", 1))
// console.log(testPriorityQueue.dequeue(), 'Dequeueing checking if the sorting NAIVE solution is working')
// console.log(testPriorityQueue);


// const arr  = [ {node: "B", priority: 10}, {node: "C", priority: 0}, {node: "D", priority: 1}]
// arr.sort((a,b) => a.priority - b.priority)
// console.log(arr)

// for(let neighbor in arr){
    //     console.log(arr[neighbor], 'line 97', neighbor)
    // }

    // console.log( 1 + Infinity, 'line 136')