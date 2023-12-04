// 6. Write a program that prints all the male people’s first name given a complex object ?

// array of object:-

const arrObj = [
    {
    firstName: "Harsh",
    gender: "male"
    },
    {
    firstName: "radhika",
    gender: "female"
    },
    {
    firstName: "aman",
    gender: "male"
    },
    {
    firstName: "vanshi",
    gender: "female"
    },
]

for( let i=0; i<arrObj.length; i++ ){
    if( arrObj[i]["gender"] == 'male' ){
        console.log(arrObj[i].firstName)
    }
}