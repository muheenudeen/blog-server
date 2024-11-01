import mongoose from "mongoose";

const userSchemas=new mongoose.Schema({
    title :{
        type:String,
        require:true
    },
    description:{
        type:String,

    },
    mark:{
        type:Number
    }

})

export const userSchema =mongoose.model('user',userSchemas)