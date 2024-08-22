/**  JS is like browser machine language
 *   node js .s kinda server that allowes us to run code in computer
 * */
console.log('Hello B15');

``/** Variables naming rules in JS
 *  * Primitive Data Types
 *    number : 1 , 120.5
 *    String : 'apple'
 *    Boolean: true , false
 *    Undefined : variable does not have value yet
 *    Null : 
 * 
 *  * Non-Primitive Data Types
 *    Object
 *    Array
 *    Function
 */

/** JS is a dynamic typing language
 *  There is no need for data types such as int, double, String
 *  You can define the variable with "let"
 */
/** There are 3 different types of variable
 *  var  : variable abbreviation
 *         global scope variable
 *         you can change value later 
 *         u can define again same variable
 *         ES5 (EcmaScript 5) 
 *  let  : let is equal to
 *         it is block scope variable
 *         u can change value later
 *         can NOT define again same variable
 *  const: constant variable
 *         (like number PI)
 */

// single comment line
/**
 * multiple comment line
 */
/*
   multiple comment line
*/

let a ;
console.log(typeof a)

a=6;
console.log(typeof a)

//u can change value later
a= 'JavaScript' //String
console.log(typeof a)

a=true; //boolean
console.log(typeof a)

//for let => can Not defien again same variable
//let a=1;

let b=8,c="Cypress";
console.log(b+c)
console.log(b*c)
//to dublicate ==> shift+alt+down arrow
console.log(b*c)

console.log("***********Stirng***************")
let str1='I am learning'
a='javascript';
let result;

result=str1+ " " + a + " "+ 'and' + " " +c;
console.log(result)

console.log("*** differences from java:Backtick for variable insertion ***")
result=`Thsi result variables is + ${str1} ${a} and ${c}` //back tab ```` from ^ sign on my keyboard
console.log(result)

//var

var name='Mike';
var age = 35;
var name_object ={firstName:"Jack",lastName:""};
var truth= true;
var skills =["HTML","JS","CSS"];
var anem= "Kate";// u can defien again same variable

//object

var student={
    firstName :'Dave',
    lastName :"Masters",
    age : 25,
    height :180,
    fullName:function(){
        return this.firstName + " " + this,this.lastName;
    }
}

//const
const ageValue= student.age;
console.log(ageValue)
console.log(student.fullName());

