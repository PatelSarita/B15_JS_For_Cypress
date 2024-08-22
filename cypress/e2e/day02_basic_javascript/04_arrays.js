/**
 * There is no Collection in JS. In JS we have only Arrays and Map
 * Array in JS is NOT fixed size.
 * There are two important Brackets in JS
        1st= [] --> creates an Array
        2nd= {} --> creates an Object
 */

        let score=new Array();  // empty
        let numbers=new Array(10); // array with initial size is 10
        let num=new Array(1,2,5,15);//array with initial elements
        
        let arr=Array(3);// array with initial size is 3
        let color=Array("red");//array with one element
        
        let emptyArray=[]; //empty
        let color1=["green","black","yellow"];
        
        console.log(score);
        console.log(numbers);
        console.log(num);
        console.log(arr);
        console.log(color);
        console.log(emptyArray);
        console.log(color1);
        
        console.log("\n\n");
        console.log("***********array examples************\n");
        
        let tools=['Jest','Selenium','cypress','testCafe','phantomJS',' protractor'];
        //accessing array elements
        console.log(tools);
        console.log(tools.toString());
        console.log(tools[2]);
        
        const string=tools.toString();
        console.log(string);
        
        console.log("\n\n");
        
        const join=tools.join(' * '); // add * between elements
        console.log(join);
        
        const pop=tools.pop(); // remove an element from end of an array
        console.log(pop);
        console.log(tools);
        
        const push=tools.push('SlimerJS'); // add an element to the end of an array
        console.log(push);
        console.log(tools);
        
        const shift=tools.shift(); //remove an element from the beginning of an array
        console.log(shift);
        console.log(tools); 
        
        const unshift=tools.unshift('Selenoid'); //add an element to the beginning of an array
        console.log(unshift);
        console.log(tools);
        
        // sort an reverse
        const sort=tools.sort();
        console.log(tools);
        
        const reverse=tools.reverse();
        console.log(tools);
        
        
        console.log("\n-----------size of array----------");
        console.log(tools.length);
        
        console.log("\n-----------for loop----------");
        for (let index = 0; index < tools.length; index++) {
            const element = tools[index];
            console.log('for loop=> '+ element);  
        }
        
        console.log("\n-----------forof loop----------");
        //forof loop=> loop with values of array
        for (const value of tools) {
            console.log('forof loop=> '+ value);   
        }
        
        console.log("\n-----------foreach loop----------");
        tools.forEach(element => {
            console.log('foreach loop=> '+ element);
            
        });
        
        
        console.log("\n-----------adding multiple type of data----------");
        
        let multipleData=[5,'Batch 15',true,undefined];
        
        multipleData.forEach(element => {
            console.log(element + '--> ' + typeof element);
            
        });
        
        console.log("\n-----------cypress is trending now----------");
        
        tools.forEach((value) => {
            if (value=='cypress') {
                console.log(value+ ' is trending now');
                
            }else{
                console.log('Element is NOT found');
            }
        });