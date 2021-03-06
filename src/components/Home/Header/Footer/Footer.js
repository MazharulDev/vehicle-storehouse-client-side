import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo-1.png'
import { BsApple } from 'react-icons/bs'
import { FaGooglePlay } from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div>
                <div className='md:flex justify-between items-center container mx-auto px-12 py-8'>
                    <div className='mb-4 md:mb-0'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='flex items-center gap-3'>
                        <a href="https://web.facebook.com/miforbd/" rel='noreferrer' target='_blank'><FaFacebookSquare className='text-4xl text-white hover:scale-110 duration-300'></FaFacebookSquare></a>
                        <a href="https://www.linkedin.com/in/miforbd/" rel='noreferrer' target='_blank'><FaLinkedin className='text-4xl text-white hover:scale-110 duration-300'></FaLinkedin></a>
                        <a href="https://github.com/miforbd" rel='noreferrer' target='_blank'><FaGithubSquare className='text-4xl text-white hover:scale-110 duration-300'></FaGithubSquare></a>
                        
                    </div>
                </div>
                <div className='border-b-2 border-gray-800'>

                </div>

                <div className='container mx-auto px-12 py-8 md:grid grid-cols-5'>
                    <div className='text-white col-span-1 sm:mt-4 md:mt-0'>
                        <h2 className='text-xl mb-4'>Information</h2>
                        <Link className='block hover:underline hover:text-gray-300' to='/'>Contact</Link>
                        <Link className='block hover:underline hover:text-gray-300' to='/'>About Us</Link>
                        <Link className='block hover:underline hover:text-gray-300' to='/'>Privacy Policy</Link>
                        <Link className='block hover:underline hover:text-gray-300' to='/'>FAQ</Link>
                    </div>
                    <div className='text-white col-span-1 sm:mt-4 md:mt-0'>
                        <h2 className='text-xl mb-4'>Inventory</h2>
                        <Link className='block hover:underline hover:text-gray-300' to='/addItems'>by Makes</Link>
                        <Link className='block hover:underline hover:text-gray-300' to='/'>by Body Style</Link>
                        <Link className='block hover:underline hover:text-gray-300' to='/'>by Price</Link>
                        <Link className='block hover:underline hover:text-gray-300' to='/'>by Mileage</Link>
                    </div>
                    <div className='text-white col-span-1 sm:mt-4 md:mt-0'>
                        <h2 className='text-xl mb-4'>Useful Links</h2>
                        <Link className='block hover:underline hover:text-gray-300' to='/'>Home</Link>
                        <Link className='block hover:underline hover:text-gray-300' to='/blogs'>Blog</Link>
                        <Link className='block hover:underline hover:text-gray-300' to='/inventory'>Services</Link>
                        <Link className='block hover:underline hover:text-gray-300' to='/'>Testimonials</Link>
                    </div>
                    <div className='text-white col-span-2 mt-4 md:mt-0'>
                        <h2 className='text-xl mb-4'>Join our growing community</h2>
                        <div className='md:flex items-center gap-2'>
                            <Link to='/'>
                                <button className='bg-gray-300 rounded-lg text-black sm:block mb-2 md:mb-0 hover:bg-gray-600 hover:text-white duration-500'>
                                    <div className='flex items-center gap-4 p-2'>
                                        <BsApple className='text-4xl'></BsApple>
                                        <div>
                                            <h4>Download on the</h4>
                                            <h3 className='font-bold text-left'>App Store</h3>
                                        </div>
                                    </div>
                                </button>
                            </Link>
                            <Link to='/'>
                                <button className='bg-gray-300 rounded-lg text-black hover:bg-gray-600 hover:text-white duration-500'>
                                    <div className='flex items-center gap-4 p-2'>
                                        <FaGooglePlay className='text-4xl'></FaGooglePlay>
                                        <div>
                                            <h4>Download on the</h4>
                                            <h3 className='font-bold text-left'>App Store</h3>
                                        </div>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black p-5'>
                <p className='text-white text-center'>Copyright &copy; 2020-2022 vehicle storehouse Ltd All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;