import React, { useEffect, useState } from "react";
import { httpGetUser } from "../services/user-services";
import avatar from '../assets/avatar.webp';
import umg from '../assets/umg.webp';
import Menu from "./Menu";
import { Link } from 'react-router-dom'

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const [session, setSession] = useState([]);

    useEffect(() => {
        httpGetUser().then((res) => setSession(res));
    }, [])

    return (
        <div
            className={`bg-[#F5F5F5] h-screen w-20 flex `}
        >
            {session.length > 0 && session.map((data, key) => (
                <>
                    <div key={key}>
                        <div className="flex justify-center my-[40%]">
                            <img src={umg} className="w-[40%]"></img>
                        </div>

                        <div className="bg-[#0997D9] text-white mb-5">
                            <div className="flex justify-center">
                                <img src={avatar} className="w-[50%] my-2"></img>
                            </div>
                            <div className="justify-center flex text-lg font-black">
                                {data.usuario}
                            </div>
                        </div>
                        {data.permisos.map(permiso => (
                            <Link to={Menu.find(menuItem => menuItem.id_menu === permiso.id_menu)?.url || '/'} key={permiso.id_menu} className="flex justify-center cursor-pointer py-5 hover:text-black hover:border-l-4 hover:border-black text-[#0997D9]">
                                {Menu.find(menuItem => menuItem.id_menu === permiso.id_menu)?.icon || permiso.nombre_menu}
                            </Link>
                        ))}

                    </div>
                </>

            ))}
        </div>
    );
};


