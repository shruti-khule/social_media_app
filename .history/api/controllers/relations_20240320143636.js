import { db } from "../connect.js"
import  jwt  from "jsonwebtoken"

export const getRelations=(req,res)=>{
    
    const q=`SELECT follower_userid FROM relationships WHERE followed_userid = ?`

        db.query(q,[req.query.followed_userid],(err,data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json(data.map(relation=>relation.follower_userid))
        })
    }

    
export const addRelations=(req,res)=>{
    
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("User not Logged In !")

    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")
        
    
        const q="INSERT INTO relationships (`follower_userid`,`followed_userid`) VALUES (?)"

        const values=[
            userInfo.id,
            req.body.userId

        ]
        console.log("this is req.body",req.body)

        db.query(q,[values],(err,data)=>{
            if (err) return res.status(500).json(err)
            return res.status(200).json("Following")
        })
})
}
export const deleteRelations=(req,res)=>{
    
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("User not Logged In !")

    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")
        
    
        const q="DELETE FROM relationships WHERE `follower_userid` = ? AND `followed_userid` = ?"


        db.query(q,[userInfo.id,req.query.userId],(err,data)=>{
            console.log("deleted relation")

            if (err) return res.status(500).json(err)
            return res.status(200).json("Unfollowed")
        })
}
)

}
