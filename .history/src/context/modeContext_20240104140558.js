import { createContext, useEffect } from "react";
import { useState } from "react";

export const modeContext=createContext();

export const provider=({children})=>{
    const [darkMode,setDarkMode]=useState(
        localStorage.getItem("darkMode") || false

    );

    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode)
    })
}