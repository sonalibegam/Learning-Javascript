const user = {
    username :"sonali",
    price : 107,

    welcomemessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

//user.welcomemessage()
//user.username = "begam"
//user.welcomemessage()

//console.log(this);

//function hello(){
  //  let username = "sonali"
    //   console.log(this.username);
//}

//hello()

//const hello = function (){
  //  let username = "sonali"
    //  console.log(this.username);
//}

//const hello =  () => {
  //  let username = "sonali"
    //  console.log(this);
//}

//hello()

//const addTwo = (num1, num2) => {
  //  return num1 + num2
//}

//**************OR**********************

//const addTwo = (num1, num2) =>   (num1 + num2)
const addTwo = (num1, num2) =>  ({username:"sonali"}) 

console.log(addTwo(3,4));
