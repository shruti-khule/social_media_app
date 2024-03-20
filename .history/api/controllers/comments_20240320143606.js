import { db } from "../connect.js";
import  jwt  from "jsonwebtoken";
import moment from 'moment'



export const getComments=(req,res)=>{
    
    const q=`SELECT c.*,u.user_id AS user_id,name,profile_pic FROM comments AS c JOIN users AS u ON (u.user_id=c.user_id) 
     WHERE c.post_id=? ORDER BY c.createdAt DESC`

        db.query(q,[req.query.post_id],(err,data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json(data)
        })
}



export const createComments=(req,res)=>{
    
        const token=req.cookies.accessToken;
        if(!token) return res.status(401).json("User not Logged In !")
    
        jwt.verify(token,"secretkey",(err,userInfo)=>{
            if(err) return res.status(403).json("Token is not valid!")
            console.log(userInfo)
            console.log(userInfo.id)
            
        
            const q="INSERT INTO comments (`desc`,`createdAt`,`user_id`,`post_id`) VALUES (?)"
    
            const values=[
                req.body.desc,
                moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                userInfo.id,
                req.body.post_id
    

            ]
    
            db.query(q,[values],(err,data)=>{
                if (err) return res.status(500).json(err)
                return res.status(200).json("Comment sent successfully")
            })
    })
    
    

}