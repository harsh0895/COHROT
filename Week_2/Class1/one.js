// map, filter, arrow functions:-

// arrow function

const sum = (a, b)=>{
    return a+b;
}

console.log(sum(5,3));

// map funtion():-

const input = [ 1,2,3,4,5 ];
const ans = input.map(function(value){
    return value*2;
})
console.log(ans)

//filter function():-

const arr = [ 1,2,3,4,5 ];
const ans1 = arr.filter(function(value){
    return value%2==0;
})
console.log(ans1) 