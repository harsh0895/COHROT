// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let count = 30;

setInterval(function(){
    if( count>0){
        count--;
        console.log(count);
    }
    else{
        clearInterval();
    }
}, 1000)