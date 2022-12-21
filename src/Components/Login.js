import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate,Link } from 'react-router-dom';

export const Login = () => {
      
    const navigate= useNavigate();

      const [input,setInput] =useState({


  email:"",
  password:"",


      })


      const handleLogin=(e)=>{


        e.preventDefault();

        const  loggeduser = JSON.parse(localStorage.getItem("user"));


   if(input.email === loggeduser.email && input.password === loggeduser.password){


localStorage.setItem("loggedin",true);

  navigate("/");
      
   } else {


    alert("wrong email or password");

   }







      };


  return (
    <>
    
    
    <Form      style={{backgroundColor:"#939695"}}   className='container' onSubmit={handleLogin}>

        <h1  style={{color:"#8155d9",fontSize:"50px"}}> Login  </h1>
      <Form.Group className="mb-3   col-md-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        
        name='email'
        value={input.email}
        onChange={(e)=>
           setInput({...input,[e.target.name]:e.target.value})}
       
        
        type="email" placeholder="Enter email" />
             </Form.Group>

      <Form.Group className="mb-3  col-md-6" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
           
           name='password'
           value={input.password}
           onChange={(e)=>
              setInput({...input,[e.target.name]:e.target.value})}
        
        type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
<p> Don't have an account ?</p>

<Link  to="/register">  <u  style={{color:"black"}}> Register here</u>
</Link>
    </Form>
    
    </>
  )
}
