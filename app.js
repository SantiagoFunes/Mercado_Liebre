const express = require("express")
const app = express()
const path = require("path");
const exp = require("constants");

const publicpath = path.resolve(__dirname,'./public');
app.use(express.static(publicpath))
app.listen(3000, ()=> {
    console.log("Servidor corriendo en el puerto 3000");
})

app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

