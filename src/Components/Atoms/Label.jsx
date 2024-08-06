export const Label=({children, marginTop})=> {
    return(
        <label className={`mb-2.5 block text-[#424242] text-[14px] ${marginTop}`}>{children}</label>
        );
}