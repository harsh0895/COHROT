// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
// (Hint: setTimeout)

function counter(n){
    // base case:-
    if( n==0 ){
        console.log(n);
        return;
    }
    setTimeout(function(){
        console.log(n);
        counter(n-1);
    }, 1000);
}
counter(10);
































































