import React, { useState, useEffect } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import { IoMdCloudDownload } from "react-icons/io";
import { Api } from '../Tools/Api';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { CiEdit } from "react-icons/ci";
import { PDFDownloadLink } from '@react-pdf/renderer';
import Convocation from '../Convocation/PDFDocument.jsx';
import Swal from 'sweetalert2';
import PDFDocument from "../Convocation/PDFDocument.jsx";
import Loading from '../Loading/Loading';
import {CgEditMarkup} from "react-icons/cg";
import {TiDeleteOutline} from "react-icons/ti";
import {FaRegCheckCircle} from "react-icons/fa";
const baseUrl = import.meta.env.VITE_BASE_URL;

const MeetingDetails = () => {
    const { id } = useParams();
    const [meeting, setMeeting] = useState(null);
    const [error, setError] = useState(null);
    const [loadingEmailId, setLoadingEmailId] = useState(null);
    const [isSendingEmail, setIsSendingEmail] = useState(false);
    const token = useSelector(state => state.authentication.token);
    const [loading,setLoading] = useState(false);
    const role = useSelector(state => state.authentication.role);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        fetchMeetingData();
    }, []);
    
    const fetchMeetingData = async () => {
        try {
            const response = await Api(`${baseUrl}/Meeting/${id}`, 'get', '', token);
            setMeeting(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    };
    const handleSendEmail = async (member) => {
        const emailData = {
            To: member.email,
            Subject: 'Meeting Details',
            Body: `Bonjour ${member.firstName} ${member.lastName},
            \n\nNous avons le plaisir de vous informer des détails de notre prochaine réunion.\n\nDate : ${new Date(meeting.date).toLocaleDateString()}\nHeure : ${meeting.time}\nLieu : ${meeting.location}\n\n
            Merci de bien vouloir confirmer votre présence.\n\nCordialement`
        };

        try {
            setLoadingEmailId(member.juryMemberId);
            await axios.post('http://localhost:5016/api/Email', emailData, {
                headers: {
                    'Accept': '*/*',
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            Swal.fire({
                icon: 'success',
                title: 'Email Sent',
                text: `Email sent to ${member.email}`,
                confirmButtonText: 'OK',
                confirmButtonColor: '#004b9c',
            });
        } catch (error) {
            console.error('Error sending email:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to send email',
                confirmButtonText: 'OK',
                confirmButtonColor: '#004b9c',
            });
        } finally {
            setLoadingEmailId(null);
        }
    };
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
    const handleValidate = async (id) => {
        try {
            setLoading(true)
            await Api(`${baseUrl}/Meeting/ValidateMeeting/${id}`, 'put','', token);
            fetchMeetingData();
            setLoading(false)
        } catch (error) {
            Swal.fire({
                title: "Erreur lors de la validation.",
                icon: "error",
                iconColor: '#FF9800',
                confirmButtonText: 'OK',
                confirmButtonColor: '#004b9c',
            });
        }
    };
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Êtes-vous sûr de vouloir supprimer cet élément ?",
            icon: "warning",
            iconColor: '#FF9800',
            cancelButtonText: "Annuler",
            showCancelButton: true,
            confirmButtonColor: "#004b9c",
            cancelButtonColor: "#FF9800",
            confirmButtonText: "Oui, Supprimer"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    setLoading(true)
                    await Api(`${baseUrl}/Meeting/${id}`, 'delete', '', token);
                    navigate('/SMS/MeetingListPage')
                } catch (error) {
                    Swal.fire({
                        title: "Erreur lors de la suppression.",
                        icon: "error",
                    });
                }
            }
        });
    };
    return (
        <>
            {loading ? <Loading/> : (
                <>
                    {meeting && (
                        <div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
                            <Link to={`/SMS/RescheduleMeeting/${id}`}
                                className='flex justify-end items-end'>
                                <CiEdit size={35} className='text-[#FF9800]'/>
                            </Link>
                            <h2 className="text-3xl font-bold text-center mb-6 text-black">Détails de la Réunion</h2>
                            <div className="mb-8 ">
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5 bg-blue-50 dark:bg-blue-800 p-4 rounded-lg">
                                    <div className="flex flex-col items-start md:items-center">
                                        <span className="mb-3 font-semibold text-[#004b9c] dark:text-blue-300">Date</span>
                                        <span className="text-gray-700 dark:text-gray-300">{new Date(meeting.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex flex-col items-start md:items-center">
                                        <span className="mb-3 font-semibold text-[#004b9c] dark:text-blue-300">Heure</span>
                                        <span className="text-gray-700 dark:text-gray-300">{meeting.time}</span>
                                    </div>
                                    <div className="flex flex-col items-start md:items-center">
                                        <span className="mb-3 font-semibold text-[#004b9c] dark:text-blue-300">Lieu</span>
                                        <span className="text-gray-700 dark:text-gray-300">{meeting.location}</span>
                                    </div>
                                    <div className="flex flex-col items-start md:items-center">
                                        <span className="mb-3 font-semibold text-[#004b9c] dark:text-blue-300">Jury</span>
                                        <span className="text-gray-700 dark:text-gray-300">{meeting.jury.juryName}</span>
                                    </div>
                                    <div className="flex flex-col items-start md:items-center">
                                        <span className="mb-3 font-semibold text-[#004b9c] dark:text-blue-300">Status</span>
                                        <p className={`text-white dark:text-white rounded-xl w-16 text-center   
                                            ${meeting.status === 1 ? 'bg-green-700' : 'bg-[#FF9800] w-20'}`}>
                                             {meeting.status === 1 ? 'Validé' : 'En cours'}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-center">
                                    <span className="mb-3 font-semibold text-[#004b9c] dark:text-blue-300">Actions</span>
                                        <div className='flex items-center gap-1'>
                                            <TiDeleteOutline
                                                size={31}
                                                className='cursor-pointer text-red-700'
                                                onClick={() => handleDelete(id)}
                                            />
                                            {role === 'director' && meeting.status !== 1 ? (<FaRegCheckCircle
                                                size={24}
                                                className="text-green-700 cursor-pointer"
                                                onClick={() => handleValidate(meeting.meetingId)}
                                            />) : '' }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col font-satoshi mt-10">
                                <div className="grid grid-cols-2 bg-blue-50 dark:bg-blue-800 text-gray-800 dark:text-gray-200 sm:grid-cols-5 ">
                                    <div className="p-3 xl:p-6">
                                        <h5 className="text-sm font-semibold uppercase xsm:text-base text-[#004b9c] dark:text-blue-300">
                                            Jury Members
                                        </h5>
                                    </div>
                                    <div className="p-3 text-center xl:p-6">
                                        <h5 className="text-sm font-semibold uppercase xsm:text-base text-[#004b9c] dark:text-blue-300">
                                            Email
                                        </h5>
                                    </div>
                                    <div className="p-3 text-center xl:p-6">
                                        <h5 className="text-sm font-semibold uppercase xsm:text-base text-[#004b9c] dark:text-blue-300">
                                            Rôle
                                        </h5>
                                    </div>
                                    <div className="hidden p-3 text-center sm:block xl:p-6">
                                        <h5 className="text-sm font-semibold uppercase xsm:text-base text-[#004b9c] dark:text-blue-300">
                                            Actions
                                        </h5>
                                    </div>
                                    <div className="hidden p-3 text-center sm:block xl:p-6">
                                        <h5 className="text-sm font-semibold uppercase xsm:text-base text-[#004b9c] dark:text-blue-300">
                                            Convocation
                                        </h5>
                                    </div>
                                </div>
                                {meeting.jury.juryMembers.map((member, key) => (
                                    <>
                                        <div
                                            className={`grid grid-cols-2 sm:grid-cols-5 bg-[#D3D3D3]/20 ${key === meeting.jury.juryMembers.length - 1 ? '' : 'border-b border-[#FF9800]/15 dark:border-blue-700'}`}
                                            key={member.juryMemberId}
                                        >
                                            <div className="flex items-center gap-3 p-3 xl:p-6">
                                                <div className="flex-shrink-0">
                                                    <img src={member.profileImg} alt="Profile"
                                                         className="h-12 w-12 rounded-full mr-4"/>
                                                </div>
                                                <p className="hidden text-gray-700 dark:text-gray-300 sm:block font-semibold">
                                                    {member.firstName} {member.lastName}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center p-3 xl:p-6">
                                                <a href={`mailto:${member.email}`} className="text-blue-500">
                                                    {member.email}
                                                </a>
                                            </div>
                                            <div className="flex items-center justify-center p-3 xl:p-6">
                                                <p className="text-gray-700 dark:text-gray-300">{member.role.role}</p>
                                            </div>
                                            <div
                                                className="hidden items-center justify-center text-m p-3 sm:flex xl:p-6 gap-3">
                                                <button
                                                    className='sendEmail'
                                                    onClick={() => handleSendEmail(member)}
                                                    disabled={loadingEmailId === member.juryMemberId}
                                                >
                                                    <div className="svg-wrapper-1">
                                                        <div className="svg-wrapper">
                                                            <svg height="24" width="24" viewBox="0 0 24 24"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 0h24v24H0z" fill="none"></path>
                                                                <path
                                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                                    fill="currentColor"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <span>Envoyer Email</span>
                                                </button>
                                                {loadingEmailId === member.juryMemberId && (
                                                    <svg id='svg1' viewBox="25 25 50 50">
                                                        <circle r="20" cy="50" cx="50"></circle>
                                                    </svg>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-center p-3 xl:p-6">
                                                <button className="DownloadBtn">
                                                    <svg className="svgIcon" viewBox="0 0 384 512" height="1em"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                                                    </svg>
                                                    <span className="icon2"></span>
                                                    <span className="tooltip">Download</span>
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                            <div className="flex justify-end space-x-4 my-7">
                                <div className="containerBtn2">
                                    <label className="labelBtn2">
                                        <input type="checkbox" className="input"/>
                                        <span className="circle">
                                        <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             fill="none"
                                             viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="1.5" d="M12 19V5m0 14-4-4m4 4 4-4"></path>
                                        </svg>
                                        <div className="square"></div>
                                    </span>
                                    <p className="title">Télécharger les procès-verbaux</p>
                                    <p className="title">Open</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    )}
                </>
            )}
        </>
    );
};

export default MeetingDetails;
