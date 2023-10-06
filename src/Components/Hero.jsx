import React from 'react'
import {Link} from 'react-router-dom';
import Homeimg from "./home.png";
import {useTypewriter,Cursor} from "react-simple-typewriter";

function Hero() {
    const [text] = useTypewriter({
        words : ["Today a Reader,","Tomorrow a Leader."],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80
      });
  return (
    <div className="row justify-content-evenly">
        <div className="col-md-4 st" style={{marginTop:"150px"}}>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <p className='fs-1'>Start your Learning here with <b><span className='stdtext'>Study Buddy</span></b></p>
            <div></div>
            <p className='fs-1 autotype'>{text}<span style={{color:"black"}}><Cursor/></span></p>
            </div>
            <center><Link to="/signup"><button className='btn rounded-pill bg-warning border-dark py-2 px-4 fs-5 shadow' data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><b>Login/SignUp</b></button></Link></center>
        </div>
        <div className="col-md-5 mt-5">
            <img src={Homeimg} className='img-fluid' data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out"/>
        </div>
    </div>
  )
}

export default Hero