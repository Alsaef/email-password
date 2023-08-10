// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth ,createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import app from '../../firebase/firebase-config';
import { Link } from 'react-router-dom';
const Register = () => {
    const auth = getAuth(app);
    const handelSubmit=(event)=>{
        const email= event.target.email.value
        const password= event.target.password.value
        console.log(email,password)
        event.preventDefault()
        // create user firebase
         
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user)
            seterror('')
            event.target.reset()
            setsuccess("create Successful")
            verifid(user)
        })
        .catch((error)=>{
           console.log(error.message)
           seterror(error.message)
           setsuccess('')
        })
    }
    const verifid=(user)=>{
         sendEmailVerification(user)
         .then((result)=>{
          console.log(result)
          alert("Chack Your Email")
         })
    }
    const [error,seterror]=useState('')
    const [success,setsuccess]=useState('')
    return (
       <section className='mt-5'>
         <div className='mx-auto w-50'>
           <h2 className='text-primary'>Register !!!</h2>
           <Form onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required />
        <p className='text-danger'>{error}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p className='text-success'>{success}</p>
    </Form> 
    <p>You Have Account? Please <Link to='/login'>Login</Link></p>
        </div>
       </section>
    );
};

export default Register;