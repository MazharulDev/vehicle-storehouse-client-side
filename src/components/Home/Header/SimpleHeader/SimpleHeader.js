import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.png'
const SimpleHeader = () => {
    return (
        <div>
            <div className='flex justify-center p-5 bg-gray-50'>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
        </div>
    );
};

export default SimpleHeader;