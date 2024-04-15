import React from 'react'
import ProjectBox from '../component/ProjectBox';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useNavigate } from 'react-router-dom';
import data from '../DummyJSONdata/data.json'

const Dashboard = () => {
  const navigate = useNavigate()
  let arr = data.videos

  return (
    <>
        <div className="mx-28 my-2 p-4 flex sm:flex-row flex-col justify-between items-center gap-1 smooth-entry">
          <div className="flex flex-wrap justify-center items-center m-4 gap-1">
            <button onClick={()=>navigate('/edit')} type="button" className="flex justify-between items-center w-40 h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <ContentCutIcon/><p>Create Project</p></button>
            <button onClick={()=>navigate('/record')} type="button" className="flex justify-between items-center w-40 h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <VideocamIcon/><p>Record Video</p></button>
          </div>
          <h2 className='font-bold underline cursor-pointer'>All Videos {">"}</h2>
        </div>
        <h2 className='font-bold mx-28 p-4 text-center'>Recent Videos</h2>
        <div className="flex flex-wrap justify-center items-center mx-28">
           {arr && arr.map((item,i)=> <ProjectBox item={item} key={i}/>)}
        </div>
    </>
  )
}

export default Dashboard