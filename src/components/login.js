import React, { useState } from "react";

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
        </>
    )
}
