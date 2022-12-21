import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Home = () => {

const navigate= useNavigate()

    const handleLogout= () =>{



        localStorage.removeItem("Loggedin");
    navigate("/login");
    }
  const userName =JSON.parse(localStorage.getItem("user"));

    return (
    <div>
 <div  style={{backgroundColor:"#87123d"}} className="container  col-md-6">

             <h1   style={{color:"#16732f"}} align="center">   HOME PAGE</h1>

          <h2   align ="center" >  Welcome :{userName.name}</h2>
<div  className='text-center'  >
<button     onClick ={handleLogout}>  Logout</button>

</div>



 </div>



    </div>
  )
}
