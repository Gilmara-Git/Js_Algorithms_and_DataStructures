const arr = [2, 1, 9, 76, 4];
//  j i
// i -->
//  <--j

// [2,1,9,76,4];
// because of the way insertionSort works
// if is good for inserting any incoming random numbers into the sorted part of the array
// which we assume the left part is always sorted until it reach the end of the array → right side

// Lets’s say we have incoming number from an online source, we can get this number in insert in the array, sorting
// it to the right spot

const selectionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
        // se fizer aqui arr[j] = temp    em vez da linha abaixo tb da certo
        // arr[j] =  temp;
      console.log(arr);
    }
    arr[j+1]  = temp;
  }
  return arr;
};
//[2,1,9,76,4];
console.log(selectionSort(arr));
