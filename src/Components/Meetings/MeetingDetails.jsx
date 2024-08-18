import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IoMdCloudDownload } from "react-icons/io";
import { Api } from '../Tools/Api';
import { useSelector } from 'react-redux';

const MeetingDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);
    const token = useSelector(state=>state.authentication.token);


    useEffect(() => {
        const fetchEventData = async () => {
            try {
                await Api(`https://localhost:7219/api/Meeting/${id}`,'get','',token).
                then(res=>setEvent(res.data));
                
            } catch (error) {
                throw error;
            }
        };

        fetchEventData();
    },[]);
    if (!event) {
        return <div>Loading...</div>;
    }
    // Function to handle multiple file downloads
    const handleDownloadAll = () => {
        const fileNames = [
            'PVControlContinu',
            'PVControlContinuMPCC',
            'PVControlContinuMPEFCFP',
            'PVFicheFormateur',
            'PVModalitePassage',
        ];

        fileNames.forEach(fileName => {
            const link = document.createElement('a');
            link.href = `/src/components/PV Documents/${fileName}.pdf`;
            link.download = `${fileName}.pdf`;
            link.click();
        });
    };

    const handleEmailSend = () => {

    };

    return (
        <div className=" p-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Détails de la Réunion</h2>
            <div className="flex flex-col font-satoshi">
                <div className="grid grid-cols-2 rounded-sm bg-blue-50 dark:bg-blue-800 text-gray-800 dark:text-gray-200 sm:grid-cols-4">
                    <div className="p-3 xl:p-6">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-blue-700 dark:text-blue-300">
                            Date
                        </h5>
                    </div>
                    <div className="p-3 text-center xl:p-6">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-blue-700 dark:text-blue-300">
                            Heure
                        </h5>
                    </div>
                    <div className="p-3 text-center xl:p-6">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-blue-700 dark:text-blue-300">
                            Lieu
                        </h5>
                    </div>
                    <div className="hidden p-3 text-center sm:block xl:p-6">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-blue-700 dark:text-blue-300">
                            Jury
                        </h5>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-blue-200 dark:border-blue-700">
                    <div className="flex items-center gap-3 p-3 xl:p-6 text-gray-700 dark:text-gray-300">
                        {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center justify-center p-3 xl:p-6 text-gray-700 dark:text-gray-300">
                        {event.time}
                    </div>
                    <div className="flex items-center justify-center p-3 xl:p-6 text-gray-700 dark:text-gray-300">
                        {event.location}
                    </div>
                    <div className="hidden items-center justify-center text-gray-700 dark:text-gray-300 p-3 sm:flex xl:p-6 gap-3">
                        {event.jury.juryName}
                    </div>
                </div>
            </div>
            <div className="flex flex-col font-satoshi mt-10">
                <div className="grid grid-cols-2 rounded-sm bg-blue-50 dark:bg-blue-800 text-gray-800 dark:text-gray-200 sm:grid-cols-4">
                    <div className="p-3 xl:p-6">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-blue-700 dark:text-blue-300">
                            Jury Members
                        </h5>
                    </div>
                    <div className="p-3 text-center xl:p-6">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-blue-700 dark:text-blue-300">
                            Email
                        </h5>
                    </div>
                    <div className="p-3 text-center xl:p-6">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-blue-700 dark:text-blue-300">
                            Rôle
                        </h5>
                    </div>
                    <div className="hidden p-3 text-center sm:block xl:p-6">
                        <h5 className="text-sm font-medium uppercase xsm:text-base text-blue-700 dark:text-blue-300">
                            Actions
                        </h5>
                    </div>
                </div>
                {event.jury.juryMembers.map((member, key) => (
                    <div
                        className={`grid grid-cols-2 sm:grid-cols-4 ${key === event.jury.juryMembers.length - 1 ? '' : 'border-b border-blue-200 dark:border-blue-700'}`}
                        key={member.juryMemberId}
                    >
                        <div className="flex items-center gap-3 p-3 xl:p-6">
                            <div className="flex-shrink-0">
                                <img src={member.profileImg} alt="Profile" className="h-12 w-12 rounded-full mr-4" />
                            </div>
                            <p className="hidden text-gray-700 dark:text-gray-300 sm:block font-semibold">
                                {member.firstName} {member.lastName}
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-3 xl:p-6">
                            <a href={`mailto:${member.email}`} className="text-blue-500 underline">
                                {member.email}
                            </a>
                        </div>
                        <div className="flex items-center justify-center p-3 xl:p-6">
                            <p className="text-gray-700 dark:text-gray-300">{member.role.role}</p>
                        </div>
                        <div className="hidden items-center justify-center text-m p-3 sm:flex xl:p-6 gap-3">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleEmailSend}
                            >
                                Envoyer Email
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex space-x-4 justify-end mt-7'>
                <button className='bg-blue-700 hover:bg-blue-500 flex rounded-md h-11 w-[280px] p-2 space-x-2'>
                    <IoMdCloudDownload className='text-white w-7 h-7 ml-2'/>
                    <p className='text-white text-xl'>télécharger Convocation</p>
                </button>
                <button
                    onClick={handleDownloadAll}
                    className='bg-blue-700 hover:bg-blue-500 flex rounded-md h-11 w-[200px] p-2 space-x-2'>
                    <IoMdCloudDownload className='text-white w-7 h-7 ml-2 '/>
                    <p className='text-white text-xl'>télécharger PV</p>
                </button>
            </div>
        </div>
    );
};

export default MeetingDetails;