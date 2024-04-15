import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectBox = ({ item }) => {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => navigate(`/edit/${item.name}`)} className="flex flex-col gap-2 sm:items-start items-center">
                <div className='shadow-xl h-60 w-60 m-1 mx-2 border-2 border-slate-400 rounded-lg cursor-pointer'>
                    <img className='h-60 w-60' src={item.thumb} alt={item.name} />
                </div>
                <h2 className='p-2 font-medium text-sm text-center'>Project -{item.name} </h2>
            </div>
        </>
    )
}

export default ProjectBox