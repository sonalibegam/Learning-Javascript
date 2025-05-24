// odjects can be declared by two method 1.literal 2.constructor
//singleton- It only made by constructor
//object.create


//object.literal

const mySym = Symbol("key1")



const JsUser = {
    name:"sonali",
    "full names" : "Sonali Begam",
    [mySym]: 'mykey1',
    age: 18,
    location: "Gakulpur",
    email:"sonali@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "saturday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full names"]);
//console.log(JsUser[mySym]);
//console.log(typeof JsUser[mySym]);



JsUser.email = "sonali@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "sonali@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

