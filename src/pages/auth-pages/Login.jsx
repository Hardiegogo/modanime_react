import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './auth.css'
import { useAuth } from '../../context/useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../utils/auth-utils/loginUser'

const Login=()=>{

    const {authState,dispatchAuth}=useAuth()

    const [user,setUser]=useState({email:'',password:''})
    const navigate=useNavigate()
    const changeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }


  return (
      <div className="content-auth">
          <div className="auth-container card-shadow p-24">
                
                    <h3 className="center-text">Login</h3>
                    <label for="username">
                        <h4 className="mt-16">Email:</h4>
                        <input className="input input-primary" type="email" name="email" value={user.email} onChange={changeHandler}/>
                    </label>
                    <h4 className="mt-16">Password:</h4><label>
                    <input className="input input-primary" id="user-password" name="password" type="password" value={user.password} onChange={changeHandler}/>
                    </label>
                    <div className="auth_options mt-16">
                        <label for="remember-me x-small-text">
                            <input type="checkbox" id="remember-me"/>
                            I accept all terms and conditions.
                        </label>


                    </div>
                    <button className="btn btn-primary mt-16" onClick={()=>loginUser(user,authState,dispatchAuth,navigate)}>Login</button>
                    <Link to='/signup' className="link-secondary center-text mt-1">Create a new account {'>'}</Link>
                


    </div>
      </div>
    
  )
}

export default Login