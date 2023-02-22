const numbers = [1,2,3,4,5,6,7,8];
const names = ['john smith', 'james bond', 'lara croft', 'tony stark', 'peter parker'];

// given the numbers array, use .map to return a new array
// that has all the items squared
// expected output: [1,4,9,16...]
const squareNumbers = numbers.map(function(num){
    let newArray = [];
    newArray += num * num;
    return newArray;
}); // fix this
console.log(squareNumbers);

// given the names array, use .map to return a new array
// that has the first letter of each word from with the string uppercased
// expected output: ['John Smith', 'James Bond'...]
const uppercasedNames = names.map(function(fullName){
    let newArray = [];
    const splitString = fullName.split(' ');
    const fName = splitString[0].charAt(0).toUpperCase() + splitString[0].slice(1);
    const lName = splitString[1].charAt(0).toUpperCase() + splitString[1].slice(1);
    // console.log(splitString[0].charAt(0).toUpperCase() + splitString[0].slice(1));
    // console.log(splitString[1].charAt(0).toUpperCase() + splitString[1].slice(1));
    newArray += fName + ' ' + lName;
    return newArray;
}); // fix this
console.log(uppercasedNames);

// given the numbers array, use .map to return a new array
// return a new array that hass all the even numbers doubled
// expected output: [1,4,3,8,5,12 ...]
const doubleEvens = numbers.map(function(num){
    let newArray = [];
    (num % 2 === 0 ? newArray += num + num : newArray += num);
    return newArray;
}); // fix this
console.log(doubleEvens);

// given the names array, use .map to return a new array
// that contains objects with a key value that contains 
// the current string and a length value that contains the length of the current string
// expected output: [{value: 'john smith', length: 10} ...]
const namesToObject = names.map(function(fullName){
    let newArray = [], obj = {};
    obj.value = fullName;
    obj.length = fullName.length;
    newArray = obj;
    return newArray;
}); // fix this
console.log(namesToObject);

// given the names array, use map to return an object that contains a letter key 
// that contains all the letters inside an array
//expected output: [{value: 'john smith', letters: ['j', 'o', 'h', 'n', 's', 'm', 'i', 't', 'h']}]

const namesToObjectAndLetters = names.map(function(fullName){
    let object = {};
    
}); // fix this
console.log(namesToObjectAndLetters)
