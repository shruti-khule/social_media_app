import  {db} from "../connect.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";


export const register=(req,res)=>{

    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q,[req.body.username],(err,data)=>{

        if(err) return res.status(500).json(err)
        if (data.length) return res.status(409).json("User already exist !")

   
    const salt = bcrypt.genSaltSync(10);
    const hashpw = bcrypt.hashSync(req.body.password, salt);


    const q= "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)"
    const values=[req.body.username,req.body.email,hashpw,req.body.name]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("User created")

    })

})
    
}


export const login=(req,res)=>{
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q,[req.body.username],(err,data)=>{

        if(err) return res.status(500).json(err)
        if (data.length===0) return res.statue(404).json("User not found !")

        const checkPassword=bcrypt.compareSync(req.body.password,data[0].password)
        if(!checkPassword) 
        return res.status(400).json("Password or Username incorrect !")

        const token=Jwt.sign({id:data[0].user_id},"secretkey");
        const {password,...others}=data[0]

        res.cookie("accessToken",token, {
            httpOnly:true,
        }
        ).status(200).json(others)

    }
    )}

export const logout=(req,res)=>{
    res.clearCookie("accessToken",{
        secure:true,
        sameSite:"none"
    }

    ).json("User logged out !")

    
}