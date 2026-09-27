// //  Synchronous

// console.log(`First`);
// console.log(`Secoond`);
// console.log(`Third`);


// //  Asynchronous 

// console.log(1);
// console.log(3)

// setTimeout(() => {
//     console.log(2);
// }, 2000);


// console.log("Hello");
// setTimeout(() => {
//     console.log("everyone");
// }, 4000);

// //  Event Loop 

// // Event Loop aik aisa loop (mechanism) hai jo continuous chalta rehta hai 
// // aur check karta hai ke agar Call Stack (main engine) khali hai, toh woh 
// // Callback Queue se waiting tasks ko utha kar run kar deta hai,
// //  taake heavy tasks ke doran program freeze na ho
// console.log(3);
// setTimeout(() => {
//     console.log(2)
// }, 0);


// function callMe(a, b) {
//     console.log(a + b);
// }

// function caller(sum) {
//     sum(2, 3);
// }
// caller(callMe);


// let caller2 = () => {
//     console.log("This is my last code");
// }
// setTimeout(caller2, 4000);


//  callBack hell 

//  asi situation jb code itna nested hojay k smjna mushhkil ho 
// asi situation ko pyramid of Dome b kety hen 

//  ================== Promise ===================
//   Syntax 
let variablename = new Promise((resolve, reject) => {
    //  code 
});


//  States of promise
//  1.Pending
// 2.fulfilled
// 3.rejected


//  resolve , reject

//  Javascript k callback function hen

// resolve
// tb chlya ga jb operation successful hoga

// reject
// tb chly ga jb operation reject hoga 


let students = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Successful");
    }

    else{
        reject("Not Succeed");
    }
});

students.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('done');
});

//  ==================== Promise result ====================

//  then: jb promise fulfilled hoga
// catch: jb promise reject hoga 
// finally: successful ho ya na hu finally chly ga 