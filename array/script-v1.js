/////////////////////////////////
// how to create array methods

const data1 = [1, 2, 3, 4];

Array.prototype.poop = function () {
    console.log('poopy');
}

const friends = ['James', 'Annie', 'Daniel'];

friends.poop()
data1.poop()

///////////////////////////////////
// recreating reverse method

const data2 = [1, 2, 3, 4];

Array.prototype.reverse = undefined;
console.log('reverse method is now: ' + Array.prototype.reverse); // this is to demonstrate that the reverse method have been overwritten

//this will demonstrate that the reverse method is overwritten with new code and will immitate reverse arrays differrent from the original codebase
Array.prototype.reverse = function () {
    const data2 = [];
    for (let i = this.length - 1; i >= 0; i--) {
        // console.log(this[i]);
        data2.push(this[i]);
    }
    // console.log('here', data);
    return data2;
}

console.log(data2.reverse());

/////////////////////////////////////
//reproducing the find method

const data3 = [1, 2, 3, 4];

Array.prototype.find = function (callback) { // callback is the paramater. parameter is just an empty variable that gets declared on this line. when calling a function that has a value or another function inside the parenthatsis like below with (el) => el === 3), which then is called an argument. that is when the parameter gets defined for the declared variable as seen below. In this particular case, this is a function parameter which is a function inside a function call below with the argument (el) => el === 3)
    let found = null;

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            found = this[i];
            break;
        }
    }
    return found;
}

console.log(data3.find((el) => el === 3)); //this is an arraow function that uses el as a parameter. Curly brackets and return keyword are not necessary if there is only one statement and returns a value. the arguement, is (el) => el === 3)

console.log('==================================================')
/////////////////////////////////////////////
// Pick 10 favorite methods, and recreate with prototype method.  

Array.prototype.map
Array.prototype.reduce
Array.prototype.indexOf
Array.prototype.filter
Array.prototype.concat
Array.prototype.every
Array.prototype.forEach
Array.prototype.lastIndexOf
Array.prototype.some
Array.prototype.push
Array.prototype.pop
Array.prototype.splice

console.log('map method section==================================================')

///////////////////////////////////
// 1) map method
const array1 = [1, 2, 3, 4]

console.log('test if map method exist:')
console.log(Array.prototype.map) //test if method exist

console.log('first test if map method works:')
console.log(array1.map(x => x)) //test to check array

console.log('second test if map method works:')
console.log(array1.map(x => x * 2)) //test to multiply array by 2

Array.prototype.map = undefined; //remove method from prototype

console.log('test if map method is removed:')
console.log(Array.prototype.map) //check if prototype indeed doesn't exist

//creating a constructor for array prototypes
Array.prototype.map = function (callback) { //created map method
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        // newArray += callback(this[i]); //this is for concatinating characters
        newArray.push(callback(this[i]));
    }
    return newArray;
}

console.log('first test for NEW map method')
console.log(array1.map(x => x)) // first test for new method

console.log('second test for NEW map method')
console.log(array1.map(x => x * 2)) //second test for new method

console.log('reduce method section==================================================')
/////////////////////////////////////
// 2) reduce method

let array2 = [1, 2, 3, 4]

console.log('test if reduce method exist:')
console.log(Array.prototype.reduce) //test if method exist

console.log('first test if reduce method works:')
console.log(array2.reduce(x => x)) //test to check array

console.log('second test if reduce method works:')
console.log(array2.reduce(x => x * 2)) //test to multiply array by 2

console.log(array2.reduce((a, b) => { return a + b }))

Array.prototype.reduce = undefined; //remove method from prototype

console.log('test if reduce method is removed:')
console.log(Array.prototype.reduce) //check if prototype indeed doesn't exist

//////////////////////////////////////////////////
// Array.prototype.reduce = function(callbackFn, initialValue){
//     let accumulator = 0;
//     for(let i = 0; i < this.length; i++){
//         // accumulator = callbackFn(this[i]);
//         // console.log(typeof(this[i]))
//         // console.log(this[i])

//         //if initialValue is specified
//         if(initialValue != undefined){
//             accumulator += initialValue;

