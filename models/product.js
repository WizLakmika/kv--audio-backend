import mongoose from "mongoose";

const productSchema=new mongoose.Schema({

    key:{
        type:String,
        required:true,
        unique:true
    },

    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    category:{
        type:String,
        required:true,
        default:"uncategorized"
    },

    dimention:{
        type:String,
        required:true
    },


    description:{
        type:String,
        required:true
    },

    availability:{
        type:Boolean,
        required:true,
        default:true
    },

    image:{
        type:[String],
        required:true,
        default:"https://images.app.goo.gl/PcxgtQdBuekRJcas9"
    }


})
const Product=mongoose.model("Product",productSchema)

export default Product;

