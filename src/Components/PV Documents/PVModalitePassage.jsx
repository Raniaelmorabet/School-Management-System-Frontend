import React from 'react';
import html2pdf from 'html2pdf.js';

const studentData = [
    { name: "AYMANE OUALID", continuous: 12.21, theoretical: 14.03, practical: 13.88, average: 13.29, decision: "Admis" },
    { name: "DRISS SOUHANE", continuous: 14.11, theoretical: 16.54, practical: 16.17, average: 15.49, decision: "Admis" },
    { name: "YOUSSEF OUTATAHOUTE", continuous: 11.19, theoretical: 13.73, practical: 14.41, average: 13.03, decision: "Admis" },
    { name: "ROUIJEL MOHAMMED", continuous: 11.24, theoretical: 12.01, practical: 13.00, average: 12.09, decision: "Admis" },
    { name: "MOUAD MALKI", continuous: 11.73, theoretical: 14.10, practical: 16.00, average: 13.92, decision: "Abandonné" },
    { name: "KHAOULA FRAGOU", continuous: 11.73, theoretical: 14.10, practical: 16.00, average: 13.92, decision: "Admise" },
    { name: "MANAL BENRHIMOU", continuous: 13.05, theoretical: 14.92, practical: 15.63, average: 14.48, decision: "Admise" },
    { name: "MOHCINE AMAATI", continuous: 11.59, theoretical: 13.90, practical: 15.26, average: 13.54, decision: "Admis" },
    { name: "SIHAME EL-LABBAR", continuous: 13.86, theoretical: 14.08, practical: 14.95, average: 14.32, decision: "Abandonné" },
    { name: "IBRAHIM OUAZZANI IBRAHIMI", continuous: 12.50, theoretical: 13.72, practical: 13.44, average: 13.16, decision: "Admis" },
    { name: "MOUAD EL OMARI", continuous: 9.76, theoretical: 12.00, practical: 11.47, average: 10.96, decision: "Admis" },
    { name: "AYMANE OUALID", continuous: 12.21, theoretical: 14.03, practical: 13.88, average: 13.29, decision: "Admis" },
    { name: "DRISS SOUHANE", continuous: 14.11, theoretical: 16.54, practical: 16.17, average: 15.49, decision: "Admis" },
    { name: "YOUSSEF OUTATAHOUTE", continuous: 11.19, theoretical: 13.73, practical: 14.41, average: 13.03, decision: "Admis" },
    { name: "ROUIJEL MOHAMMED", continuous: 11.24, theoretical: 12.01, practical: 13.00, average: 12.09, decision: "Admis" },
    { name: "MOUAD MALKI", continuous: 11.73, theoretical: 14.10, practical: 16.00, average: 13.92, decision: "Abandonné" },
    { name: "KHAOULA FRAGOU", continuous: 11.73, theoretical: 14.10, practical: 16.00, average: 13.92, decision: "Admise" },
    { name: "MANAL BENRHIMOU", continuous: 13.05, theoretical: 14.92, practical: 15.63, average: 14.48, decision: "Admise" },
    { name: "MOHCINE AMAATI", continuous: 11.59, theoretical: 13.90, practical: 15.26, average: 13.54, decision: "Admis" },
    { name: "MOHCINE AMAATI", continuous: 11.59, theoretical: 13.90, practical: 15.26, average: 13.54, decision: "Admis" },
    { name: "SIHAME EL-LABBAR", continuous: 13.86, theoretical: 14.08, practical: 14.95, average: 14.32, decision: "Abandonné" },
    { name: "IBRAHIM OUAZZANI IBRAHIMI", continuous: 12.50, theoretical: 13.72, practical: 13.44, average: 13.16, decision: "Admis" },
    { name: "IBRAHIM OUAZZANI IBRAHIMI", continuous: 12.50, theoretical: 13.72, practical: 13.44, average: 13.16, decision: "Admis" },
    { name: "IBRAHIM OUAZZANI IBRAHIMI", continuous: 12.50, theoretical: 13.72, practical: 13.44, average: 13.16, decision: "Admis" },
    { name: "MOUAD EL OMARI", continuous: 9.76, theoretical: 12.00, practical: 11.47, average: 10.96, decision: "Admis" },
    { name: "AYMANE OUALID", continuous: 12.21, theoretical: 14.03, practical: 13.88, average: 13.29, decision: "Admis" },
    { name: "DRISS SOUHANE", continuous: 14.11, theoretical: 16.54, practical: 16.17, average: 15.49, decision: "Admis" },
    { name: "YOUSSEF OUTATAHOUTE", continuous: 11.19, theoretical: 13.73, practical: 14.41, average: 13.03, decision: "Admis" },
    { name: "ROUIJEL MOHAMMED", continuous: 11.24, theoretical: 12.01, practical: 13.00, average: 12.09, decision: "Admis" },
    { name: "MOUAD MALKI", continuous: 11.73, theoretical: 14.10, practical: 16.00, average: 13.92, decision: "Abandonné" },
    { name: "KHAOULA FRAGOU", continuous: 11.73, theoretical: 14.10, practical: 16.00, average: 13.92, decision: "Admise" },
    { name: "MANAL BENRHIMOU", continuous: 13.05, theoretical: 14.92, practical: 15.63, average: 14.48, decision: "Admise" },
    { name: "MOHCINE AMAATI", continuous: 11.59, theoretical: 13.90, practical: 15.26, average: 13.54, decision: "Admis" },
    { name: "SIHAME EL-LABBAR", continuous: 13.86, theoretical: 14.08, practical: 14.95, average: 14.32, decision: "Abandonné" },
    { name: "IBRAHIM OUAZZANI IBRAHIMI", continuous: 12.50, theoretical: 13.72, practical: 13.44, average: 13.16, decision: "Admis" },
    { name: "MOUAD EL OMARI", continuous: 9.76, theoretical: 12.00, practical: 11.47, average: 10.96, decision: "Admis" },
    { name: "AYMANE OUALID", continuous: 12.21, theoretical: 14.03, practical: 13.88, average: 13.29, decision: "Admis" },
    { name: "DRISS SOUHANE", continuous: 14.11, theoretical: 16.54, practical: 16.17, average: 15.49, decision: "Admis" },
    { name: "YOUSSEF OUTATAHOUTE", continuous: 11.19, theoretical: 13.73, practical: 14.41, average: 13.03, decision: "Admis" },
    { name: "ROUIJEL MOHAMMED", continuous: 11.24, theoretical: 12.01, practical: 13.00, average: 12.09, decision: "Admis" },
    { name: "MOUAD MALKI", continuous: 11.73, theoretical: 14.10, practical: 16.00, average: 13.92, decision: "Abandonné" },
    { name: "KHAOULA FRAGOU", continuous: 11.73, theoretical: 14.10, practical: 16.00, average: 13.92, decision: "Admise" },
    { name: "MANAL BENRHIMOU", continuous: 13.05, theoretical: 14.92, practical: 15.63, average: 14.48, decision: "Admise" },
    { name: "MOHCINE AMAATI", continuous: 11.59, theoretical: 13.90, practical: 15.26, average: 13.54, decision: "Admis" },
    { name: "SIHAME EL-LABBAR", continuous: 13.86, theoretical: 14.08, practical: 14.95, average: 14.32, decision: "Abandonné" },
    { name: "IBRAHIM OUAZZANI IBRAHIMI", continuous: 12.50, theoretical: 13.72, practical: 13.44, average: 13.16, decision: "Admis" },
    { name: "MOUAD EL OMARI", continuous: 9.76, theoretical: 12.00, practical: 11.47, average: 10.96, decision: "Admis" },
];

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

