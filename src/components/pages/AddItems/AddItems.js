import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Header from '../../Home/Header/Header';

const AddItems = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        const url = `https://vehicle-storehouse.herokuapp.com/item`
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast("Car added successfully")
                reset();
            })
    }
    return (
        <div>
            <Header />
            <h2 className='text-center my-5 text-4xl'>Add item</h2>
            <form className='w-3/5 mx-auto flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
                <input className='border px-3 py-1 mb-3 w-full bg-gray-50' {...register("name", { required: true})} placeholder="Enter Car Name"/>
                <input className='border px-3 py-1 mb-3 w-full bg-gray-50' {...register("img", { required: true})} placeholder="Enter Image link"/>
                <input className='border px-3 py-1 mb-3 w-full bg-gray-50' type="number" {...register("price",)} placeholder="Enter Car price"/>
                <textarea className='border px-3 py-1 mb-3 w-full bg-gray-50' {...register("des", { required: true})} placeholder="Enter Car description"/>
                <input className='border px-3 py-1 mb-3 w-full bg-gray-50' type="number" {...register("quantity",)} placeholder="Enter Car quantity"/>
                <input className='border px-3 py-1 mb-3 w-full bg-gray-50' {...register("subName", { required: true})} placeholder="Enter Car Supplier Name"/>
                <input className='border px-3 py-1 mb-3 w-full bg-gray-50' type="email" {...register("email", { required: true})} placeholder="Enter your Email"/>
                <input className='px-3 py-1 bg-gray-300 hover:bg-gray-400 cursor-pointer rounded-md w-full' type="submit" />
            </form>
        </div>
    );
};

export default AddItems;