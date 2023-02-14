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

/////////////////////////////////////////////
// Pick 10 favorite methods, and recreate with prototype method

// Array.prototype.map()
// Array.prototype.reduce()
// Array.prototype.indexOf()
// Array.prototype.filter()
// Array.prototype.concat()
// Array.prototype.every()
// Array.prototype.forEach()
// Array.prototype.lastIndexOf()
// Array.prototype.some()
// Array.prototype.push()
// Array.prototype.pop()
// Array.prototype.splice()

const array1 = [1,2,3,4]

Array.prototype.map() = undefined;
console.log(array1.map(x => x * 2));


