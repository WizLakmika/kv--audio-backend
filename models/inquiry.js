import mongoose from "mongoose";

const inquiySchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        
    },

    message:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true,
    },

    date:{
        type:Date,
        required:true,
        default:Date.now()
    },
    response:{
        type:String,
        required:false,
        default:""
    },
    isResolved:{
        type:Boolean,
        required:true,
        default:false
    }
})

const Inquiry=mongoose.model("Inquiry",inquiySchema)

export default Inquiry;