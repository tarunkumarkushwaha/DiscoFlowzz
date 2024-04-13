import React, { useRef, useState } from 'react'
import VideoEditorControls from '../component/Editor/VideoEditorControls'
import EditorSidebar from '../component/Editor/EditorSidebar'
import EditorSetting from '../component/Editor/EditorSetting'
import EditorAssets from '../component/Editor/EditorAssets'
import data from '../DummyJSONdata/data.json'
import { useParams } from 'react-router-dom'

const EditProject = () => {
    const [editorSetting, setEditorSetting] = useState(false)
    const [editorassets, setEditorassets] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);
    let urlparams = useParams()

    let currentdata = urlparams.project ? data.videos.find(o => o.name == urlparams.project) : data.videos[3]


    let videoref = useRef()
    const toggleSetting = function () {
        setEditorSetting(!editorSetting)
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
    };
    return (
        <>
            <div className="relative flex justify-start">
                <EditorSidebar setSetting={toggleSetting} setEditorassets={setEditorassets} />
                {editorSetting && <EditorSetting />}
                {editorassets && <EditorAssets />}
                <div className='absolute right-5 top-10 w-[480px]'>
                    <video
                        ref={videoref}
                        className='rounded-md'
                        onClick={togglePlay}>
                        <source src={currentdata.src} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
                </div>
                <VideoEditorControls thumb={currentdata.thumb} ref={videoref} isPlaying={isPlaying} togglePlay={togglePlay} />
            </div>

        </>
    )
}

export default EditProject