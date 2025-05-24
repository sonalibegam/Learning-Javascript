const name = "Sonali"
const repoCount = 107

//console.log(name + repoCount + " Value"); // this syntax is outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Sonalibegam')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('l'));


const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-8,6)
console.log(anotherString);

const newStringOne = "   Sonali    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sonali.com/sonali%20begam"


console.log(url.replace('%20', '-'));

console.log(url.includes('taslima'));
console.log(url.includes('sonali'));

console.log(gameName.split('-'));

