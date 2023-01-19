import React, { useState } from 'react'
import './LoginPage.css'

var login = async (userName, password, setMessage) => {
    var user = {
        userName : userName,
        password : password
    }
    try{
    fetch("http://localhost:300/users/login/", {
        method: 'POST',
        headers: {
            'Content-Type': 
                'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then((res) => res.json()).then((res)=> setMessage(res.message))
}
catch(err){
    console.log(err)
}
}

export default function LoginPage(){
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()

    return(
        <>
        <form>

        <h2>Login</h2>
        <p>Username</p>
        <input name="userName" type="text" onChange={(e) => setUserName(e.target.value)}></input>
        <p>Password</p>
        <input name="password" type="text" onChange={(e) => setPassword(e.target.value)}></input>
        <br></br>
        <button onClick={() => login(userName, password, setMessage)}>Login</button>
        </form>
        <p className='error-message'>{message}</p>
        </>
    )
}