const mongoose=require("mongoose")

//preparing schema-table(dbms)
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports=mongoose.model('User',userSchema)