import React from 'react';
import { FaUserGraduate, FaUserFriends, FaChalkboardTeacher, FaMoneyBillWave, FaUsers } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <div className="flex mx-auto justify-center items-center flex-col space-y-7 my-15">
            <div className='flex flex-row gap-4 '>
                <div className="flex items-center bg-[#004b9c] text-white p-10 rounded-lg w-[650px]">
                    <FaChalkboardTeacher size={40} className="mr-4" />
                    <div>
                        <h2 className="text-3xl font-bold">50,000</h2>
                        <p>Notre total de membres du jury</p>
                    </div>
                </div>
                <div className="flex items-center bg-[#FF9800] text-white p-15 rounded-lg w-[650px]">
                    <FaUsers size={40} className="mr-4" />
                    <div>
                        <h2 className="text-3xl font-bold">80,000</h2>
                        <p className=''>Notre total de réunions</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-4'>
                <div className="flex items-center bg-[#FF9800] text-white p-10 rounded-lg w-[650px]">
                    <FaChalkboardTeacher size={40} className="mr-4" />
                    <div>
                        <h2 className="text-3xl font-bold">50,000</h2>
                        <p>Notre total de jurys</p>
                    </div>
                </div>
                <div className="flex items-center bg-[#004b9c] text-white p-15 rounded-lg w-[650px]">
                    <FaUsers size={40} className="mr-4" />
                    <div>
                        <h2 className="text-3xl font-bold">80,000</h2>
                        <p>Total Meetings</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
