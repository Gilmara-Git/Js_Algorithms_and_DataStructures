// there are many different heaps
//Binary Heaps are similar to Binary search trees, except that it does not allow to grow only one side
// values are added from left to right and we represent them in a array. You cannot put a value in the right if the there is left space empty

// Max binary heap => parent is bigger than its children
// Min binary heap => parent is smaller than its children

// insert ... push to the end and compare with parent(s) to place value on the correct place
// remove ... shift the element on index 0 (always start removing the root)
// remove ... take the last element and put it on the index 0 position and compare with its children to place it on the correct place


class MaxBinaryHeap{
    constructor(){
        this.MBH = [];
    }
    insert(value){
        this.MBH.push(value);
        this.bubbleUp(value);
    }

    bubbleUp(node){
        let nodeIdx =  this.MBH.length - 1;
        let parentIdx = Math.floor((nodeIdx - 1 )/2);
        let temp;
    
        if(node <= this.MBH[parentIdx]) return;

        while(parentIdx >=0 || node > this.MBH[parentIdx]){

          if(node > this.MBH[parentIdx]){
              temp = node;
              this.MBH[nodeIdx] = this.MBH[parentIdx];
              this.MBH[parentIdx] =  temp; 
            }
            nodeIdx = parentIdx;
            parentIdx = Math.floor((nodeIdx - 1 )/2);
          
    }
       

    }
    hisBubbleUp(){
        let idx = this.MBH.length-1;
        let element = this.MBH[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx -1)/2);
            let parent =  this.MBH[parentIdx];
       
            if(element <= parent) break;
           
                this.MBH[parentIdx] = element;
                this.MBH[idx] = parent; 
                idx = parentIdx;

            
        }
    }

    //remove from Max or Min binary heap involves removing the root(shift) 
    // and comparing with its 2 children, 
    //do a swap when parent is smaller (Max Binary heap)
    // do a swap when parent is bigger (Min Binary heap)
    // removing root  41  [41,39,33,18,27,12]

    extractMax(){
        
        let parentIdx = 0;
        let max = this.MBH[0];
        let newParent =  this.MBH.pop();
        
        if(!this.MBH.length) return max;
        
        // starting the bubbleDown process(could have done in separate method)
        this.MBH[parentIdx] = newParent;
        let idxChild1 = parentIdx * 2 + 1;
        let idxChild2 = parentIdx * 2 + 2;
        
        
        while(idxChild1 < this.MBH.length || idxChild2 < this.MBH.length){
            let child1Bigger = this.MBH[idxChild1] >this.MBH[parentIdx];
            let child2Bigger = this.MBH[idxChild2] >this.MBH[parentIdx];
            if(!child1Bigger && !child2Bigger) break;
            
            if(child1Bigger || child2Bigger){
               
                if(this.MBH[idxChild1] > this.MBH[idxChild2] || !this.MBH[idxChild2]){
                    newParent  = this.MBH[idxChild1];
                    this.MBH[idxChild1] = this.MBH[parentIdx];
                    this.MBH[parentIdx] = newParent;
                    parentIdx = idxChild1;
                    
                   
                    idxChild1 = parentIdx * 2 + 1;
                    idxChild2 = parentIdx * 2 + 2;
               
                
    
                }else{

                    newParent  = this.MBH[idxChild2];
                    this.MBH[idxChild2] = this.MBH[parentIdx];
                    this.MBH[parentIdx] = newParent;
                    parentIdx = idxChild2;
               
                    idxChild1 = parentIdx * 2 + 1;
                    idxChild2 = parentIdx * 2 + 2;
               

                }
               
            }

        }  
       

       return max;

    }
    hisExtractMax(){
        const max = this.MBH[0];
        const end = this.MBH.pop();

        if(this.MBH.length > 0){
            this.MBH[0] = end;
            // his bubbleDown
            this.sinkDown();


         }

        return max;

    }

    sinkDown(){
        let idx = 0;
        const length = this.MBH.length;
        const element = this.MBH[0];

        while(true){
             let swap = null;
             let leftChildIdx = 2 * idx + 1;
             let rightChildIdx = 2 * idx + 2;
             
             
             
             if(leftChildIdx < length){
                 if(this.MBH[leftChildIdx] > element){
                     swap = leftChildIdx;
                    }
                }
                
                if(rightChildIdx < length){
                    if(
                        (this.MBH[rightChildIdx] > element && swap == null ||
                            swap !== null && this.MBH[rightChildIdx] > this.MBH[leftChildIdx])
                            ){
                                
                                swap = rightChildIdx;   
                                
                            }  
                        }
                        
                        if(swap === null) break;
                        
                        
                        
                        
                        this.MBH[idx]= this.MBH[swap];
                        this.MBH[swap] = element;
                        
                        idx = swap;
                        console.log(element, leftChildIdx, rightChildIdx, swap, idx)
                    }
                    
                    return element;
                }


}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(41)
maxHeap.insert(39)
maxHeap.insert(33)
maxHeap.insert(18)
maxHeap.insert(27)
maxHeap.insert(12)
maxHeap.insert(55)
// maxHeap.insert(1)
// maxHeap.insert(45)
// maxHeap.insert(199)
// maxHeap.insert(2)

console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());

// console.log(maxHeap.hisExtractMax());
// console.log(maxHeap.hisExtractMax());
// console.log(maxHeap.hisExtractMax());
// console.log(maxHeap.hisExtractMax());
// console.log(maxHeap.hisExtractMax());
// console.log(maxHeap.hisExtractMax());
// console.log(maxHeap.hisExtractMax());
// console.log(maxHeap.hisExtractMax());
console.log(maxHeap)

//            199
//        55         41 
//   39       45    12    33
// 1    18   27   2     