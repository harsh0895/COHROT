/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve();
        }, t * 1000);
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve();
        }, t * 1000);
    })
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve();
        }, t * 1000);
    })
}

function calculateTime(t1, t2, t3) {
    
    const startTime = new Date().getTime();

    const one = wait1(t1);
    const two = wait2(t2);
    const three = wait3(t3)

    return Promise.all([one, two, three])
    .then(() => {

        const endTime = new Date().getTime(); // Record the end time
        const difference = endTime - startTime;

        return difference; // Return the total time taken

    })
    .catch((error) => {
        throw error;
    })
      
}

module.exports = calculateTime;
