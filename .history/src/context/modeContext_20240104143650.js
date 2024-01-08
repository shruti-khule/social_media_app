import { createContext, useEffect } from "react";
import { useState } from "react";

export const modeContext=createContext();

export const ContextProvider=({children})=>{
    const [darkMode,setDarkMode]=useState(
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