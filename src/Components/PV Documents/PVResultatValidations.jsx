import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import 'tailwindcss/tailwind.css';
import HeaderTable from './HeaderTable.jsx';

const validation = () => {
    const contentRef = useRef();

    const generatePdf = () => {
        const element = contentRef.current;
        const opt = {
            filename: 'deliberation.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
        };
        html2pdf().from(element).set(opt).save();
    };

    return (
        <>
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
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-start;
                  page-break-after: always;
              }
          }
          .page {
              font-size: 15px;
              padding: 20px;
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
            <div className='mt-10'>
                <header className="App-header">
                    <button
                        onClick={generatePdf}
                        className="bg-blue-500 text-white rounded"
                    >
                        Download PDF
                    </button>
                </header>
                <div ref={contentRef} className="p-4">
                    {/* Page 1 */}
                    <div className="page">
                        <HeaderTable />
                        <p className="mb-2">
                            Le 15 Juillet 2024 à 13H00 heure, le jury d’examens s’est tenu sa réunion au siège de l’école EPIM sur convocation de son président.
                        </p>
                        <p className="mb-2 font-bold">Membres du jury présents</p>
                        <table className=" w-full mb-2">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">Membres professionnels</th>
                                <th className="border px-4 py-2">Membres de l’établissement</th>
                                <th className="border px-4 py-2">Membre représentant l’Administration</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border-[0.5px] px-4 py-2">Soufiane Najihi</td>
                                <td className="border-[0.5px] px-4 py-2">Ismail Sabbah</td>
                                <td className="border-[0.5px] px-4 py-2">Britel Mohammed Rachid</td>
                            </tr>
                            <tr>
                                <td className="border-[0.5px] px-4 py-2">Abderrahmane Adnane</td>
                                <td className="border-[0.5px] px-4 py-2">Meryem Bourkha</td>
                            </tr>
                            </tbody>
                        </table>
                        <p className="mb-2">
                            La réunion est présidée par Monsieur Najihi Soufiane en sa qualité de président du jury d’examen qui a précisé l’objectif de la réunion qui s’articule sur l’ordre du jour suivant :
                        </p>
                        <p className="mb-2 font-bold">L’ordre du jour :</p>
                        <p className="mb-2">
                            - Validation des notes finales obtenues par les stagiaires au titre de l’année 2023/2024,
                            - Proclamation des résultats obtenus
                        </p>
                    </div>
                    <p className="mb-2 font-bold">Le déroulement de la réunion</p>
                    <p className="mb-2">
                        Lors de cette réunion le président a rappelé Les principes prévus par la réglementation :
                    </p>
                    <p className="mb-2 font-bold">- Pour le passage :</p>
                    <p className="mb-2">
                        Toute moyenne supérieure ou égale à 10/20 le stagiaire est déclaré réussi,
                        Toute moyenne entre 08/20 et 10/20 le stagiaire est déclaré réussi avec rachat,
                        Toute moyenne inférieure strictement à 08/20 le stagiaire est déclaré redoublant,
                    </p>
                    <p className="mb-2 font-bold">- Pour l’obtention du diplôme :</p>
                    <p className="mb-2">
                        Toute moyenne supérieure ou égale à 10/20 le stagiaire est déclaré lauréat,
                    </p>

                    <div className='page mt-19'>
                        <HeaderTable/>
                        <p className="mb-2 font-bold">Validation des résultats de passage : </p>
                        <table className='w-230 text-center'>
                            <tr>
                                <td><p className='mb-2'>Filière</p></td>
                                <td><p className='mb-2'>Niveau</p></td>
                                <td><p className='mb-2'>Nombre d’inscrit</p></td>
                                <td><p className='mb-2'>Nombre d’admis</p></td>
                                <td><p className='mb-2'>Nombre de redoublant</p> </td>
                                <td><p className='mb-2'>Nombre d’abondant</p></td>
                            </tr>
                            <tr>
                                <td><p className='mb-2'>Développement Informatique</p></td>
                                <td><p className='mb-2'>TS</p></td>
                                <td><p className='mb-2'>31</p></td>
                                <td><p className='mb-2'>28</p></td>
                                <td><p className='mb-2'>0</p></td>
                                <td><p className='mb-2'>3</p></td>
                            </tr>
                            <tr>
                                <td><p className='mb-2'>Infographiste</p></td>
                                <td><p className='mb-2'>TS</p></td>
                                <td><p className='mb-2'>7</p></td>
                                <td><p className='mb-2'>7</p></td>
                                <td><p className='mb-2'>0</p></td>
                                <td><p className='mb-2'>0</p></td>
                            </tr>
                        </table>
                        <p className=' font-bold'>Noms des stagiaires abandons : MOHAMED BOUDHAR - MOUAD MALKI - OMAR ACHIR </p>
                        <div className='flex'>
                            <p className=' font-bold'>Filière :</p>
                            <p>Développement Informatique</p>
                        </div>
                        <div className='flex mb-4'>
                            <p className='font-bold'>Niveau :</p>
                            <p>Technicien spécialisé</p>
                        </div>
                        <p className='mb-2 font-bold'>Validation des résultats d’obtention du diplôme :</p>
                        <table className='w-230 text-center'>
                            <tr>
                                <td><p className='mb-2'>Filière</p></td>
                                <td><p className='mb-2'>Niveau</p></td>
                                <td><p className='mb-2'>Nombre d’inscrit</p></td>
                                <td><p className='mb-2'>Nombre d’admis</p></td>
                                <td><p className='mb-2'>Nombre de redoublant</p> </td>
                                <td><p className='mb-2'>Nombre d’abondant</p></td>
                            </tr>
                            <tr>
                                <td><p className='mb-2'>Développement Informatique</p></td>
                                <td><p className='mb-2'>TS</p></td>
                                <td><p className='mb-2'>39</p></td>
                                <td><p className='mb-2'>35</p></td>
                                <td><p className='mb-2'>0</p></td>
                                <td><p className='mb-2'>4</p></td>
                            </tr>
                            <tr>
                                <td><p className='mb-2'>Infographiste</p></td>
                                <td><p className='mb-2'>TS</p></td>
                                <td><p className='mb-2'>8</p></td>
                                <td><p className='mb-2'>8</p></td>
                                <td><p className='mb-2'>0</p></td>
                                <td><p className='mb-2'>0</p></td>
                            </tr>
                        </table>
                        <p className=' font-bold'>Noms des stagiaires abandons : HAMZA AFIFI - ISMAIL KENNAZ - NADA ALAOUI SOSSI - OTHMANE NAHAL</p>
                        <div className='flex'>
                            <p className=' font-bold'>Filière :</p>
                            <p>Développement Informatique</p>
                        </div>
                        <div className='flex mb-4'>
                            <p className='font-bold'>Niveau :</p>
                            <p>Technicien spécialisé</p>
                        </div>
                        <p>La validation des notes des contrôles continus : 7 PAGES-, notes des examens théoriques : 7 PAGES-, notes des examens pratiques : 7 PAGES - travaux individuels : 3 PAGES</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default validation;
