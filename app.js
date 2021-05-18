const express=require("express")
const mongoose=require("mongoose")

const app=new express()

//creating user db
const url='mongodb://localhost/user'

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection


//establishing connection

con.on('open',()=>{
    console.log("I'm connected");
})

app.use(express.json())

const usersRouter=require('./routers/users')  //using users.js as router file
app.use('/users',usersRouter)   //routing

app.listen(9000,()=>{
    console.log("Server started")
})