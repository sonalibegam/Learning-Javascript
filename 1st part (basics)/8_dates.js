//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toString());

console.log(typeof myDate);

//let myCreatedDate = new Date(2005, 5, 16)
//let myCreatedDate = new Date(2005, 5, 16, 5,3)
//let myCreatedDate = new Date("2005-06-16")
let myCreatedDate = new Date("06-16-2005")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    
})






