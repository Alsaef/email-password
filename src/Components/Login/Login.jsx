// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase-config';
import { Link } from 'react-router-dom';
const Login = () => {
  const auth=getAuth(app)
  const [error,seterror]=useState('')
  const [success,setsuccess]=useState('')
  const emailRef=useRef()
  // submit
   const loginSubmit=(event)=>{
    event.preventDefault()
    const email=event.target.email.value;
    const password=event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      const user = result.user;
      console.log(user)
      setsuccess("Successful")
      seterror('')
      event.target.reset()
      if (!user.emailVerified) {
         alert("You Are Not Verifyed")
      }
    })
    .catch((error)=>{
      console.log(error.message)
      seterror(error.message)
      setsuccess('')
    })
   }
   const resetPassword=()=>{
    const email= emailRef.current.value
    if(!email){
      alert("Dont Type Email")
      return
    }
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Chack Mail")
    })
    .catch((error)=>{
          console.log(error.message)
    })
   }
    return (
        <div className='mt-5'>
          <div className='mx-auto w-50'>
          <h2>login</h2> 
          <Form onSubmit={loginSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} name='email' />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' />
      </Form.Group>
      <p className='text-danger'>{error}</p>
      <p className='text-success'>{success}</p>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
      <button className='btn btn-link d-block mt-2' onClick={resetPassword}>Forget Password</button>
    <p>You Have No Account? Please <Link to='/registerrbs'>Register</Link></p>
        </div>
        </div>
    );
};

export default Login;