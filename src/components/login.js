import React, { useContext, useState } from "react";
import "./login.css"
import { LoginContext } from "../Contexts/loginContext";

export default function Login() {
    const {setUsername, setShowProfile} = useContext(LoginContext)
    return(
        <>
        <input 
        type="text"
        placeholder="Username..."
        onChange={(event) => {
            setUsername(event.target.value);
        }}
        />
        <input 
        type="text"
        placeholder="Password..."
        />
        <button  onClick={() => {
            setShowProfile(true);
        }}>
            LOGIN
        </button>
        
        
 

        </>
    )
}
