import express from "express";
import morgan from "morgan";

const app=express();
const port=3000;
app.use(morgan("combined"));

app.get("/",(req,res)=>{


    res.send("hello");


});


app.listen(3000,()=>{

console.log("hello some thing");

});
