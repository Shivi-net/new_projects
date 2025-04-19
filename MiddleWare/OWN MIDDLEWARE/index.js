import express from "express";
import { request } from "http";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname (fileURLToPath ( import.meta.url))
const app = express();
const port = 3000;

function logger (req,res,next){
    console.log("request method: ", req.method)
    console.log("request URL: ", req.url)

  next();
}

app.use(logger)

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/public/index.html")
    // res.send("hello")
})

app.listen(port , () => {
    console.log(`Listening to port ${port}`)
})