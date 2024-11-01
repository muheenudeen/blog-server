import express from 'express'
import { addToBlog, deleteBlog, editBlog, getAllBlogs } from '../Controller/userController.js'

export const userRouter =express.Router()


userRouter.post('/title',addToBlog)
userRouter.get('/blogs',getAllBlogs)
userRouter.delete('/title/:id',deleteBlog)
userRouter.put('/title/:id',editBlog)