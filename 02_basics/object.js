const tinderUser = {}

tinderUser.ID = "23434bfd"
tinderUser.Name = "sudip"
tinderUser.isLogin = false

// console.log(tinderUser);

const regularUser = {
    email : "sudiorrp@nnv" , 
    fullname : {
        firstName : "Sudip" , 
        lastName : "Das"

    }
}

// console.log(regularUser.fullname.firstName);

const obj1 ={1: "a" , 2 : "b"}
const obj2 ={3: "c" , 4 : "d"}

// const obj3 = Object.assign({} , obj1 , obj2)
//  console.log(obj3);

const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));


// console.log(tinderUser.hasOwnProperty('id'));


const course = {
    courseName: "js hinde ",
    coursePrice : "999",
    courseInstractor : "sudip"
}

const {courseInstractor : ins} = course 
console.log(ins);






 