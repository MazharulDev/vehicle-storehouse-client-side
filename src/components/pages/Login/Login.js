import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import Loading from '../../Loading/Loading'
import PageTitle from '../../../PageTitle/PageTitle';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        userWithEmail,
        loadingWithEmail,
        errorWithEmail
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = e => {
        const email = e.target.value;
        setEmail(email)
    }
    const handlePasswordChange = e => {
        const password = e.target.value;
        setPassword(password);
    }
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';


    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);

        const url = `${process.env.REACT_APP_SERVER_LINK}/login`
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(result => {
                localStorage.setItem('accessToken', result.accessToken);
                navigate(from, { replace: true });
            })
    }
    const [signInWithGoogle, userWithGoogle, loadingWithGoogle, errorWithGoogle] = useSignInWithGoogle(auth);
    if (userWithGoogle || userWithEmail) {
        toast.success("Login Successfully")
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();

    }
    if (userWithGoogle) {
        const email = userWithGoogle.user.email;
        const url = `${process.env.REACT_APP_SERVER_LINK}/login`
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(result => {
                localStorage.setItem('accessToken', result.accessToken);
                navigate(from, { replace: true });
            })


    }
    if (loadingWithGoogle || loadingWithEmail) {
        return <Loading></Loading>
    }
    if (errorWithGoogle) {
        toast(errorWithGoogle?.message)
    }
    if (errorWithEmail) {
        toast(errorWithEmail?.message)
    }
    return (
        <div>
            <SimpleHeader />
            <PageTitle title='Login'></PageTitle>
            <div className='container mt-4 w-96 mx-auto p-5 border-2 rounded-md'>
                <div>
                    <h2 className='text-4xl text-center text-slate-600'>Login</h2>
                    <form onSubmit={handleSubmit} className='mt-5'>
                        <input onChange={handleEmailChange} className='px-3 py-1 bg-gray-100 border rounded w-full' type="email" name="email" placeholder='Email' required />
                        <br />
                        <input onChange={handlePasswordChange} className='px-3 py-1 bg-gray-100 my-2 border rounded w-full' type="password" name="password" placeholder='Password' required />
                        <br />
                        <div className='flex justify-between items-center'>
                            <div>
                                <input className='my-5' type="checkbox" name="remember" />
                                <label className='ml-2' for="remember">Remember me</label>
                            </div>
                            <h2 className='my-3'><Link className='text-blue-600 hover:underline' to='/forgotPassword'>Forgot password?</Link></h2>
                        </div>
                        <input className=' px-3 py-1 bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded mt-5 duration-200 cursor-pointer w-full' type="submit" value="Login" />

                        <h2 className='my-5'>Don't have an account? <Link className='text-blue-600 hover:underline' to='/createAccount'>Create an Account</Link> </h2>
                    </form>
                    <button onClick={handleGoogleSignIn} className='flex justify-center items-center gap-6 w-full border rounded-full px-4 py-2 mt-5 hover:bg-slate-100'><FcGoogle></FcGoogle>Google with Sign in</button>
                </div>

            </div>

        </div>
    );
};

export default Login;