import React,{useRef} from 'react'
import conimg from "./OIP.jpg";
import { FaLinkedin,FaWhatsapp,FaInstagram } from 'react-icons/fa';
import {SlEnvolope} from "react-icons/sl";

function Contact() {
  const nameInput=useRef(null);
    const emailInput=useRef(null);
    const query_desc=useRef(null);
    function ContactHandler()
    {
        const username=nameInput.current.value;
        const useremail=emailInput.current.value;
        const userquery=query_desc.current.value;

        let user={
            name:username,
            email:useremail,
            query:userquery,
        }

        if(username.length > 3 && useremail.length > 3)
            {
                fetch('https://hackathon-vcet-default-rtdb.firebaseio.com/user.json',{
                method:'post',
                body:JSON.stringify(user)
                }).then(()=>
                {
                    alert("Thank you for Contacting Us.");
                    nameInput.current.value="";
                    emailInput.current.value="";
                    query_desc.current.value="";
                })
            }
        else{
          alert("Please fill all Details.")
        }
    }
  return (
    <div style={{marginTop:"70px"}} className='text-dark'>
      <div className="row justify-content-evenly">
        <div className="col-md-4 mt-5">
          <img src={conimg} className='img-fluid rounded-4' />
        </div>
        <div className="col-md-5 mt-5">
          <h2 className='fs-1 text-center'>Contact Us</h2>
          <center><form>
            <input type="text" placeholder='Enter your Name' className='w-100 rounded-3 border fs-5 ps-2 mb-3' ref={nameInput}/><br />
            <input type="email" placeholder='Enter you Mail' className='w-100 rounded-3 border fs-5 ps-2 mb-3' ref={emailInput}/><br />
            <textarea placeholder='Enter Message' rows="2" className='w-100 rounded-3 border fs-5 ps-2 mb-3' ref={query_desc}></textarea><br />
            <button className='btn bg-success rounded-pill text-white' onClick={ContactHandler}>Send Message</button>
          </form></center>
        </div>
      </div>
      <div className='row justify-content-center text-center mt-5'>
        <div className="col-md-2 text-primary"><span className='fs-1'><FaLinkedin/></span><p>LinkedIn</p></div>
        <div className="col-md-2 text-success"><span className='fs-1'><FaWhatsapp/></span><p>WhatsApp</p></div>
        <div className="col-md-2 text-danger-emphasis"><span className='fs-1'><SlEnvolope/></span><p>G-mail</p></div>
        <div className="col-md-2 text-danger"><span className='fs-1'><FaInstagram/></span><p>Instagram</p></div>
      </div>
    </div>
  )
}

export default Contact