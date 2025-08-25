function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("I");
    console.log("p");
}

// sayMyName()

function addTwonumber(number1 , number2 ){
    let result = number1 + number2
    return result
}

const result = addTwonumber(3 , 5)
// console.log("result: " , result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a user name");
        return
        
    }
    return `${username} just logged in`

}
console.log(loginUserMessage());

