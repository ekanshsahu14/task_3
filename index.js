const express = require("express");
const PC = express();

PC.get("/number", (req,res)=>{
    res.send(`Go to /number/:num to check if it is prime or composite`);
});

PC.get("/number/:num",(req, res)=> {
    let num = req.params.num;
    let count=0;
    let type
if (num > 1){
    for(let i = 2; i < num; i++){
        if(num%i==0){
            count+=1;
            console.log('wow')
        }}
        if (count !=0){
            type = "composite";
        }
    
        if (num == 1 || num<0){
            type = "neither prime nor composite";
        }
        else{
    type = "prime";
        }

    res.send(`The number ${num} is ${type}.`);}
})




PC.listen(3000,()=> console.log("Server has started!"))