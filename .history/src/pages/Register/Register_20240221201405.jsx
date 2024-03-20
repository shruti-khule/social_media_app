import React, { useState } from 'react'
import './Register.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:"",
        name:""
    })
    const [err,setErr]=useState(null);


    const handleChange=(e) =>{
        setInputs(prev=>({
            ...prev, [e.target.name]:e.target.value }))

    }
    
    const handleClick= async (e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/api/auth/register",inputs)

        }catch(err){
            setErr(err.response.data)
        }

    }



    return(
    <div className='register'>
    <div className='card'>
        <div className='left'>
        <h1>Register</h1>
            <input type="text" placeholder='Name' name='name' onChange={handleChange} />
            <input type="email" placeholder='Email' name='email' onChange={handleChange} />
            <input type="password" placeholder='Password' name='password' onChange={handleChange} />
            <input type="text" placeholder='Username' name='username' onChange={handleChange} />
            {err && err}
            <button onClick={handleClick}>Register</button> 

           
        </div>
        <div className='right'>
       
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut ipsum facilis tempora rem error? Atque consequatur incidunt quis id</p>
             <p>Already have an account?</p>
            <Link to="/login">

             <button>Login</button>
            </Link>

            
        </div>
    </div>
    
    </div>
    )

}

export default Register