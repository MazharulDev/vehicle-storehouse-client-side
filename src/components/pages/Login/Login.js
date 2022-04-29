import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';
import auth from '../../../firebase.init';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
const Login = () => {
    const navigate=useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        navigate('/')
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle();
    }
    return (
        <div>
            <SimpleHeader/>
            <div className='mt-4 flex justify-center'>
                <div>
                    <h2 className='text-4xl text-center text-slate-600'>Login</h2>
                    <form className='mt-5'>
                        <input className='px-3 py-1 bg-gray-100 border rounded' type="email" name="email" placeholder='Email' />
                        <br />
                        <input className='px-3 py-1 bg-gray-100 my-2 border rounded' type="password" name="password" placeholder='Password' />
                        <br />
                        <input className='px-3 py-1 bg-gray-300 hover:bg-gray-400 cursor-pointer rounded-md' type="submit" value="Login" />
                        <Link to='/forgotPassword'><h2 className='text-blue-600 my-3'>Forgot password? </h2></Link>
                    </form>
                    <button onClick={handleGoogleSignIn} className='flex items-center gap-6 w-full border rounded-full px-4 py-2 mt-5 hover:bg-slate-100'><FcGoogle></FcGoogle>Google with Sign in</button>
                </div>

            </div>

        </div>
    );
};

export default Login;