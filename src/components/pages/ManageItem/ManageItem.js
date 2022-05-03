import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

const ManageItem = ({item,handleDelete}) => {
    
    const {_id, name, img, des, price, quantity, subName } = item;
    return (
        <div className=' p-8 shadow hover:shadow-xl rounded-md bg-white mb-4 md:mb-0'>
        <img className=' hover:scale-110 duration-200' src={img} alt="" />
        <h2 className='text-xl my-5 text-blue-500 font-semibold'>{name}</h2>
        <div className='flex items-center justify-between my-3'>
            <h5 className='text-lg'>Quantity: {quantity}</h5>
            <div className='flex items-center gap-2'>
               <BsFillPersonFill className='font-bold text-lg'></BsFillPersonFill>
                <h3 className='text-lg font-bold'>{subName}</h3>
            </div>
        </div>
        <p className='text-gray-600'>{des.slice(0, 100)}... </p>

        <p className='text-lg font-bold my-2'>${price}</p>
        
        <button onClick={()=>handleDelete(_id)} className=' px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded mt-5'>Delete</button>
        
    </div>
    );
};

export default ManageItem;