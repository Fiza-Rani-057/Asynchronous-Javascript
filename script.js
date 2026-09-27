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
    let success = false;
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


// Promise Chaining 

// Promise chaining aik aisi technique hai jahan hum aik ke baad aik 
// asynchronous tasks ko ek  sequence (line) mein chalate hain.

let promise = new Promise(function(resolve, reject) {

    let age = 20;

    if (age >= 18) {
        resolve("Success");
    } else {
        reject("Failed");
    }

});


    promise.then(function(message) {
        console.log(message); // Step 1
        return "Step 1 complete";
    })
    .then(function(message) {
        console.log(message); // Step 2
        return "Step 2 complete";
    })
    .then(function(message) {
        console.log(message); // Step 3
    })
    .catch(function(error) {
        console.log(error);
    });

    //====================== asyn ================
    // kic function k start me async ajay tu wo asynchronous bnjata ha 
    // async se start hony wala function hmesah ak promise return krta ha 
    // async se start hony waly function me agr koi b value return karen ga 
    // tu JS us value ko promise k andar wrap kr dega
    
    async function student() {
        return "hello";
    }
    let result  = student();
    console.log(result);

  async function calc(a , b){
    return  a + b;
  }

   let result2 = calc(2 , 3);
   console.log(result2);
    // ====================== await ==================

    // await ka use promise k result ka wait krny k lye kia jata ha 
    // function k excecution ko us point pr pause krta ha jb tk function
    //  execute nhi hojata ha 
    // bager async k kam nhi krta ha 

    async function helloFun(){
   await new Promise(resolve =>{
      setTimeout(resolve , 5000)
    })
    return "hello";

    }

    async function test(){
        let result = await helloFun();
           console.log(result);
    }
  
     test();

    async function message(){
        await new Promise(resolve =>{
          setTimeout(resolve , 8000)
        })
        return "Hello world"
    }

    async function messageResult(){
        let result3 = await message();
        alert(result3);
    }
    messageResult();