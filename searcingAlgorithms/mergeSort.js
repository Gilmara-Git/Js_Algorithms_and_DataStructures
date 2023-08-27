// 1 split the array in half until they have length 1
 // In order to split the array in half until they are all separated in one array we need recursion
 // First let's do the logic of merging/sorting 2 sorted arrays
 const merge = (arr1,arr2)=>{
    console.log(arr1, 'arr1', arr2, 'arr2')
    let i=0; let j=0;
    let result = [];
  
    while(i < arr1.length && j < arr2.length){
        
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else {
            result.push(arr2[j]);
            j++;
        }
           
        
    }
 
    // solution do professor
    // while(i < arr1.length){
    //     result.push(arr1[i]);
    //     i++;
    // }

    // while(j < arr2.length){
    //     result.push(arr2[j])
    //     j++;
    // }

    // Other Solution that works as well
    if(j !== arr2.length){
       
        result = (result.concat(arr2.slice(j)));
    }

    if( i !== arr1.length){
        result =  result.concat(arr1.slice(i))
    }
    

    return result;
};
 
 
//  console.log(merge([4,6], [9,77]))
 



// now, we are going to pass an array, split it into single element, forming left and right arrays and pass them 
//to merge
  
 const arr = [3,4,5,8,1,2,6,7];

 function splitArraysMergeBackInOrder(arr){

    if(arr.length <=1) {
    
        return arr;
    }
     let begin = 0;
     let end =  Math.floor(arr.length/2);

     let arrLeft = splitArraysMergeBackInOrder(arr.slice(begin, end));
     let arrRight = splitArraysMergeBackInOrder(arr.slice(end, arr.length));
     return merge(arrLeft,arrRight); 
     
 }

 console.log(splitArraysMergeBackInOrder(arr));