//         //if initialValue is not specified
//         } else if(initialValue == undefined) {
//             accumulator = this[0];
//         } else {
//             console.log('error')
//         }
//     }
//     return accumulator;
// }
/////////////////////////////////////////////////////////

//function
//for each array
//return value is now = acc

//function arguments
//acc
//acc is from the previous return loop
//on first loop
//if initVal is given, then you that
//if iniVal is not given the use array[0]

//currVal
//the value of array[i]
//on first loop
//use array[0] if initVal is given
//or else use array[1]

//currIn
//currVal == array[i]
//on first loop
//use 0 if initVal is given
//other wise, use 1

// Array.prototype.reduce = function(acc, currVal, currIn){
//     acc = this[0];
//     currVal = this[1];
//     currIn = 1;
//     console.log('outside for loop ' + 'acc: ' + acc + ' currVal: ' + currVal + ' currIn: ' + currIn)
//     for(currIn; currIn < this.length; currIn++){
//         currVal = this[currIn];
//         acc += currVal;
//         console.log('inside for loop ' + 'acc: ' + acc + ' currVal: ' + currVal + ' currIn: ' + currIn)
//     }
//     return acc;
// }
// console.log(array2.reduce(x => x))
// console.log(array2.reduce(x => x * 2))


//////////////////////////////////
// array2 = [1,2,3,4]
// Array.prototype.reduce = function(callback) {
//     let initialValue = 0;
//     for (let i = 0; i < this.length; i++) {
//       console.log('before: '+initialValue)   
//       console.log('before: '+this[i])   
//       initialValue = callback(this[i], initialValue)
//       console.log('after: '+initialValue)
//     }
//     return initialValue;
//   }

///////////////////////////////////////////////////////
// Source: https://stackoverflow.com/questions/54482767/issue-with-rewriting-the-reduce-method-js

// Array.prototype.reduce = function(callback) {
//     let initialValue = 0;
//     for (let i = 0; i < this.length; i++) {
//       initialValue = callback(this[i], initialValue)
//     }
//     return initialValue;
//   }

//   console.log(array2.reduce(x => x * 2)); 

//////////////////////////////////////////////////

// callbackFn
// A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce().

// Callback function
// reduce(callbackFn)

// Inline callback function
// reduce(function (accumulator, currentValue) { /* … */ })

array2 = [1, 2, 3, 4]

Array.prototype.reduce = function (callback) {
    let acc = this[0] //On first call, initialValue if specified, otherwise the value of array[0]
    for (let i = 1; i < this.length; i++) { //On first call, 0 if initialValue was specified, otherwise 1.
        acc = callback(acc, this[i])
    }
    return acc;
}

console.log(array2.reduce(x => x));
console.log(array2.reduce(x => x * 2));
console.log(array2.reduce((a, b) => { return a + b }))

//note: stackoverflow post is wrong. initialValue and accumilation is switched. the output is suppose to be accumilation according to mdn. another thing is the index is suppose to start at index 1 if initiual value is not given when function is being called

console.log('indexOf method section==================================================')

/////////////////////////////////////
// 3) indexOf method

const array3 = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log('test if indexOf method exist:')
console.log(Array.prototype.indexOf) //test if method exist

console.log(array3.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(array3.indexOf('bison', 2));
// Expected output: 4

console.log(array3.indexOf('giraffe'));
// Expected output: -1

Array.prototype.indexOf = undefined; //remove method from prototype

console.log('test if indexOf method is removed:')
console.log(Array.prototype.indexOf) //check if prototype indeed doesn't exist

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
    return -1; //got this line from https://stackoverflow.com/questions/53219027/trying-to-recreate-indexof-method-in-javascript
}

console.log(array3.indexOf('bison'));
console.log(array3.indexOf('bison', 2));
console.log(array3.indexOf('giraffe'));
console.log('filter method section==================================================')

/////////////////////////////////////
// 4) filter method

const array4 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = array4.filter(word => word.length > 6);
console.log(array4.filter(word => word.length > 6))

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

Array.prototype.filter = undefined

console.log(Array.prototype.filter)

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
console.log('concat method section==================================================')
/////////////////////////////////////
// 5) concat method

const array5a = ['a', 'b', 'c'];
const array5b = ['d', 'e', 'f'];
const array5c = array5a.concat(array5b);

