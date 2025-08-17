//stack (primitive)   , heap (non-primitive) 
let myChanel = "luxy"
let anotherName = myChanel
anotherName = "zoro"


console.log(myChanel);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "gukis1234",
}
let userTwo = userOne

userTwo.email = "sudip@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

