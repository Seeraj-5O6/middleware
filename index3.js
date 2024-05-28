import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
const app=express();
const port=3000;

//app.use(morgan("combined"));

function logger(req,res,next){

console.log(req.methods);
console.log(req.url);
next();

}

app.use(logger);


app.get("/",(req,res)=>{


    res.send("hello");


});


app.listen(3000,()=>{

console.log("hello some thing");

});
