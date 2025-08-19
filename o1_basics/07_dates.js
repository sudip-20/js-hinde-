let myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreateDate = new Date(2025 , 0 ,23)
console.log(myCreateDate.toDateString());

let myTimestamp = Date.now()
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));



