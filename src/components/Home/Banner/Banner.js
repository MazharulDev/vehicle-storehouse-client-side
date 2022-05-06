import React from 'react';
import './Banner.css'
import Header from '../Header/Header';
const Banner = () => {
    return (
        <div className='bg-img-banner' >
            <Header/>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='md:grid grid-cols-2 items-center p-12 h-[30rem] md:h-screen'>
                <div>
                    <h2 className='text-3xl md:text-6xl font-bold font-serif mb-8 text-white'>Find Your Next Car at Vehicle storehouse</h2>
                    <p className='text-lg text-white'>Allow us to guide you through the innovative stress free approach in finding your dream car.</p>
                    <a href='#visit' className='inline-block px-14 mt-10 transition-all py-3 rounded-md text-white hover:scale-110 border-2 duration-300 border-blue-600 hover:bg-transparent hover:text-blue-200 bg-blue-600 uppercase'>Learn More</a>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Banner;