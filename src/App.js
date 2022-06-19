import Login from "./components/login"
import Profile from "./components/profile";
import React, { useState } from "react"
import { LoginContext } from "./Contexts/loginContect";
export default function App() {
  const[showProfile, setShowProfile] = useState(false);

  return(
    <div className="App">
      <LoginContext>
      {showProfile ? <Profile /> : <Login />}
      </LoginContext>
    </div>
  )
}