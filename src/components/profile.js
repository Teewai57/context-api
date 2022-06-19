import React, {useContext} from 'react'
import { LoginContext } from "../Contexts/loginContext"

function profile() {
    const{ username } = useContext(LoginContext);
    
  return (
    <>
      <h1>Profile</h1>
      <h2>Username: {username} </h2>
    </>
  )
}

export default profile
