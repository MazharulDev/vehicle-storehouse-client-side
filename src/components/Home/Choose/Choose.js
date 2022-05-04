import React from 'react';
import { FaAward } from 'react-icons/fa'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { MdOutlineMobileFriendly } from 'react-icons/md'

const Choose = () => {
    return (
        <div>
            <div className='container mx-auto my-10'>
                <h2 className='text-center text-5xl p-5 font-bold mb-8'>Why Choose us?</h2>
                <div className='md:grid grid-cols-3 w-fit gap-20 text-center'>
                    <div className='p-8'>

                        <div className='flex justify-center mb-4'>
                            <FaAward className='text-red-500 text-5xl'></FaAward>
                        </div>

                        <h2 className='text-2xl my-3'>Wide range of brands</h2>
                        <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                    </div>
                    <div className='p-8'>
                        <div className='flex justify-center mb-4'>
                            <VscWorkspaceTrusted className='text-green-500 text-5xl'></VscWorkspaceTrusted>
                        </div>
                        <h2 className='text-2xl my-3'>Trusted by our clients</h2>
                        <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                    </div>
                    <div className='p-8'>
                        <div className='flex justify-center mb-4'>
                            <MdOutlineMobileFriendly className='text-blue-500 text-5xl'></MdOutlineMobileFriendly>
                        </div>
                        <h2 className='text-2xl my-3'>Fast & easy financing</h2>
                        <p>We can help with your financing plan, we can offer some tips and tricks. Drive off with this dream car of yours regardless of your credit history.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;