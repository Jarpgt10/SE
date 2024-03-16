import { Input } from 'antd';
import React, { useState, useMemo } from 'react';
import Default from '../../public/default.webp';

export default function LoadImage() {
    const [image, setImage] = useState(Default);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };



    return (
        <div className='justify-center flex'>
            <img src={memoizedImage} className='w-[20%] rounded-full' />
            <div className=' mx-[10%] justify-center flex items-center'>

                <input type="file" onChange={handleImageChange} />
            </div>
        </div>
    );
}

