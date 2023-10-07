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
        <a href="https://www.kommunicate.io/livechat-demo?appId=39ed37a4c9400cb65b697722bb05879f8&botIds=buddy-qqn7z&assignee=buddy-qqn7z"><span className='text-white bg-primary rounded-5 px-2' style={{fontSize:"50px",position:"fixed",bottom:"20px", right:"30px",zIndex:"99"}}><BsRobot/></span></a>
        <div className="row justify-content-evenly">
          <div className="col-md-3 rounded-4 p-2 bg-white mb-3">
            <img src={img1} className='img-fluid rounded-4' />
            <h1>Mathathematics-Integration part 1</h1>
            <p>Learn exciting formulas of integration from basics to advance.</p>
            <p>FREE</p>
            <Link to="/groupenter"><button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button></Link>
          </div>
          <div className="col-md-3 rounded-4 p-2 bg-white mb-3">
            <img src={img2} className='img-fluid rounded-4' />
            <h1>Science-Disaster Management</h1>
            <p>Learn amazing facts about causes of disaster and how to manage it.</p>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
          <div className="col-md-3 rounded-4 p-2 bg-white mb-3">
            <img src={img3} className='img-fluid rounded-4' />
            <h1>General Knowledge-Current Affairs</h1>
            <p>Learn What's going in our nation India and all over the  world.</p>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-md-3 rounded-4 p-2 bg-white mb-3">
            <img src={img4} className='img-fluid rounded-4'/>
            <h1>History- Brave story of Shivaji Maharaj</h1>
            <p>Know about Shivaji Maharaj, his childhood memories and his brave stories</p>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
          <div className="col-md-3 rounded-4 p-2 bg-white mb-3">
            <img src={img5} className='img-fluid rounded-4' />
            <h1>Maths-Solve derivation Part-1 by R. Sharma</h1>
            <p>Know how easy is to solve derivation and enjoy solving different types of problems.</p>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
          <div className="col-md-3 rounded-4 p-2 bg-white mb-3">
            <img src={img6} className='img-fluid rounded-4' />
            <h1>Scienec-Living things and its classification</h1>
            <p>Learn charecteristics, factors and types of living things and how they are classified</p>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-md-3 rounded-4 p-2 bg-white mb-3">
            <img src={img7} className='img-fluid rounded-4' />
            <h1>GK-Solved paper of UPSC by M. Jam</h1>
            <p>Helps to carks UPSC GK questions for UPSC and other Compititive exams</p>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
          <div className="col-md-3 rounded-4 p-2 bg-white mb-3">
            <img src={img8} className='img-fluid rounded-4' />
            <h1>Geography-Pollution by J. Rowling</h1>
            <p>Learn different types of pollution ,its factors and how can be stop!!!</p>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
          <div className="col-md-3 rounded-4 p-2 bg-white mb-3">
            <img src={img9} className='img-fluid rounded-4' />
            <h1>History- India before Mughals by Jain</h1>
            <p>Learn what was the condition before and after the Mughals in India</p>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 rounded-4 p-2 bg-white mb-3">
            <img src={img10} className='img-fluid rounded-4' />
            <h1>Geography- Resources and development</h1>
            <p>Learn how environment and its resources are helpfull and how it can be prevented</p>
            <p>FREE</p>
            <button className='btn rounded-pill px-4 py-1 bg-primary text-white'>Join Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Groups
