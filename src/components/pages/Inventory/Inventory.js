import React, { useEffect, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PageTitle from '../../../PageTitle/PageTitle';
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, img, des, price, quantity, subName } = item;
    const [upCount, setUpCount] = useState(quantity);
    //quantity not found fix
    useEffect(() => {
        setUpCount(quantity)
    }, [quantity])

    useEffect(() => {
        const url = `https://vehicle-storehouse.herokuapp.com/item/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);


    const handleAddQuantity = e => {
        e.preventDefault();
        const quantityNumber = e.target.number.value;

        let count = parseInt(upCount) + parseInt(quantityNumber);
        setUpCount(parseInt(upCount) + parseInt(quantityNumber));
        const updateQuantity = { count };
        //send data to the server
        const url = `https://vehicle-storehouse.herokuapp.com/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success('Quantity added');

            })
        e.target.number.value = ''
    }

    const handleDelivered = () => {
        setUpCount(+upCount - 1)
        const count = parseInt(upCount) - parseInt(1)
        const updateDelivery = { count }
        //send data to the server
        const url = `https://vehicle-storehouse.herokuapp.com/item/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDelivery)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Delivered');
            })
    }
    return (
        <div>
            <SimpleHeader />
            <PageTitle title="Update"></PageTitle>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold'>Update</h2>
            </div>
            <div className='container mx-auto'>
                <div className='lg:grid grid-cols-2 w-fit items-center gap-5 mx-auto p-8 border-2 border-blue-500 rounded-md bg-white mt-3'>
                    <div className='box-border overflow-hidden cursor-pointer'>
                        <img className='h-full w-full' src={img} alt="" />
                    </div>
                    <div>
                        <div>
                            <h2 className='text-xl my-5 text-blue-500 font-semibold'>{name}</h2>
                            <div className='flex items-center justify-between my-3'>
                                <h5 className='text-lg'>Quantity: {upCount}</h5>
                                <div className='flex items-center gap-2'>
                                    <BsFillPersonFill className='font-bold text-lg'></BsFillPersonFill>
                                    <h3 className='text-lg font-bold'>{subName}</h3>
                                </div>
                            </div>
                            <p className='text-gray-600'>{des} </p>

                            <p className='text-lg font-bold my-2'>${price}</p>
                            <div className='md:flex justify-between items-center mt-4'>
                                <button onClick={handleDelivered} className='inline-block px-5 transition-all py-1 rounded-md text-white hover:scale-110 border-2 duration-300 border-blue-600 hover:bg-transparent hover:text-black cursor-pointer bg-blue-600'>Delivered</button>
                                <form className='flex gap-4' onSubmit={handleAddQuantity}>
                                    <input className='w-28 border border-black rounded px-2 py-1' type="number" name="number" placeholder='Quantity' required/>
                                    <input className='inline-block px-5 transition-all py-1 rounded-md text-white hover:scale-110 border-2 duration-300 border-blue-600 hover:bg-transparent hover:text-black cursor-pointer bg-blue-600' type="submit" value="Add" />
                                </form>
                            </div>

                            <Link to="/manageItems"><button className=' px-3 py-1 w-full bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded mt-5 duration-200 hover:scale-105'>Manage All Items</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;