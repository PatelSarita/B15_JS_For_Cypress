//simple object

let person={
    name:"Jhon",
    age:30
};

//nested object
let car= {
    make:"Toyota",
    model:"Corolla",
    year:"2020",
    owner:{
        name:"Alice",
        age:25,
    }
};

//Object containing an array
let laptop={
    brand:"Apple",
    model:"MacBook Pro",
    specs:["Intel Core i7","16 GB RAM","512GB SSD"]
};

//Object containg function
let calculator = {
    add:function (x,y){
    return x+y;
},
subtract:function(x,y){
    return x-y;
}

}

//Complex Object
let university ={
    name:"Harvard University",
    location:"Cambridge,Massachusetts",
    established:1636,
    department:["Computer Science","Psycology","History"],
    ranking:{
        world:1,
        national:1
    },
    getInfo:function(){
        return this.name + " is located in " + this.location +". It was established in " + this.established
    }
};

//Accessing and using object properties

console.log(person.name); //Jhon
console.log(car.owner.name); //Alice
console.log(laptop.specs[0]);//Intel Core i7
console.log(calculator.add(5,8));//13
console.log(university.getInfo());

//Deleting a property from an object
delete person.age; //Delete the "age" property from the person object


//checking if a property exist in an object
console.log("age" in person);
console.log("name" in person);

//Looping through the keys of the object
for (let key in car) {
    console.log(key + ": " + car[key]);//iterates through the properties and values of the car object using a loop
    console.log(car.owner.name);
    
}




