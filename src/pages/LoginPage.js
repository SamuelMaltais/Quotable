import React, { useState } from 'react'
import './LoginPage.css'

var login = (userName, password, setMessage) => {
    var user = {
        userName : userName,
        password : password
    }
    try{
    fetch("http://localhost:6969/users/login/", {
        method: 'POST',
        headers: {
            'Content-Type': 
                'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then((res) => res.json()).then((res)=> {
        
        setMessage(res.message)
        if(res.status == 200){
            sessionStorage.setItem("userName", userName)
            userName
        }
    
    
    })
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
        <div className='form-page'>
        <div className='nice-form'>
        <h2 style={{color:"white"}} >Login</h2>
        <div className='input-container ic1'>
        <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}></input>
        </div>
        <div></div>
        <div className='cut'></div>
        <div className='input-container ic1'>
        <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div style={{marginBottom:"50px"}}></div>
        <button className="nice-button" onClick={() => {
            var text = login(userName, password, setMessage)
            }}>Login</button>
        <p className='error-message'>{message}</p>
        </div>
        </div>
    )
}