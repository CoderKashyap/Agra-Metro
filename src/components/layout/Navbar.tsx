import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AgraMetroLogo from "/metroAgraLogo.webp";
// import Slide from '@mui/material/Slide';
import Notification from './Notification';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    // const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

    const toggleNav = () => {
        setOpenNav(!openNav);
        // setOpenAvatarDropdown(false);
    };

    // const toggleAvatarDropdown = () => {
    //     setOpenAvatarDropdown(!openAvatarDropdown);
    // };

    const navList = () => {
        return (
            <>
                <NavLink
                    to="/" onClick={toggleNav}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/station" onClick={toggleNav}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Station
                </NavLink>
                <NavLink
                    to="/facilities" onClick={toggleNav}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Facilities
                </NavLink>
                <NavLink
                    to="/network" onClick={toggleNav}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Network
                </NavLink>
                <NavLink
                    to="/helpcontact" onClick={toggleNav}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Help & Contact
                </NavLink>
                <NavLink
                    to="/blogs" onClick={toggleNav}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Blogs
                </NavLink>
                <NavLink
                    to="/faqs" onClick={toggleNav}
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    FAQ's
                </NavLink>
            </>
        );
    };

    return (
        <>
            <header className="shadow-md">
                <div className="mx-auto py-2 px-4 md:flex md:items-center md:justify-between lg:mx-10">

                    <div className="flex items-center justify-between">
                        <NavLink to="/" >
                            <img className='h-12 lg:h-16' src={AgraMetroLogo} alt="" />
                        </NavLink>

                        <button
                            onClick={toggleNav}
                            className="block shadow-md md:hidden border border-gray-600 p-2 rounded-xl text-gray-600 bg-white"
                        >
                            <svg
                                className={`w-6 h-6 ${openNav ? 'hidden' : 'block'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>

                            <svg
                                className={`w-6 h-6 ${openNav ? 'block' : 'hidden'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>

                        </button>

                    </div>


                    <div className='flex'>

                        <nav className="hidden md:flex space-x-6">
                            {navList()}
                        </nav>

                        {/* <div onClick={toggleAvatarDropdown} className="relative transition-all duration-500">
                        <span className="cursor-pointer">Avatar</span>
                        <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden'} bg-slate-300 rounded shadow-md mt-2 space-y-2`}>
                            <div className='p-4 flex flex-col '>
                                <NavLink to="/profile">Profile</NavLink>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                            </div>
                        </div>
                        </div> */}

                    </div>

                    <div className='lg:flex hidden'>Search</div>

                    <div className='hover:cursor-pointer animate-pulse' onClick={()=>setOpenNotification(true)}><NotificationsActiveIcon fontSize='medium' /></div>

                </div>

                {/* <div className={`${openNav ? 'block' : 'hidden'} bg-white p-6 z-10 md:hidden w-full sticky bottom-0`}>
                <div className="bg-gray-200 flex flex-col gap-4 p-6 rounded-lg"
                >
                    {navList()}
                </div>
            </div> */}

            </header>

            <div className={`${openNav ? 'block' : 'hidden'} backdrop-blur-lg bg-black bg-opacity-50 p-6 gap-6 flex flex-col justify-end items-end z-10 md:hidden h-screen w-full absolute bottom-0`}>

                <div className='w-full flex justify-center items-center mb-10'>
                    <NavLink to="/" className="bg-gray-100 rounded-full px-4 py-3" onClick={toggleNav}>
                        <img className='h-12 lg:h-full' src={AgraMetroLogo} alt="" />
                    </NavLink>
                </div>

                <div className="bg-gray-100 flex flex-col gap-4 p-6 rounded-lg w-full font-medium">
                    {navList()}
                </div>


                <button
                    onClick={toggleNav}
                    className="block md:hidden border border-white bg-whit bg-gray-100 p-2 rounded-full text-gray-600"
                >
                    <svg
                        className={`w-6 h-6 ${openNav ? 'block' : 'hidden'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>

            </div>
            {
                openNotification ?
                    <Notification open={openNotification} setOpen={setOpenNotification} />
                    : null
            }
        </>
    );
};

export default Navbar;


