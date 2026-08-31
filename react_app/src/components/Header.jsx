import { useState } from "react"

function Header({title,version}){

    const [isLoggedIn, setIsLoggedIn] = useState(false) 

    return (
        <>
        {(isLoggedIn)?<h1>Welcome Ahmed</h1>:<button>Login</button>}
        <header>
            <h1 id="{version}" >{title}</h1>
        </header>
        </>
    )
}

export default Header