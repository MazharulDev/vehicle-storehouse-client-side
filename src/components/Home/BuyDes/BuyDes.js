import React from 'react';
import car from '../../../images/buy-car.jpg'

const BuyDes = () => {
    return (
        <div className='bg-gray-100'>
            <div className='container md:grid grid-cols-2 mx-auto gap-8 items-center my-10 p-10 '>
                <div>
                    <img src={car} alt="" />
                </div>
                <div>
                    <h2 className='text-4xl font-bold my-3 font-serif'>Buy a car with an open mind</h2>
                    <p>Here at Finnicum Motor Company, it is my mission to be the automotive home of drivers in the Leesburg, Americus, and Albany, GA area. I'm provide a vast selection of used vehicles, exceptional car care, and customer service with a smile!
                        Our local dealership keeps a great stock of used cars, trucks, and SUVs in inventory. With competitive prices offered on every pre-owned model for sale on our lot, you won't find a reason to visit any other dealership.</p>
                </div>
            </div>
        </div>
    );
};

export default BuyDes;