import express from "express";
import {getPosts, createPosts,deletePosts} from '../controllers/posts.js'

const router=express.Router()


router.get("/", getPosts)

router.post("/", createPosts)
router.delete("/:id", deletePosts)



export default router
