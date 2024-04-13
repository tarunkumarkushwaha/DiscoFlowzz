import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = ({ setQuery, toggleNav }) => {
    let navigate = useNavigate()
    return (
        <>
            <nav className='relative shadow-xl z-10 border-2 border-grey-800 h-[12vh] px-10 flex flex-row justify-between items-center'>
                <div className='absolute left-8 text-black cursor-pointer' onClick={toggleNav}><MenuIcon /></div>
                <img onClick={() => navigate('/')} className='h-16 w-36 ml-10 cursor-pointer rounded-xl' src='/Logo.png' alt="Discoflowzz video editor" />
                <div className=" w-full max-w-[350px] rounded-md pl-6 p-2 bg-slate-200">
                    <input
                        className='bg-slate-200 text-slate-100 outline-none py-1'
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