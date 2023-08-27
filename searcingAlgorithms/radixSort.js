// GetDigit from StackOverflow
// 1 Step para RadixSort

function getNumberOfDigits(num){
    if(num === 0){
        return 1;
    }

        return Math.floor(Math.log10(Math.abs(num))) + 1;

}

// console.log(getNumberOfDigits(10))


// GetDigit from StackOverflow (return the number on the position passed)
// 2 Passo para RadixSort
function getDigitAtPosition(num, i){
     return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

// console.log(getDigitAtPosition(7323, 10))
// 7323 / 100(10 to pow 2) =  73.23 = > floored 73
// 73 % 10 =  3  = > return 3
// 3 2 1 0 position
// 7323    number given




function mostDigits(numbersArr){
    let max = 0;
    for(let i=0; i < numbersArr.length; i++){
        max = Math.max(max, numbersArr[i]);
    }
    return getNumberOfDigits(max);
}

// console.log(mostDigits([44,6,5677,32456,12,1]))

function radixSort(numList){
    // find the size of largest number , so we will know how many times we need to repeat the process
    const k = mostDigits(numList);
   
    for(let i=0; i < k; i++){
        let newBucket = Array.from({length: 10}, ()=>[]);

        for(let j=0; j < numList.length; j++){
            console.log(numList, 'numList in all phases');
            let digit = getDigitAtPosition(numList[j], i);
            // console.log(digit, 'number on position', i)
            // console.log(digit, 'number on position', i,numList[j], newBucket[digit], digit)
            newBucket[digit].push(numList[j]);
            
            
        }

        
        // after the INNER loop is over, we make numList to be a new array, concating the new ordered elements
        // numList =  [].concat(...newBucket);                                 iiii   
        // So, when i=1, and so on, it will work on number by number again. // 5467
        numList = [].concat(...newBucket);
     
      
     
        
    }
    
   return numList;

}

// console.log(radixSort([1556,4,3556,593,902]))
radixSort([23, 345,5467,12,2345,9852]);


//***************************/
// Daqui para baixo são testes

// const test = [ [], [1]]
// test[1].push(121)
// test[1].push(1261)
// test[0].push(1000)
// test[0].push(10550)

// console.log(test)
// console.log(test, 'new')

// My functions 
// function getDigit(num, P){
//     const convertedString = String(num).split('').reverse();
//     if (P >= convertedString.length) return 0; 
//     return Number(convertedString[P]);
  
// }
// console.log(getDigit(5567, 1), 'linha16')

// function getNumberOfDigits(num){
//     const convertedString = String(num);
//    return convertedString.length;

// }

// console.log(getNumberOfDigits(66))


// console.log(Math.log10(1000)) // 10 to what POWER for this number  // 10 elevado a que nos da 1000 ? 
// console.log('-------------------------------')
// const arr = [];
// console.log(arr.push(9))
// console.log(arr.push(3))
// console.log(arr.shift())
// console.log(arr)

// let concArr = [[],[],[23,9852],[345,67]]
// concArr = [].concat(...concArr);
// console.log(concArr)