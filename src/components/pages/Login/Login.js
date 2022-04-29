import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';
import auth from '../../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import Loading from '../../Loading/Loading'
const Login = () => {
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
    if(loadingWithGoogle){
        return <Loading></Loading>
    }
    if(errorWithGoogle){
        toast(errorWithGoogle?.message)
    }
    return (
        <div>
            <SimpleHeader/>
            <div className='mt-4 w-2/5 mx-auto'>
                <div>
                    <h2 className='text-4xl text-center text-slate-600'>Login</h2>
                    <form className='mt-5'>
                        <input className='px-3 py-1 bg-gray-100 border rounded w-full' type="email" name="email" placeholder='Email' required/>
                        <br />
                        <input className='px-3 py-1 bg-gray-100 my-2 border rounded w-full' type="password" name="password" placeholder='Password' required />
                        <br />
                        <input className='px-3 py-1 bg-gray-300 hover:bg-gray-400 cursor-pointer rounded-md w-full' type="submit" value="Login" />
                        <h2 className='my-3'><Link className='text-blue-600 hover:underline' to='/forgotPassword'>Forgot password?</Link></h2>
                        <h2>Don't have an account? <Link className='text-blue-600 hover:underline' to='/createAccount'>Create an Account</Link> </h2>
                    </form>
                    <button onClick={handleGoogleSignIn} className='flex justify-center items-center gap-6 w-full border rounded-full px-4 py-2 mt-5 hover:bg-slate-100'><FcGoogle></FcGoogle>Google with Sign in</button>
                </div>

            </div>

        </div>
    );
};

export default Login;