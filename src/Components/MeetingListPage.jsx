import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([
        {
            id: 1,
            date: new Date(2024, 6, 5),
            title: "Meetings",
            time: "5 Jul - 6 Jul",
            location: "Virtual",
            jury: "Internal Review Panel"
        },
        {
            id: 2,
            date: new Date(2024, 6, 23),
            title: "Exams",
            time: "23 Jul - 24 Jul",
            location: "Main Hall",
            jury: "External Examiners"
        },
    ]);
    const [selectedEvent, setSelectedEvent] = useState(null);

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
                    <tr className="grid grid-cols-7 rounded-t-sm bg-blue-950 text-white">
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
                                const event = events.find(event =>
                                    event.date.getFullYear() === currentDate.getFullYear() &&
                                    event.date.getMonth() === currentDate.getMonth() &&
                                    event.date.getDate() === day
                                );
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
                                            <div
                                                className="event absolute left-2 z-10 mb-1 flex w-[92%] flex-col rounded-sm border-l-[3px] border-bg-blue-950 bg-gray px-3 py-1 text-left"
                                            >
                                                    <span className="event-name text-sm font-semibold text-black dark:text-white">
                                                        {event.title}
                                                    </span>
                                                <span className="time text-sm font-medium text-black dark:text-white">
                                                        {event.time}
                                                    </span>
                                            </div>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {selectedEvent && (
                <div className="fixed inset-0 bg-graydark bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="relative bg-white shadow-lg rounded-lg w-115 ">
                        <div className="flex w-115 h-16 rounded-t-lg justify-center items-center bg-blue-950 mb-4">
                            <h2 className="text-xl font-bold text-white">Détails de la Réunion</h2>
                            <Link to='/RescheduleMeeting'><FaEdit size={20} className="absolute right-4 top-[21px] text-xl cursor-pointer text-white" />
                            </Link>
                        </div>
                        <div className="mb-4 border-b p-4 border-gray-300 pb-4">
                            <p className="text-blue-950 font-bold">Date:</p>
                            <p className="text-gray-900">{selectedEvent.date.toLocaleDateString()}</p>
                        </div>
                        <div className="mb-4 border-b p-4 border-gray-300 pb-4">
                            <p className="text-blue-950 font-bold">Titre:</p>
                            <p className="text-gray-900">{selectedEvent.title}</p>
                        </div>
                        <div className="mb-4 border-b p-4 border-gray-300 pb-4">
                            <p className="text-blue-950 font-bold">Heure:</p>
                            <p className="text-gray-900">{selectedEvent.time}</p>
                        </div>
                        <div className="mb-4 border-b p-4 border-gray-300 pb-4">
                            <p className="text-blue-950 font-bold">Lieu:</p>
                            <p className="text-gray-900">{selectedEvent.location}</p>
                        </div>
                        <div className="mb-4 p-4">
                            <p className="text-blue-950 font-bold">Jury:</p>
                            <p className="text-gray-900">{selectedEvent.jury}</p>
                        </div>
                        <div className="flex justify-end pr-4 pb-3 -mt-4">
                            <button
                                className="text-red-600 focus:outline-none"
                                onClick={() => setSelectedEvent(null)}
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className='flex justify-end'>
                <Link to='/ScheduleMeeting'
                      className="rounded mt-3 bg-blue-950 py-2 px-6 font-medium text-white hover:bg-opacity-90 ">
                    Planifier une réunion
                </Link>
            </div>
        </>
    );
};

export default Calendar;