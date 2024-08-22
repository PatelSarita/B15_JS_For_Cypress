//No access modifier - No method overloading or overriding

function add(a,b){// a and b are parameters of the function
    console.log('result= ' + (a+b));
}

console.log("--calling a function---");
add(5,6);

console.log("\n -- return type function---");

function multiply(a,b){
    return(a*b)
};
console.log(multiply(7,8));

console.log("\n --No overloading inJS--");
add(10,30,50); //ignore the argument after second arg

/** 
    * They call functions as "First Class Citizens of JavaScript"
    * JavaScript is a function oriented language
    * What we can do with functions;
        1. We can pass a function as an argument to other functions
        2. We can return a function from a function
        3. We can store a function into a variable
    * 
*/

console.log("\n ***function is another datatype in js ***");

//We can store a function into a variable
let devide=function (a,b){
   return a/b;
};

console.log(devide(36,6));

let someFunction = devide;
console.log("someFunction = " + someFunction(25,5));

console.log(" \n***pass a function as an argument to other function***");
function sum(a,b) {
    return a+b;
};

function avarage(a,b,fn) {
    return fn(a,b)/2;
};

let avarageResult = avarage(30,50,sum)
    console.log(avarageResult);

     avarageResult = avarage(40,5,multiply)
    console.log(avarageResult);

     avarageResult = avarage(40,5,devide)
    console.log(avarageResult);


