import express from "express";
import {getRelations,addRelations,deleteRelations} from '../controllers/relations.js'

const router=express.Router()

router.get("/",getRelations)
//router.post("/",addRelations)
//router.delete("/",deleteRelations)

export default router
