import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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
                const response = await axios.get('https://localhost:7219/api/Jury');
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
        const formData = new FormData();
        formData.append('date',date);
        formData.append('time',`${hours}:${minutes} ${period}`);
        formData.append('location' , l);
        formData.append('type', type);
        formData.append('juryId',jury);
        console.log(formData)
        const response = await axios.post('https://localhost:7219/api/meeting');
        if (response.status == 200) {
            Swal.fire({
                title: response.data,
                icon: "success",
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
                            <h3 className="font-medium text-black dark:text-white">
                                Planifier une réunion
                            </h3>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-6.5">
                                <div className="flex flex-col sm:flex-row gap-6 mb-4.5">
                                    <div className="w-full sm:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Date <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={handleDateChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            required
                                        />
                                        {error && <p className="text-red-500">{error}</p>}
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            L'heure <span className="text-meta-1">*</span>
                                        </label>
                                        <div className="flex space-x-2">
                                            <select
                                                onChange={(e) => setHours(e.target.value)}
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                required
                                            >
                                                <option disabled hidden selected>Heur</option>
                                                {Array.from({ length: 12 }, (_, i) => i + 1).map(hour => (
                                                    <option key={hour} value={hour}>{hour}</option>
                                                ))}
                                            </select>
                                            <select
                                                onChange={(e) => setMinutes(e.target.value)}
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                required
                                            >
                                                <option disabled hidden selected>Minutes</option>
                                                {Array.from({length: 60}, (_, i) => i.toString().padStart(2, '0')).map(minute => (
                                                    <option key={minute} value={minute}>{minute}</option>
                                                ))}
                                            </select>
                                            <select
                                                onChange={(e) => setPeriod(e.target.value)}
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Type de réunion <span className="text-meta-1">*</span>
                                        </label>
                                        <select
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Jury <span className="text-meta-1">*</span>
                                        </label>
                                        <select
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"

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
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Lieu <span className="text-meta-1">*</span>
                                        </label>
                                        <select
                                            onChange={handleLocationChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            required
                                        >
                                            <option disabled hidden selected>Choisissez le Lieu</option>
                                            <option value="etablissement">Établissement</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                        {location === "autre" && (
                                            <input
                                                type="text"
                                                placeholder="Entrez le lieu"
                                                value={customLocation}
                                                onChange={handleCustomLocationChange}
                                                className="w-full mt-4 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end gap-4.5">
                                    <Link
                                        to="/Home"
                                        className="flex justify-center rounded bg-meta-1 py-2 px-6 font-medium text-white hover:bg-opacity-90"
                                    >
                                        Annuler
                                    </Link>
                                    <button
                                        type="submit"
                                        className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                                    >
                                        Ajouter
                                    </button>
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