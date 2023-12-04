// 2. Write a program that greets a person based on their gender. (If else)

const names = ["Harsh", "sahil", "Bharat", "radha"];
const genders = ["male","male","male","female"];

for( let i=0; i<names.length; i++ ){
    if( genders[i]=='male'){
        console.log("hello "+names[i]);
    }
    else if( genders[i]=='female'){
        console.log("hello "+names[i]);
    }
}
