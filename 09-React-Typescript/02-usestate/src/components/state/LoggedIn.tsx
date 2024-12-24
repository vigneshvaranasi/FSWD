import { useState } from "react"

function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    function handelLoggedIn(){
        setIsLoggedIn(true)
    }
    function handelLoggedOut(){
        setIsLoggedIn(false)
    }
  return (
    <div>
        <h1>Normal State</h1>
        <button onClick={handelLoggedIn}>Log in</button>
        <button onClick={handelLoggedOut}>Log out</button>
        <h1>User is {isLoggedIn?"Logged in":"Logged out"}</h1>
    </div>
  )
}

export default LoggedIn