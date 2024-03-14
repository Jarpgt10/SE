import React, { useState } from 'react'
import Card from '../assets/cardOption.svg'
import { Modal } from 'antd';
import Crear from '../page/Usuarios/Crear';
import Informacion from '../page/Usuarios/Informacion';
export default function OptionsCard({ data }) {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    }
    return (
        <>
            <div className='relative text-center' onClick={() => handleClick(data)}>
                <img src={Card} loading='lazy' className='w-[90%] mx-auto cursor-pointer' alt='opciones usuario' />
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-xl z-50 '>{data.nombre}</p>
            </div>

            <Modal
                onCancel={() => setOpen(false)}
                open={open}
                footer={null}
                centered
                width={data.id === 1 ? 700 : data.id === 2 ? 1000 : 800}
                title={<span className='flex justify-center text-2xl'> {data.nombre}</span>}
            >

                {data.id === 1 ? <Crear /> : data.id === 2 ? <Informacion /> : 'Opcion inhabilitada'}
            </Modal>

        </>

    )
}
