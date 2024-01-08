import React from 'react'
import './Register.scss'

const Register = () => {
    return(
    <div className='register'>
    <div className='card'>
        <div className='left'>
        <h1>Register</h1>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Username' />

            <button>Register</button>

           
        </div>
        <div className='right'>
        <h1>Hello</h1>
            <h1>World</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aut ipsum facilis tempora rem error? Atque consequatur incidunt quis id</p>
             <p>Don't have an account?</p>
             <button>Register</button>
            
        </div>
    </div>
    
    </div>
    )

}

export default Register