import React from 'react'
import {Link} from "react-router-dom";
import logowobg from "./logowobg.png";

function Login() {
  return (
    <div className='justify-content-center' style={{marginTop:"90px"}}>
        <div className="row justify-content-center">
            <div className="mx-auto col-md-3 bg-white text-center rounded-4" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
                <h1 className='mb-3 mt-3'>Login</h1> 
                <hr />
                <img src={logowobg} className='img-fluid rounded=circle' />
                <input type="email" className='inp ps-3 fs-4 border w-100 rounded-pill mb-4' placeholder='Enter your E-mail' id='email' />
                
                <input type="password" className='inp ps-3 fs-4 border w-100 rounded-pill mb-4' placeholder='Enter your Password' id='password' />
                <br />
                <button className='btn border bg-success text-white px-4 py-1 rounded-pill mb-1 fs-5'>Login</button>
                <p>Don't have an Account? <Link to="/signup">SignUp</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login