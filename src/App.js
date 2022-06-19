import Login from "./components/login"
import Profile from "./components/profile";
import React, { useState } from "react"
import { LoginContext } from "./Contexts/loginContect";
export default function App() {
  const[showProfile, setShowProfile] = useState(false);
  const[username, setUsername] = useState("");

  return(
    <div className="App">
      <LoginContext.Provider value={{username, setUsername}}>
      {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  )
}