import SettingsIcon from '@mui/icons-material/Settings';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import TitleIcon from '@mui/icons-material/Title';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Filter1Icon from '@mui/icons-material/Filter1';
import { useState } from 'react';

const EditorSidebar = ({setSetting,setEditorassets}) => {
    

    return (
        <>
            <aside className={`relative z-10 top-0 left-0 h-[88vh] w-[12vw] border border-gray-300`}>
                <div className="h-full py-1 overflow-y-auto bg-gray-100 overflow-hidden">
                    <ul className="my-1 font-medium flex flex-col items-center justify-center">
                        <li onClick={setSetting} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 m-1 bg-slate-200'>
                            <SettingsIcon />
                            <p className='text-sm'>Setting</p>
                        </li>
                        <li onClick={()=>setEditorassets(prev=>!prev)} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 m-1 bg-slate-200'>
                            <ControlPointIcon />
                            <p className='text-sm'>Assets</p>
                        </li>
                        <li onClick={setSetting} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 m-1 bg-slate-200'>
                            <AudiotrackIcon />
                            <p className='text-sm'>Audio</p>
                        </li>
                        <li onClick={setSetting} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 m-1 bg-slate-200'>
                            <SubtitlesIcon />
                            <p className='text-sm'>Subtitle</p>
                        </li>
                        <li onClick={setSetting} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 m-1 bg-slate-200'>
                            <TitleIcon />
                            <p className='text-sm'>Title</p>
                        </li>
                        <li onClick={setSetting} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 m-1 bg-slate-200'>
                            <InsertDriveFileIcon />
                            <p className='text-sm'>Templetes</p>
                        </li>
                        <li onClick={setSetting} className='cursor-pointer flex flex-col items-center justify-center rounded-xl p-3 w-20 m-1 bg-slate-200'>
                            <Filter1Icon />
                            <p className='text-sm'>Transitions</p>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default EditorSidebar