import React, { useEffect, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import { toast } from 'react-toastify';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, img, des, price, quantity, subName } = item;
    const [upCount,setUpCount]=useState(quantity);
    //quantity not found fix
    useEffect(()=>{
        setUpCount(quantity)
    },[quantity])

    useEffect(() => {
        const url = `https://vehicle-storehouse.herokuapp.com/item/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);
    

    const handleAddQuantity=e=>{
        e.preventDefault();
        const quantityNumber=e.target.number.value;

        let count=parseInt(upCount)+parseInt(quantityNumber)
        setUpCount(parseInt(upCount)+parseInt(quantityNumber))
        const updateQuantity={count};
        //send data to the server
        const url = `https://vehicle-storehouse.herokuapp.com/item/${id}`
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateQuantity)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success',data);
            toast.success('Quantity added');
            
        })
        e.target.number.value=''
    }

    const handleDelivered=()=>{
        setUpCount(+upCount-1)
        const count=parseInt(upCount)-parseInt(1)
        const updateDelivery={count}
        //send data to the server
        const url = `https://vehicle-storehouse.herokuapp.com/item/${id}`
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateDelivery)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success',data);
            toast('Delivered');
        })
    }
    return (
        <div>
            <Header></Header>
            <div className='w-3/5 mx-auto p-8 shadow hover:shadow-xl rounded-md bg-white mt-3'>
                <img className='w-full mx-auto' src={img} alt="" />
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
                    <button onClick={handleDelivered} className='px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded mb-4 md:mb-0'>Delivered</button>
                    <form className='flex gap-4' onSubmit={handleAddQuantity}>
                        <input className='w-28 border border-black rounded px-2 py-1' type="number" name="number" placeholder='Quantity' />
                        <input className='px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded cursor-pointer' type="submit" value="Add" />
                    </form>
                </div>
                
                <Link to="/manageItems"><button className='w-full mt-4 px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded'>Manage All Items</button></Link>
                
            </div>
        </div>
    );
};

export default Inventory;