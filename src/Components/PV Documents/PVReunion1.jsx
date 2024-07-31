import React from 'react';
import html2pdf from 'html2pdf.js';

const Reunion1 = () => {
    const exportToPDF = () => {
        const element = document.getElementById('meeting-minutes');

        html2pdf().from(element).save();
    };

    return (
        <div className="">
            <div id="meeting-minutes" className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-center font-bold text-xl">Le procès verbal de la réunion du Jury d’examens N°01/2023</h1>
                <div className='flex'>
                    <span className="mt-2"><span className='ml-18'>Le 7 Février 2023 à 10 heures et demi,</span> le jury d’examens s’est tenu sa réunion au siège de l’établissement Ecole Professionnelle d’Informatique et de Management 30 et 31 Bureaux Amine Angle Rue Tarfaya et rue Mly Ali Cherif VN Meknès sur convocation de son président n° 1 en date du 02/02/2023.</span>
                </div>

                <h2 className="mt-2 font-bold">Ont assisté à cette réunion :</h2>
                <table className="mt-2 table-auto border-collapse border border-black w-full">
                    <thead>
                    <tr>
                        <th className="border border-black p-2">Membres Professionnels</th>
                        <th className="border border-black p-2">Membres de l’établissement</th>
                        <th className="border border-black p-2">Membre représentant l’Administration</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-black p-2">Adnane Abderrahmane</td>
                        <td className="border border-black p-2">Bourkha Meryem</td>
                    </tr>
                    <tr>
                        <td className="border border-black p-2">Najihi Soufiane</td>
                        <td className="border border-black p-2">Sabbah Ismail</td>
                    </tr>
                    </tbody>
                </table>

                <div className="mt-2"><span className='ml-18'>La réunion est présidée</span> par Monsieur Adnane Abderrahmane en sa qualité de président du jury d’examen qui a précisé l’objectif de la réunion qui s’articule sur l’ordre du jour suivant :</div>

                <h2 className="mt-2 font-bold">Ordre du jour :</h2>
                <h3 className="mt-2 font-bold ml-18">1ère partie :</h3>
                <ul className=" list-inside mt-2">
                    <li>Arrêter les listes des stagiaires inscrits au titre de l’année 2022-2023</li>
                    <li>Valider le règlement des examens</li>
                    <li>Valider les coefficients attribués à chaque unité de formation</li>
                    <li>Arrêter le planning prévisionnel de réalisation des programmes dispensé dans l’établissement</li>
                </ul>

                <div className="mt-2"><span className='ml-18'>Lors de cette réunion Monsieur</span> le Directeur pédagogique de l’établissement a présenté des listes des stagiaires inscrits en première et deuxième année au titre de l’année de formation 2022-2023 en précisant que les conditions d’accès à la filière concernée sont respectées selon les normes en vigueur.</div>

                <h2 className="mt-2 font-bold">Synthèse des inscrits</h2>
                <table className="mt-4 table-auto border-collapse border border-black w-full">
                    <thead>
                    <tr>
                        <th className="border border-black p-2" rowSpan={2}>Filière</th>
                        <th className="border border-black p-2" rowSpan={2}>Type de formation</th>
                        <th colSpan={2} className="border border-black p-2">Effectifs des stagiaires</th>
                    </tr>
                    <tr>
                        <th className="border border-black p-2">1ère</th>
                        <th className="border border-black p-2">2ème</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-black p-2">- Gestion des entreprises</td>
                        <td className="border border-black p-2">Formation résidentielle en cours du jour</td>
                        <td className="border border-black p-2">16</td>
                        <td className="border border-black p-2">7</td>
                    </tr>
                    <tr>
                        <td className="border border-black p-2">- Gestion informatisée</td>
                        <td className="border border-black p-2">Cours du jour</td>
                        <td className="border border-black p-2">0</td>
                        <td className="border border-black p-2">4</td>
                    </tr>
                    </tbody>
                </table>
                <div className='mt-2'><span className='ml-18'>Ensuite il a</span> présenté le règlement des examens, des coefficients attribués à chaque unité de formation et les plannings prévisionnels de réalisation des programmes dispensés dans l’établissement.</div>
                <table className="header-table mx-auto mt-50">
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


                <div className='mt-5'>
                    <span className='ml-18'>La validation du règlement</span>
                    des examens – 12 PAGES -, des coefficients attribués à chaque unité de formation- 4 Pages - les plannings prévisionnels de réalisation des programmes dispensés dans l’établissement 4 Pages - le planning de déroulement des contrôles continus et des examens et planning de l’activité du jury d’examen – 1 page -
                </div>
                <div className='justify-center mt-4'>
                    <p className='text-center' >La réunion a été clôturée à 12h 30</p>
                    <p className='text-center'>Etabli en trois (3) exemplaires</p>
                </div>

            </div>
            <button onClick={exportToPDF} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Export to PDF</button>
        </div>
    );
};

export default Reunion1;
