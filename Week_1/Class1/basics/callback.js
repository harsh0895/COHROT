// call backs:-

function square(n){
    return n * n;
}

function cube(n){
    return n * n * n;
}

function sumOfSomething(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);

    return val1 + val2;
}

console.log(sumOfSomething(2, 2, square));
console.log(sumOfSomething(2, 2, cube));

// passing to the function as a arguments anonymously:-
const ans = sumOfSomething(2, 2, function(n){
    return n*n;
})
console.log(ans);
