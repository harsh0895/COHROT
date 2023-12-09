
function calculateSum() {
    let a = 0;
    for( let i=0; i<100000; i++ ){
        a = a + i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeMs = beforeDate.getTime();
// console.log(beforeDate)]
console.log(calculateSum());

const afterDate = new Date();
const afterTimeMs = afterDate.getTime();

console.log(afterTimeMs - beforeTimeMs);
