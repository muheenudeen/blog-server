import mongoose from "mongoose";
import { userSchema } from "../Model/userSchema.js";

export const addToBlog =async (req,res)=>{
    try {

        const {title,mark,description}=req.body
        console.log(title);
        

        const existing=await userSchema.findOne({title})

        if(existing){
            return res.status(401).json({success:false,message:'alredy added'})
        }

        const data=await userSchema({
            title,
            description,
            mark


        })

        await data.save()
        

        res.status(200).json({success:true, message:'success',data})


        
    } catch (error) {
        return res.status(500).json({success:false,message:`${error.message}`})
        
    }

}
export const getAllBlogs =async (req,res)=>{
    try {

        const getAllUser = await userSchema.find()

        res.status(200).json({success:true,message:'get all users',getAllUser})

        
    } catch (error) {
        return res.status(500).json({success:false,message:`${error.message}`})

        
    }
}

export const editBlog = async (req,res)=>{
    try {

        const id=req.params.id
        const {title,mark,description}=req.body

        
        const userId=await userSchema.findById(id)

        if(!userId){
            return res.status(403).json({success:false,message:'this title no founded'})
        }

        const editBloges=await userSchema({
            title,
            description
        })

        

        res.status(200).json({success:true,message:'edit compleeted',editBloges})
        
    } catch (error) {
        return res.status(500).json({success:false,message:`${error.message}`})

    }
}



export const deleteBlog = async (req,res)=>{
    try {
        
        const id=req.params.id

        // if(mongoose.Types.ObjectId.isValid(blogId))

        const added= await userSchema.findById(id)
        
        if(!added){
            return res.status(402).json({success:false, message:'this title not found'})

        }

        const deleteBlog= await userSchema.findByIdAndDelete(id)

        res.status(200).json({success:true,message:'delete successful',deleteBlog})



    } catch (error) {

        return res.status(500).json({success:false,message:`${error.message}`})

        
    }
}


