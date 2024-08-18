import React, { useState, useEffect } from 'react';
import Juryfive from '/src/assets/jury6.jpg';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PrimaryButton } from '../Atoms/PrimaryButton';
import { Api } from '../Tools/Api';
import { useSelector } from 'react-redux';

const JuryList = () => {
    const [listData, setListData] = useState([]);
    const token = useSelector(state=>state.authentication.token);
    const fetchJuries = async () => {
        try {
            await Api('https://localhost:7219/api/JuryMember','get','',token)
            .then(res=>setListData(res.data));
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };
    useEffect(() => {
        fetchJuries();
    }, []);

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Êtes-vous sûr de vouloir supprimer cet élément ?",
            icon: "warning",
            iconColor: '#ff6666',
            showCancelButton: true,
            confirmButtonColor: "#004b9c",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, Supprimer"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await Api(`https://localhost:7219/api/JuryMember/${id}`,'delete','',token);
                    fetchJuries();
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
        <div className="rounded-sm border m-6 border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-xl font-semibold text-black dark:text-white font-satoshi">
                    Membres du jury
                </h4>
                <Link to="/SMS/add-jury">
                    <PrimaryButton>Ajouter Jury</PrimaryButton>
                </Link>
            </div>
            <div className="flex flex-col font-satoshi">
                <div className="grid grid-cols-2 rounded-sm bg-blue-100 dark:bg-meta-4 text-graydark sm:grid-cols-5">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Jury
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Email
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Rôle
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Statut
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Actions
                        </h5>
                    </div>
                </div>
                {listData.map((list, key) => (
                    <div
                        className={`grid grid-cols-2 sm:grid-cols-5 ${
                            key === listData.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
                        }`}
                        key={list.juryMemberId}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <div className="flex-shrink-0">
                                <img src={list.profileImg || Juryfive} alt="Brand" className="h-12 w-12 rounded-full mr-4"/>
                            </div>
                            <p className="hidden text-black dark:text-white sm:block font-semibold">
                                {list.firstName} {list.lastName}
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <a href={`mailto:${list.email}`} className="text-blue-500 underline">
                                {list.email}
                            </a>
                        </div>
                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black text-center">{list.role.role}</p>
                        </div>
                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className={`text-black dark:text-white ${list.status === 1 ? 'text-green-500' : 'text-red-500'}`}>
                                {list.status === 1 ? 'Validé' : 'En progress'}
                            </p>
                        </div>
                        <div className="hidden items-center justify-center text-2xl p-2.5 sm:flex xl:p-5 gap-3">
                            <Link to={`/update/${list.juryMemberId}`}>
                                <FaRegEdit className='text-blue-500 cursor-pointer'/>
                            </Link>
                            <MdDelete
                                className='text-red-500 cursor-pointer hover:text-red-700'
                                onClick={() => handleDelete(list.juryMemberId)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JuryList;
