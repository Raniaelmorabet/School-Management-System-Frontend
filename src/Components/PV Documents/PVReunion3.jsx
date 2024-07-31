import React from 'react';
import html2pdf from 'html2pdf.js';

const Reunion3 = () => {
    const generatePdf = () => {
        const element = document.getElementById('pdf-content');
        html2pdf().from(element).save('reunion-du-jury-dexamens.pdf');
    };

    return (
        <div className=" mx-auto p-10">
            <div id="pdf-content" className="bg-white p-6 shadow-md rounded-md">
                <h1 className="text-center text-2xl font-bold mb-4">
                    Le procès verbal de la réunion du Jury d'examens N° AGC/03/2023
                </h1>
                <div className="mb-4">
                    <span className='ml-18'>Le 05 Juillet 2023</span>
                    à 10 heures et demi, le jury d’examens s’est tenu sa réunion au siège de l’établissement Ecole Professionnelle d’Informatique et de Management 30 et 31 Bureaux Amine Angle Rue Tarfaya et rue Mly Ali Cherif VN Meknès sur convocation de son président n° 3 en date du 28/06/2023.
                </div>
                <table className="w-full mb-4 border">
                    <thead>
                    <tr>
                        <th className="border px-4 py-2">Membres Professionnels</th>
                        <th className="border px-4 py-2">Membres de l'établissement</th>
                        <th className="border px-4 py-2">Membre représentant l'Administration</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border px-4 py-2">Adnane Abderrahmane</td>
                        <td className="border px-4 py-2">Bourkha Meryem</td>
                        <td className="border px-4 py-2">Mohamed Sabbane</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Najihi Soufiane</td>
                        <td className="border px-4 py-2">Sabbah Ismail</td>
                        <td className="border px-4 py-2"></td>
                    </tr>
                    </tbody>
                </table>
                <div className="mb-4">
                    <span className='ml-18'>La réunion est présidée</span>
                    par Monsieur Adnane Abderrahmane en sa qualité de président du jury d'examen qui a précisé l’objectif de la réunion qui s’articule sur l’ordre du jour suivant :
                </div>
                <p className="mb-4 font-bold">Ordre du jour :</p>
                <ul className="list-inside mb-4 ml-4">
                    <li>Le choix des épreuves d’examens pour les modules dont les examens se déroulent en 2ème semestre.</li>
                    <li>Le déroulement des examens.</li>
                </ul>
                <div className="mb-4">
                    <span className='ml-18'>Lors de cette réunion</span>
                    Monsieur le Directeur pédagogique a présenté les unités de formation dont les examens se déroulent en 2<sup>er</sup> semestre à savoir :
                </div>
                <table className="w-full mb-4 border">
                    <thead>
                    <tr>
                        <th className="border px-4 py-2">Filière</th>
                        <th className="border px-4 py-2">Classe</th>
                        <th className="border px-4 py-2">N° Unités de formation</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border px-4 py-2">Gestion des entreprises</td>
                        <td className="border px-4 py-2">1ère année</td>
                        <td className="border px-4 py-2">1.1-1.2-1.4-1.6-1.7-1.10</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Gestion informatisée</td>
                        <td className="border px-4 py-2">2<sup>ème</sup> année</td>
                        <td className="border px-4 py-2">2-4-5-6-9-12-13-14-15-16</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Gestion des entreprises</td>
                        <td className="border px-4 py-2">2<sup>ème</sup> année</td>
                        <td className="border px-4 py-2">2.3-2.5-2.6-2.8-2.9-2.10-2.11-2.12</td>
                    </tr>
                    </tbody>
                </table>
                <div className="mb-4">
                    <span className='ml-18'>Ensuite, </span>
                    le directeur a présenté le planning des examens (Annexe 1) Planning de la supervision des examens par les membres du jury d'examen
                </div>
                <table className="w-full mb-4 border">
                    <thead>
                    <tr>
                        <th className="border px-4 py-2">Nom & Prénom</th>
                        <th className="border px-4 py-2">Date</th>
                        <th className="border px-4 py-2">Motif</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border px-4 py-2">Bourkha Meryem</td>
                        <td className="border px-4 py-2">05/07/2023</td>
                        <td className="border px-4 py-2">Duplications des épreuves</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Adnane Abderrahmane</td>
                        <td className="border px-4 py-2">Du 06 au 12/07/2023</td>
                        <td className="border px-4 py-2">Supervision des examens et affectation des codes</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Bourkha Meryem</td>
                        <td className="border px-4 py-2">17/07/2023</td>
                        <td className="border px-4 py-2">Supervision de la correction</td>
                    </tr>
                    </tbody>
                </table>
                <table className="header-table mx-auto mt-30 mb-4">
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
                <div className='mb-4'>
                    <span className='ml-18'>Le directeur</span>
                    a présenté les épreuves écrites des unités achevées (2 choix – Avec fiche descriptive et correction) ensuite les membres de jurys ont choisi les épreuves convenables ensuite le directeur a procéder au scellement des enveloppes.
                </div>
                <div className='justify-center mt-4'>
                    <p className='text-center' >La réunion a été clôturée à 12h 30</p>
                    <p className='text-center'>Etabli en trois (3) exemplaires</p>
                </div>
            </div>
            <button onClick={generatePdf} className="mt-4 p-2 bg-blue-500 text-white rounded-md">
                Generate PDF
            </button>
        </div>
    );
};

export default Reunion3;
