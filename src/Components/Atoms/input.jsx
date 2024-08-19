import React, { forwardRef } from "react";

export const Input = forwardRef(({ value, onChange, type, accept, placeholder, marginTop, name, ...rest }, ref) => (
    <input
        type={type}
        value={value}
        name={name}
        accept={accept}
        placeholder={placeholder}
        onChange={onChange}
        className={`${marginTop} w-full font-roboto-regular rounded-[4px] border-[1px] border-[#E0E0E0] text-[16px] bg-[#FFFFFF] py-3 px-5 text-[#424242] outline-none transition disabled:cursor-default disabled:bg-white`}
        required
        ref={ref}
        {...rest}
    />
));