// Graph is very used for lots of solutions and strategies nowadays
// Node(Vertex) and connections(Edges)
// Can be directed (instagram), undirected(facebook)
// Can be unweighted, no values in the connections/edges or weighted (values in the connections/edges)

// Can be implemented use Adjacency Matrix or Adjacency List
// We will do Adjacency List as it takes less space | undirected Graph
// it is going to be an Object structure that each key is the Vertex and the values will be an array of edges


//       A
//    B     C
///   D ---  E
//       F     

class Graph {
    constructor(){
        this.adjacencyList = {};
    }
     addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
     }
     addEdge(vertex1, vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        // this is undirected graph, meaning the connections goes back and forth
        // if it was directed we would connect just one way
        if(!this.adjacencyList[vertex1].includes(vertex2)){
            this.adjacencyList[vertex1].push(vertex2);
        }
      
        if(!this.adjacencyList[vertex2].includes(vertex1)){
            this.adjacencyList[vertex2].push(vertex1);
        }
     }

     removeEdge(vertex1, vertex2){
        let updateAdjacencyList;
         if(this.adjacencyList[vertex1].includes(vertex2)){
            updateAdjacencyList = this.adjacencyList[vertex1].filter(edge => edge !== vertex2);
            this.adjacencyList[vertex1] = updateAdjacencyList;
            
            }
            if(this.adjacencyList[vertex2].includes(vertex1)){
            updateAdjacencyList = this.adjacencyList[vertex2].filter(edge => edge !== vertex1);
            this.adjacencyList[vertex2] = updateAdjacencyList;

        }

     }

     removeVertex(vertex){
    //     if(!this.adjacencyList[vertex]){
    //         return `Error. Unable to remove '${vertex}'as it does not exist.`    
    //     }
    //     this.adjacencyList[vertex].forEach(edge => this.removeEdge(vertex, edge));
        
    //     return delete this.adjacencyList[vertex];

    //  }

    // ANOTHER WAY OF DOING THE SAME THING
         if(!this.adjacencyList[vertex]){
            return `Error. Unable to remove '${vertex}'as it does not exist.`    
        }
        while(this.adjacencyList[vertex].length){
            let edge = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, edge);

        }
        
        return delete this.adjacencyList[vertex];

     }

     DFSRecursive(vertex){
        let result = [];
        let visited = {};
        let adjacencyList =  this.adjacencyList;  // we grabbed it here because inside helper context 'this'does not exist. 
        
        
        (function helper(existingVertex){ 
            // console.log(existingVertex);
            if(!existingVertex) return null;

                visited[existingVertex] = true;
                result.push(existingVertex);

             adjacencyList[existingVertex].forEach(neighbor => {
                if(!visited[neighbor]) return helper(neighbor);

                });
                 
         
        })(vertex);
        
        // helper(vertex);
       
        return result;
    }


     }




// building our graph to work on DFS traversal recursive
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")


// console.log(g)
console.log(g.DFSRecursive("A")); // [A, B, D, E, C, F]; 