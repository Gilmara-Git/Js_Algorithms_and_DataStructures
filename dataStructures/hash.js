//We are just going to represent the concept of a hash.
// There are already plenty of HASH Table/ HASH Map out there used for encryption, cryptocurrency etc
// Basically, a Hash Table function gets a data/key:value pairs of (string, pdf, video....etc), produces
//a number/key that is unique to the piece of data passed, and stores is in a list at the number/key position.
//So when we pass the data again it returns the number/key.
// With that number/key we locate the data/ key:value pairs.
// We added prime number to the calculation of the key output because it is mathematically proven it
// reduces the changes of collision

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  produceHashKey(keyString) {
    //this only works for String
    let total = 0;
    let anyPrimeNumber = 31;
    for (let i = 0; i < Math.min(keyString.length, 100); i++) {
      let char = keyString[i];
      let value = char.charCodeAt(0) - 96;

      total = (total * anyPrimeNumber + value) % this.keyMap.length;

      // total is the number got, MOD arrLength, this way we get a key/number within the array indexes limit
    }
    return total;
  }

  set(key, value) {

    let keysExists = this.keys().includes(key);
    if(keysExists)  return `Duplicate value, ${key} already exists!'`;


    let index = this.produceHashKey(key);
    // console.log(index)

    if (!this.keyMap[index]) {
      //if there is nothing at this index, we put an array in that position
      // we do that because we need to push arrays with key value pairs inside this array
      // and because it is not possible to push things if the position is undefined (nothing in there)
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    // we need to pass the key to our  produceHashKey to find out the key/index
    let index = this.produceHashKey(key);
    // console.log(this.keyMap[index], index)

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }
  values() {
    // whenever a value already exists we are not going to return duplicates
    // lets says we are returning grades of students and Mary got C, Arena got C
    // We are returning just one record of C into our list of values

    let values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        // console.log(this.keyMap[i])
        // for(let j=0; j< this.keyMap[i].length; j++){
        //     console.log(this.keyMap[i][j][1])
        // }
        this.keyMap[i].forEach((val) => { 
          if (!values.includes(val[1])) {
              values.push(val[1]);
        }
        });
      }
    }
    return values;
  }

  keys() {
    let keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
       
        this.keyMap[i].forEach((key) => { 
          if (!keys.includes(key[0])) {
              keys.push(key[0]);
        }
        });
      }
    }
    return keys;
  }
}

let _hash = new HashTable(17);
// _hash.set('hello world', 'goodbye')
// _hash.set('dogs', 'are cool')
// _hash.set('cats', 'are fine')
// _hash.set('i love', 'pizza')
// _hash.set('hi', 'bye')
// _hash.set('french', 'fries')

_hash.set("maroon", "#800000");
console.log(_hash.set("maroon", "#800000"));
_hash.set("yellow", "#FFFF00");
_hash.set("olive", "#808000");
_hash.set("salmon", "#FA8072");
_hash.set("lightcoral", "#F08080");
_hash.set("mediumvoletred", "#C71585");
_hash.set("plum", "#DDA0DD");
// // puposely adding duplicate values to treat it in code (method 'values'))
_hash.set("purple", "#DDA0DD");
_hash.set("violet", "#DDA0DD");

// console.log(_hash.get('plum'))
// console.log(_hash.get('yellow'))
// console.log(_hash.get('inexistent color'))
// console.log(_hash.get('maroon'))
// console.log(_hash.get('salmon'))

// console.log(_hash.values());
// console.log(_hash.keys());


// using our methods keys and get to print the values
_hash.keys().forEach(function(key){
    console.log(_hash.get(key))
})
// console.log(_hash)

// console.log('a'.charCodeAt() -96)

// let arr =  Array.from({length: 35}, ()=>['Created using Array.from'])

// console.log(arr)
