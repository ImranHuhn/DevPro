///////////////////////////////////
// 1) map method section
console.log('1) map method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Syntax
// map(function (element) { /* … */ })

Array.prototype.map = undefined;

const array1 = [1, 2, 3, 4]

Array.prototype.map = function (callback) { 
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}

console.log(array1.map(x => x))
console.log(array1.map(x => x * 2))

/////////////////////////////////////
// 2) reduce method section
console.log('2) reduce method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Syntax
// reduce(function (accumulator, currentValue) { /* … */ }, initialValue)

Array.prototype.reduce = undefined;

let array2 = [1, 2, 3, 4]

Array.prototype.reduce = function (callback, initialAcc) {
    let acc = initialAcc || this[0]
    for (let i = 1; i < this.length; i++) {
        acc = callback(acc, this[i])
    }
    return acc;
}

console.log(array2.reduce(x => x));
console.log(array2.reduce(x => x * 2));
console.log(array2.reduce((a, b) => { return a + b }, 79))

/////////////////////////////////////
// 3) indexOf method section
console.log('3) indexOf method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// Syntax
// indexOf(searchElement, fromIndex)

Array.prototype.indexOf = undefined;

const array3 = ['ant', 'bison', 'camel', 'duck', 'bison'];

Array.prototype.indexOf = function (x, y) {
    const start = y || 0
    
    for (let i = start; i < this.length; i++) {
        if (x === this[i]) {
            return i;
        }
    }
    return -1; 
}

console.log(array3.indexOf('bison'));
console.log(array3.indexOf('bison', 2));
console.log(array3.indexOf('giraffe'));

/////////////////////////////////////
// 4) filter method section
console.log('4) filter method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Syntax
// filter(function (element) { /* … */ })

Array.prototype.filter = undefined

const array4 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

Array.prototype.filter = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])){
            newArr.push(this[i])
        }
    }
    return newArr;
}

console.log(array4.filter(word => word.length > 6))

/////////////////////////////////////
// 5) concat method section
console.log('5) concat method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// Syntax
// concat(value0, value1, /* … ,*/ valueN)

Array.prototype.concat = undefined

Array.prototype.concat = function(...args){
    let newArr = [];
    console.log(...args)
    for(let i = 0; i < this.length; i++){
        newArr.push(this[i]);
    }
    for(let i = 0; i < args.length; i++){
        newArr.push(args[i]);
    }
    return newArr;
}

const array5a = ['a', 'b', 'c'];
const array5b = ['d', 'e', 'f'];
const array5c = array5a.concat(array5b, 'z');
console.log(array5c)

/////////////////////////////////////
// 6) every method section
console.log('6) every method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// Syntax
// every(function (element) { /* … */ })

Array.prototype.every = undefined

const array6 = [1, 30, 39, 29, 10, 13];

const isBelowThreshold = (currentValue) => currentValue < 40;
const falseIsBelowThreshold = (currentValue) => currentValue > 40;

Array.prototype.every = function(callback){
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i])){
            return false;
        }
    }
    return true;
}

console.log(array6.every(isBelowThreshold));
console.log(array6.every(falseIsBelowThreshold));

/////////////////////////////////////
// 7) forEach method section
console.log('7) forEach method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Syntax
// forEach(function (element) { /* … */ })

Array.prototype.forEach = undefined

const array7 = ['a', 'b', 'c'];

Array.prototype.forEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}

array7.forEach(element => console.log(element));

/////////////////////////////////////
// 8) lastIndexOf method section
console.log('8) lastIndexOf method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
// Syntax
// lastIndexOf(searchElement)

Array.prototype.lastIndexOf = undefined

const array8 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

Array.prototype.lastIndexOf = function(x){
    for(let i = this.length - 1; i >= 0; i--){
        if(x == this[i]){
            return i;
        }
    }
    return -1;
}

console.log(array8.lastIndexOf('Dodo'));
console.log(array8.lastIndexOf('Tiger'));
console.log(array8.lastIndexOf('Dog'));

/////////////////////////////////////
// 9) some method section
console.log('9) some method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// Syntax
// some(function (element) { /* … */ })

Array.prototype.some = undefined

const array9 = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;
const odd = (element) => element % 3 === 0 || 1;
const ten = (element) => element === 10;

Array.prototype.some = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            return true;
        }
    }
    return false;
}
console.log(array9.some(even));
console.log(array9.some(odd));
console.log(array9.some(ten));

// /////////////////////////////////////
// // 10) push method section
console.log('10) push method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// Syntax
// push(element0, element1, /* … ,*/ elementN)

Array.prototype.push = undefined

const array10 = ['pigs', 'goats', 'sheep'];

Array.prototype.push = function(x){
    this[this.length] = x;
    return this;
  }

console.log(array10.push('cows'))
console.log(array10.push('chickens', 'cats', 'dogs'))

/////////////////////////////////////
// 11) pop method section
console.log('11) pop method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// Syntax
// pop()

const array11 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

Array.prototype.pop = undefined

Array.prototype.pop = function(){
    const x = this[this.length - 1]
    this.splice(this.length - 1, 1)
    return x;
}

console.log(array11.pop());
console.log(array11);

/////////////////////////////////////
// 12) splice method section
console.log('12) splice method section==================================================')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Syntax
// splice(start, deleteCount, item1, item2, itemN)

Array.prototype.splice = undefined;

Array.prototype.splice = function(start, del, ...items) {
  const startArray = [];

  for(let i = 0; i< start; i++){
    startArray.push(this[i])
  }
  startArray.push(...items);

  for(let i = start+del; i< this.length; i++){
    startArray.push(this[i]);
  }
  
  return startArray
}

const newTestArr = ['Jan', 'March', 'April', 'June']

console.log(newTestArr.splice(1, 0, 'Feb', 'dog'))