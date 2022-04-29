import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';
import Loading from '../../Loading/Loading';

const CreateAccount = () => {
    const location=useLocation();
    const navigate=useNavigate()
    const [signInWithGoogle, userWithGoogle, loadingWithGoogle, errorWithGoogle] = useSignInWithGoogle(auth);
    if(userWithGoogle){
        toast("Login Successfully")
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle();
    }

    let from=location.state?.from?.pathname||'/';
    if(userWithGoogle){
        setTimeout(() => {
            navigate(from,{replace:true});
        }, 1500);
    }
    if(errorWithGoogle){
        toast(errorWithGoogle?.message);
    }
    if(loadingWithGoogle){
        return <Loading></Loading>
    }
    return (
        <div>
            <SimpleHeader />
            <div className='mt-4 w-2/5 mx-auto'>
                <h2 className='text-4xl text-center my-5'>Create an account</h2>
                <form>
                    <input className='border px-3 py-1 mb-3 w-full' type="text" name="name" placeholder='Enter Your full name' />
                    <br />
                    <input className='border px-3 py-1 mb-3 w-full' type="email" name="email" placeholder='Enter Your Email Address' />
                    <br />
                    <input className='border px-3 py-1 mb-3 w-full' type="password" name="password" placeholder='Enter password' />
                    <br />
                    <input className='border px-3 py-1 mb-3 w-full' type="password" name="password" placeholder='Enter Confirm password' />
                    <br />
                    <input className='px-3 py-1 bg-gray-300 hover:bg-gray-400 cursor-pointer rounded-md w-full' type="submit" value="Sign Up" />
                    <h2 className='my-5'>Have an account? <Link className='text-blue-600 hover:underline' to='/login'>Login</Link> </h2>
                </form>
                <button onClick={handleGoogleSignIn} className='flex justify-center items-center gap-6 w-full border rounded-full px-4 py-2 mt-5 hover:bg-slate-100'><FcGoogle></FcGoogle>Google with Sign in</button>
            </div>
        </div>
    );
};

export default CreateAccount;