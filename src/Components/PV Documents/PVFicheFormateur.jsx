import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import html2pdf from 'html2pdf.js/dist/html2pdf.min';

const data = [
    ['Badredine ouzzine', 'UF 2.1', 'Multimédia interactif', ''],
    ['Youssef Joul', 'UF 2.2', 'Techniques de créativité', ''],
    ['Rida Aït Maha', 'UF 2.3', 'Production d’un projet graphique', ''],
    ['Badredine ouzzine', 'UF 2.4', 'Typographie', ''],
    ['Badredine ouzzine', 'UF 2.5', 'Estimation et commercialisation d’un projet prépresse', ''],
    ['Badredine ouzzine', 'UF 2.6', 'Dessin graphique en 3D', ''],
    ['Badredine ouzzine', 'UF 2.7', 'Packaging', ''],
    ['Badredine ouzzine', 'UF 2.8', 'Traitement d’image numérique', ''],
    ['Khadija Hdadi', 'UF 2.9', 'Comptabilité Analytique', ''],
    ['Khadija Hdadi', 'UF 2.10', 'Marketing', ''],
    ['Hajar Bettioui', 'UF 2.11', 'Droit des Affaires', ''],
    ['Youssef Joul', 'UF 2.12', 'Communication Professionnelle en Français', ''],
    ['Fatima zohra Bourkha', 'UF 2.13', 'Communication Professionnelle en arabe', ''],
    ['Fatima zohra Bourkha', 'UF 2.14', 'Communication Professionnelle en Anglais', ''],
    ['Badredine ouzzine', 'UF 2.15', 'Stage En Entreprise', ''],
    ['Badredine ouzzine', 'UF 2.1', 'Multimédia interactif', ''],
    ['Youssef Joul', 'UF 2.2', 'Techniques de créativité', ''],
    ['Rida Aït Maha', 'UF 2.3', 'Production d’un projet graphique', ''],
    ['Badredine ouzzine', 'UF 2.4', 'Typographie', ''],
    ['Badredine ouzzine', 'UF 2.5', 'Estimation et commercialisation d’un projet prépresse', ''],
    ['Badredine ouzzine', 'UF 2.6', 'Dessin graphique en 3D', ''],
    ['Badredine ouzzine', 'UF 2.7', 'Packaging', ''],
    ['Badredine ouzzine', 'UF 2.8', 'Traitement d’image numérique', ''],
    ['Khadija Hdadi', 'UF 2.9', 'Comptabilité Analytique', ''],
    ['Khadija Hdadi', 'UF 2.10', 'Marketing', ''],
    ['Hajar Bettioui', 'UF 2.11', 'Droit des Affaires', ''],
    ['Youssef Joul', 'UF 2.12', 'Communication Professionnelle en Français', ''],
    ['Fatima zohra Bourkha', 'UF 2.13', 'Communication Professionnelle en arabe', ''],
    ['Fatima zohra Bourkha', 'UF 2.14', 'Communication Professionnelle en Anglais', ''],
    ['Badredine ouzzine', 'UF 2.15', 'Stage En Entreprise', ''],
    ['Badredine ouzzine', 'UF 2.1', 'Multimédia interactif', ''],
    ['Youssef Joul', 'UF 2.2', 'Techniques de créativité', ''],
    ['Rida Aït Maha', 'UF 2.3', 'Production d’un projet graphique', ''],
    ['Badredine ouzzine', 'UF 2.4', 'Typographie', ''],
    ['Badredine ouzzine', 'UF 2.5', 'Estimation et commercialisation d’un projet prépresse', ''],
    ['Badredine ouzzine', 'UF 2.6', 'Dessin graphique en 3D', ''],
    ['Badredine ouzzine', 'UF 2.7', 'Packaging', ''],
    ['Badredine ouzzine', 'UF 2.8', 'Traitement d’image numérique', ''],
    ['Khadija Hdadi', 'UF 2.9', 'Comptabilité Analytique', ''],
    ['Khadija Hdadi', 'UF 2.10', 'Marketing', ''],
    ['Hajar Bettioui', 'UF 2.11', 'Droit des Affaires', ''],
    ['Youssef Joul', 'UF 2.12', 'Communication Professionnelle en Français', ''],
    ['Fatima zohra Bourkha', 'UF 2.13', 'Communication Professionnelle en arabe', ''],
    ['Fatima zohra Bourkha', 'UF 2.14', 'Communication Professionnelle en Anglais', ''],
    ['Badredine ouzzine', 'UF 2.15', 'Stage En Entreprise', ''],
    ['Badredine ouzzine', 'UF 2.1', 'Multimédia interactif', ''],
    ['Youssef Joul', 'UF 2.2', 'Techniques de créativité', ''],
    ['Rida Aït Maha', 'UF 2.3', 'Production d’un projet graphique', ''],
    ['Badredine ouzzine', 'UF 2.4', 'Typographie', ''],
    ['Badredine ouzzine', 'UF 2.5', 'Estimation et commercialisation d’un projet prépresse', ''],
    ['Badredine ouzzine', 'UF 2.6', 'Dessin graphique en 3D', ''],
    ['Badredine ouzzine', 'UF 2.7', 'Packaging', ''],
    ['Badredine ouzzine', 'UF 2.8', 'Traitement d’image numérique', ''],
    ['Khadija Hdadi', 'UF 2.9', 'Comptabilité Analytique', ''],
    ['Khadija Hdadi', 'UF 2.10', 'Marketing', ''],
    ['Hajar Bettioui', 'UF 2.11', 'Droit des Affaires', ''],
    ['Youssef Joul', 'UF 2.12', 'Communication Professionnelle en Français', ''],
    ['Fatima zohra Bourkha', 'UF 2.13', 'Communication Professionnelle en arabe', ''],
    ['Fatima zohra Bourkha', 'UF 2.14', 'Communication Professionnelle en Anglais', ''],
    ['Badredine ouzzine', 'UF 2.15', 'Stage En Entreprise', '']
];

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

