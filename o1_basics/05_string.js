const name = "sudipto"
const repoCount = 50

console.log(`Hey my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('bg-mi')
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringOne = "    sudip   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "httpnvjf://vsudiop.com/sudip%20das"
console.log(url.replace('%20' , '-'));

console.log(url.includes('sudip'));






