import React, { useContext } from 'react'
import { Button, Form, Input, message } from 'antd'
import { AuthContext } from '../../context/AuthContext'

export default function Login() {
    const { login } = useContext(AuthContext)

    const handleSubmit = (values) => {
        if (values.carne = '1-2' && values.contrasena === 'rivas') {
            login();
        } else {
            message.error('Usuario/Contraseña incorrecto !')
        }
    }


    return (
        <div className='body'>
            <div className='m-10 '>
                <div className='flex justify-center text-lg font-semibold '><span>STUDEN SYSTEM</span></div>
                <Form layout='vertical' onFinish={handleSubmit} >
                    <Form.Item
                        rules={[{ required: true, message: 'Por favor, ingresa tu carne' }]}
                        label='Carne:'
                        name='carne'>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: 'Por favor, ingresa tu contraseña' }]}
                        label='Contraseña:'
                        name='contrasena'>
                        <Input.Password />
                    </Form.Item>
                    <div className='justify-center flex'><Button htmlType='submit'> Iniciar Sesion </Button>  </div>
                </Form>
            </div>
        </div>
    )
}
