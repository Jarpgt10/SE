import React from 'react'
import Card from '../assets/cardOption.svg'
export default function OptionsCard({ name }) {

    return (
        <>
            <div className='relative text-center'>
                <img src={Card} loading='lazy' className='w-[90%] mx-auto cursor-pointer' alt='opciones usuario' />
                <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold text-xl '>{name}</p>
            </div>

        </>

    )
}
