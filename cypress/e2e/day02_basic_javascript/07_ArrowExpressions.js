/*
Arrow Function Expressions in JavaScript
Arrow function expressions provide a concise way to write functions in JavaScript. 
They were introduced with ES6 (ECMAScript 2015) and offer a more streamlined syntax 
compared to traditional function expressions.

Definition:
Arrow function expressions allow you to create anonymous functions with a shorter syntax, 
making your code more readable and expressive.

*/
//Basic Arrow function

const add = (a,b)=>{
    return a+b;
}
console.log(add(5,3));

//single line arrow function
const multiply=(a,b)=> a*b;

console.log(multiply(4,6));

//no parameters 
const great=()=>{
    console.log("Hello");
    
}
great();

//single parameter
const square = x => x*x;
console.log(square(7));

//Returning object

const createPerson=(name,age)=>({
    name:name,
    age:age
})

console.log(createPerson('Alice',30));

//Arrow Function with array methods
const numbers=[1,2,3,4,5];
const squaredNumbers=numbers.map(num=>num*num)
console.log(squaredNumbers);

//using map with arrow function to double each number in the array
let doubleNumbers= numbers.map(num=>2*num);
console.log(doubleNumbers);

//A function to concatenate string with variable arguments
function concatenate(...string){
    return string.join('')
};
console.log(concatenate("Hello"," ","World"));

//using the spread operator to concatenate two arrays
let arr1=[1,2,3];
let arr2=[4,5,6];
let mergeArray=[...arr1,...arr2]
console.log(mergeArray);//[1,2,3,4,5,6]

//An arrow function to find the maximum value in array

let findMax=arr=>Math.max(...arr);
console.log(findMax([10,5,24,8]));

//example 
const sum=(...numbers)=>{
  let total=0;
  for(let number of numbers){
    total+=number;
  }
  return total;
};
console.log(sum(1,21,2,5,9,32));//70

//example
let mid=[3,4];
let arr12=[1,2];
let arr23=[...arr12,...mid,5,6]

console.log(arr23);

//example
let str= "Hello";
let charArray=[...str];
console.log(charArray);







