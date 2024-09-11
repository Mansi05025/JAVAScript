// // ********* Dates *********  
//  JavaScript Date objects represent a single
// moment in time in a platform-independent format. 
// Date objects encapsulate an integral number that 
// represents milliseconds since the midnight at the 
// beginning of January 1, 1970, UTC (the epoch).




// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);                // object

// moths will start in  JavaScript  in 0 


// let myCreatedDate = new Date(2023, 0 , 23)
// console.log(myCreatedDate.toDateString());


//let myCreatedDate = new Date(2023, 0 , 23, 5, 3)
//let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.get);


// '${newDate.getDay()} and the time'


newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})







