import React from 'react'

const ProjectBox = ({ i }) => {
    return (
        <>
            <div className="flex flex-col items-start">
                <div className='shadow-xl h-60 w-60 p-2 m-1 mx-2 border-2 border-slate-400 rounded-lg cursor-pointer'>
                </div>
                <h2 className='px-2'>Project - {i} </h2>
            </div>
        </>
    )
}

export default ProjectBox