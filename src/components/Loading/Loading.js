import React from 'react';
import './Loading.css'
const Loading = () => {
    return (
        <div className='flex justify-center'>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    );
};

export default Loading;