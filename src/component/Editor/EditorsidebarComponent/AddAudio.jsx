import React from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
const AddAudio = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center rounded-lg m-4 smooth-entry h-80 min-w-96 border border-gray-300'>
                <ControlPointIcon fontSize='large' />
                <h2 className='font-medium text-sm m-4'>Add audio file</h2>
            </div>
        </>
    )
}

export default AddAudio