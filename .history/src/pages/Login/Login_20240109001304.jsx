import React, { useState } from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import { authContext } from '../../context/authContext'

const Login = () => {
  const {login}=useState(authContext)

  const handleLogin=()=>{
    login()


  }
  return (
    <div className='login'>
        <div className='card'>
            <div className='left'>
                <h1>Hello</h1>
                <h1>World</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut ipsum facilis tempora rem error? Atque consequatur incidunt quis id</p>
                 <p>Don't have an account?</p>
                 <Link to="/register">
                 <button>Register</button>
                 </Link>
            </div>
            <div className='right'>
                <h1>Login</h1>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button onClick={handleLogin}>Login</button>

            </div>
        </div>
        
        </div>
  )
}
export default Login;