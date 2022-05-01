import React, { useEffect, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import Header from '../../Home/Header/Header';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, img, des, price, quantity, subName } = item;
    useEffect(() => {
        const url = `https://vehicle-storehouse.herokuapp.com/item/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])
    return (
        <div>
            <Header></Header>
            <div className='w-3/5 mx-auto p-8 shadow hover:shadow-xl rounded-md bg-white mt-3'>
                <img className='w-full mx-auto' src={img} alt="" />
                <h2 className='text-xl my-5 text-blue-500 font-semibold'>{name}</h2>
                <div className='flex items-center justify-between my-3'>
                    <h5 className='text-lg'>Quantity: {quantity}</h5>
                    <div className='flex items-center gap-2'>
                        <BsFillPersonFill className='font-bold text-lg'></BsFillPersonFill>
                        <h3 className='text-lg font-bold'>{subName}</h3>
                    </div>
                </div>
                <p className='text-gray-600'>{des} </p>

                <p className='text-lg font-bold my-2'>${price}</p>

            </div>
        </div>
    );
};

export default Inventory;