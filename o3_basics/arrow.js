const user = {
    userName: "hitesh",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.userName} , welcome to the web page`);
        
    }
}

user.welcomemessage()
user.userName = "sudip"
user.welcomemessage()

const addtwo = (num1 ,  num2) => {
    return num1+num2
}
console.log(addtwo(5,7));




