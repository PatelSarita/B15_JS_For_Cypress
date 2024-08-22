//Loops are same with java: for, while ,do/while

for(let i = 0;i<5;i++){
    console.log(i)
}
//let is block scope variable
//console.log(i)

for(var j = 0;j<5;j++){
    console.log("* " + j + " *");
}
//var --> old type of declaring variables before ESG
//var is global and function scope variable (IQ)
console.log("* This number comes from outside the loop=> " + j + " *");

//While Loop
let i= 0;
while(i<5){
    console.log('while loop: ' + i);
    i++;
}

//do while loop
let n= 0;
do {
    console.log('Do While loop:' + n)
    n++;
}while(n<5);