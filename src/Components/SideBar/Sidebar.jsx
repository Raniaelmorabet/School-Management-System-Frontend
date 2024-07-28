import React, { useState } from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { TiGroup } from "react-icons/ti";
import {Link} from 'react-router-dom';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <div className={`fixed top-0 left-0 h-screen bg-blue-950 text-white ${isOpen ? 'w-55' : 'w-16'} transition-width duration-300`}>
                {isOpen && (
                    <div className="py-7 px-2">
                        <div className="flex items-center justify-between px-4">
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-extrabold">Logo</span>
                            </div>
                        </div>
                        <nav>
                            <div className="px-4 mt-10">
                                <h2 className="text-xs font-semibold text-gray-400 uppercase">Menu</h2>
                                <ul className="mt-3 space-y-2">
                                    <li>
                                        <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md">
                                            <FaUser />
                                            <span>Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md">
                                            <TiGroup />
                                            <Link to='/Home'>Les Jury</Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-700 p-2 rounded-md">
                                            <FaCalendarAlt />
                                            <Link to='/MeetingListPage'>Les Réunions</Link>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                )}
                <button onClick={toggleSidebar} className="absolute bottom-4 right-5 focus:outline-none ">
                    {isOpen ? <IoIosArrowDropleft  className="text-2xl" /> : <IoIosArrowDropright className="text-2xl" />}
                </button>
            </div>
            <div className={`flex-1 transition-margin duration-300 ${isOpen ? 'ml-55' : 'ml-16'} overflow-auto`}>
            </div>
        </div>
    );
};

export default Sidebar;