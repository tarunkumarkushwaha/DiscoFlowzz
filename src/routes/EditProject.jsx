import React, { useRef, useState } from 'react'
import VideoEditorControls from '../component/Editor/VideoEditorControls'
import EditorSidebar from '../component/Editor/EditorSidebar'
import EditorSetting from '../component/Editor/EditorSetting'
import EditorAssets from '../component/Editor/EditorAssets'
import data from '../DummyJSONdata/data.json'
import { useParams } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AddAudio from '../component/Editor/AddAudio'
import AddSubtitle from '../component/Editor/AddSubtitle'

const EditProject = () => {
    const [volume, setVolume] = useState(1);
    const [feature, setfeature] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false);
    let featureArr = [<EditorSetting />, <EditorAssets />, <AddAudio />, <AddSubtitle />,]
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
            <div className="relative flex justify-start smooth-entry">
                <EditorSidebar setSetting={toggleSetting} />
                {featureArr[feature]}
                <div className='absolute right-5 top-10 w-[480px]'>
                    <video
                        ref={videoref}
                        className='rounded-md'
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
                <VideoEditorControls thumb={currentdata.thumb} ref={videoref} isPlaying={isPlaying} togglePlay={togglePlay} />
            </div>

        </>
    )
}

export default EditProject