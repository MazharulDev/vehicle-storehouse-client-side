import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Item = ({ item }) => {
    const { _id, name, img, des, price, quantity, subName } = item;
    return (
        <div className='shadow hover:shadow-xl rounded-md bg-white mb-4 md:mb-0 box-border overflow-hidden'>
            <div className='box-border h-48 overflow-hidden cursor-pointer'>
                <img className=' hover:scale-105 duration-300 h-full w-full' src={img} alt="" />
            </div>
            <div className=' px-8 py-5'>
                <h2 className='text-xl my-5 text-blue-500 font-semibold'>{name}</h2>
                <div className='flex items-center justify-between my-3'>
                    <h5 className='text-lg font-medium'>Quantity: {quantity}</h5>
                    <div className='flex items-center gap-2'>
                        <BsFillPersonFill className='font-bold text-lg'></BsFillPersonFill>
                        <h3 className='text-lg font-bold'>{subName}</h3>
                    </div>
                </div>
                <p className='text-gray-600'>{des.slice(0, 100)}... </p>

                <p className='text-2xl font-bold my-2'>${price}</p>
                <Link to={`/inventory/${_id}`} className='w-16'>
                    <button className=' px-3 py-1 bg-transparent border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded mt-5 duration-200 hover:scale-105'>Update</button>
                </Link>
            </div>
        </div>
    );
};

export default Item;