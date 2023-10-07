import React from 'react'
import {Link} from 'react-router-dom';

function Signup() {
    
  return (
    <div className='justify-content-center' style={{marginTop:"150px"}}>
        <div className="row justify-content-center">
            <div className="mx-auto col-md-3 bg-white text-center rounded-4" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
                <h1 className='mb-3 mt-4'>SignUp</h1>
                <input type="text" className='inp ps-3 fs-5 border w-100 rounded-pill mb-4' placeholder='Enter your Name' id='name' />
                <input type="email" className='inp ps-3 fs-5 border w-100 rounded-pill mb-4' placeholder='Enter your E-mail' id='email' />
                <input type="number" className='inp ps-3 fs-5 border w-100 rounded-pill mb-4' placeholder='Phone Number' id='phone' />
                <input type="password" className='inp ps-3 fs-5 border w-100 rounded-pill mb-4' placeholder='Enter your Password' id='password' />
                <input type="password" className='inp ps-3 fs-5 border w-100 rounded-pill mb-4' placeholder='Confirm Password' id='cpassword' /> <br />
                <button className='btn border bg-success text-white px-4 py-1 rounded-pill mb-1'>SignUp</button>
                <p>Already have an Account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup