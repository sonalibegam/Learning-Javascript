//let myName = "sonali   "
//let myTitle = "Begam   "

//console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
   thor: "hammer",
    spiderman: "juyt",

    getspidermanPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sonali = function(){
    console.log(`sonali is present in all objects`);
}

Array.prototype.heySonali = function(){
    console.log(`sonali says hello`);
}

//heroPower.sonali()
//myHeros.sonali()
//myHeros.heySonali()
//heroPower.heySonali()


// inheretance

const user = {
    name: "hello",
    email: "hello@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS asssignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__= user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "hello    "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.truelength()
"sonali".truelength()
"begam".truelength()