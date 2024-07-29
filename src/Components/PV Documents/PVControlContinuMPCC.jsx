import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import html2pdf from 'html2pdf.js/dist/html2pdf.min';

const data = [
    { name: 'BOUZIANE OTHMANE', scores: [18, 10, 16, 18, 19, 10, 18, 14, 16, 11, 18, 13, 19, 13, 5.64, 20], MPCC: 18.64},
    { name: 'IDRASSE AYYOUBE', scores: [17.5, 12, 14, 16, 14, 12, 12, 12, 14, 12, 10, 12, 15, 10, 5.27, 18], MPCC: 15.64},
    { name: 'NIZAR BARHDADI', scores: [18, 12, 14, 15, 16, 12, 17, 18, 16, 17, 16, 19, 20, 16, 6.67, 12], MPCC: 10.64},
    { name: 'MOHAMED BOUDHAR', scores: [19, 2, 16, 14, 15, 13, 18, 18, 14, 14, 10, 18, 12, 0, 0, 12], MPCC: 13.64},
    { name: 'ZIAD LAAGOUD', scores: [19, 12.5, 19, 13, 16, 12, 18, 13, 18, 18, 17, 12, 17, 17, 5.23, 13], MPCC: 19.64},
    { name: 'SOUFIANE ALLA', scores: [17, 20, 13, 12, 19, 13, 16, 14, 13, 15, 17, 16, 14, 6.79, 19, 13],MPCC: 15.64},
    { name: 'NOUR EDDINE AIT OUBALLA', scores: [16, 20, 20, 12, 14, 12, 19, 15, 13, 19, 15, 17, 14, 15, 7.15, 19], MPCC: 15.64},
    { name: 'WASSILA SGHIOUAR', scores: [18, 9, 19, 17, 13, 17, 6, 11, 12, 6, 6.28, 12, 16, 5.79, 18, 14], MPCC: 16.64},
    { name: 'AYMANE OUALID', scores: [15, 16, 16, 17, 18, 19, 12, 15, 12, 14, 17, 16, 13, 5.79, 12, 13],MPCC: 18.64},
    { name: 'AHMED BEN', scores: [19, 12, 15, 14, 17, 16, 18, 19, 13, 14, 17, 18, 12, 7.14, 16, 12], MPCC: 15.64 },
    { name: 'ZIAD LAAGOUD', scores: [19, 12.5, 19, 13, 16, 12, 18, 13, 18, 18, 17, 12, 17, 17, 5.23, 13], MPCC: 15.64},
    { name: 'SOUFIANE ALLA', scores: [17, 20, 13, 12, 19, 13, 16, 14, 13, 15, 17, 16, 14, 6.79, 19, 13], MPCC: 19.64},
    { name: 'NOUR EDDINE AIT OUBALLA', scores: [16, 20, 20, 12, 14, 12, 19, 15, 13, 19, 15, 17, 14, 15, 7.15, 19], MPCC: 15.64},
    { name: 'WASSILA SGHIOUAR', scores: [18, 9, 19, 17, 13, 17, 6, 11, 12, 6, 6.28, 12, 16, 5.79, 18, 14], MPCC: 15.64},
    { name: 'AYMANE OUALID', scores: [15, 16, 16, 17, 18, 19, 12, 15, 12, 14, 17, 16, 13, 5.79, 12, 13], MPCC: 15.64},
    { name: 'AHMED BEN', scores: [19, 12, 15, 14, 17, 16, 18, 19, 13, 14, 17, 18, 12, 7.14, 16, 12], MPCC: 15.64},
    { name: 'BOUZIANE OTHMANE', scores: [18, 10, 16, 18, 19, 10, 18, 14, 16, 11, 18, 13, 19, 13, 5.64, 20], MPCC: 18.64},
    { name: 'IDRASSE AYYOUBE', scores: [17.5, 12, 14, 16, 14, 12, 12, 12, 14, 12, 10, 12, 15, 10, 5.27, 18], MPCC: 15.64},
    { name: 'NIZAR BARHDADI', scores: [18, 12, 14, 15, 16, 12, 17, 18, 16, 17, 16, 19, 20, 16, 6.67, 12], MPCC: 10.64},
    { name: 'MOHAMED BOUDHAR', scores: [19, 2, 16, 14, 15, 13, 18, 18, 14, 14, 10, 18, 12, 0, 0, 12], MPCC: 13.64},
    { name: 'MOHAMED BOUDHAR', scores: [19, 2, 16, 14, 15, 13, 18, 18, 14, 14, 10, 18, 12, 0, 0, 12], MPCC: 13.64},
    { name: 'MOHAMED BOUDHAR', scores: [19, 2, 16, 14, 15, 13, 18, 18, 14, 14, 10, 18, 12, 0, 0, 12], MPCC: 13.64},
    { name: 'ZIAD LAAGOUD', scores: [19, 12.5, 19, 13, 16, 12, 18, 13, 18, 18, 17, 12, 17, 17, 5.23, 13], MPCC: 19.64},
    { name: 'SOUFIANE ALLA', scores: [17, 20, 13, 12, 19, 13, 16, 14, 13, 15, 17, 16, 14, 6.79, 19, 13],MPCC: 15.64},
    { name: 'NOUR EDDINE AIT OUBALLA', scores: [16, 20, 20, 12, 14, 12, 19, 15, 13, 19, 15, 17, 14, 15, 7.15, 19], MPCC: 15.64},
    { name: 'WASSILA SGHIOUAR', scores: [18, 9, 19, 17, 13, 17, 6, 11, 12, 6, 6.28, 12, 16, 5.79, 18, 14], MPCC: 16.64},
    { name: 'AYMANE OUALID', scores: [15, 16, 16, 17, 18, 19, 12, 15, 12, 14, 17, 16, 13, 5.79, 12, 13],MPCC: 18.64},
    { name: 'AHMED BEN', scores: [19, 12, 15, 14, 17, 16, 18, 19, 13, 14, 17, 18, 12, 7.14, 16, 12], MPCC: 15.64 },
    { name: 'ZIAD LAAGOUD', scores: [19, 12.5, 19, 13, 16, 12, 18, 13, 18, 18, 17, 12, 17, 17, 5.23, 13], MPCC: 15.64},
    { name: 'SOUFIANE ALLA', scores: [17, 20, 13, 12, 19, 13, 16, 14, 13, 15, 17, 16, 14, 6.79, 19, 13], MPCC: 19.64},
    { name: 'NOUR EDDINE AIT OUBALLA', scores: [16, 20, 20, 12, 14, 12, 19, 15, 13, 19, 15, 17, 14, 15, 7.15, 19], MPCC: 15.64},
    { name: 'WASSILA SGHIOUAR', scores: [18, 9, 19, 17, 13, 17, 6, 11, 12, 6, 6.28, 12, 16, 5.79, 18, 14], MPCC: 15.64},
    { name: 'AYMANE OUALID', scores: [15, 16, 16, 17, 18, 19, 12, 15, 12, 14, 17, 16, 13, 5.79, 12, 13], MPCC: 15.64},
    { name: 'AHMED BEN', scores: [19, 12, 15, 14, 17, 16, 18, 19, 13, 14, 17, 18, 12, 7.14, 16, 12], MPCC: 15.64},
    { name: 'AYMANE OUALID', scores: [15, 16, 16, 17, 18, 19, 12, 15, 12, 14, 17, 16, 13, 5.79, 12, 13], MPCC: 15.64},
    { name: 'AHMED BEN', scores: [19, 12, 15, 14, 17, 16, 18, 19, 13, 14, 17, 18, 12, 7.14, 16, 12], MPCC: 15.64},
    { name: 'AYMANE OUALID', scores: [15, 16, 16, 17, 18, 19, 12, 15, 12, 14, 17, 16, 13, 5.79, 12, 13], MPCC: 15.64},
    { name: 'AHMED BEN', scores: [19, 12, 15, 14, 17, 16, 18, 19, 13, 14, 17, 18, 12, 7.14, 16, 12], MPCC: 15.64},
    { name: 'Emargement du formateur de l’UF', scores: Array(16).fill(null), MPCC: null}
];

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

