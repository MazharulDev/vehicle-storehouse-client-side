import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import PageTitle from '../../../PageTitle/PageTitle';
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const getEmail = async () => {
            const email = user?.email;
            const url = `https://vehicle-storehouse.up.railway.app/items?email=${email}`
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data)

            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    navigate('/login')
                    signOut(auth);
                }
            }
        }
        getEmail()
    }, [user])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?")
        if (proceed) {
            const url = `https://vehicle-storehouse.up.railway.app/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining);
                })
        }
    }

    return (
        <div className='bg-gray-100'>
            <SimpleHeader />
            <PageTitle title='My Item'></PageTitle>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-4'>{user.displayName} Items </h2>
            </div>
            <Link to='/addItems' className='flex justify-center'>
                <button className='px-2 py-1 bg-transparent rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white duration-200 hover:scale-105'>Add New Item</button>
            </Link>
            <div className='container md:grid grid-cols-3 gap-4 w-full mx-auto p-12'>
                {
                    items?.map(item => <MyItem key={item._id} item={item} handleDelete={handleDelete}></MyItem>)
                }
            </div>

        </div>
    );
};

export default MyItems;