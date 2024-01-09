import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(
        JSON.parse(localStorage.getItem("user")) || null

    );

    const login=()=>{

    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])

    return(
        <modeContext.Provider value={{currentUser,login}}>{children}</modeContext.Provider>
    )
}