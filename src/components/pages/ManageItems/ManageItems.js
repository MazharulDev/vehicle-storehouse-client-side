import React from 'react';
import { Link } from 'react-router-dom';
import useLoadData from '../../../hooks/useLoadData';
import Header from '../../Home/Header/Header';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [items,SetItems]=useLoadData()
    

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
                SetItems(remaining);
            })
        }
    }
    
    return (
        <div className='bg-gray-100'>
            <Header/>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-4'>Manage Items</h2>
            </div>
            <Link to='/addItems' className='flex justify-center'>
                <button className='px-2 py-1 bg-transparent rounded border-2 border-blue-500 hover:bg-blue-500 hover:text-white duration-200 hover:scale-105'>Add New Item</button>
            </Link>
            <div className='container md:grid grid-cols-3 gap-4 w-fit mx-auto p-12'>
            {
                items.map(item=><ManageItem key={item._id} item={item} handleDelete={handleDelete}></ManageItem>)
            }
            </div>
        </div>
    );
};

export default ManageItems;