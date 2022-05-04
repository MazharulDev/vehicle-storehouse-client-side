import React from 'react';
import './NewsLetter.css'
import { useState } from 'react';
import { toast } from 'react-toastify';
const NewsLetter = () => {
    const [email,setEmail]=useState('')
    const handleEmailChange=e=>{
        setEmail(e.target.value)
    }
    const handleSignUpBtn=()=>{
        toast.success("I received your Email successfully")
        
    }
    return (
        <div className='my-8'>
            <div className='h-64 flex items-center justify-center bg-img-news'>
            <div className='md:flex items-center justify-center gap-3 bg-text'>
                <h2 className='text-5xl text-center text-white mb-6 md:mb-0'>Newsletter</h2>
                <div>
                    <input onChange={handleEmailChange} className='px-5 py-3 border rounded-lg mb-4 md:mb-0' type="email" name="email" placeholder='Your Email Address'/>
                    <button onClick={handleSignUpBtn} className='px-5 py-3 rounded-lg bg-slate-300 text-black ml-3 hover:bg-gray-500 hover:text-white duration-200'>Sign up</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default NewsLetter;