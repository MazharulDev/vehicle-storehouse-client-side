import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user]=useAuthState(auth);
    const [items,setItems]=useState([])
    useEffect(()=>{
        const email=user?.email;
        const url=`https://vehicle-storehouse.herokuapp.com/items?email=${email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[user])

    const handleDelete=(id)=>{
        const proceed=window.confirm("Are you sure you want to delete?")
        if(proceed){
            console.log("delete user with id",id);
            const url=`https://vehicle-storehouse.herokuapp.com/item/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining=items.filter(item=>item._id !==id)
                setItems(remaining);
            })
        }
    }

    return (
        <div className='bg-gray-100'>
            <SimpleHeader/>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-4'>My Items</h2>
            </div>
            <Link to='/addItems' className='flex justify-center'>
                <button className='px-2 py-1 bg-transparent rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white duration-200 hover:scale-105'>Add New Item</button>
            </Link>
            <div className='container md:grid grid-cols-3 gap-4 w-full mx-auto p-12'>
            {
                items.map(item=><MyItem key={item._id} item={item} handleDelete={handleDelete}></MyItem>)
            }
            </div>
        </div>
    );
};

export default MyItems;