/////////////////////////////////
// how to create array methods

const data1 = [1,2,3,4];

Array.prototype.poop = function(){
    console.log('poopy');
}

const friends = ['James', 'Annie', 'Daniel'];

friends.poop()
data1.poop()

///////////////////////////////////
// recreating reverse method

const data2 = [1,2,3,4];

Array.prototype.reverse = undefined; 
console.log('reverse method is now: ' + Array.prototype.reverse); // this is to demonstrate that the reverse method have been overwritten

//this will demonstrate that the reverse method is overwritten with new code and will immitate reverse arrays differrent from the original codebase
Array.prototype.reverse = function(){
    const data2 = [];
    for(let i = this.length - 1; i >= 0; i--){
        // console.log(this[i]);
        data2.push(this[i]);
    }
    // console.log('here', data);
    return data2;
}

console.log(data2.reverse());

/////////////////////////////////////
//reproducing the find method

const data3 = [1,2,3,4];

Array.prototype.find = function(callback){ // callback is the paramater used from line 72 in concole.log. parameter is just and empty variable that gets declared when calling a function which then is called an argument 
    let found = null;

    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){ 
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


///////////////////////////////////
// 1) map method
const array1 = [1,2,3,4]

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
Array.prototype.map = function(callback){ //created map method
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        // newArray += callback(this[i]); //this is for concatinating characters
        newArray.push(callback(this[i]));
    }
    return newArray;
}

console.log('first test for NEW map method')
console.log(array1.map(x => x)) // first test for new method

console.log('second test for NEW map method')
console.log(array1.map(x => x * 2)) //second test for new method

console.log('==================================================')
/////////////////////////////////////
// 2) reduce method

const array2 = [1,2,3,4]

console.log('test if reduce method exist:')
console.log(Array.prototype.reduce) //test if method exist

console.log('first test if reduce method works:')
console.log(array2.reduce(x => x)) //test to check array

console.log('second test if reduce method works:')
console.log(array2.reduce(x => x * 2)) //test to multiply array by 2

Array.prototype.reduce = undefined; //remove method from prototype

console.log('test if reduce method is removed:')
console.log(Array.prototype.reduce) //check if prototype indeed doesn't exist


Array.prototype.reduce = function(callbackFn, initialValue){
    let accumulator = 0;
    for(let i = 0; i < this.length; i++){
        // accumulator = callbackFn(this[i]);
        // console.log(typeof(this[i]))
        // console.log(this[i])

        //if initialValue is specified
        if(initialValue != undefined){
            accumulator += initialValue;

        //if initialValue is not specified
        } else if(initialValue == undefined) {
            accumulator = this[0];
        } else {
            console.log('error')
        }
    }
    return accumulator;
}

console.log(array2.reduce(x => x,9))
console.log(array2.reduce(x => x * 2))

// callbackFn
// A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce().

// accumulator
// The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].