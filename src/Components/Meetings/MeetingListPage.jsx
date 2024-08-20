import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {PrimaryButton} from "../Atoms/PrimaryButton.jsx";
import { useSelector } from 'react-redux';
import { Api } from '../Tools/Api.js';
import {SecondaryButton} from "../Atoms/SecondaryButton.jsx";
import Loading from '../Loading/Loading.jsx';
// base url
const baseUrl = import.meta.env.VITE_BASE_URL;
const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [meetingsList, setMeetingsList] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const token = useSelector(state=>state.authentication.token);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const fetchMeetings = async () => {
            try {
                await  Api(`${baseUrl}/Meeting`,'get', '' , token)
                .then(res=>setMeetingsList(res.data))
                setLoading(false);
            } catch (error) {
                console.error('Error fetching meeting:', error);
            }
        };
        fetchMeetings();
    }, []);

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getDayOfWeek = (date) => {
        return date.getDay();
    };

    const generateCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const days = daysInMonth(month, year);
        let firstDay = getDayOfWeek(new Date(year, month, 1));
        const weeks = [];
        let week = new Array(7).fill(null);

        for (let i = 0; i < firstDay; i++) {
            week[i] = null;
        }
        for (let day = 1; day <= days; day++) {
            week[firstDay] = day;
            firstDay++;
            if (firstDay > 6) {
                weeks.push(week);
                week = new Array(7).fill(null);
                firstDay = 0;
            }
        }
        if (week.some(day => day !== null)) {
            weeks.push(week);
        }
        return weeks;
    };

    const handlePreviousMonth = () => {
        const prevMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
        setCurrentDate(new Date(prevMonth));
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
        setCurrentDate(new Date(nextMonth));
    };

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const weeks = generateCalendar();

    return (
        <>
            {loading ? <Loading/> : (
                <div>
                    <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="flex justify-between p-2 items-center">
                            <button onClick={handlePreviousMonth} className="text-xl font-semibold">&lt;</button>
                            <span className="text-xl font-semibold">
                                {`${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`}
                            </span>
                            <button onClick={handleNextMonth} className="text-xl font-semibold">&gt;</button>
                        </div>
                        <table className="w-full">
                            <thead>
                            <tr className="grid grid-cols-7 rounded-t-sm bg-[#004b9c] text-white">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                                    <th
                                        key={index}
                                        className="flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5"
                                    >
                                        <span className="hidden lg:block">{day}</span>
                                        <span className="block lg:hidden">{day.slice(0, 3)}</span>
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {weeks.map((week, weekIndex) => (
                                <tr key={weekIndex} className="grid grid-cols-7">
                                    {week.map((day, dayIndex) => {
                                        const event = meetingsList.find(event => {
                                            const eventDate = new Date(event.date);
                                            return eventDate.getFullYear() === currentDate.getFullYear() &&
                                                eventDate.getMonth() === currentDate.getMonth() &&
                                                eventDate.getDate() === day;
                                        });
                                        return (
                                            <td
                                                key={dayIndex}
                                                className={`ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31 ${!day ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                                                onClick={() => event && handleEventClick(event)}
                                            >
                                                <span className={`font-medium ${day ? 'text-black dark:text-white' : 'text-gray-400'}`}>
                                                    {day}
                                                </span>
                                                {event && (
                                                    <Link to={`/SMS/MeetingDetails/${event.meetingId}`}>
                                                        <div
                                                            className="event absolute left-2 z-10 mb-1 flex w-[92%] flex-col rounded-sm border-l-[3px] border-[#FF9800] bg-gray px-3 py-1 text-left"
                                                        >
                                                        <span
                                                            className="event-name text-sm font-semibold text-black dark:text-white">
                                                            {event.title}
                                                        </span>
                                                            <span
                                                                className="time text-sm font-medium text-black dark:text-white">
                                                            {event.location}
                                                        </span>
                                                        </div>
                                                    </Link>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='flex justify-end'>
                        <Link to='/SMS/ScheduleMeeting' className='mt-3'>
                            <PrimaryButton>Planifier une réunion</PrimaryButton>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Calendar;
