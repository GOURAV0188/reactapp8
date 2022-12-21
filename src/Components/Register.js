import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,Link } from 'react-router-dom';

export const Register = () => {
  
    const navigate= useNavigate();

      const [input,setInput] =useState({


  name:"",
  email:"",
  password:"",


      })

const handleSubmit =(e) =>{


    e.preventDefault();
localStorage.setItem("user",JSON.stringify(input));

navigate("/login");



}
      return (
    <div  className='container '>



<h1   align="left" style={{color:"teal",fontSize:"50px",wordSpacing:"40px"}}> CREATE AN ACCOUNT</h1>




<Form  onSubmit={handleSubmit}>
<Form.Group className="mb-3  col-md-6" controlId="formBasicEmail">
      <Form.Label>Enter your name</Form.Label>
      <Form.Control  
       name='name'
       value={input.name}
       onChange={(e)=>
          setInput({...input,[e.target.name]:e.target.value})}
      
      
      
      type="text" placeholder="Enter  your name" />
        </Form.Group>

    <Form.Group className="mb-3  col-md-6" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control 
      type="email"
      
      name='email'
      value={input.email}
      onChange={(e)=>
         setInput({...input,[e.target.name]:e.target.value})}
     
      
      placeholder="Enter email" />
        </Form.Group>

    <Form.Group className="mb-3  col-md-6" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
      
      name='password'
      value={input.password}
      onChange={(e)=>
         setInput({...input,[e.target.name]:e.target.value})}
     
      type="password" placeholder="  enter your Password" />
    </Form.Group>
    <Button variant="success" type="submit">
      Submit
    </Button>



    <p> Have  already  an account ?</p>

<Link   style={{color:"black"}} to="/login">  <u> Login  here</u>
</Link>
</Form>




</div>





  )
}
