import React, { useState } from 'react';
import {FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from 'react-icons/ci';
import juryfive from "/src/assets/jury5.webp";
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import logo2 from "../../assets/logo2.png"

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state=>state.authentication.user);
    const role = useSelector(state=>state.authentication.role);
    const logoutFunc = ()=>{
        console.log("logout")
        dispatch(logout())
        navigate('/login')
    }
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <>
            <div className="flex items-center justify-between pl-17 p-[9.5px] bg-white shadow-sm">
                <Link
                    to='/Home'
                    className='font-bold'>
                    <img src={logo2} className='w-[100px] -ml-4'/>
                </Link>
                <div className="relative">
                    <div className="flex items-center space-x-4 pr-10">
                        <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
                            <div className="flex flex-col">
                                <span className="text-gray-800 font-semibold">{user?.firstName+" "+user?.lastName}</span>
                                <span className="text-gray-400 text-sm">{role == 'director' ? 'Directeur Pédagogique' : 'Assistant'}</span>
                            </div>
                            <img src={juryfive} className="h-10 w-10 rounded-full" alt="Profile"/>
                        </div>
                        <RxCaretDown size={25}
                                     className={`text-gray-400 cursor-pointer ${dropdownOpen ? 'transform rotate-180' : ''}`}
                                     onClick={toggleDropdown}
                        />
                    </div>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                            <button
                                className="flex items-center block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full hover:bg-black/10 text-left"
                                onClick={() => {
                                    console.log('View Profile clicked');
                                }}
                            >
                                <FaUserCircle className="text-xl text-gray-200 mr-2"/>
                                <span className='text-gray-200'>View Profile</span>
                            </button>
                            <button
                                onClick={logoutFunc}
                                className="flex items-center block px-4 py-2 text-gray-800 hover:bg-black/10  w-full text-left"
                            >
                                <FaSignOutAlt className="text-xl text-meta-1 mr-2"/>
                                <span className='text-meta-1'>Sign out</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Header;