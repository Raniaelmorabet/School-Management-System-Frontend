import React from 'react'

function HeaderTable() {
    return (
        <>
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
            <div className="pb-4 justify-center text-center font-bold text-sm">
                PROCE-VERBAL DE DELIBIRATION<br />
                SECTEUR : TIC<br />
                Année de Formation : 2023/2024<br />

            </div>
        </>
    )
}

export default HeaderTable;