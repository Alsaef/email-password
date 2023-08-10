// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Register.css'
const Register = () => {
    const [email,setemail]=useState('')
    const changeEmail=(event)=>{
        setemail(event.target.value)
        console.log(event.target.value)
    }

    const handelPassword=(event)=>{
          console.log(event.target.value)
    }

    const handelSubmit=(event)=>{
        event.preventDefault()
        const email=event.target.email.value;
        const password=event.target.password.value;
            console.log(email,password)
    }
    return (
        <div>
           <form className='center' onSubmit={handelSubmit}>
           <h2>Register</h2> 
            <input className='mt-2'  type="email" onChange={changeEmail} name='email' placeholder='Email' required/> 
            <input className='mt-2' type="password" onBlur={handelPassword}  name='password' placeholder='password' required/>
           <br />
           <input className='btn btn-primary' type="submit" value='Register' />
           </form>
        </div>
    );
};

export default Register;