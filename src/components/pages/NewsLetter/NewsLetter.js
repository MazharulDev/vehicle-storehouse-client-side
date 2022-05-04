import React from 'react';
import './NewsLetter.css'
import { toast } from 'react-toastify';
const NewsLetter = () => {
    const handleSignUpBtn=e=>{
        e.preventDefault();
        toast.success("I received your Email successfully")
        e.target.email.value=''
        
    }
    return (
        <div className='my-8'>
            <div className='h-64 flex items-center justify-center bg-img-news'>
            <div className='md:flex items-center justify-center gap-3 bg-text'>
                <h2 className='text-5xl text-center text-white mb-6 md:mb-0'>Newsletter</h2>
                <form onSubmit={handleSignUpBtn}>
                    <input className='px-5 py-3 border rounded-lg mb-4 md:mb-0' type="email" name="email" placeholder='Type your email' />
                    <input className='px-5 py-3 rounded-lg bg-slate-300 text-black ml-3 hover:bg-gray-500 hover:text-white duration-200' type="submit" value="Sign Up" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default NewsLetter;