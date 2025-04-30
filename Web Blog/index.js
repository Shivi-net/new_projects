import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded ( {extended: true}))

app.use(express.static("public"))

app.get("/" , (req,res) => {
    res.render("index.ejs" )
})

app.get("/create", (req,res) => {
    res.render("create.ejs")
})

app.get("/Misinformation", (req,res) => {
    res.render("Misinformation.ejs")
})

app.get("/blueprint", (req,res) => {
    res.render("blueprint.ejs")
})

app.get("/popularFramework", (req,res) => {
    res.render("popularFramwork.ejs")
})

app.get("/devops", (req,res) => {
    res.render("devops.ejs")
})

app.get("/learn", (req,res) => {
    res.render("learn.ejs")
})
app.listen( port, () => {
    console.log(`listening to port ${port}`)
})