import { Button, Form, Input, Select } from 'antd'
import React, { useContext, useState, useMemo } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext';
import LoadImage from '../../components/LoadImage';
import Default from '../../../public/default.webp';
import { httpAddNewUser } from '../../services/user-services';
import { genericPassword } from '../../utilities/genericPassword';

import { useEffect } from 'react';
import { encryptPassword } from '../../utilities/cryptoUtils';

export default function Crear() {

    const [image, setImage] = useState(Default);
    const [nameImage, setNameImage] = useState(null);
    const [genericPass, setGenericPass] = useState();
    const { carreras, roles } = useContext(UsuarioContext);
    const [carne, setcarne] = useState([]);
    const [view, setView] = useState(false);

    useEffect(() => {

    }, [])

    const handleSubmit = (values) => {
        const tempPass = genericPassword();
        setGenericPass(tempPass);

        const data = {
            ...values,
            contrasena: encryptPassword(tempPass)
            // name: nameImage
        }
        httpAddNewUser(data).then((res) => setcarne(res));
        setView(true);



    }





    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];

    //     setNameImage(file.name);
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             setImage(e.target.result);
    //             setNameImage(e.target.name);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    // const handleReset = () => {
    //     setImage(Default);
    //     // setNameImage(null);
    // };

    // const memoizedImage = useMemo(() => image, [image]);


    return (
        <>
            {view ? (<div className='justify-center flex text-3xl gap-6'>

                <span className='text-[#0997D9]'>
                    Carne:
                </span>
                <span >{carne.length > 0 && carne[0].carne}</span>

                <span className='text-[#0997D9]'>
                    Contraseña :
                </span>
                <span > {genericPass}</span>

            </div>) : (<Form layout='vertical' onFinish={handleSubmit} className='w-full'>
                {/* <div className='justify-center flex'>
                    <img src={memoizedImage} className='w-[20%] rounded-full' />
                    <div className=' mx-[10%] justify-center flex items-center'>
                        <Form.Item name='url_image'>
                        <input type="file" onChange={handleImageChange} />
                        </Form.Item>
                    </div>
                </div> */}
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
            </Form>)}

        </>
    )
}
