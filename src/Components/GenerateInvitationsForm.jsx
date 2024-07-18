import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument.jsx';

const GenerateInvitationsForm = () => {
    const [objectives, setObjectives] = useState([
        'Arrêter les listes des stagiaires inscrits au titre de l\'année 2022-2023',
        'Valider le règlement des examens',
        'Valider les coefficients attribués à chaque unité de formation',
        'Arrêter le planning prévisionnel de réalisation des programmes dispensé dans l\'établissement'
    ]);

    const Data = {
        "JuryMembers": [
            {
                "FirstName": "Hamza",
                "LastName": "Bourkha",
                "Email": "john.doe@example.com",
                "CompanyName": "Tech Solutions",
                "YearOfExperience": 10,
                "LatestDiploma": "PhD in Computer Science",
                "ProfileImg": "profile1.jpg",
                "RoleId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
                "Role": {
                    "Id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
                    "RoleName": "president"
                },
                "JuryId": "q1r2s3t4-u5v6-w7x8-y9z0-a1b2c3d4e5f6",
                "Jury": null
            }
        ],
        "Meetings": [
            {
                "Date": "2023-07-17",
                "Time": "10:00 AM",
                "Location": "(30 et 31 Bureaux Amine Angle  Rue Tarfaya et rue Mly Ali Cherif VN)",
                "Type": "1ère",
                "JuryId": "q1r2s3t4-u5v6-w7x8-y9z0-a1b2c3d4e5f6",
                "Jury": null
            }
        ],
        "Juries": [
            {
                "JuryName": "Technical Jury",
                "SectorId": "p1q2r3s4-t5u6-v7w8-x9y0-z1a2b3c4d5e6",
                "JuryMembers": [
                    {
                        "FirstName": "Hamza",
                        "LastName": "Bourkha",
                        "Email": "john.doe@example.com",
                        "CompanyName": "Tech Solutions",
                        "YearOfExperience": 10,
                        "LatestDiploma": "PhD in Computer Science",
                        "ProfileImg": "profile1.jpg",
                        "RoleId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
                        "Role": {
                            "Id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
                            "RoleName": "Senior Developer"
                        },
                        "JuryId": "q1r2s3t4-u5v6-w7x8-y9z0-a1b2c3d4e5f6",
                        "Jury": null
                    }
                ]
            }
        ],
        "Sectors": [
            {
                "Name": "(Administration, Gestion et Commerce)"
            }
        ],
        "School": [
            {
                "Name": "l'Ecole Professionnelle d'Informatique et de Management Meknès",
                "ville": "méknes"
            }
        ]
    };
    const closing = "Veuillez agréer, Monsieur le Délégué, l'expression de mes sentiments les\n" +
        "meilleurs";

    return (
        <>
            {Data.JuryMembers.map((member, key) => (
                <div key={key} className="max-w-3xl mt-10 mx-auto p-8 bg-white border border-gray-300 rounded-lg shadow-md">
                    <div className="text-left mb-8">
                        <p>Mr {member.FirstName} {member.LastName}</p>
                        <p>{member.Role.RoleName} du Jury d'examens</p>
                        <p>{Data.School[0].Name}</p>
                        <p>Secteur : {Data.Sectors[0].Name}</p>
                        <p>{Data.Meetings[0].Location}</p>
                    </div>
                    <div className="text-center mb-10">
                        <span>A</span>
                        <p>Monsieur Le Délégué Régional de la Formation Professionnelle</p>
                        <p className="text-lg">{Data.School[0].ville}</p>
                    </div>
                    <div className="text-left mb-8">
                        <p className="py-4"><span className='font-bold'>Objet : </span>Convocation à assister à la {Data.Meetings[0].Type} réunion du Jury d'examens.</p>
                        <p className="mt-4">
                            Le président du Jury d'examens de {Data.School[0].Name} Monsieur {member.FirstName} {member.LastName} vous informe de la programmation de la {Data.Meetings[0].Type} réunion du Jury d'examens de {Data.School[0].Name}, {Data.Meetings[0].Date}. La réunion aura lieu à {Data.Meetings[0].Location}.
                        </p>
                        <ul className="list-disc list-inside mt-4">
                            {objectives.map((objective, index) => (
                                <li key={index}>{objective}</li>
                            ))}
                        </ul>
                        <p className="py-6">{closing}</p>
                    </div>
                    <div className="flex justify-end mb-8">
                        <div>
                            <p>Fait à {Data.School[0].ville}</p>
                            <p>le {Data.Meetings[0].Date}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className='flex justify-center items-center mt-5'>
                <PDFDownloadLink
                    document={<PDFDocument data={Data} objectives={objectives} closing={closing} />}
                    fileName="invitation.pdf"
                    className='bg-blue-700 text-white text-xl p-2 rounded'
                >
                    {({ loading }) => (loading ? 'Loading document...' : 'Download')}
                </PDFDownloadLink>
            </div>
        </>
    );
}

export default GenerateInvitationsForm;
