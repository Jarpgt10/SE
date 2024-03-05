import React, { useContext } from 'react'
import SideBar from './SideBar'
import Icon from '../utilities/Icon'
import { AuthContext } from '../context/AuthContext'

export default function Layout({ children }) {
    const { logout } = useContext(AuthContext)
    const handleLogaut = () => {
        logout();
    }

    return (
        <div className='flex'><SideBar />

            <div className='default-container'>
                <div className='text-3xl font-bold text-gray-600  justify-between flex'>
                    <span>Sistema Estudiantes</span>
                    <span>rol usuario</span>
                    <span className='cursor-pointer' onClick={() => handleLogaut()}><Icon.exit /></span>
                </div>
                {children}
            </div>
        </div>
    )
}
