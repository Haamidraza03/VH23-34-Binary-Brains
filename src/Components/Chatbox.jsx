import React from 'react'
import {IoSend} from 'react-icons/io5';

function Chatbox() {
  return (
    <div className='mt-2 contain'>
        <div className="row justify-content-center p-2 text-center bg-dark text-white rounded-pill">
            ChatBox
        </div>
        <div className="row justify-content-around">
            <div className="col-md-6 border hh">
                Students
            </div>
            <div className="col-md-6 border bg-secondary hh text-white">
                Chatting Interface
            </div>
        </div>
        <input type="text" className='w-50' placeholder='Send Message' /> <IoSend/>
    </div>
  )
}

export default Chatbox