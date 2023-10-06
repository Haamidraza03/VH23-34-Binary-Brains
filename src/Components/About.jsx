import React from 'react'
import img from "./about.webp";

function About() {
  return (
    <div>
        <p className="text-center fs-1 mb-3" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out"><b>About Us</b></p>
        <div className="row justify-content-evenly">
            <div className="col-md-4">
                <img src={img} className='img-fluid rounded-4' data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out"/>
            </div>
            <div className="col-md-4 mt-5" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                Study Buddy is an innovative platform that connects students studying the same subjects, offering a virtual collaborative space. The platform should provide features like shared study materials, virtual study rooms, and AI-powered study groups tailored to individual learning styles and preferences, fostering effective and engaging learning.
            </div>
        </div>
        <div className="row justify-content-evenly">
        <p className="text-center fs-1 mt-3 mb-3" ><b>Features</b></p>
          <div className="col-md-2 border p-3 rounded-4 shadow mb-5 mt-3 bg-white">Collaborative virtual study environment.</div>
          <div className="col-md-2 border p-3 rounded-4 shadow mb-5 mt-3 bg-white">Personalized AI-powered study groups.</div>
          <div className="col-md-2 border p-3 rounded-4 shadow mb-5 mt-3 bg-white">Shared study materials and resources.</div>
          <div className="col-md-2 border p-3 rounded-4 shadow mb-5 mt-3 bg-white">Enhanced learning experiences for students.</div>
        </div>
    </div>
  )
}

export default About