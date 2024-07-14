import React from 'react';
import { FaEdit } from 'react-icons/fa';

function MeetingDetails() {
    const meetingDetails = {
        date: '2024-07-12',
        lheure: '10:00 AM',
        lieu: 'Salle de Réunion A',
        type: 'Conférence',
        jury: 'Dr. Smith, Prof. Johnson, Dr. Williams'
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-center">Détails de la Réunion</h2>
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <FaEdit size={23} />
                </button>
            </div>
            <div className="border-t border-gray-200">
                <div className="py-4">
                    <label className="block text-gray-700 font-medium mb-1">Date:</label>
                    <p className="text-gray-900">{meetingDetails.date}</p>
                </div>
                <div className="border-t border-gray-200 py-4">
                    <label className="block text-gray-700 font-medium mb-1">L'heure:</label>
                    <p className="text-gray-900">{meetingDetails.lheure}</p>
                </div>
                <div className="border-t border-gray-200 py-4">
                    <label className="block text-gray-700 font-medium mb-1">Lieu:</label>
                    <p className="text-gray-900">{meetingDetails.lieu}</p>
                </div>
                <div className="border-t border-gray-200 py-4">
                    <label className="block text-gray-700 font-medium mb-1">Type de Réunion:</label>
                    <p className="text-gray-900">{meetingDetails.type}</p>
                </div>
                <div className="border-t border-gray-200 py-4">
                    <label className="block text-gray-700 font-medium mb-1">Jury:</label>
                    <p className="text-gray-900">{meetingDetails.jury}</p>
                </div>
            </div>
        </div>
    );
}

export default MeetingDetails;
