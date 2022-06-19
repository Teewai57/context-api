import Login from "./components/login"
import Profile from "./components/profile";
import React, { useState } from "react"

export default function App() {
  const[showProfile, setShowProfile] = useState(false);

  return(
    <div className="App">
      {showProfile ? <Profile /> : <Login />}
          <Login />
    </div>
  )
}