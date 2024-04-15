import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({ setQuery, toggleNav }) => {
    let navigate = useNavigate()
    return (
        <>
            <nav className='relative shadow-xl z-10 border-2 border-grey-800 min-h-[12vh] px-10 py-1 flex flex-col sm:flex-row justify-between items-center smooth-entry'>
                <div className='absolute top-6 left-8 text-black cursor-pointer' onClick={toggleNav}><MenuIcon /></div>
                <img onClick={() => navigate('/')} className='h-16 sm:w-48 w-36 mx-10 my-1 cursor-pointer rounded-xl' src='/Logo.png' alt="Discoflowzz video editor" />
                <div className=" w-full md:max-w-96 max-w-80 rounded-md pl-6 p-2 my-1 bg-slate-200">
                    <input
                        className='bg-slate-200 text-slate-900 outline-none'
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                        type="text"
                        // value={Query}
                        placeholder="Search"
                    />
                </div>

            </nav>
        </>
    )
}

export default Navbar