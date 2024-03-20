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
    const updateCurrentUser=(updatedUser)=>{
        console.log("updating current user",updatedUser)
        setCurrentUser(updatedUser)
    }

    const logout=()=>{
        localStorage.removeItem("user")
        setCurrentUser(null)
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser,login, updateCurrentUser}}>
            {children}</AuthContext.Provider>
    )
}