import React, { useRef, useState } from 'react'
import VideoEditorControls from '../component/Editor/VideoEditorControls'
import EditorSidebar from '../component/Editor/EditorSidebar'
import EditorSetting from '../component/Editor/EditorsidebarComponent/EditorSetting'
import EditorAssets from '../component/Editor/EditorsidebarComponent/EditorAssets'
import data from '../DummyJSONdata/data.json'
import { useParams } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AddAudio from '../component/Editor/EditorsidebarComponent/AddAudio'
import AddSubtitle from '../component/Editor/EditorsidebarComponent/AddSubtitle'
import AddTitle from '../component/Editor/EditorsidebarComponent/AddTitle'
import AddTransition from '../component/Editor/EditorsidebarComponent/AddTransition'
import AddTemplete from '../component/Editor/EditorsidebarComponent/AddTemplete'

const EditProject = () => {
    const [volume, setVolume] = useState(1);
    const [feature, setfeature] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false);
    let featureArr = [<EditorSetting />, <EditorAssets />, <AddAudio />, <AddSubtitle />,
    <AddTitle />, <AddTemplete />, <AddTransition />,]
    let urlparams = useParams()

    let currentdata = urlparams.project ? data.videos.find(o => o.name == urlparams.project) : data.videos[3]


    let videoref = useRef()
    const toggleSetting = function (a) {
        setfeature(a)
    }
    const togglePlay = () => {
        const video = videoref.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    }

    const handleVolumeChange = (event) => {
        const value = parseFloat(event.target.value);
        setVolume(value);
        videoref.current.volume = value;
    }

    return (
        <>
            <div className="relative flex md:flex-row flex-col sm:justify-between justify-center items-center sm:items-start smooth-entry">
                <EditorSidebar setSetting={toggleSetting} />
                <div className='flex flex-col items-center justify-center rounded-lg m-10 smooth-entry sm:h-72 h-60 sm:w-80 w-60 border border-gray-300'>
                    {featureArr[feature]}
                </div>
                <div className="flex justify-center items-center m-10 md:mb-0 mb-40">
                    <div className='w-96 m-4 mx-10'>
                        <video
                            ref={videoref}
                            className='rounded-md smooth-entry'
                            onClick={togglePlay}>
                            <source src={currentdata.src} type="video/mp4" />
                            Your browser does not support the video.
                        </video>
                        <div className="flex justify-between mx-8">
                            <div className="flex">
                                <button className="mx-2"><SkipPreviousIcon fontSize='large' /></button>
                                <button onClick={togglePlay}>
                                    {isPlaying ? <PauseCircleOutlineIcon fontSize='large' /> : <PlayArrowIcon fontSize='large' />}
                                </button>
                                <button className="mx-2"><SkipNextIcon fontSize='large' /></button>
                            </div>

                            <div className="flex p-6">
                                <h1 className="text-sm font-medium mx-2"><VolumeUpIcon /></h1>
                                <input
                                    type="range"
                                    className=" accent-slate-700"
                                    min={0}
                                    step={0.01}
                                    max={1}
                                    value={volume}
                                    onChange={handleVolumeChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoEditorControls thumb={currentdata.thumb} ref={videoref} isPlaying={isPlaying} togglePlay={togglePlay} />
        </>
    )
}

export default EditProject