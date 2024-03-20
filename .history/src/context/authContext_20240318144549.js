import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export const AuthContext=createContext();


export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(
        JSON.parse(localStorage.getItem("user")) || null

    );

    const login= async (inputs)=>{
            const res = await axios.post("http://localhost:8800/api/auth/login",inputs,{
                withCredentials:true
            })
            setCurrentUser(res.data)
        
    };
    const updatCurrentUser=(updatedUser)=>{
        setCurrentUser(updatedUser)
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser,login, updatCurrentUser}}>
            {children}</AuthContext.Provider>
    )
}