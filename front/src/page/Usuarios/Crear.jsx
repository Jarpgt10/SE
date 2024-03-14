import { Button, Form, Input, Select } from 'antd'
import React, { useContext, useRef } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext';

export default function Crear() {


    const { carreras, roles } = useContext(UsuarioContext);

    const handleSubmit = (values) => {

    }


    return (
        <Form layout='vertical' onFinish={handleSubmit} className='w-full'>
            <div className='flex-wrap flex gap-5' >
                <Form.Item
                    name='id_carrera_universitara'
                    label='Carrera'
                    rules={[{ required: true, message: `Porfavor ingrese  Carrera` }]}
                    className='w-[30%]' >
                    <Select placeholder='Seleccione una carrera...'>
                        {carreras.map((carrera) => (
                            <Select.Option key={carrera.id_carrera_universitaria} value={carrera.id_carrera_universitaria}>
                                {carrera.nombre_carrera}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    label='Primer nombre'
                    name='primer_nombre'
                    rules={[{ required: true, message: `Porfavor ingrese  Primer nombre` }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Segundo nombre'
                    name='segundo_nombre'
                    rules={[{ required: true, message: `Porfavor ingrese  Segundo nombre ` }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Primer apellido'
                    name='primer_apellido'
                    rules={[{ required: true, message: `Porfavor ingrese  Primer apellido ` }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Segundo apellido'
                    name='segundo_apellido'
                    rules={[{ required: true, message: `Porfavor ingrese  Segundo apellido ` }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label='Correo'
                    name='correo'

                    rules={[{ required: true, message: `Porfavor ingrese  correo ` }]}>
                    <Input type='email' />
                </Form.Item>
                <Form.Item
                    name='id_rol_usuario'
                    label='Rol'
                    rules={[{ required: true, message: `Porfavor ingrese  Carrera` }]}
                    className='w-[30%]' >
                    <Select placeholder='Seleccione una carrera...'>
                        {roles.map((rol) => (
                            <Select.Option key={rol.id_rol_usuario} value={rol.id_rol_usuario}>
                                {rol.nombre}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>




            </div>

            <div className='justify-end flex gap-5'>
                <Button className='bg-red-700 text-white' htmlType='reset'>Limpiar</Button>
                <Button htmlType='submit'>Crear</Button>
            </div>
        </Form>
    )
}
