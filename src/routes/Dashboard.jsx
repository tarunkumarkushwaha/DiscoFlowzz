import React from 'react'
import Navbar from '../component/Navbar'
import SideBar from '../component/SideBar'
import { useState } from 'react';
import ProjectBox from '../component/ProjectBox';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import VideocamIcon from '@mui/icons-material/Videocam';

const Dashboard = () => {
  const [sidebar, setsidebar] = useState(false);
  const [query, setQuery] = useState('')
  let arr = [1,2,3]
  const toggleNav = function () {
    setsidebar(!sidebar)
  }
  return (
    <>
      <Navbar query={query} setQuery={setQuery} toggleNav={toggleNav}/>
      <SideBar sidebar={sidebar} toggleNav={toggleNav} />
      <div>
        <div className="mx-28 my-4 p-4 flex justify-between">
          <div className="flex">
            <button type="button" className="flex justify-between items-center w-40 h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <ContentCutIcon/><p>Create Project</p></button>
            <button type="button" className="flex justify-between items-center w-40 h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <VideocamIcon/><p>Record Video</p></button>
          </div>
          <h2 className='font-bold underline cursor-pointer'>All Videos {">"}</h2>
        </div>
        <h2 className='font-bold mx-28 my-4 p-4'>Recent Videos</h2>
        <div className="flex mx-28">
           {arr.map((_,i)=> <ProjectBox i={i}/>)}
        </div>
      </div>
    </>
  )
}

export default Dashboard