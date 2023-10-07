import './App.css';
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "../src/Pages/Home";
import Navbar from "../src/Components/Navbar";
import Signup from "../src/Pages/Signup";
import Login from "../src/Pages/Login";
import Contact from "../src/Pages/Contact"
import Groups from '../src/Pages/Groups';
import Groupenter from '../src/Pages/Groupenter';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(()=>{
    AOS.init({once:"true"});
  },[])
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/groups' element={<Groups/>} />
          <Route path='/groupenter' element={<Groupenter/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
