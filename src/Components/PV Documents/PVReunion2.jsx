import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Document = () => {
    const printRef = useRef();

    const handleDownload = () => {
        const element = printRef.current;
        const opt = {
            margin: 0.5,
            filename: 'document.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        const button = document.getElementById('downloadButton');
        button.style.display = 'none';
        element.style.transform = 'scale(1)';

        html2pdf().from(element).set(opt).save().then(() => {
            button.style.display = 'block';
            element.style.transform = 'scale(0.9)';
            element.style.transformOrigin = 'initial';
        });
    };

    return (
        <div className="bg-white" ref={printRef}>
            <table className="header-table">
                <tbody>
                <tr>
                    <th style={{
                        width: '30%',
                        textAlign: 'center',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'black'
                    }} rowSpan={2}>
                        <p className='p-2 -mt-2'>Ecole Professionnelle<br/> d'Informatique et de <br/> Management</p>
                    </th>
                    <th style={{
                        width: '40%',
                        textAlign: 'center',
                        borderWidth: '1px 1px 1px 0',
                        borderStyle: 'solid',
                        borderColor: 'black'
                    }}>
                        <p className='p-2 -mt-2'>30-31 Bureaux Amine VN Meknès</p>
                    </th>
                    <th style={{
                        width: '30%',
                        textAlign: 'center',
                        borderWidth: '1px 1px 1px 0',
                        borderStyle: 'solid',
                        borderColor: 'black'
                    }} rowSpan={2}>
                        <p className='p-2 -mt-2'>Tél : 0535520966</p>
                    </th>
                </tr>
                <tr>
                    <th style={{
                        width: '40%',
                        textAlign: 'center',
                        borderWidth: '0 1px 1px 0',
                        borderStyle: 'solid',
                        borderColor: 'black',
                        padding: '4px'
                    }}>
                        <p className='p-2 -mt-2'>Email : epim.efpp@gmail.com</p>
                    </th>
                </tr>
                </tbody>
            </table>
            <h1 className="text-center font-semibold text-lg mt-3">Le procès verbal de la réunion du Jury d’examens
                N°02/2022</h1>
            <p className="mt-2">Le 20 Février 2023 à 10 heures et demi, le jury d’examens s’est tenu sa réunion au siège
                de l’établissement Ecole Professionnelle d’Informatique et de Management 30 et 31 Bureaux Amine Angle
                Rue Tarafya et rue Mly Ali Cherif VN Meknès sur convocation de son président n° 1 en date du
                13/02/2023.</p>
            <h2 className="mt-2 font-semibold">Ont assisté à cette réunion :</h2>
            <table className="w-full mt-2 border">
                <thead>
                <tr className="border-b mt-2">
                    <th className="px-5 py-2 border-r text-[14px]">Membres Professionnels</th>
                    <th className="px-4 py-2 border-r text-[14px]">Membres de l’établissement</th>
                    <th className="px-4 py-2 text-[14px]">Membre représentant l’Administration</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b">
                    <td className="px-4 py-2 border-r">Adnane Abderrahmane</td>
                    <td className="px-4 py-2 border-r">Bourkha Meryem</td>
                    <td className="px-4 py-2">L’Administration</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border-r">Najihi Soufiane</td>
                    <td className="px-4 py-2 border-r">Ismail Sabbah</td>
                    <td className="px-4 py-2"></td>
                </tr>
                </tbody>
            </table>
            <p className="mt-2">La réunion est présidée par Monsieur Adnane Abderrahmane en sa qualité de président du
                jury
                d’examen qui a précisé l’objectif de la réunion qui s’articule sur l’ordre du jour suivant :</p>
            <h2 className="mt-2 font-semibold">Ordre du jour :</h2>
            <ol className="list-decimal ml-2 mt-2">
                <p>1 - Arrêter le planning de déroulement des contrôles continus et des examens</p>
                <p>2 - Le choix des épreuves d’examens pour les modules dont les examens se déroulent en 1er
                    semestre.</p>
                <p>3 - Le déroulement des examens.</p>
            </ol>
            <p className="mt-4">Lors de cette réunion monsieur le Directeur pédagogique a présenté des notes des
                contrôles continus réalisés et des épreuves d’examens concernant la 1ere et la 2ème année pour les
                unités de formation dont les examens se déroulent en 1er semestre à savoir :</p>
            <table className="w-full mt-4 border">
                <thead>
                <tr className="border-b">
                    <th className="px-4 py-2 border-r text-[14px]">Filière</th>
                    <th className="px-4 py-2 border-r text-[14px]">Classe</th>
                    <th className="px-4 py-2 text-[14px]">N° Unités de formation</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b">
                    <td className="px-4 py-2 border-r">Gestion des entreprises</td>
                    <td className="px-4 py-2 border-r">1ere année</td>
                    <td className="px-4 py-2">1.3–1.5-1.8-1.9</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-2 border-r">Gestion des entreprises</td>
                    <td className="px-4 py-2 border-r">2ème année</td>
                    <td className="px-4 py-2">2.1-2.2-2.4-2.7-2.13</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border-r">Gestion informatisée</td>
                    <td className="px-4 py-2 border-r">2ème année</td>
                    <td className="px-4 py-2">1.3-7-8-10-11-17</td>
                </tr>
                </tbody>
            </table>
            <table className="header-table mt-24">
                <tbody>
                <tr>
                    <th style={{
                        width: '30%',
                        textAlign: 'center',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'black'
                    }} rowSpan={2}>
                        <p className='p-2 -mt-2'>Ecole Professionnelle<br/> d'Informatique et de <br/> Management</p>
                    </th>
                    <th style={{
                        width: '40%',
                        textAlign: 'center',
                        borderWidth: '1px 1px 1px 0',
                        borderStyle: 'solid',
                        borderColor: 'black'
                    }}>
                        <p className='p-2 -mt-2'>30-31 Bureaux Amine VN Meknès</p>
                    </th>
                    <th style={{
                        width: '30%',
                        textAlign: 'center',
                        borderWidth: '1px 1px 1px 0',
                        borderStyle: 'solid',
                        borderColor: 'black'
                    }} rowSpan={2}>
                        <p className='p-2 -mt-2'>Tél : 0535520966</p>
                    </th>
                </tr>
                <tr>
                    <th style={{
                        width: '40%',
                        textAlign: 'center',
                        borderWidth: '0 1px 1px 0',
                        borderStyle: 'solid',
                        borderColor: 'black',
                        padding: '4px'
                    }}>
                        <p className='p-2 -mt-2'>Email : epim.efpp@gmail.com</p>
                    </th>
                </tr>
                </tbody>
            </table>
            <h1 className="text-center font-semibold text-lg  mt-3">Le procès verbal de la réunion du Jury d’examens N°02/2022</h1>
            <h2 className="mt-2 font-semibold">Ensuite, le directeur a présenté le planning des examens (Annexe 1)</h2>
            <p className="mt-2">➢ Planning de la supervision des examens par les membres du jury d’examen</p>
            <table className="w-full mt-4 border">
                <thead>
                <tr className="border-b">
                    <th className="px-4 py-2 border-r text-[14px]">Nom & Prénom</th>
                    <th className="px-4 py-2 border-r text-[14px]">Date</th>
                    <th className="px-4 py-2 text-[14px]">Motif</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b">
                    <td className="px-4 py-2 border-r">Bourkha Meryem</td>
                    <td className="px-4 py-2 border-r">20-02-2023</td>
                    <td className="px-4 py-2">Duplications des épreuves</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-2 border-r">Adnane Abderrahmane</td>
                    <td className="px-4 py-2 border-r">Du 21 au 25-02-2023</td>
                    <td className="px-4 py-2">Supervision des examens et affectation des codes</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 border-r">Bourkha Meryem</td>
                    <td className="px-4 py-2 border-r">27-28/02/2023</td>
                    <td className="px-4 py-2">Supervision de la correction</td>
                </tr>
                </tbody>
            </table>
            <p className="mt-2">Le directeur a présenté les épreuves écrites des unités achevées (2 choix – Avec fiche
                descriptive et correction) ensuite les membres de jurys ont choisi les épreuves convenables ensuite le
                directeur a procédé au scellement des enveloppes.</p>
            <p className="mt-1">La réunion a été clôturée à 12 h 30</p>
            <p className="mt-1 py-2">Établi en trois (3) exemplaires</p>
            <button id="downloadButton" onClick={handleDownload}
                    className="mt-8 bg-blue-500 text-white px-4 py-2 rounded">Download as PDF
            </button>
        </div>
    );
};

export default Document;
