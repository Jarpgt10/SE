import React from 'react'
import SideBar from '../../components/SideBar'
import Layout from '../../components/Layout'
import StatsCard from '../../components/StatsCard'
import Icon from '../../utilities/Icon'

export default function Home() {
    return (
        <>
            <Layout>
                <div className='my-[1%]'>
                    <span className='text-xl font-medium '>
                        Cursos
                    </span>
                </div>
                <div className='mb-[0.5%] text-gray-500'>
                    <span>
                        Cursos Asignados
                    </span>
                </div>
                <div className='flex'>
                    <StatsCard title="Visits "
                        value="Estadistica"
                        icon={<Icon.Home />}
                    />
                </div>
            </Layout>

        </>
    )
}
