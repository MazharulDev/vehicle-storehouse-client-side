import React from 'react';
import car from '../../../images/car-30990_1280.png'
const Banner = () => {
    return (
        <div className='flex items-center'>
            <div className='md:grid grid-cols-2 items-center p-12 md:h-screen'>
                <div>
                    <h2 className='text-3xl md:text-5xl font-bold font-serif mb-8'>Find Your Next Car at Vehicle storehouse</h2>
                    <p>Allow us to guide you through the innovative stress free approach in finding your dream car.</p>
                </div>
                <div>
                    <img src={car} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;