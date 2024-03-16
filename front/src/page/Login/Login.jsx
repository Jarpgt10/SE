import React, { useContext } from 'react'
import { Button, Form, Input, message } from 'antd'
import { AuthContext } from '../../context/AuthContext'
import { encryptPassword } from '../../utilities/cryptoUtils'
import { httpExistUser } from '../../services/user-services'

export default function Login() {
    const { login } = useContext(AuthContext)

    const handleSubmit = (values) => {
        const data = {
            ...values,
            contrasena: encryptPassword(values.contrasena)
        }

        httpExistUser(data).then((res) => {

            if (res.length > 0 && res[0].estado === 1) {
                login(res[0].id_usuario);
            } else if (res.length > 0 && res[0].estado === 0) {
                message.warning('Carne desactivado');
            } else {
                message.error('carne/contraseña incorrecta!');
            }

        });
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
