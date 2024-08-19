import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {PrimaryButton} from "../Atoms/PrimaryButton.jsx";
import {SecondaryButton} from "../Atoms/SecondaryButton.jsx";
import {Input} from "../Atoms/input.jsx";
import {Label} from "../Atoms/Label.jsx";
import { Api } from "../Tools/Api.js";

// base url
const baseUrl = import.meta.env.VITE_BASE_URL;
function ScheduleMeeting() {
    const [date, setDate] = useState("");
    const [error, setError] = useState("");
    const [location, setLocation] = useState("etablissement");
    const [customLocation, setCustomLocation] = useState("");
    const [hours, setHours] = useState("12");
    const [jury,setJury] = useState('')
    const [minutes, setMinutes] = useState("00");
    const [period, setPeriod] = useState("AM");
    const [juries,setJuries] = useState();
    const [type,setType] = useState();
    const {id} = useParams();
    const navigate = useNavigate();
    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const currentDate = new Date();
        const sevenDaysFromNow = new Date();
        sevenDaysFromNow.setDate(currentDate.getDate() + 7);

        if (selectedDate < sevenDaysFromNow) {
            setError("Vous ne pouvez pas planifier une réunion avant 7 jours");
            setDate("");
        } else {
            setError("");
            setDate(e.target.value);
        }
    };
    useEffect(() => {
        const fetchJury = async () => {
            try {
                const response = await Api(`${baseUrl}/Jury`,'get','',token);
                setJuries(response.data)
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching Juries:', error);
            }
        };

        fetchJury();
    }, []);

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleCustomLocationChange = (e) => {
        setCustomLocation(e.target.value);
    };

    const handleSubmit = async (e) => {
        console.log(location)
        e.preventDefault();
        const formData = {
            meetingId : id,
            date: date,
            time: `${hours}:${minutes} ${period}`,
            location: location === 'autre' ? customLocation : location,
            type: parseInt(type),
            juryId: jury
        };
        console.log(formData)
        const response = await Api(`${baseUrl}/Meeting`,'put',formData,token);
        if (response.status == 200) {
            Swal.fire({
                title: response.data,
                icon: "success",
            }).then(()=>{
                navigate('SMS/MeetingListPage');
            });
        } else {
            Swal.fire({
                title: "Erreur lors de l'ajout du membre!",
                text: errorData.message || 'Erreur inconnue',
                icon: "error",
            });
        }
    };

    return (
        <>
            <div className="m-0 mt-6 gap-9 sm:grid-cols-2 m-16">
                <div className="flex flex-col gap-9">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-roboto-medium text-black dark:text-white">
                                Planifier une réunion
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-6.5">
                                <div className="flex flex-col sm:flex-row gap-6 mb-4.5">
                                    <div className="w-full sm:w-1/2">
                                        <Label>Date <span className="text-meta-1">*</span></Label>
                                        <Input value={date} type={'date'} onChange={handleDateChange}/>
                                        {error && <p className="text-red-500">{error}</p>}
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <Label>L'heure <span className="text-meta-1">*</span></Label>
                                        <div className="flex space-x-2">
                                            <select
                                                onChange={(e) => setHours(e.target.value)}
                                                className="w-full rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-whiter"
                                                required
                                            >
                                                <option disabled hidden selected>Heur</option>
                                                {Array.from({ length: 12 }, (_, i) => i + 1).map(hour => (
                                                    <option key={hour} value={hour}>{hour}</option>
                                                ))}
                                            </select>
                                            <select
                                                onChange={(e) => setMinutes(e.target.value)}
                                                className="w-full rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-whiter"
                                                required
                                            >
                                                <option disabled hidden selected>Minutes</option>
                                                {Array.from({length: 60}, (_, i) => i.toString().padStart(2, '0')).map(minute => (
                                                    <option key={minute} value={minute}>{minute}</option>
                                                ))}
                                            </select>
                                            <select
                                                onChange={(e) => setPeriod(e.target.value)}
                                                className="w-full rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-whiter"
                                                required
                                            >
                                                <option disabled hidden selected>Période</option>
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 mb-4.5">
                                    <div className="w-full sm:w-1/2">
                                        <Label>Type de réunion <span className="text-meta-1">*</span></Label>
                                        <select
                                            className="w-full rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-whiter"
                                            required
                                            onChange={(e) => setType(e.target.value)}
                                        >
                                            <option selected disabled hidden>Choisissez réunion</option>
                                            <option value={0}>Première réunion</option>
                                            <option value={1}>Deuxième réunion</option>
                                            <option value={2}>Troisième réunion</option>
                                            <option value={3}>Quatrième réunion</option>
                                        </select>
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <Label>Jury <span className="text-meta-1">*</span></Label>
                                        <select
                                            className="w-full rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-whiter"

                                            onChange={(e) => setJury(e.target.value)}
                                            required
                                        >
                                            <option value='' selected disabled hidden>Liste de Jury</option>

                                            {juries?.map((jury, i) => {
                                                return (
                                                    <option key={i} value={jury.juryId}>{jury.juryName}</option>
                                                )
                                            })}

                                        </select>
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <Label>Lieu <span className="text-meta-1">*</span></Label>
                                        <select
                                            onChange={handleLocationChange}
                                            className="w-full rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-whiter"
                                            required
                                        >
                                            <option disabled hidden selected>Choisissez le Lieu</option>
                                            <option value="etablissement">Établissement</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                        {location === "autre" && (
                                            <Input type={'text'} placeholder={"Entrez le lieu"} value={customLocation} onChange={handleCustomLocationChange} marginTop={'mt-2'}></Input>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end gap-4.5">
                                    <Link
                                        to="/Home">
                                        <SecondaryButton>Annuler</SecondaryButton>
                                    </Link>
                                    <PrimaryButton type={'submit'}>Ajouter</PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScheduleMeeting;