// primitive 

// 7 type : string , mumber , boolean , null , undefine , BigInt 

// Reference (NoN primitive)



const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);


// array , objects , Function

const heros = ["shaktiman" , "ironman" , "naagraj"]

let myObj = {
    name: "sudip",
    age:22,
}

const myFunction = function()
{
    console.log("hello world");
    
}