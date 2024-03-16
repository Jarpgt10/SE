import React, { useContext } from 'react'
import SideBar from './SideBar'
import Icon from '../utilities/Icon'
import { AuthContext } from '../context/AuthContext'
import { LoginContext } from '../context/LoginContext'

export default function Layout({ children }) {
    const { logout } = useContext(AuthContext)
    const { session } = useContext(LoginContext)
    const dataSession = session[0];
    const handleLogaut = () => {
        logout();
    }



    // useEffect(() => {

    // }, [session])

    return (
        <div className='flex'><SideBar />

            <div className='default-container'>
                <div className='text-3xl font-bold text-gray-600  justify-between flex'>
                    <span>Sistema Estudiantes</span>
                    <span>{dataSession && dataSession.nombre_rol}</span>
                    <span className='cursor-pointer' onClick={() => handleLogaut()}><Icon.exit /></span>
                </div>
                {children}
            </div>
        </div>
    )
}
