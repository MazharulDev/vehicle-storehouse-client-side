import React from 'react';
import './Banner.css'
import car from '../../../images/car-30990_1280.png'
const Banner = () => {
    return (
        <div className='bg-img-banner' >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='md:grid grid-cols-2 items-center p-12 md:h-screen'>
                <div>
                    <h2 className='text-3xl md:text-6xl font-bold font-serif mb-8 text-yellow-600'>Find Your Next Car at Vehicle storehouse</h2>
                    <p className='text-lg text-yellow-900'>Allow us to guide you through the innovative stress free approach in finding your dream car.</p>
                </div>
                <div>
                    <img className='scale-125' src={car} alt="car" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;