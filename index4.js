import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import  bodyParser from "body-parser";

const app=express();
const port=3000;
var brandName="";
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{


    res.sendFile(__dirname + "/public/index.html");


});



function BrandNamGenertor(req,res,next){

  console.log(req.methods);
  brandName=req.body["email"]+req.body["password"];
  next();
  
  }
  
app.use(BrandNamGenertor);

app.post("/submit",(req,res)=>{


  res.send(`<h1>BrandName is</h1>:<h2> ${brandName}$ </h2>`)
})

app.post("/submit",(req,res)=>{


  console.log(req.body);
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
