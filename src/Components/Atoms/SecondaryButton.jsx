import React from "react";
import {Link} from "react-router-dom";

export const SecondaryButton=({children})=> {
    return (
        <button
            className="flex justify-center rounded-[4px] bg-[#FF9800] py-2 px-6 font-medium text-[16px] text-[#FFFFFF] hover:bg-opacity-90"
        >
            {children}
        </button>
    );
}