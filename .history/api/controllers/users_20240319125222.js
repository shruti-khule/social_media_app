import { db } from "../connect.js";
import jwt  from "jsonwebtoken";

export const getUser=(req,res)=>{
    const user_id=req.params.user_id

    const q="SELECT * FROM users WHERE user_id= ?"

    db.query(q,[user_id],(err,data)=>{
        if (err) return res.status(500).json(err);
        
        const {password, ...info}=data[0]
        return res.json(info)
    })

}
export const updateUser=(req,res)=>{
    const token=req.cookies.accessToken;
    if(!token) return res.status(401).json("User not Logged In !")

    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!")
        const q="UPDATE users SET `name`=?, `location`=? ,`cover_pic`=? ,`profile_pic`=? WHERE `user_id`=?"
        db.query(q,[
            req.body.name,
            req.body.location,
            req.body.cover_pic,
            req.body.profile_pic,
            userInfo.id

        ],(err,data)=>{
            console.log("response",res)
            if (err) return res.status(500).json(err);
            if(data.affectedRows>0) return res.json()
        })

    })


}