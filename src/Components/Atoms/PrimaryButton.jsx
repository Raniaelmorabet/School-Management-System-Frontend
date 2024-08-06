import React from "react";

export const PrimaryButton=({onClick, type, children})=> {
    return (
        <button
            type={type}
            className="flex justify-center rounded-[4px] bg-[#1A237E] py-2 px-6 font-medium text-[16px] text-[#FFFFFF] hover:bg-opacity-90"
            onClick={onClick}
        >
            {children}
        </button>
    );
}