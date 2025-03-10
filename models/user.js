import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true

    },

    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true,
        default:"customer"
    },

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    profilePicture:{
        type:String,
        required:true,
        default:"https://www.freepik.com/premium-vector/influencer-icon-vector-image-can-be-used-digital-nomad_179142441.htm#fromView=keyword&page=1&position=21&uuid=becdcad2-5de5-4a33-9c7d-7723efb300ce&query=Default+User"
    }

})

const User=mongoose.model("user",userSchema);

export default User;