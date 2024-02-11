const express = require("express")
const app = express();


app.set("view engine", "ejs")
app.use(express.static("public"))  


app.get("/",(req, res)=>{

    res.render("index")
})


app.get("/contact",(req, res)=>{

    res.render("contact")
})


app.get("/AI-Image-Generator",(req, res)=>{

    res.render("AI-Image-Generator")
})


app.get("/Chat-App_-Socket-IO",(req, res)=>{

    res.render("Chat-App_-Socket-IO")
})


app.get("/URLShortenerAPI",(req, res)=>{

    res.render("URLShortenerAPI")
})


app.get("/Note-Master",(req, res)=>{

    res.render("Note-Master")
})


app.get("/Sticky-Notes",(req, res)=>{

    res.render("Sticky-Notes")
})


app.get("/Live-ISS-Tracker",(req, res)=>{

    res.render("Live-ISS-Tracker")
})


app.get("/Weather-API",(req, res)=>{

    res.render("Weather-API")
})



app.listen(8080,()=>{
    console.log("server is running")
})



