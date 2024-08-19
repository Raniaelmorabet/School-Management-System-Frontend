import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Input} from "/src/Components/Atoms/input.jsx"
import {PrimaryButton} from "/src/Components/Atoms/PrimaryButton.jsx"
import {SecondaryButton} from "/src/Components/Atoms/SecondaryButton.jsx"
import {Label} from "../Atoms/Label.jsx";
import { Api } from '../Tools/Api.js';
import { useSelector } from 'react-redux';
// base url
const baseUrl = import.meta.env.VITE_BASE_URL;
const AddJuryMemberForm = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [profileImagePreview, setProfileImagePreview] = useState(null);
    const [Role, setRole] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [LatestDiploma, setLastDegree] = useState('');
    const [YearOfExperience, setExperienceYears] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [jury, setJury] = useState('');
    const [roles,setRoles] = useState([]);
    const [juries,setJuries] = useState();
    const token = useSelector(state=>state.authentication.token);

    // const[formState, setFormState] = useState({
    //     profileImage: null,
    //     profileImagePreview: null,
    //     Role: '',
    //     FirstName: '',
    //     LastName: '',
    //     Email: '',
    //     LatestDiploma: '',
    //     YearOfExperience: '',
    //     CompanyName: '',
    //     Jury: '',
    //     roles: [],
    //     juries: undefined
    // })
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchRoles = async () => {
            try {
                await Api(`${baseUrl}/JuryMemberRole`,'get','',token)
                .then(res=>setRoles(res.data));
            } catch (error) {
                throw error;
            }
        };
        const fetchJury = async () => {
            try {
                await Api(`${baseUrl}/Jury`,'get','',token)
                .then(res=>setJuries(res.data));
            } catch (error) {
                throw error;
            }
        };
        fetchRoles();
        fetchJury();
    },[])
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setProfileImage(null);
            setProfileImagePreview(null);
        }
    };
    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!Role || !FirstName || !LastName || !Email || !LatestDiploma || !YearOfExperience || !CompanyName) {
            Swal.fire({
                title: "Assurez-vous de remplir tout!",
                icon: "error",
            });
            return;
        }

        const formData = new FormData();
        formData.append('firstName', FirstName);
        formData.append('lastName', LastName);
        formData.append('email', Email);
        formData.append('companyName', CompanyName);
        formData.append('yearOfExperience', YearOfExperience);
        formData.append('latestDiploma', LatestDiploma);
        formData.append('roleId', Role);
        formData.append('imgFile', profileImage != null ? profileImage : null);
        formData.append('juryId',jury)
        console.log(formData);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            const response = await Api(`${baseUrl}/JuryMember`,'post',formData,token)
            .then(res=>res);
            console.log(response);
            if (response.status === 200) {
                Swal.fire({
                    title: response.data,
                    icon: "success",
                }).then(()=>{
                navigate('/SMS/Juries');
            });
        } else {
                Swal.fire({
                    title: "Erreur lors de l'ajout du membre!",
                    text: errorData.message || 'Erreur inconnue',
                    icon: "error",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Erreur réseau!",
                text: error.message,
                icon: "error",
            });
        }
    };

    return (
        <div className="m-0 mt-6 gap-9 sm:grid-cols-2 m-16">
            <div className="flex flex-col gap-9">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                        <h3 className="font-medium text-[20px] text-black">
                            Créer Membre du Jury
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="p-6.5">
                            <div className="flex flex-col sm:flex-row gap-6 mb-4.5">
                                <div className="w-full sm:w-1/2">
                                    <Label>Prénom <span className="text-meta-1">*</span></Label>
                                    <Input type={'text'} onChange={(e) => setFirstName(e.target.value)} placeholder={'Entrez votre prénom'}/>
                                    <Label marginTop={'mt-8'}>Nom de famille <span className="text-meta-1">*</span></Label>
                                    <Input type={'text'} onChange={(e) => setLastName(e.target.value)} placeholder={'Entrez votre nom de famille'}/>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <Label>Photo de profil</Label>
                                    <div
                                        id="FileUpload"
                                        className="relative block w-full cursor-pointer appearance-none rounded border border-dashed border-black/30 bg-gray py-4 px-4 dark:bg-meta-4"
                                        style={{
                                            backgroundImage: profileImagePreview ? `url(${profileImagePreview})` : 'none',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            height: '170px'
                                        }}
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                                            onChange={handleImageChange}
                                            required
                                        />
                                        {!profileImagePreview && (
                                            <div className="flex flex-col items-center justify-center space-y-2">
                                                <span
                                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                                            fill="#3C50E0"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M7.5286 1.52864C7.78894 1.2683 8.21106 1.2683 8.4714 1.52864L11.5287 4.58597C11.7891 4.84631 11.7891 5.26842 11.5287 5.52876C11.2684 5.7891 10.8463 5.7891 10.586 5.52876L8.00001 2.94276L5.41401 5.52876C5.15367 5.7891 4.73156 5.7891 4.47122 5.52876C4.21088 5.26842 4.21088 4.84631 4.47122 4.58597L7.5286 1.52864Z"
                                                            fill="#3C50E0"
                                                        />
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M7.99967 2.66671C8.36786 2.66671 8.66634 2.96519 8.66634 3.33337V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V3.33337C7.33301 2.96519 7.63148 2.66671 7.99967 2.66671Z"
                                                            fill="#3C50E0"
                                                        />
                                                    </svg>
                                                </span>
                                                <p>
                                                    <span className="text-primary">Téléchargez une photo</span>
                                                    <span className="mx-1">ou glisser-déposer</span>
                                                </p>
                                                <p className="mt-1.5">PNG, JPG, JPEG</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 mb-4.5">
                                <div className="w-full sm:w-1/2">
                                    <Label>Adresse e-mail <span className="text-meta-1">*</span></Label>
                                    <Input type={'email'} onChange={(e) => setEmail(e.target.value)} placeholder={'Entrez votre adresse e-mail'}/>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <Label>Rôle <span className="text-meta-1">*</span></Label>
                                    <select
                                        className="w-full font-roboto-regular rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-whiter"
                                        onChange={(e) => setRole(e.target.value)}
                                        required
                                    >
                                        <option selected hidden disabled>Choisissez role</option>
                                    {roles.map((role,i)=>{
                                        return(
                                            <option key={i} value={role.juryMemberRoleId}>{role.role}</option>
                                        )
                                    })}

                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 mb-4.5">
                                <div className="w-full sm:w-1/2">
                                    <Label>Dernier diplôme <span className="text-meta-1">*</span></Label>
                                    <Input type={'text'} onChange={(e) => setLastDegree(e.target.value)} placeholder={'Entrez votre dernier diplôme'}/>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <Label>Années d'expérience <span className="text-meta-1">*</span></Label>
                                    <Input type={'number'} onChange={(e) => setExperienceYears(e.target.value)} placeholder={'Entrez vos années d\'expérience'}/>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 mb-4.5">
                                <div className="w-full sm:w-1/2">
                                    <Label>Nom de l'entreprise <span className="text-meta-1">*</span></Label>
                                    <Input type={'text'} onChange={(e) => setCompanyName(e.target.value)} placeholder={'Entrez le nom de l\'entreprise'}/>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <Label>Jury <span className="text-meta-1">*</span></Label>
                                    <select
                                        className="w-full font-roboto-regular rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-whiter"

                                        onChange={(e) => setJury(e.target.value)}
                                        required
                                    >
                                    <option selected disabled hidden>Choisissez jury</option>
                                    {juries?.map((jury,i)=>{
                                        return(
                                            <option key={i} value={jury.juryId}>{jury.juryName}</option>
                                        )
                                    })}

                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end gap-4.5">
                                <Link to='/Home'>
                                    <SecondaryButton>Annuler</SecondaryButton>
                                </Link>
                                <PrimaryButton onClick={handleSubmit} type={'submit'}>Ajouter</PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJuryMemberForm;
