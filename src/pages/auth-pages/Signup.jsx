import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './auth.css'
import { useAuth } from '../../context/useAuth'
import { useNavigate } from 'react-router-dom'
import { submitNewUser } from '../../utils/auth-utils/submitNewUser'
import { Link } from 'react-router-dom'

const Signup=()=>{

    const {authState,dispatchAuth}=useAuth()

    const [user,setUser]=useState({firstName:'',lastName:'',email:'',password:''})
    const navigate=useNavigate()
    const changeHandler=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }


  return (
      <div className="content-auth">
          <div className="auth-container card-shadow p-24">
                
                    <h3 className="center-text">Signup</h3>
                    <label htmlFor="username">
                        <h4 className="mt-16">First name:</h4>
                        <input className="input input-primary" type="text" name="firstName"value={user.firstName} onChange={changeHandler}/>
                    </label>
                    <label htmlFor="username">
                        <h4 className="mt-16">Last name:</h4>
                        <input className="input input-primary" type="text" name="lastName" value={user.lastName} onChange={changeHandler}/>
                    </label>
                    <label htmlFor="username">
                        <h4 className="mt-16">Email:</h4>
                        <input className="input input-primary" type="email" name="email" value={user.email} onChange={changeHandler}/>
                    </label>
                    <h4 className="mt-16">Password:</h4><label>
                    <input className="input input-primary" id="user-password" name="password" type="password" value={user.password} onChange={changeHandler}/>
                    </label>
                    <div className="auth_options mt-16">
                        <label htmlFor="remember-me x-small-text">
                            <input type="checkbox" id="remember-me"/>
                            I accept all terms and conditions.
                        </label>


                    </div>
                    <button className="btn btn-primary mt-16" onClick={()=>submitNewUser(user,authState,dispatchAuth,navigate)}>Create a new account</button>
                    <Link to='/login' className="link-secondary center-text mt-1">Already have an account</Link>
                


    </div>
      </div>
    
  )
}

export default Signup