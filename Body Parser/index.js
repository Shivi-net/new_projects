import express from "express";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath (import.meta.url))

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/public/index.html");
    res.send("hello world");
})

// app.post("/submit" , (req,res) => {
//      console.log(req.body)
// })

app.listen( port , () => {
    console.log(`Listening to Port ${port}`)
})