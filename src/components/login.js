import React, { useState } from "react";
import "./login.css"

export default function Login() {
    const[username, setUsername] = useState("");
    const[showProfile, setShowProfile] = useState(false);

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
        <button>LOGIN</button>
         {/* onClick={() => {
            setShowProfile(true);
        }} */}
        
 

        </>
    )
}
