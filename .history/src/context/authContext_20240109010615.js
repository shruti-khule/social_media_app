import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(
        JSON.parse(localStorage.getItem("user")) || null

    );

    const toggle=()=>{
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        localStorage.setItem("darkMode",JSON.stringify(currentUser))
    },[darkMode])

    return(
        <modeContext.Provider value={{darkMode,toggle}}>{children}</modeContext.Provider>
    )
}