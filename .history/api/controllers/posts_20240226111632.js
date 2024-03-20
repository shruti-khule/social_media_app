import {db} from '../connect.js'
import jwt  from 'jsonwebtoken'
import moment from 'moment';

export const getPosts=(req,res)=>{
    const user_id=req.query.user_id
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("User not Logged In !")

    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")
        
    
        const q=user_id!=="undefined" ? `SELECT p.*,u.user_id AS user_id,name,profile_pic FROM posts AS p JOIN users AS u ON (u.user_id=p.user_id) WHERE p.user_id=?ORDER BY p.created_at DESC`
        :`SELECT p.*,u.user_id AS user_id,name,profile_pic FROM posts AS p JOIN users AS u ON (u.user_id=p.user_id) LEFT JOIN relationships AS r ON (p.user_id= r.followed_userid) WHERE r.follower_userid= ? OR p.user_id = ? ORDER BY p.created_at DESC`

        const values= user_id!=="undefined"? [user_id]:[userInfo.id,userInfo.id]
        db.query(q,values,(err,data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json(data)
        })
})
}


export const createPosts=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("User not Logged In !")

    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")
        console.log(userInfo)
        console.log(userInfo.id)
        
    
        const q="INSERT INTO posts (`desc`,`image`,`user_id`,`created_at`) VALUES (?)"

        const values=[
            req.body.desc,
            req.body.image,
            userInfo.id,

            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        ]
        console.log("this is req.body",req.body)

        db.query(q,[values],(err,data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json("Post has been created")
        })
})


}

export const deletePosts=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("User not Logged In !")

    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")
        console.log(userInfo)
        console.log(userInfo.id)
        
    
        const q="DELETE FROM posts where `posts_id`=? AND `user_id`=?"


        console.log("this is req.body",req.body)

        db.query(q,[req.params.id,userInfo.id],(err,data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json("Post has been deleted")
        })
})


}