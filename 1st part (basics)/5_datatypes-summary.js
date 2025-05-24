// Primitive

// 7 types: string,number,Boolean,null,undefined,symbol.BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===anotherId);

const bigNumber = 345678546545677n


// Reference (Non Primitive)

// Array , Objects , Functions

const heros = ["ramm","sham","tamm"];

let myObj = {
    name: "sonali",
    age:18,
}

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof bigNumber );



//++++++++++++++++++++++++++++++++++++++++++MEMORY+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack(Primitive) , Heap(Non Primitive)

let myRealname = "sonali"

let anothername = myRealname
anothername = "taslima"

console.log(myRealname);
console.log(anothername);

let userOne = {
    email: "sonali@gmail.com",
    upi:"begam@ybl"
}

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// in stack we will get the memory as a copy
// in heap we will get the memory as a reference




