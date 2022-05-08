import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../../PageTitle/PageTitle';
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
            <PageTitle title='Forgot Password'></PageTitle>
            <h2 className='text-center text-gray-500 text-4xl my-5'>Reset Password</h2>
            <div className='w-96 mx-auto mt-5 border-2 p-5'>

                <input onChange={handleEmailChange} className='w-full border px-3 py-1 bg-gray-100' type="email" name="email" placeholder='Enter Email' />
                <button onClick={handleResetBtn} className=' px-3 py-1 bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded mt-5 duration-200 cursor-pointer'>
                    Sent
                </button>
            </div>
        </div>
    );
};

export default ForgotPassword;