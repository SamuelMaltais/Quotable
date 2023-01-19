import React, { useState } from 'react'

var signup = (userName, password, email,image,setMessage) => {
    var user = {
        userName : userName,
        password : password,
        email: email,
        image: image
    }
    try{
    fetch("http://localhost:300/users/", {
        method: 'POST',
        headers: {
            'Content-Type': 
                'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then((res) => res.json()).then((res)=> {setMessage(res.message)})
}
catch(err){
    console.log(err)
}
}

export default function SignupPage(){
    const [userName, setUserName] = useState()
    const[ message, setMessage] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [img, setImg] = useState()
    return(
        <>
        <h2>Login</h2>
        <p>Username</p>
        <input type="text" onChange={(e) => setUserName(e.target.value)}></input>
        <p>Password</p>
        <input type="text" onChange={(e) => setPassword(e.target.value)}></input>
        <p>Email</p>
        <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
        <p>Profile picture</p>
        <input type="file" onChange={(e) => {setImg(e.target.value)}}></input>
        <br></br>
        <button onClick={() => {
            var text = signup(userName, password, email, img, setMessage)
            }}>Signup</button>
        <p className='error-message'>{message}</p>
        </>
    )
}