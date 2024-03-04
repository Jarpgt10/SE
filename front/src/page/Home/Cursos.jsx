import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { Button, Form, Input } from 'antd'
import { httpGetCursos } from '../../services/cursos.services';
import StatsCard from '../../components/StatsCard';

export default function Cursos() {


    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        httpGetCursos().then((res) => setCursos(res));
    }, [])


    return (
        <Layout>
            <div className='my-[1%] '>
                <span className='text-xl font-medium '>
                    Cursos
                </span>
            </div>
            <div className='mb-[0.5%] text-gray-500'>
                <span>
                    Listado de cursos
                </span>
            </div>
            <div className='mx-[5%]'>
                <div className='mt-[2%]  '>
                    <Form layout='vertical' className='flex gap-5'>
                        <Form.Item
                            label='Carreas' name='carreras_universitarias'>
                            <Input.Search />
                        </Form.Item>
                        <Form.Item
                            label='Cursos' name='cursos'>
                            <Input />
                        </Form.Item>
                    </Form>
                </div>

                <div className='h-[60%] w-full flex flex-wrap  gap-5 '>

                    {cursos.map((curso) => (
                        <StatsCard title={curso.nombre_carrera} value={curso.nombre_curso} />
                    ))}


                </div>
            </div>
        </Layout>
    )
}
