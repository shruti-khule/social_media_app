import { db } from "../connect.js"
import  jwt  from "jsonwebtoken"

export const getLikes=(req,res)=>{
    
    const q=`SELECT user_id FROM likes WHERE post_id=?`

        db.query(q,[req.query.post_id],(err,data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json(data.map(like=>like.user_id))
        })
}
export const addLikes=(req,res)=>{
    
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("User not Logged In !")

    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")
        
    
        const q="INSERT INTO likes (`user_id`,`post_id`) VALUES (?)"

        const values=[
            userInfo.id,
            req.body.post_id

        ]

        db.query(q,[values],(err,data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json("Liked the post successfully")
        })
})
}
export const deleteLikes=(req,res)=>{
    
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("User not Logged In !")

    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")
        console.log(userInfo)
        console.log(userInfo.id)
        
    
        const q="DELETE FROM likes WHERE `user_id` = ? AND `post_id` = ?"


        db.query(q,[userInfo.id,req.query.post_id],(err,data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json("disliked the post successfully")
        })
})
}