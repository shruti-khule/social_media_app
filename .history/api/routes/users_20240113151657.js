import express from "express";
import {} from '../controllers/users.js'

const router=express.Router()

router.get("/test",(req,res)=>{
    res.send("works")
})

export default router