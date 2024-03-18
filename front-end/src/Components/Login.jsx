import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    let [email,setEmail]= useState('')
    let [password,setPassword]= useState('')

    let navigate = useNavigate('')

    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){                              // this is to prevent /login access using localhost:3000/login
            navigate('/')
        }
    })

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

   async function handleClick(){
        console.log(email , password)

        let result = await fetch("http://localhost:5000/login" , {
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json();
        console.log(result)
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result))
            navigate('/')
        }else{
            alert("Enter a valid details !!!")
        }
    }
  return (
    <>
    <div className='signup-heading'>Login</div>
            <div className="container input-outer">
            
                <div className="input-group mb-3 ">
                    <span className="input-group-text" id="basic-addon1">Gmail</span>
                    <input type="email" onChange={handleEmail} className="form-control" placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1" value={email}/>
                </div>
                <div className="input-group mb-3 ">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                    <input type="password" onChange={handlePassword} className="form-control" placeholder="Enter" aria-label="Username" aria-describedby="basic-addon1" value={password} />
                </div>
                <div className="input-group mb-3 ">
                   <button onClick={handleClick}  className='btn btn-success'>Login</button>
                </div>

            </div>
    </>
  )
}

export default Login