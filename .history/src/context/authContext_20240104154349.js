import { createContext, useEffect } from "react";
import { useState } from "react";

export const authContext=createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(
        localStorage.getItem("user") || null

    );

   

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])

    return(
        <authContext.Provider value={{currentUser}}>{children}</authContext.Provider>
    )
}