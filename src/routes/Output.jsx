import React from 'react'
import UndoIcon from '@mui/icons-material/Undo';
import { useNavigate } from 'react-router-dom';

const Output = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="relative mx-28 my-2 h-[70vh] p-4 flex flex-col justify-center items-center gap-1 smooth-entry">
                <button onClick={() => navigate('/')} className='absolute top-[2%] -left-20'><UndoIcon fontSize='large' /></button>
                
                <h1 className='text-xl font-semibold'>Output</h1>
            </div>
        </>
    )
}

export default Output