console.log(array5c);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

console.log(Array.prototype.concat)
Array.prototype.concat = undefined
console.log(Array.prototype.concat)

Array.prototype.concat = function(x){
    let newArr = []
    newArr.push(this)
    for(let i = 0; i < x.length; i++){
        newArr[0].push(x[i]);
    }
    return newArr[0]
}

console.log(array5a.concat(array5b))
console.log('every method section==================================================')


/////////////////////////////////////
// 6) every method

const isBelowThreshold = (currentValue) => currentValue < 40;
const falseIsBelowThreshold = (currentValue) => currentValue > 40;

const array6 = [1, 30, 39, 29, 10, 13];

console.log(array6.every(isBelowThreshold));
// Expected output: true

console.log(array6.every(falseIsBelowThreshold));
// Expected output: false

console.log(Array.prototype.every)
Array.prototype.every = undefined
console.log(Array.prototype.every)

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
console.log('forEach method section==================================================')


/////////////////////////////////////
// 7) forEach method

const array7 = ['a', 'b', 'c'];

array7.forEach(element => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

console.log(Array.prototype.forEach)
Array.prototype.forEach = undefined
console.log(Array.prototype.forEach)

Array.prototype.forEach = function(callback){
    newArr = [];
    for(let i = 0; i < this.length; i++){
        newArr += callback(this[i])
    }
    return newArr;
}

array7.forEach(element => console.log(element));


console.log('lastIndexOf method section==================================================')


/////////////////////////////////////
// 8) lastIndexOf method

const array8 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(array8.lastIndexOf('Dodo'));
// Expected output: 3

console.log(array8.lastIndexOf('Tiger'));
// Expected output: 1

console.log(array8.lastIndexOf('Dog'));
// Expected output: -1

console.log(Array.prototype.lastIndexOf)
Array.prototype.lastIndexOf = undefined
console.log(Array.prototype.lastIndexOf)

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
console.log('some method section==================================================')


/////////////////////////////////////
// 9) some method

const array9 = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;
const odd = (element) => element % 3 === 0 || 1;
const ten = (element) => element === 10;

console.log(array9.some(even));
// Expected output: true

console.log(array9.some(odd));
// Expected output: true

console.log(array9.some(ten));
// Expected output: false

console.log(Array.prototype.some)
Array.prototype.some = undefined
console.log(Array.prototype.some)

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
console.log('push method section==================================================')


// /////////////////////////////////////
// // 10) push method

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

console.log(Array.prototype.push)
Array.prototype.push = undefined
console.log(Array.prototype.push)


let array10 = ['pigs', 'goats', 'sheep']; //since this is a mutated array method(meaning that the original array has to be modified, not create a new array) I have to declare a new array with a different name but same values as the example

// Array.prototype.push = function(x){
//     let argArrIndex = 0
//     // const totalLength = this.length + x.length
//     console.log('this.length: ' + this.length)
//     console.log('x ' + x)
// }
// Array.prototype.push = function(x, arguments){ // findout about arguments keyword
//     this[this.length] = x;
//     return this
// }

Array.prototype.push = function() {
    for( let i = 0; i < arguments.length; i++ ){
        this[this.length] = arguments[i]; // 'argument' is a keyword used to take any amount of arguments if it is not known or specified
    } 
    return this;
};

console.log(array10.push('cows'))
console.log(array10.push('chickens', 'cats', 'dogs'))

// Source that helped: 
// https://stackoverflow.com/questions/572604/how-can-i-extend-array-prototype-push
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

console.log('pop method section==================================================')

/////////////////////////////////////
// 11) pop method

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
// 12) splice method

const array12 = ['Jan', 'March', 'April', 'June'];
array12.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(array12);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

array12.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(array12);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

console.log(Array.prototype.splice)
Array.prototype.splice = undefined
console.log(Array.prototype.splice)

Array.prototype.splice = function(start, deleteCount){
    for(let i = start; i < this.length; i++){
        if(deleteCount > 0){
            delete this[i] 
        }
        delete this[i]
    }
}

console.log(array12.splice(1, 0, 'Feb'));
console.log(array12.splice(4, 1, 'May'));