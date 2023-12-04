console.log("hello world")
// variables:-

var a = 1;
a=2;
console.log(a)

let c = 1;
c=2;
console.log(a)

const b = 5;
console.log(b)

// let sum = 0;

// for( let i=0; i < 1000000000000; i++ ){
//     sum = sum + i;
// }

// console.log(sum);


// call back:-

function calculate( a, b, airthmrticFuntion ){
    const ans = airthmrticFuntion(a, b);
    return ans;
}

function sum( a, b){
    return a + b;
}  

const value = calculate(1, 2, sum);
console.log(value)
