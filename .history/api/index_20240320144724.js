import express from "express";
import userRouter from "./routes/users.js"
import postsRouter from "./routes/posts.js"
import likesRouter from "./routes/likes.js"
import commentsRouter from "./routes/comments.js"
import authRouter from "./routes/auth.js"
import relationRouter from "./routes/relations.js"

import cookieParser from "cookie-parser";
import cors from "cors"
import multer from "multer";



const app=express()

app.listen(8800, ()=>{
    console.log("connected to backend")
})

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next();
})

app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(cookieParser())



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/Users/shrutikhule/Desktop/Shruti/social_media_app/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname )
    }
  })
  
const upload = multer({ storage: storage })




app.post("/api/upload", upload.single("file"),(req,res)=>{
    const file=req.file;

    if(!file) return res.status(400).json({ message: "Please select a file to upload" });
    console.log("this is req.file",req.file,"This is req.body ",req.body)

    res.status(200).json(file.filename);
})



app.use("/api/users",userRouter)
app.use("/api/posts",postsRouter)
app.use("/api/likes",likesRouter)
app.use("/api/comments",commentsRouter)
app.use("/api/auth",authRouter)
app.use("/api/relation",relationRouter)







