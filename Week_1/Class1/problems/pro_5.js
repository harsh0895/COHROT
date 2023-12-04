// 5. Write a program to print the biggest number in an array ?

let arr = [ 2,4,8,5,6 ];
let biggestNumber = 0;

for( let i=0; i<arr.length; i++ ){
    if( biggestNumber<arr[i] ){
        biggestNumber = arr[i];
    }
}
console.log("bieggest number is: "+biggestNumber);