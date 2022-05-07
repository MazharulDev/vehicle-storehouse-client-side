import React from 'react';
import useLoadData from '../../../hooks/useLoadData';
import SimpleHeader from '../../Home/Header/SimpleHeader/SimpleHeader';
import AllItem from '../Allitem/AllItem';

const AllItems = () => {
    const [items]=useLoadData();
    return (
        <div>
            <SimpleHeader/>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold'>All Items</h2>
            </div>
            <div className='container md:grid grid-cols-3 gap-4 w-fit mx-auto p-12'>
                {
                    items.map(item => <AllItem key={item._id} item={item}></AllItem>)
                }
            </div>
        </div>
    );
};

export default AllItems;