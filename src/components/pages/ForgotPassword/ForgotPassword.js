import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';
import Loading from '../../Loading/Loading';

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const [email,setEmail]=useState('');
        const handleEmailChange=e=>{
            const email=e.target.value;
            setEmail(email);
        }
        const handleResetBtn=()=>{
            sendPasswordResetEmail(email);
            toast.success("Reset link send successfully")
            email.target.reset();
        }
        if(error){
            toast(error?.message)
        }
        if(sending){
            return <Loading></Loading>
        }
    return (
        <div>
            <SimpleHeader />
            <h2 className='text-center text-gray-500 text-4xl my-5'>Reset Password</h2>
            <div className='w-2/5 mx-auto mt-5'>

                <input onChange={handleEmailChange} className='w-full border px-3 py-1 bg-gray-100' type="email" name="email" placeholder='Enter Email' />
                <button onClick={handleResetBtn} className='mt-5 px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-md'>
                    Sent
                </button>
            </div>
        </div>
    );
};

export default ForgotPassword;