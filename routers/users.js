const express=require("express")
const router=express.Router()
const User=require('../model/user')

//Get all Users
router.get("/", async(req,res)=>{

    try{
        const users=await User.find()
        res.json(users)
    }
    catch(err){
        res.send('Error : '+err)
    }
    
})

//Get User by ID
router.get("/:id", async(req,res)=>{
    var id=req.params.id
    try{
        const user=await User.findById(id)
        res.json(user)
    }
    catch(err){
        res.send('Error : '+err)
    }
    
})


//Delete User by ID
router.delete("/:id", async(req,res)=>{
    var id=req.params.id
    try{
        var del={'_id':id}
        await User.deleteOne(del)
        res.send("deleted")
    }
    catch(err){
        res.send('Error : '+err)
    }
    
})

//Update particulr field
router.patch("/:id", async(req,res)=>{
    var id=req.params.id
    try{
        const user=await User.findById(id)
        user.sub=req.body.sub
        const u1=await ser.save()
        res.json(user)
    }
    catch(err){
        res.send('Error : '+err)
    }
    
})


//Add a user
router.post("/",async(req,res)=>{
    const users=new User({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub   
    })

    try{
        const u1=users.save();
        res.json(u1)
    }
    catch(err){
        console.log("Error : "+err)
    }
})

//export to app.js
module.exports=router