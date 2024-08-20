import React, { useState, useEffect } from 'react';
import empty from "../../assets/empty.png";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PrimaryButton } from '../Atoms/PrimaryButton';
import { Api } from '../Tools/Api';
import { useSelector } from 'react-redux';
import { CgEditMarkup } from "react-icons/cg";
import { TiDeleteOutline } from "react-icons/ti";

// base url
const baseUrl = import.meta.env.VITE_BASE_URL;
const JuryList = () => {
    const [listData, setListData] = useState([]);
    const token = useSelector(state=>state.authentication.token);
    const fetchJuries = async () => {
        try {
            await Api(`${baseUrl}/JuryMember`,'get','',token)
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
            iconColor: '#FF9800',
            cancelButtonText: "Annuler",
            showCancelButton: true,
            confirmButtonColor: "#004b9c",
            cancelButtonColor: "#FF9800",
            confirmButtonText: "Oui, Supprimer"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await Api(`${baseUrl}/JuryMember/${id}`,'delete','',token);
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
    console.log(listData);
    return (
        <div className="rounded-sm border m-6 border-stroke bg-white px-5 pt-6 pb-4 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-10">
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
                        className={`grid grid-cols-2 sm:grid-cols-5 bg-[#D3D3D3]/20 ${
                            key === listData.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
                        }`}
                        key={list.juryMemberId}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <div className="flex-shrink-0">
                                <img src={list.profileImg ? list.profileImg : empty} alt="Brand"
                                     className="h-12 w-12 rounded-full mr-4"/>
                            </div>
                            <p className="hidden text-black dark:text-white sm:block font-semibold">
                                {list.firstName} {list.lastName}
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <a href={`mailto:${list.email}`} className="text-blue-500 ">
                                {list.email}
                            </a>
                        </div>
                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black text-center">{list.role.role}</p>
                        </div>
                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className={`text-white dark:text-white rounded-xl w-16 text-center   
                                ${list.status === 1 ? 'bg-green-700' : 'bg-[#FF9800]'}`}>
                                {list.status === 1 ? 'Validé' : 'En progress'}
                            </p>
                        </div>
                        <div className="hidden items-center justify-center text-2xl p-2.5 sm:flex xl:p-5 gap-2 ml-2">
                            <Link to={`/SMS/update/${list.juryMemberId}`}>
                                <CgEditMarkup className='cursor-pointer text-graydark'/>
                            </Link>
                            <TiDeleteOutline size={31}
                                className='cursor-pointer text-red-700'
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
