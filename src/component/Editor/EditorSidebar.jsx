import SettingsIcon from '@mui/icons-material/Settings';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import TitleIcon from '@mui/icons-material/Title';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Filter1Icon from '@mui/icons-material/Filter1';
import { useState } from 'react';

const EditorSidebar = ({ setSetting }) => {

    return (
        <>
            <aside className={`border border-gray-100 rounded-xl`}>
                    <ul className="md:h-[83vh] bg-gray-100 p-2 rounded-xl h-[25vh]font-medium flex md:flex-col flex-row flex-wrap items-center gap-2 justify-center">
                        <li onClick={() => setSetting(0)} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-2 w-20 bg-slate-200'>
                            <SettingsIcon />
                            <p className='text-sm'>Setting</p>
                        </li>
                        <li onClick={() => setSetting(1)} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 bg-slate-200'>
                            <ControlPointIcon />
                            <p className='text-sm'>Assets</p>
                        </li>
                        <li onClick={() => setSetting(2)} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 bg-slate-200'>
                            <AudiotrackIcon />
                            <p className='text-sm'>Audio</p>
                        </li>
                        <li onClick={() => setSetting(3)} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 bg-slate-200'>
                            <SubtitlesIcon />
                            <p className='text-sm'>Subtitle</p>
                        </li>
                        <li onClick={() => setSetting(4)} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 bg-slate-200'>
                            <TitleIcon />
                            <p className='text-sm'>Title</p>
                        </li>
                        <li onClick={() => setSetting(5)} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 bg-slate-200'>
                            <InsertDriveFileIcon />
                            <p className='text-sm'>Templetes</p>
                        </li>
                        <li onClick={() => setSetting(6)} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 bg-slate-200'>
                            <Filter1Icon />
                            <p className='text-sm'>Transitions</p>
                        </li>
                    </ul>
            </aside>
        </>
    )
}

export default EditorSidebar