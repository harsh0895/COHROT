// 7.  Write a program that reverses all the elements of an array ?

let arr = [ 2,3,4,5,6,7,8 ];

let start = 0;
let end = arr.length-1;

console.log("Before reversing an array: ")
for (let i of arr) {
    console.log(i)
}

while( start<end ){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}

console.log("after reversing an array: ")
for (let i of arr) {
    console.log(i)
}