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
        <div className='form-page'>
        <div className='nice-form'>
        <h2 style={{color:"white"}}>Signup</h2>
        <div className='input-container ic1'>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='cut'></div>
        <div className='input-container ic2'>
        <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}></input>
        </div>
        <div className='cut'></div>
        <div className='input-container ic2'>
        <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div style={{marginBottom:"50px"}}></div>
        <button className="nice-button" onClick={() => {
            var text = signup(userName, password, email, img, setMessage)
        }}>Signup</button>
        <p className='error-message'>{message}</p>
        </div>
        </div>
    )
}
            