import React, { useEffect } from 'react'
import LoadImage from '../../components/LoadImage'
import { Form, Input, Button } from 'antd'
import { httpGetUser, httpGetUserByCarne } from '../../services/user-services'

export default function Informacion() {

    const [dataUser, setDataUser] = useState([]);

    // useEffect(() => {
    //     httpGetUser
    // }, [])


    const hadleSearch = (values) => {
        httpGetUserByCarne(values).then((res) => setDataUser(res));
    }

    // const handleSubmit = (values) => {
    //     console.log(values);

    // }


    return (

        <Form layout='vertical' onFinish={handleSubmit}>
            <div className='flex-wrap flex gap-3' >
                <Form.Item label='Carne:' name='carne'>
                    < Input placeholder='Ingrese carne...' />
                </Form.Item >
                <Button className='mt-[3%]' onClick={hadleSearch} htmlType='submit'>Buscar</Button>
            </div>


            <div className='justify-end flex'>
                {/* <Button className='bg-[#0997D9] text-white' htmlType='submit'>Guardar</Button> */}
            </div>

        </Form >

    )
}
