import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

    let[name , setName] = useState('')
    let[password , setPassword] = useState('')
    let[email , setEmail] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        let auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })

    function handleName(e){
        setName(e.target.value)
    }

    
    function handleMail(e){
        setEmail(e.target.value)
    }

    
    function handlePassword(e){
        setPassword(e.target.value)
    }

   async function handleClick(){
        console.log(name , email , password)
        let result = await fetch("http://127.0.0.1:5000/register",{
            method:"post",
            body:JSON.stringify({name , email , password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
         result = await result.json()
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result)) //to save data in local storage
        if(result){
            navigate('/') // to redirect to home page after registration
        }
    }

    return (
        <>
            <div className='signup-heading'>REGISTER</div>
            <div className="container input-outer">
                <div className="input-group mb-3 ">
                    <span className="input-group-text" id="basic-addon1">Username</span>
                    <input type="text" onChange={handleName} className="form-control" placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1" value={name} />
                </div>
                <div className="input-group mb-3 ">
                    <span className="input-group-text" id="basic-addon1">Gmail</span>
                    <input type="email" onChange={handleMail} className="form-control" placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1" value={email}/>
                </div>
                <div className="input-group mb-3 ">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                    <input type="password" onChange={handlePassword} className="form-control" placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1" value={password} />
                </div>
                <div className="input-group mb-3 ">
                   <button onClick={handleClick} className='btn btn-success'>SIGN UP</button>
                </div>

            </div>
        </>
    )
}

export default SignUp