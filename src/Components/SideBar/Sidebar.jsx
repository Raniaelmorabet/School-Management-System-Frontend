import React, { useState } from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaBookOpen, FaUser, FaClipboardCheck, FaUniversity, FaBell, FaEnvelope, FaBars } from 'react-icons/fa';
import { MdOutlineNavigateNext } from 'react-icons/md';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showList, setShowList] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleList = () => {
        setShowList(!showList);
    };

    const iconColor = '#FF9800';
    const separatorColor = 'rgba(255, 255, 255, 0.2)';

    return (
        <div className="flex">
            <div className={`bg-[#004b9c] text-sidebar-text h-screen ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
                <div className="flex items-center justify-between h-16 bg-[#FF9800] px-4">
                    <img src={logo} className={`w-[120px] -ml-3 ${isOpen ? 'block' : 'hidden'}`} />
                    <FaBars size={25} className="text-white cursor-pointer mt-2" onClick={toggleSidebar} />
                </div>
                <nav className="mt-4">
                    <ul>
                        <li className="flex items-center px-4 py-3 hover:bg-sidebar-hover cursor-pointer border-b border-white" style={{ borderColor: separatorColor }}>
                            <FaUserGraduate className={`${isOpen ? 'mr-3' : 'text-xl mr-3'}`} style={{ color: iconColor }} />
                            <span className={`${isOpen ? 'block' : 'hidden'}`}>Tableau de Bord</span>
                            <MdOutlineNavigateNext size={20} className={`${isOpen ? 'block ml-auto cursor-pointer' : 'hidden'}`} onClick={toggleList} />
                        </li>
                        {showList && (
                            <ul className="ml-4 mt-2">
                                <li className={`${isOpen ? 'block px-4 py-2 hover:bg-sidebar-hover cursor-pointer border-b border-white' : 'hidden'}`} style={{ borderColor: separatorColor }}>Président</li>
                                <li className={`${isOpen ? 'block px-4 py-2 hover:bg-sidebar-hover cursor-pointer border-b border-white' : 'hidden'}`} style={{ borderColor: separatorColor }}>Assistante</li>
                            </ul>
                        )}
                        <li>
                            <Link to='/SMS/Juries'
                                  className="flex items-center px-4 py-4 hover:bg-sidebar-hover cursor-pointer border-b border-white" style={{ borderColor: separatorColor }}>
                                <FaChalkboardTeacher className={`${isOpen ? 'mr-3' : 'text-xl mr-3'}`} style={{ color: iconColor }} />
                                <span className={`${isOpen ? 'block' : 'hidden'}`}>Les Jury</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/SMS/MeetingListPage'
                                  className="flex items-center px-4 py-4 hover:bg-sidebar-hover cursor-pointer border-b border-white" style={{ borderColor: separatorColor }}>
                                <FaUsers className={`${isOpen ? 'mr-3' : 'text-xl mr-3'}`} style={{ color: iconColor }} />
                                <span className={`${isOpen ? 'block' : 'hidden'}`}>Les Réunions</span>
                            </Link>
                        </li>
                        <li className="flex items-center px-4 py-4 hover:bg-sidebar-hover cursor-pointer border-b border-white" style={{ borderColor: separatorColor }}>
                            <FaBookOpen className={`${isOpen ? 'mr-3' : 'text-xl mr-3'}`} style={{ color: iconColor }} />
                            <span className={`${isOpen ? 'block' : 'hidden'}`}>Les Notes</span>
                        </li>
                        <li className="flex items-center px-4 py-4 hover:bg-sidebar-hover cursor-pointer border-b border-white" style={{ borderColor: separatorColor }}>
                            <FaUser className={`${isOpen ? 'mr-3' : 'text-xl mr-3'}`} style={{ color: iconColor }} />
                            <span className={`${isOpen ? 'block' : 'hidden'}`}>Les Etudiants</span>
                        </li>
                        <li className="flex items-center px-4 py-4 hover:bg-sidebar-hover cursor-pointer border-b border-white" style={{ borderColor: separatorColor }}>
                            <FaClipboardCheck className={`${isOpen ? 'mr-3' : 'text-xl mr-3'}`} style={{ color: iconColor }} />
                            <span className={`${isOpen ? 'block' : 'hidden'}`}>Planification</span>
                        </li>
                        <li className="flex items-center px-4 py-4 hover:bg-sidebar-hover cursor-pointer border-b border-white" style={{ borderColor: separatorColor }}>
                            <FaUniversity className={`${isOpen ? 'mr-3' : 'text-xl mr-3'}`} style={{ color: iconColor }} />
                            <span className={`${isOpen ? 'block' : 'hidden'}`}>Les Salles</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;