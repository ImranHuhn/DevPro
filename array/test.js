/////////////////////////////////////
// 12) splice method

// const months = ['Jan', 'March', 'April', 'June', 'May'];
// console.log(months);

// months.splice(2, 1, 'December');
// // // Replaces 1 element at index 2
// console.log(months);

// months.splice(2, 6, 'December');
// console.log(months);

// months.splice(2, 0, 'zero');
// console.log(months);

Array.prototype.splice = undefined;
Array.prototype.splice = function(start, del, ...args) {
    console.log(args.length)
    for(let i = start; i <= start + del; i++){
        if(del > 0){
            this[start] = args[0]
            this.copyWithin()
        } else {   // if del <= 0         
            this.length++ //modify array's space
            this.copyWithin(start + 1, start) // move values to the right
            this[start] = args //replaces value     
        }
    }
}

const testArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']


console.log(testArr)

testArr.splice(2,2,'x','y','z')

console.log(testArr)

//if del = 0 then extend length and add item

// if del > 0 then delete del amount add argument

/*
Cristian Florea
you need to do the work between a start, and the end. the end is represented by the start + an amount in the future. so if you have 2, 1. then you start at index 2.and end at inxed 2 +1
*/

// Source:
// https://stackoverflow.com/questions/69681145/how-to-add-a-value-to-an-array-without-the-splice-method-and-overwriting-the-ele?rq=1

// const months = ['Jan', 'March', 'April', 'June', 'May'];
// console.log('after===================')

// console.log(months);
// months.splice(1, 0, 'Febzero');
// // Inserts at index 1
// console.log(0, months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'xx');
// console.log(months);

// months.splice(2, 1, 'December');
// console.log(months);

// months.splice(2, 2, 'December');
// console.log(months);

/* 
The following methods mutate the original array:

copyWithin()
fill()
pop()
push()
reverse()
shift()
sort()
splice()
unshift()
*/