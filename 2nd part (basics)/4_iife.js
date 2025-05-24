//Immediately Invoked Function Expression (IIFE)


// Named iife
(function hello(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('sonali')







//*****************************************JAVASCRIPT EXECUTION CONTEXT***************************************************** */

 //   1. Global EC    as example - this
 //   2. Function EC
 //   3. Eval EC

 // Memory creation phase : memory allocation for variables.
 //Execution phase : mathematical expresions like +,- 

 let val1 = 10
 let val2 = 5
 function addnum(num1 , num2){
    let total = num1 + num2
    return total
 }
 let result1 = addnum(val1, val2)
 let result2 = addnum(10,2) 


//EXECUTION STEPS:

// 1. Global Execution : this
// 2.Memory phase : different variables in the above code
    // val1 -> undefined
    // val2 -> undefined
    // addnum -> defination
    // result1 -> undefined
    //result2 -> undefined

// 3. Execution phase: mathematical expression in the code
    // val1 = 10
    // val2 = 5
    // addnum = [new variable environment + execution thread]
         // memory phase                  //execution phase
            // val1->undefined                // num1->10
            // val2->undefined                //num2-> 5
            // total->undefined               //total->15
    //result1 = 15
    //result2 = 

// total wil go to the global execution , this way it again repeats and the execution in javascript done.
