const express = require("express")
const app = express()
const path = require("path");
const exp = require("constants");
app.use(express.urlencoded({extended: true}))

const publicpath = path.resolve(__dirname,'./public');
app.use(express.static(publicpath))


app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get("/register",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get("/login",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.post('/register', (req,res)=>{
    console.log(req.body);
    res.sendFile(__dirname + '/');
    res.redirect("/")
});
app.post('/login', (req,res)=>{
    console.log(req.body);
    res.sendFile(__dirname + '/');
    res.redirect("/")
});



app.listen(3000, ()=> {
    console.log("Servidor corriendo en el puerto 3000");
})