import React, { useState } from "react";
import {BiCubeAlt, BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import {FaCarSide} from 'react-icons/fa';
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const path = useNavigate();
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>;
    }

    const handleSignOut = () => {
        signOut(auth).then((user) => {
            if (!user) {
                toast("Sign Out successfully");
            }
        });
    };
    return (
        <section className='container mx-auto py-5 px-4 md:px-0'>
            <nav className="lg:flex block lg:items-center lg:justify-between">
                <div className="flex items-center justify-between lg:mb-0 mb-3">
                    <h2
                        className="md:text-3xl text-2xl cursor-pointer flex items-center gap-2"
                        onClick={() => path("/")}
                    >
                        <FaCarSide className="text-blue-600" /> <span className="text-blue-600 font-bold">vehicle-storehouse</span>
                    </h2>
                    <div className="lg:hidden text-3xl" onClick={() => setOpenMenu(!openMenu)}>
                        {openMenu ? <AiOutlineCloseCircle className="text-white" /> : <BiMenuAltRight className="text-white" />}
                    </div>
                </div>
                <ul
                    className={`text-white lg:!flex gap-4 lg:items-center lg:bg-transparent bg-blue-900 rounded-md lg:flex-row flex-col lg:p-0 p-3 text-left ${openMenu ? "flex text-white" : "hidden"
                }`}
                >
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/blogs">Blogs</CustomLink>
                    <CustomLink to="/inventory">Inventory</CustomLink>
                    
                    {user ? (
                        <div className="flex lg:flex-row flex-col gap-4">
                            <CustomLink to="/addItems">Add Items</CustomLink>
                            <CustomLink to="/manageItems">Manage Items</CustomLink>
                            <CustomLink to="/myItems">My Items</CustomLink>
                            <button onClick={handleSignOut}>
                                logout
                            </button>
                        </div>
                    ) : (
                        <CustomLink to='/login'>
                            Login
                        </CustomLink>
                    )}
                </ul>
            </nav>
        </section>
    );
};

export default Header;