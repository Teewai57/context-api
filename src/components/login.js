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
        <button onClick={() => {
            setShowProfile(true);
        }}>
            LOGIN
        </button>

        {showProfile && <h1>{username}</h1>}
        </>
    )
}
