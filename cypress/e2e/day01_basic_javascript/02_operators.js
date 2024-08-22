//order of operators in js is same with java
console.log(5+5*(-2)-10/5);

//prefix & postfix same as java
let a=5;
console.log(++a);//6

a=9;
console.log(a++);//9
console.log(a);//10

//assignment operators same as java
a+=5; // a=a+5;
console.log(a); //15

//Comparison Operators:similar to java with some differnces
console.log(5>3); //true
let num=2;
let num_str = '2';
let number = 2;
let number_str ='2';
console.log(num==number);//true
console.log(num_str == number_str)//true
console.log(num==num_str)//true --> sign looks for value equality
console.log(num===num_str);//false --> === sign looks for both value and data tyoe equality
console.log(num===number);// true

//Logical Operators : same as java
console.log(true && true);//true
console.log(false || true);// true

console.log(5>4 || 5<3); //false
console.log(5>4 || 5<3); //true

//Conditional Statements: if,if else, switch , break , contiue same as java

let num1 = 10;
let num2 = 100;
if (num1>num2){
    console.log(num1 + " is gerater than " + num2);
}
else{
console.log( num1 + " is less than " + num2);

}

//switch oprator: same as a java

let month = 2;
let dayCount;


switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dayCount = 31;
        break;
    case 4: case 6: case 9: case 11:
        dayCount = 30;
        break;
    case 2:
        dayCount = 28;
        break;
    default:
        dayCount = -1;
        break;
}

console.log(dayCount);

