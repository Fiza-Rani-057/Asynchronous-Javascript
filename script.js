//  Synchronous

 console.log(`First`);
 console.log(`Secoond`);
 console.log(`Third`);


//  Asynchronous 

 console.log(1);
 console.log(3)

 setTimeout(()=>{
    console.log(2);
 },2000);


 console.log("Hello");
 setTimeout(()=>{
    console.log("everyone");
 }, 4000);