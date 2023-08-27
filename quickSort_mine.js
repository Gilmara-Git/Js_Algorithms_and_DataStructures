// quick sort sorts the array by starting by a pivot element(memorizes its index), and checks how many elements are smaller
// than it.
// As the comparison goes to the right, each element that is smaller then the pivot, we count to keep track of how
// many are smaller and swap the positions.
// Then, when there is no more elements smaller than the pivot, we swap the pivot element with the position of the count.

// instructor solution

// const pivot = pass the array get pivot
// return quickSort

/////// My Solution for gathering the Pivot index when it is placed on the right place //////////////////////

// i=0
//j = 1     [28,41,4,11,16,1,40,14,36,37,42,18]  count = 0
// j =2     [28,4,41,11,16,1,40,14,36,37,42,18]  count = 1
// j =3     [28,4,11,41,16,1,40,14,36,37,42,18]  count = 2
// j=4;     [28,4,11,16,41,1,40,14,36,37,42,18]  count = 3
// j=5;     [28,4,11,16,1,41,40,14,36,37,42,18]  count = 4
//j =6      [28,4,11,16,1,41,40,14,36,37,42,18]  count = 4
//j = 7     [28,4,11,16,1,41,40,14,36,37,42,18]  count = 5
//j = 8     [28,4,11,16,1,14,40,41,36,37,42,18]  count = 5
//j = 9     [28,4,11,16,1,14,40,41,36,37,42,18]  count = 5
//j = 10    [28,4,11,16,1,14,40,41,36,37,42,18]  count = 5
//j = 11     28,4,11,16,1,14,40,41,36,37,42,18]  count = 6
//           [28,4,11,16,1,14,18,41,36,37,42,40]

//           [18,4,11,16,1,14,28,41,36,37,42,40]

const helper = (arr) => {
  // instructor's function had only one loop

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let pivot = i;
    let temp;
    for (let j = 1 + i; j < arr.length; j++) {
      if (arr[j] < arr[pivot]) {
        count++;

        temp = arr[count];
        arr[count] = arr[j];
        arr[j] = temp;

      }

      temp = arr[count];
      arr[count] = arr[pivot];
      arr[pivot] = temp;
      pivot = count;

     
    }
 

    return pivot;
  }
};
const arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18]; //28  starting pivot, after 1st loop it lands on the 6th // 6
const arr2 = [4, 8, 2, 1, 5, 7, 6, 3]; //4 starting pivot, after 1st loop it lands on the 3r // 3
// console.log(helper(arr2), 'lin61')

// This helper function should return the index where the pivot landed (starts at index at 0)

// const arr = [5,2,1,8,4,7,6,3]

// Accepted mutation
// [2,1,4,3,5,7,6]
// [1,4,3,2,5,7,6,8]
// [3,2,1,4,5,7,6,8]
// [4,1,2,3,5,6,7,8]

/////// My Solution AFTER gathering the Pivot index when it it is placed on the right index //////////////////////

function quickSort(arr, start = 0, end = arr.length -1) {
    console.log(start, end, 'start and end', arr, 'arr')
    if(end === 0){
        return arr;
    }
    if(start < end){
    let pivot =  helper(arr, start, end);

        //left
        quickSort(arr, start, pivot -1); // eliminating the previous pivot from the left array
        //right
        quickSort(arr, pivot +1 , end)  // eliminate the previous pivot from the right array
    }
    
    
    console.log(arr, 'arr')    

  return arr;
}

console.log(quickSort([4,6,9,1,2,5,3]), "quickSort");

// console.log(quickSort([5,2,1,8,4,7,6,3]));
// console.log(quickSort([2,1,4,3]));
