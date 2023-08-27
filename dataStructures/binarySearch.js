//divide and conquer approach
// it only works on sorted arrays ( String of numbers )


const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (left < right) {
    console.log(left, "l", middle, "middle", right, "r", arr[middle], "middle");
    if (arr[middle] < val) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
    middle = Math.floor((left + right) / 2);

    if (arr[middle] === val) {
      return middle;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
// l       m          r
//l m   r
//   l m r
