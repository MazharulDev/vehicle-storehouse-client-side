import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [isOpen, setIsOpen] = useState(false);
    const handleSignOut=()=>{
        signOut(auth);
        toast("SignOut Successfully")
    }
    return (
        <div className=" sticky top-0 shadow-md">
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                           <Link to='/'> <img src={logo} alt="" /></Link>
                        </div>
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        to="/"
                                        className=" hover:text-gray-600 text-black px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to="/inventory"
                                        className="text-black hover:text-gray-600  px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Inventory
                                    </Link>

                                    <Link
                                        to="/blogs"
                                        className="text-black hover:text-gray-600  px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Blogs
                                    </Link>

                                    <>
                                        {
                                            user ? <div>
                                                 <Link
                                                        to="/manageItems"
                                                        className="text-black hover:text-gray-600  px-3 py-2 rounded-md text-sm font-medium"
                                                    >
                                                        Manage Items
                                                    </Link>
                                                <Link
                                                        to="/addItems"
                                                        className="text-black hover:text-gray-600  px-3 py-2 rounded-md text-sm font-medium"
                                                    >
                                                        Add Items
                                                    </Link>
                                                 <Link
                                                        to="/myItems"
                                                        className="text-black hover:text-gray-600  px-3 py-2 rounded-md text-sm font-medium"
                                                    >
                                                        My items
                                                    </Link>
                                                <button onClick={handleSignOut} className="hover:text-gray-600 text-sm font-medium">Sign Out</button>
                                            </div> :
                                                <div>
                                                    
                                                    <Link
                                                        to="/login"
                                                        className="text-black hover:text-gray-600  px-3 py-2 rounded-md text-sm font-medium"
                                                    >
                                                        Login
                                                    </Link>
                                                </div>
                                        }
                                    </>

                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="/"
                                    className="hover:text-gray-600 text-black block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    to="/"
                                    className="text-black hover:text-gray-600  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Team
                                </Link>

                                <Link
                                    to="/"
                                    className="text-black hover:text-gray-600  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                                </Link>

                                <Link
                                    to="/"
                                    className="text-black hover:text-gray-600  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Calendar
                                </Link>

                                <Link
                                    to="/"
                                    className="text-black hover:text-gray-600  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Reports
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Header;