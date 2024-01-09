import { createContext, useEffect } from "react";
import { useState } from "react";
import Hermione from '/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Hermione.jpeg'


export const AuthContext=createContext();


export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(
        JSON.parse(localStorage.getItem("user")) || null

    );

    const login=()=>{
        setCurrentUser({
    
            id:1,
            name:"Hermione Granger",
            image:"/Users/shrutikhule/Desktop/Shruti/social_media_app/src/assets/Hermione.jpeg"
        
    });
    };

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser,login}}>
            {children}</AuthContext.Provider>
    )
}