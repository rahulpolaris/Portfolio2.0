const express = require('express')
const app = express();
const port = 3300 || process.env.PORT
const path = require('path')
const homeRouter = require(path.join(__dirname,'Routes','homeRoute.js'))





app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use("/",homeRouter)

app.listen(port,()=>{console.log(`listening on port ${port}  on ${(new Date).toLocaleDateString()} `)})
// app.get("/",handleHome)

