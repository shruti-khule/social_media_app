import { createContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(
        localStorage.getItem("darkMode") || false

    );

    const toggle=()=>{
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode)
    },[darkMode])

    return(
        <modeContext.Provider value={{darkMode,toggle}}>{children}</modeContext.Provider>
    )
}