let wada =  new Promise(function(resolve , reject){
     if(true){
         resolve("Kaam hogaya");
     }
     else{
         reject("Kaam nahi hogaya");
     }
});

wada.then(function(result){
    console.log("yah !",result);
}).catch(function(result){
    console.log("toh nahi!",result);
})


console.log("Wada promise is working");


let chocolatelaya = new Promise((resolve , reject)=>{
    let time = 2;

    if(time<3){
        resolve("Chocolate aa gaya");
    }
    else{
        reject("Chocolate nahi aa gaya");
    }
});

chocolatelaya.then((result)=>{
    console.log("yah! chocolate",result);
}).catch((error)=>{
    console.log("toh nahi! chocolate",error);
})

console.log("Chocolatelaya promise is working");




