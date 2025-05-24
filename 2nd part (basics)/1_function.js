
function sayMyName(){
console.log("S");
console.log("o");
console.log("n");
console.log("a");
console.log("l");
console.log("i");
}

sayMyName()
function addTwoNumbers(number1,number2){
   console.log(number1+number2);
}

function addTwoNumbers(number1,number2){
    //let result = number1+number2
    //return result
    return number1+number2
}

//addTwoNumbers(3,4)    // here the number in the parenthesis are arguments

const result = addTwoNumbers(3,5)

//console.log("Result:",result);

function loginUserMessage(username = "sam"){

    if(!username){                 // username===undefined OR !username
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}


//console.log(loginUserMessage("sonali"));
//console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){
    return num1
}

//console.log(calculateCartPrice(200 , 500 , 600 , 7000));

const user = {
    username:"sonali",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username:"taslima",
    price:599
})

const myNewArray = [200 , 300 , 400 , 500]

function returnSecondValue(getArray){
    return getArray[0]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 300 , 400 , 500]));



