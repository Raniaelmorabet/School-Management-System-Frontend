import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function ScheduleMeeting() {
    const [date, setDate] = useState("");
    const [error, setError] = useState("");
    const [location, setLocation] = useState("etablissement");
    const [customLocation, setCustomLocation] = useState("");
    const [hours, setHours] = useState("12");
    const [minutes, setMinutes] = useState("00");
    const [period, setPeriod] = useState("AM");
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
        fetchMeetings();
    }, []);

    const fetchMeetings = async () => {
        try {
            const response = await fetch("https://localhost:7219/api/meeting", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    date: "2024-07-14T23:47:17.821Z",
                    time: { ticks: 0 },
                    location: "string",
                    type: 0,
                    juryId: "8b2890a3-6c14-4281-8833-99581d71d36d",
                }),
            });
            if (!response.ok) {
                throw new Error("Failed to fetch meetings");
            }
            const data = await response.json();
            setMeetings(data);
        } catch (error) {
            console.error("Error fetching meetings:", error);
        }
    };

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

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleCustomLocationChange = (e) => {
        setCustomLocation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!error) {
            const time = `${hours}:${minutes} ${period}`;
            // Further processing with the date, time, location, and other data
            console.log("Scheduled meeting at", date, time, location);
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
                                                value={hours}
                                                onChange={(e) => setHours(e.target.value)}
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                required
                                            >
                                                {Array.from({ length: 12 }, (_, i) => i + 1).map(hour => (
                                                    <option key={hour} value={hour}>{hour}</option>
                                                ))}
                                            </select>
                                            <select
                                                value={minutes}
                                                onChange={(e) => setMinutes(e.target.value)}
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                required
                                            >
                                                {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map(minute => (
                                                    <option key={minute} value={minute}>{minute}</option>
                                                ))}
                                            </select>
                                            <select
                                                value={period}
                                                onChange={(e) => setPeriod(e.target.value)}
                                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                                required
                                            >
                                                <option value="AM">AM</option>
                                                <option value="PM">PM</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6 mb-4.5">
                                    <div className="w-full sm:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Type of meeting <span className="text-meta-1">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Entrez le secteur d'activité"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            required
                                        />
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Lieu <span className="text-meta-1">*</span>
                                        </label>
                                        <select
                                            value={location}
                                            onChange={handleLocationChange}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            required
                                        >
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
