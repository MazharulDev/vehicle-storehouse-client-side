import { async } from '@firebase/util';
import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import PageTitle from '../../../PageTitle/PageTitle';
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';
import Loading from '../../Loading/Loading';

const CreateAccount = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        userWithEmail,
        loadingWithEmail,
        errorWithEmail,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, errorWithProfile] = useUpdateProfile(auth)
    const [signInWithGoogle, userWithGoogle, loadingWithGoogle, errorWithGoogle] = useSignInWithGoogle(auth);
    const handleNameChange = e => {
        const name = e.target.value;
        setName(name);
    }
    const handleEmailChange = e => {
        const email = e.target.value;
        setEmail(email);
    }
    const handlePasswordChange = e => {
        const password = e.target.value;
        setPassword(password);
    }
    const handleConfirmPassword = e => {
        const confirmPassword = e.target.value;
        setConfirmPassword(confirmPassword);
    }
    const handleSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Two password did not match')
            return;
        }
        if (password < 5) {
            setError("Password must 6 character")
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
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
    if (userWithGoogle) {
        toast("Login Successfully")
    }
    if (userWithEmail) {
        toast("Create Account successfully")

    }
    if (errorWithGoogle) {
        toast(errorWithGoogle?.message)
    }
    if (errorWithEmail) {
        toast(errorWithEmail?.message)
    }
    if (errorWithProfile) {
        toast(errorWithProfile?.message)
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    let from = location.state?.from?.pathname || '/';
    if (userWithGoogle || userWithEmail) {
        setTimeout(() => {
            navigate(from, { replace: true });
        }, 1500);
    }
    if (errorWithGoogle) {
        toast(errorWithGoogle?.message);
    }
    if (loadingWithGoogle || loadingWithEmail || updating) {
        return <Loading></Loading>
    }
    return (
        <div>
            <SimpleHeader />
            <PageTitle title="Create Account"></PageTitle>
            <div className='container mt-4 w-96 mx-auto px-8 border-2 rounded-md'>
                <h2 className='text-4xl text-center my-5 text-slate-600'>Create an account</h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleNameChange} className='border px-3 py-1 mb-3 w-full' type="text" name="name" placeholder='Enter Your full name' required />
                    <br />
                    <input onChange={handleEmailChange} className='border px-3 py-1 mb-3 w-full' type="email" name="email" placeholder='Enter Your Email Address' required />
                    <br />
                    <input onChange={handlePasswordChange} className='border px-3 py-1 mb-3 w-full' type="password" name="password" placeholder='Enter password' required />
                    <br />
                    <input onChange={handleConfirmPassword} className='border px-3 py-1 mb-3 w-full' type="password" name="password" placeholder='Enter Confirm password' required />
                    <br />
                    <p className='text-red-600'>{error}</p>
                    <input className=' px-3 py-1 bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded mt-5 duration-200 cursor-pointer w-full' type="submit" value="Sign Up" />
                    <h2 className='my-5'>Have an account? <Link className='text-blue-600 hover:underline' to='/login'>Login</Link> </h2>
                </form>
                <button onClick={handleGoogleSignIn} className='flex justify-center items-center gap-6 w-full border rounded-full px-4 py-2 my-5 hover:bg-slate-100'><FcGoogle></FcGoogle>Google with Sign in</button>
            </div>
        </div>
    );
};

export default CreateAccount;