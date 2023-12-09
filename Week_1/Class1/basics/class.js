// legcount, speak, name:-

let objofAnimal = {
    name: "dog",
    legs: 4,
    speaks: "bhow bhow",
}

// You can create a class for storing the information about the animal by making parametric constructor in class
// instead of making multiple objects of animals.......

class Animal{
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("Animal");
    }
    print() {
       console.log("Name: "+this.name+" legs: "+this.legCount+" "+"speaks: "+this.speaks); 
    }
}

let dog = new Animal("dog", 4, "bhow bhow"); // create object dog
let cat = new Animal("cat", 4, "meow meow"); // create object cat

dog.print();
cat.print();

Animal.myType(); // if you want to call to the funtion by the name of class you can create static method in our class!

