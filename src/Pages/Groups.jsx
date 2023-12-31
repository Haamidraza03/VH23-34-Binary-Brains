import React from 'react'
// import data from "./TemplateData.json";
import img1 from "./intergration.webp";
import img2 from "./science dm.png";
import img3 from "./GK CF.png";
import img4 from "./shiv.jpg";
import img5 from "./derivation.jpg";
import img6 from "./livthing.webp";
import img7 from "./upsc.jpg";
import img8 from "./poluttion.jpg";
import img9 from "./mugu.jpg";
import img10 from "./res.png";
import {Link} from 'react-router-dom';
import {BsRobot} from "react-icons/bs";

function Groups() {
  return (
    <>
      <div style={{marginTop:"90px"}}>
        <a href="https://www.kommunicate.io/livechat-demo?appId=39ed37a4c9400cb65b697722bb05879f8&botIds=buddy-qqn7z&assignee=buddy-qqn7z"><span className='text-dark bg-warning rounded-5 px-2 pb-2' style={{fontSize:"50px",position:"fixed",bottom:"20px", right:"30px",zIndex:"99"}}><BsRobot/></span></a>
        <div className="row justify-content-evenly px-4">
          <div className="col-md-3 rounded-4 p-1 bg-white mb-3">
            <center><img src={img1} className=' rounded-4' width="343" height="213"/></center>
            <h3>Mathathematics-Integration part 1</h3>
            <center><textarea rows="2" cols="42" className=' border'>Learn exciting formulas of integration from basics to advance.</textarea></center>
            <p>FREE</p>
            <Link to="/groupenter"><button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button></Link>
          </div>
          <div className="col-md-3 rounded-4 p-1 bg-white mb-3">
            <center><img src={img2} className='rounded-4' width="343" height="213"/></center>           <h3>Science-Disaster Management</h3>
            <center><textarea rows="2" cols="42" className='border'>Learn amazing facts about causes of disaster and how to manage it.</textarea></center>
            <p>Rs.150</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Pay Now</button>
          </div>
          <div className="col-md-3 rounded-4 p-1 bg-white mb-3">
            <center><img src={img3} className=' rounded-4' width="343" height="213"/></center>
            <h3>General Knowledge-Current Affairs</h3>
            <center><textarea rows="2" cols="42" className='border'>Learn What's going in our nation India and all over the  world.</textarea></center>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
        </div>
        <div className="row justify-content-evenly px-4">
          <div className="col-md-3 rounded-4 p-1 bg-white mb-3">
            <center><img src={img4} className=' rounded-4'width="343" height="213"/></center>           <h3>History- Brave story of Shivaji Maharaj</h3>
            <center><textarea rows="2" cols="42" className='border'>Know about Shivaji Maharaj, his childhood memories and his brave stories.</textarea></center>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
          <div className="col-md-3 rounded-4 p-1 bg-white mb-3">
            <center><img src={img5} className='rounded-4' width="343" height="213"/></center>           <h3>Maths-Solve derivation Part-1 by R. Sharma</h3>
            <center><textarea rows="2" cols="42" className='border'>Know how easy is to solve derivation and enjoy solving different types of problems.</textarea></center>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
          <div className="col-md-3 rounded-4 p-1 bg-white mb-3">
            <center><img src={img6} className=' rounded-4' width="343" height="213"/></center>
            <h3>Scienec-Living things and its classification</h3>
            <center><textarea rows="2" cols="42" className='border'>Learn charecteristics, factors and types of living things and how they are classified.</textarea></center>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
        </div>
        <div className="row justify-content-evenly px-4">
          <div className="col-md-3 rounded-4 p-1 bg-white mb-3">
            <center><img src={img7} className=' rounded-4' width="343" height="213"/></center>
            <h3>GK-Solved paper of UPSC by M. Jam</h3>
            <center><textarea rows="2" cols="42" className='border'>Helps to carks UPSC GK questions for UPSC and other Compititive exams.</textarea></center>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
          <div className="col-md-3 rounded-4 p-1 bg-white mb-3">
            <center><img src={img8} className=' rounded-4' width="343" height="213"/></center>
            <h3>Geography-Pollution by J. Rowling</h3>
            <center><textarea rows="2" cols="42" className='border'>Learn different types of pollution ,its factors and how can be stop!!!</textarea></center>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
          <div className="col-md-3 rounded-4 p-1 bg-white mb-3">
            <center><img src={img9} className=' rounded-4' width="343" height="213"/></center>
            <h3>History- India before Mughals by Jain</h3>
            <center><textarea rows="2" cols="42" className='border'>Learn what was the condition before and after the Mughals in India.</textarea></center>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
        </div>
        <div className="row justify-content-center px-4">
          <div className="col-md-3 rounded-4 p-1 bg-white mb-3">
            <center><img src={img10} className=' rounded-4' width="343" height="213"/></center>
            <h3>Geography- Resources and development</h3>
            <center><textarea rows="2" cols="42" className='border'>Learn how environment and its resources are helpfull and how it can be prevented.</textarea></center>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Groups
