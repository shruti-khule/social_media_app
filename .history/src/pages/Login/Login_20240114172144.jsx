import React, { useContext } from 'react'
import { useState } from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'

const Login = () => {
  const {login}=useContext(AuthContext)

  const [err,setErr]=useState(null);


  const [inputs,setInputs]=useState({
    username:"",
    password:""
})

  const handleChange=(e) =>{
    setInputs(prev=>({
        ...prev, [e.target.name]:e.target.value }))

}

  const handleLogin= async (e)=>{
    e.preventDefault()
    try{
      const response=await login(inputs);
      console.log(response.data)

    }catch(err){
      setErr(err.response.data)

    }

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
                <input type="text" placeholder='Username' name='username' onChange={handleChange} />
                <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                {err && err}
                <button onClick={handleLogin}>Login</button>

            </div>
        </div>
        
        </div>
  )
}
export default Login;