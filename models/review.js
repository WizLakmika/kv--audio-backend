import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    email:{
        type:String,
        required : true,
        unique: true
    },

    name:{
        type:String,
        required:true

    },

    rating:{
        type:Number,
        required:true

    },

    comment:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    
    isApproved:{
        type:Boolean,
        required:true,
        default:false
    },

    profilePicture:{
        type:String,
        required:true,
        default:"https://www.freepik.com/premium-vector/influencer-icon-vector-image-can-be-used-digital-nomad_179142441.htm#fromView=keyword&page=1&position=21&uuid=becdcad2-5de5-4a33-9c7d-7723efb300ce&query=Default+User"
    }
    
    


})

const Review=mongoose.model("Review",reviewSchema);

export default Review;