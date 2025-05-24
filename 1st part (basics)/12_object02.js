//const instagramUser = new Object()            // this is singleton object
const instagramUser = {}                 // this is nonsingleton object


instagramUser.id = "son123"
instagramUser.name = "sonali"
instagramUser.isLoggedIn = false

//console.log(instagramUser);

const regularUser = {
    email:"sonali@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sonali",
            lastname:"begam",
        }
    }
}

//console.log(regularUser.fullname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

//const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1,obj2)  not remembering syntax

const obj3={...obj1,...obj2}

//console.log(obj3);

const users=[
    {
        id: 1,
        email:"sonali@gmail.com"
    },
    {
        id: 1,
        email:"sonali@gmail.com"
    },
    {
        id: 1,
        email:"sonali@gmail.com"
    },
]

users[1].email
//console.log(instagramUser);
//console.log(Object.keys(instagramUser));
//console.log(Object.values(instagramUser));
//console.log(Object.entries(instagramUser));

//console.log(instagramUser.hasOwnProperty('isLoggedIn'));


const course={
    coursename:"btech cse",
    price:"4 lakh",
    courseInstructor:"Icfai",
}

//course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

//{
  //  "name":"sonali",
   //" coursename":"btech cse",
   //"price":"free",


//}

[
    {},
    {},
    {},
]