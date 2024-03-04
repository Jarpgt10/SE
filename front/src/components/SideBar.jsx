import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`bg-[#EBEBEB] h-screen w-16 flex flex-col justify-between `}
        >

        </div>
    );
};


