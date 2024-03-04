import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { httpGetUser } from "../services/user-services";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    const [session, setSession] = useState([]);

    useEffect(() => {
        httpGetUser().then((res) => setSession(res));
    }, [])

    console.log(session);
    return (
        <div
            className={`bg-[#EBEBEB] h-screen w-16 flex flex-col justify-between `}
        >

        </div>
    );
};