class PVModalitePassage extends React.Component {
    generatePDF = () => {
        const element = document.getElementById('printableTable');
        html2pdf()
            .from(element)
            .set({
                margin: [5, 5],
                filename: 'table.pdf',
                html2canvas: { scale: 2 },
                jsPDF: { orientation: 'landscape' }
            })
            .save();
    };

    render() {
        const chunkedData = chunkArray(studentData, 18);

        return (
            <div className="page">
                <style>
                    {`
                        @media print {
                            @page {
                                size: landscape;
                                margin: 3mm;
                            }
                            .page {
                                width: 297mm;
                                height: 210mm;
                                overflow: hidden;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                padding: 3mm;
                            }
                        }
                        .page {
                            font-size: 10px;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        th, td {
                            border: 0.5px solid black;
                            padding: 4px;
                            text-align: center;
                            font-size: 10px;
                        }
                        .header-table {
                            width: 100%;
                            margin-bottom: 18px;
                            border: none;
                    
                        }
                        .header-table th {
                            border: 0.5px solid black;
                            font-size: 12px;
                            padding: 5px;
                        }
                        th.group-header {
                            background-color: #f0f0f0;
                            font-weight: bold;
                            padding-bottom: 15px;
                        }
                        th.group-subheader {
                            padding: 10px;
                        }
                        .info-table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        .info-table th {
                            border: 1px solid black;
                            padding: 4px;
                            text-align: center;
                        }
                        .info-table td {
                            padding: 4px;
                            text-align: center;
                        }
                        .info-table div {
                            padding: 10px;
                            text-align: center;
                            font-weight: bold;
                        }
                    `}
                </style>
                <button onClick={this.generatePDF}>Download PDF</button>
                <div id="printableTable">
                    {chunkedData.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="chunk">
                            <table className="info-table">
                                <tbody>
                                <tr>
                                    <th style={{
                                        width: '23%',
                                        textAlign: 'center',
                                        borderWidth: '1px 1px 1px 1px',
                                        borderStyle: 'solid',
                                        borderColor: 'black'
                                    }} rowSpan={2}>
                                        <p className='mb-1 text-m'>Ecole Professionnelle d'Informatique et de
                                            Management</p>
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
                                Contrôles Continus (2ème Année) <br/>
                                <i>Filière de Formation</i> : Développement informatique - 2ème année – Niveau :
                                Technicien spécialisé
                            </div>
                            <table className="header-table">
                                <thead>
                                <tr>
                                    <th rowSpan="2">Nom & Prénom</th>
                                    <th colSpan="3" className="group-header">Moyennes pondérées 1ère année</th>
                                    <th rowSpan="2">Moyenne Générale<br/>MG *</th>
                                    <th rowSpan="2">Décision du jury<br/>d'examens **</th>
                                </tr>
                                <tr>
                                    <th className="group-subheader">Contrôles Continus<br/>MPCC<br/>(30%)</th>
                                    <th className="group-subheader">EFCF<br/>Théorique MPEFCFT<br/>(20%)</th>
                                    <th className="group-subheader">EFCF<br/>Pratique MPEFCFP<br/>(30%)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {chunk.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.decision === "Abandonné" ? "-" : student.continuous}</td>
                                        <td>{student.decision === "Abandonné" ? "-" : student.theoretical}</td>
                                        <td>{student.decision === "Abandonné" ? "-" : student.practical}</td>
                                        <td>{student.decision === "Abandonné" ? "-" : student.average}</td>
                                        <td>{student.decision}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                    <div style={{
                        textAlign: 'left',
                        fontSize: '10px',
                        padding: '10px',
                        marginTop: '10px'
                    }}>
                    <table style={{
                        width: '70%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto'
                    }}>
                        <tr>
                            <th style={{
                                borderWidth: '1px 1px 1px 1px',
                                borderStyle: 'solid',
                                borderColor: 'black',
                                textAlign: 'center',
                                position: 'relative',
                            }}>
                                <b>MG = </b>
                                MPCCx3 + MPEFCFTx2 + MPEFCFPx3
                                <div style={{
                                    position: 'relative',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    textAlign: 'center',
                                    marginBottom: '5px'
                                }}>
                                    <hr style={{
                                        border: '0.5px solid black',
                                        margin: '0  auto',
                                        width: '90%',
                                        marginTop: '8px'
                                    }}/>
                                    <div>8</div>
                                </div>
                            </th>
                        </tr>
                    </table>
                    La moyenne générale de la première année représente la moyenne pondérée qui constitue
                    seulement
                    le seuil minimal de passage en deuxième année qui doit être ≥ 10/20, Si cette moyenne est
                    comprise entre 08/20 et 10/20, le jury d’examens examine la situation des stagiaires
                    concernés
                    et propose au Secrétariat d’Etat chargé de la Formation Professionnelle, les propositions
                    pour :<br/>
                    <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
                        <li>Soit permettre au stagiaire de passer en deuxième année (rachat) ;</li>
                        <li>Soit autoriser le stagiaire à redoubler (une seule fois durant la durée de la
                            filière de
                            formation) ;
                        </li>
                        <li>Soit réorienter le stagiaire vers une nouvelle filière (exclusivement en première
                            année),
                        </li>
                        <li>Si cette moyenne est inférieure à 08/20, le stagiaire peut être exceptionnellement
                            déclaré redoublant (une seule fois durant la durée de la filière de formation),
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        );
    }
}

export default PVModalitePassage;
