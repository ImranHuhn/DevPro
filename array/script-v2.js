///////////////////////////////////
// 1) map method section
console.log('1) map method section==================================================')

Array.prototype.map = undefined;

const array1 = [1, 2, 3, 4]

Array.prototype.map = function (callback) { 
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}

console.log('first test for NEW map method')
console.log(array1.map(x => x))

console.log('second test for NEW map method')
console.log(array1.map(x => x * 2))

/////////////////////////////////////
// 2) reduce method section
console.log('2) reduce method section==================================================')

Array.prototype.reduce = undefined;

let array2 = [1, 2, 3, 4]

Array.prototype.reduce = function (callback) {
    let acc = this[0]
    for (let i = 1; i < this.length; i++) {
        acc = callback(acc, this[i])
    }
    return acc;
}

console.log(array2.reduce(x => x));
console.log(array2.reduce(x => x * 2));
console.log(array2.reduce((a, b) => { return a + b }))

/////////////////////////////////////
// 3) indexOf method section

console.log('3) indexOf method section==================================================')

Array.prototype.indexOf = undefined;

const array3 = ['ant', 'bison', 'camel', 'duck', 'bison'];

Array.prototype.indexOf = function (x, y) {
    if (y == undefined) {
        for (let i = 0; i < this.length; i++) {
            if (x === this[i]) {
                return i;
            }
        }
    } else if (y != undefined) {
        for (let i = y; i < this.length; i++) {
            if (x === this[i]) {
                return i;
            }
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

Array.prototype.filter = undefined

const array4 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

Array.prototype.filter = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])){
            newArr.push(this[i])
            console.log(newArr)
        }
    }
    return newArr;
}

console.log(array4.filter(word => word.length > 6))
/////////////////////////////////////
// 5) concat method section

console.log('5) concat method section==================================================')

Array.prototype.concat = undefined


Array.prototype.concat = function(x){
    let newArr = []
    newArr.push(this)
    for(let i = 0; i < x.length; i++){
        newArr[0].push(x[i]);
    }
    return newArr[0]
}

const array5a = ['a', 'b', 'c'];
const array5b = ['d', 'e', 'f'];
const array5c = array5a.concat(array5b);
console.log(array5a.concat(array5b))

/////////////////////////////////////
// 6) every method section

console.log('6) every method section==================================================')

Array.prototype.every = undefined

const array6 = [1, 30, 39, 29, 10, 13];

const isBelowThreshold = (currentValue) => currentValue < 40;
const falseIsBelowThreshold = (currentValue) => currentValue > 40;

Array.prototype.every = function(callback){
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            return true;
        } else {
            return false;
        }
    }
}

console.log(array6.every(isBelowThreshold));
console.log(array6.every(falseIsBelowThreshold));

/////////////////////////////////////
// 7) forEach method section

console.log('7) forEach method section==================================================')

Array.prototype.forEach = undefined

const array7 = ['a', 'b', 'c'];

Array.prototype.forEach = function(callback){
    newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr += callback(this[i])
    }
    return newArr;
}

array7.forEach(element => console.log(element));

/////////////////////////////////////
// 8) lastIndexOf method section

console.log('8) lastIndexOf method section==================================================')

Array.prototype.lastIndexOf = undefined

const array8 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

Array.prototype.lastIndexOf = function(x){
    for(let i = this.length - 1; i >= 0; i--){
        // console.log(x + ' : ' + this[i] )
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

const array11 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(array11.pop());
// Expected output: "tomato"

console.log(array11);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

array11.pop();

console.log(array11);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

console.log(Array.prototype.pop)
Array.prototype.pop = undefined
console.log(Array.prototype.pop)

Array.prototype.pop = function(){
    const x = this[this.length - 1]
    this.splice(this.length - 1, 1)
    return x;
}

const array11test = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(array11test);
console.log(array11test.pop());
console.log(array11test);

console.log('splice method section==================================================')


/////////////////////////////////////
// 12) splice method section

console.log('12) splice method section==================================================')