const FicheFormateur = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    useEffect(() => {
        const chunkedData = chunkArray(data, 16);

        const Deliberation = () => (
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
                    {chunkedData.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="chunk">
                            <table className="header-table">
                                <tbody>
                                <tr>
                                    <th style={{ width: '30%', textAlign: 'center', borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }} rowSpan={2}>
                                        <p className='p-2 -mt-2'>Ecole Professionnelle<br/> d'Informatique et de <br/> Management</p>
                                    </th>
                                    <th style={{ width: '40%', textAlign: 'center', borderWidth: '1px 1px 1px 0', borderStyle: 'solid', borderColor: 'black' }}>
                                        <p className='p-2 -mt-2'>30-31 Bureaux Amine VN Meknès</p>
                                    </th>
                                    <th style={{ width: '30%', textAlign: 'center', borderWidth: '1px 1px 1px 0', borderStyle: 'solid', borderColor: 'black' }} rowSpan={2}>
                                        <p className='p-2 -mt-2'>Tél : 0535520966</p>
                                    </th>
                                </tr>
                                <tr>
                                    <th style={{ width: '40%', textAlign: 'center', borderWidth: '0 1px 1px 0', borderStyle: 'solid', borderColor: 'black', padding: '4px' }}>
                                        <p className='p-2 -mt-2'>Email : epim.efpp@gmail.com</p>
                                    </th>
                                </tr>
                                </tbody>
                            </table>
                            <div className="pb-[32px] justify-center text-center font-bold text-sm ">
                                PROCE-VERBAL DE DELIBIRATION<br />
                                SECTEUR : TIC<br />
                                Année de Formation : 2023/2024<br />
                                -----------------------------------------------<br />
                                Fiche d’identification de l’équipe pédagogique chargée de réaliser le programme de formation TI
                            </div>
                            <table className='text-center'>
                                <thead>
                                <tr>
                                    <th><p className='p-2 -mt-2'>Nom et Prénom du Formateur</p></th>
                                    <th><p className='p-2 -mt-2'>UF</p></th>
                                    <th><p className='p-2 -mt-2'>Unités de Formation</p></th>
                                    <th><p className='p-2 -mt-2'>Emargement du formateur</p></th>
                                </tr>
                                </thead>
                                <tbody>
                                {chunk.map((item, index) => (
                                    <tr key={index}>
                                        <td className='p-2 -mt-2'>{item[0]}</td>
                                        <td className='p-2 -mt-2'>{item[1]}</td>
                                        <td className='p-2 -mt-2'>{item[2]}</td>
                                        <td className='p-2 -mt-2'>{item[3]}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        );

        const printElement = ReactDOMServer.renderToString(<Deliberation />);

        const element = document.createElement('div');
        element.innerHTML = printElement;

        html2pdf()
            .from(element)
            .set({
                filename: 'fiche.pdf',
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
                html2canvas: { scale: 2 },
                margin: [7, 7, 7, 7]
            })
            .outputPdf('datauristring')
            .then((pdfDataUri) => {
                setPdfUrl(pdfDataUri);
            })
            .catch(error => console.error('Error generating PDF:', error));
    }, []);

    return (
        <>
            {pdfUrl && (
                <iframe
                    src={pdfUrl}
                    width="70%"
                    height="100%"
                    style={{ border: 'none', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, margin: "auto" }}
                    title="Del"
                ></iframe>
            )}
        </>
    );
};

export default FicheFormateur;
