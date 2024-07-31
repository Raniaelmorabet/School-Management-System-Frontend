// import React from 'react';
//
// const Select = ({options, value, onChange, label, id}) => {
//     return (
//             <select id={id} value={value} onChange={onChange} className="select">
//                 {options.map((option) => (
//                     <option key={option.value} value={option.value}> {option.label}</option>
//                 ))}
//             </select>
//     );
// };
//
// export default Select;
// <select
//     onChange={(e) => setHours(e.target.value)}
//     className="w-full rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-whiter"
//     required
// >
//     <option disabled hidden selected>Heur</option>
//     {Array.from({length: 12}, (_, i) => i + 1).map(hour => (
//         <option key={hour} value={hour}>{hour}</option>
//     ))}
// </select>