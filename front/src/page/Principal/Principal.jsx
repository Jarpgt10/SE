import React from 'react'
import Layout from '../../components/Layout'
import umg from '../../assets/umg.webp';
export default function Principal() {
    return (
        <Layout>
            <div className='flex justify-center items-center h-[95%] opacity-15'>

                <img src={umg} className="w-[40%]"></img>
            </div>


        </Layout>
    )
}
