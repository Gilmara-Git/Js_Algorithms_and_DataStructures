//We could just loop over using a outer and inner loop normally
// But we can start the outer loop from the END in order to limit UP to where the inner loop ends
// Then, we compare inside the inner loop and swap when needed 

// [ 45, 8, 37,29, 31]
//    j               i 
// [ 8, 45, 37, 29, 31]
//       j             i
// [ 8, 37, 45 29, 31]
//          j          i

// [ 8, 37, 29, 45, 31]
//               j      i

// [ 8, 37, 29, 31,  45]
//                   j  i

const bubbleSort = (arr)=>{
    let noSwaps;

    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j=0; j< i-1; j++) {
            console.log(j)
            let temp;
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps){
            break;
        }
    }
    return arr;
}


// console.log(bubbleSort([ 45, 8, 37,29, 31]))

console.log(bubbleSort([ 1,2 ,6, 8, 37 ,29, 31]))
// the swaps variable helps optimizing our code specially when the array is almost sorted
