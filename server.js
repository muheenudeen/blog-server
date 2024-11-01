import express from 'express'
import mongoose from 'mongoose'
import { userRouter } from './routes/userRouters.js'
import cors from 'cors'
const PORT= 3000

const app=express()
app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter)

app.listen(PORT,()=>{

    console.log('running')
    
})

main().catch(err => console.log(err));

async function main(){

    await mongoose.connect('mongodb+srv://muheenudeen313:D4E6YiPDHZVA36xE@cluster0.w1myb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
 console.log(`connected`);
 
}