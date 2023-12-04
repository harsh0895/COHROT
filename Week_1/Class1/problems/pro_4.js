// 4. Write a program prints all the even and odd numbers in an array ?

let num = [ 1,2,3,4,5,6,7,8 ];

// print even:-
console.log("all even numbers are: ")
for( let i=0; i<num.length; i++ ){
    if( num[i] % 2==0 ){
        console.log(num[i])
    }
}

// print odd
console.log("all odd numbers are: ")
for( let i=0; i<num.length; i++ ){
    if( num[i] % 2!=0 ){
        console.log(num[i])
    }
}