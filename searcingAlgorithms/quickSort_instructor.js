
function pivot(arr, start=0, end= arr.length +1) {
  
    let pivot = arr[start];
    let swapIndx = start;
    for (let i= start + 1; i < arr.length; i++) {
        if(pivot > arr[i]){
            swapIndx++; //1
            let temp = arr[swapIndx];
            arr[swapIndx] = arr[i];
            arr[i] = temp;
        }     
        
}

        temp = arr[start];
        arr[start] = arr[swapIndx];
        arr[swapIndx] = temp; 

        return swapIndx;
}

console.log(pivot([4,8,2,1,5,7,6,3]));


function quickSort(arr, left= 0, right = arr.length -1){
    if(left < right){

        let pivotIndex = pivot(arr, left, right);  ///3
        
        
        //left
        quickSort(arr, left, pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1, right) 
    }
    return arr;
}

console.log(quickSort([4,6,9,1,2,5]));

// [4,6,9,1,2,5,3]
// [3,2,1,4,5,9,6] //3
// [3,2,1] [5,9,6]
// [1,2,3] //2       [5,9,6]//0
// [1,2] // 0         [6,9] //1
// [1]                 [6]









// Minha funcao de helper 
function pivotar(arr, start= 0, end= arr.length-1 ){
    let pivotIndex = 0;
    let j= 1;
    let count = 0;
    let temp;

    while( j < arr.length ){
        if(arr[j] < arr[pivotIndex] ){
            count++; 
            temp = arr[j];
            arr[j]= arr[count];
            arr[count]= temp;
            j++;
            

    }else {
        j++;
    }

}
    temp = arr[count];
    arr[count] = arr[pivotIndex];
    arr[pivotIndex] = temp;
    return count; 

}

// console.log(pivot([4,8,2,1,5,7,6,3]));
// console.log(pivotar([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]))
                //    [4,2,8,1,5,7,6,3]  j=2
                //    [4,2,1,8,5,7,6,3]  j=3
                //    [4,2,1,8,5,7,6,3]  j=4
                //    [4,2,1,3,5,7,6,8]  j=7
                    