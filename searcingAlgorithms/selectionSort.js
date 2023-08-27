
// Big O(n squared)  as the length grows it grows as well
const selectionSort =(arr)=>{
  
    for(let i=0; i< arr.length; i++) {
        let min = i;
        for(let j= i+1; j< arr.length; j++) {
            if(arr[j] < arr[min]){
                min = j;
            }
            console.log(i, min, j)
   
}
// in this algorithm we concentrate on the index that the min is located and we keep updating the min in every i loop
// if i and min are different we swap  ( this is to avoid unnecessary swaps)
//[5,3,4,1,2]
// [1,3,4,5,2]
// [1,2,4,5,3]
//[ 1,2,3,5,4]
// [1,2,3,4,5]
if(i != min){
    console.log(i, min, 'i and min')
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;

}

    }

    return arr;
}

// console.log(selectionSort([5,3,4,1,2]));
console.log(selectionSort([0,2,34,22,10,19,17]))
