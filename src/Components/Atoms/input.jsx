import React from "react";

export const Input=({value, onChange, type, accept, placeholder, marginTop})=> {
    return(
            <input
                type={type}
                value={value}
                accept={accept}
                placeholder={placeholder}
                onChange={onChange}
                className={` ${marginTop} w-full font-roboto-regular rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-whiter`}
                required
            />
    );
}