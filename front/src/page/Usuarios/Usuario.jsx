import React, { useState } from 'react'
import Layout from '../../components/Layout'
import OptionsCard from '../../components/OptionsCard'
import OpcionesUsuario from '../../data/OpcionesUsuario'

export default function Usuario() {

    return (
        <>
            <Layout>
                <div className='my-[1%] text-lg font-bold'>
                    USUARIOS
                </div>
                <div className='flex justify-start items-center '>
                    {OpcionesUsuario.map((opt, index) => (
                        <div>
                            <OptionsCard key={index} data={opt} />
                        </div>
                    ))}
                </div>
            </Layout>

        </>
    )
}