const PVControlContinuMPCC = () => {
    const [showModal, setShowModal] = useState(false);

    const Deliberation = ({ students }) => (
        <div className="page">
            <style>
                {`
                @media print {
                    @page {
                        size: landscape;
                        margin: 10mm;
                    }
                    .page {
                        width: 297mm;
                        height: 210mm;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                .page {
                    font-size: 10px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                }
                th, td {
                    border: 0.5px solid black;
                }
                .header-table {
                    width: 100%;
                    margin-bottom: 20px;
                    border: none;
                }
                .header-table th {
                    border: none;
                }
                `}
            </style>
            <div className="overflow-x-auto">
                <table>
                    <tbody>
                    <tr>
                        <th style={{
                            width: '23%',
                            textAlign: 'center',
                            borderWidth: '1px 1px 1px 1px',
                            borderStyle: 'solid',
                            borderColor: 'black'
                        }} rowSpan={2}>
                            <p className='mb-1 text-m'>Ecole Professionnelle d'Informatique et de Management</p>
                        </th>
                        <th style={{
                            width: '24%',
                            textAlign: 'center',
                            borderWidth: '1px 1px 1px 0',
                            borderStyle: 'solid',
                            borderColor: 'black'
                        }}>
                            <p className='mb-2 text-m'>30-31 Bureaux Amine VN Meknès</p>
                        </th>
                        <th style={{
                            width: '23%',
                            textAlign: 'center',
                            borderWidth: '1px 1px 1px 0',
                            borderStyle: 'solid',
                            borderColor: 'black'
                        }} rowSpan={2}>
                            <p className='mb-1 text-m'>Tél : 0535520966</p>
                        </th>
                    </tr>
                    <tr>
                        <th style={{
                            width: '23%',
                            textAlign: 'center',
                            borderWidth: '0 1px 1px 0',
                            borderStyle: 'solid',
                            borderColor: 'black',
                            padding: "4px"
                        }}>
                            <p className='mb-2 text-m'>Email : epim.efpp@gmail.com</p>
                        </th>
                    </tr>
                    </tbody>
                </table>
                <div className='pb-4 justify-center text-center font-bold text-sm'>
                    PROCE-VERBAL DE DELIBIRATION<br/>
                    SECTEUR : TIC <br/>
                    Année de Formation : 2023/2024<br/>
                    ----------------------------------------------- <br/>
                    Contrôles Continus (2éme année) <br/>
                    <i>Filière de Formation</i> : Développement informatique - 2éme année – Niveau : Technicien
                    spécialisé
                </div>
                <table>
                    <thead>
                    <tr className="bg-blue-100">
                        <th className="p-2 text-center" colSpan="19">
                            <p className='-mt-2'>Examens Pratiques de fin de cursus de formation (2éme année)</p>
                        </th>
                    </tr>
                    <tr>
                        <th rowSpan={2}>Nom & prénom</th>
                        {Array.from({length: 16}).map((_, i) => (
                            <th key={i} className="py-14">
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <span className='justify-start'
                                          style={{transform: 'rotate(-90deg)'}}>UF {i + 1} </span>
                                </div>
                            </th>
                        ))}
                        <th className="p-2" rowSpan={2}>MPCC</th>
                    </tr>
                    <tr>
                        {Array.from({length: 16}).map((_, i) => (
                            <th key={i} className="p-2 bg-orange-300">{i % 2 === 0 ? 1 : 2}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student, index) => (
                        <tr key={index} className="even:bg-gray-100">
                            <th className="w-44">{student.name}</th>
                            {student.scores.map((score, i) => (
                                <th key={i} className="">{score}</th>
                            ))}
                            <th className="p-1">{student.MPCC}</th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const generatePDF = () => {
        const chunks = chunkArray(data, 15);
        const pdfContent = chunks.map((chunk, index) => (
            <div key={index} className="page">
                <Deliberation students={chunk}/>
            </div>
        ));

        const element = (
            <div>
                {pdfContent}
            </div>
        );

        const html = ReactDOMServer.renderToStaticMarkup(element);
        const opt = {
            margin: 0.2,
            filename: 'deliberation.pdf',
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: {scale: 2},
            jsPDF: {unit: 'in', format: 'a4', orientation: 'landscape'}
        };

        html2pdf().from(html).set(opt).save();
    };

    return (
        <div className="container mx-auto">
            <button onClick={generatePDF}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
                Generate PDF
            </button>
        </div>
    );
};

export default PVControlContinuMPCC;
