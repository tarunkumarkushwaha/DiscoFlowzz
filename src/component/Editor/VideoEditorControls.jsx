import { forwardRef, useEffect, useState } from "react"
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import { useNavigate } from "react-router-dom";

const VideoEditorControls = forwardRef((props, ref) => {
    const [currentTime, setCurrentTime] = useState(["00", "00"]);
    const [currentTimeSec, setCurrentTimeSec] = useState(0);
    const [duration, setDuration] = useState(["00", "00"]);
    const [durationSec, setDurationSec] = useState(10);
    let { isPlaying, thumb } = props
    const navigate = useNavigate()

    const videoref = ref

    const handleRangeChange = (event) => {
        const value = parseFloat(event.target.value);
        setCurrentTimeSec(value);
        if (videoref.current) { videoref.current.currentTime = value; }
    };

    const sec2Min = (sec) => {
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        return {
            min: min,
            sec: secRemain,
        };
    };

    // console.log(parseFloat(currentTimeSec / durationSec * 100), durationSec, currentTimeSec)

    useEffect(() => {
        let interval
        if (isPlaying) {
            const { min, sec } = sec2Min(videoref.current?.duration);
            setDurationSec(videoref.current?.duration);
            setDuration([min, sec]);
            interval = setInterval(() => {
                const { min, sec } = sec2Min(videoref.current?.currentTime);
                setCurrentTimeSec(videoref.current?.currentTime);
                setCurrentTime([min, sec]);
            }, 1000);
        }
        else { clearInterval(interval) }
        return () => clearInterval(interval);
    }, [isPlaying]);


    return (
        <>
            <div className="absolute bottom-2 md:left-[50%] sm:left-[45%] left-[42%] -translate-x-[50%] mx-8">
                <div className="flex sm:justify-between justify-center items-center flex-wrap">
                    <div className="p-2 font-medium text-lg w-32">
                        {currentTime[0]}:{currentTime[1]}-{duration[0]}:{duration[1]}
                    </div>
                    <div className="flex sm:justify-between justify-center items-center flex-wrap p-4">
                        <button className="mx-2"><UndoIcon fontSize='medium' /></button>
                        <button className="mx-2"><RedoIcon fontSize='medium' /></button>
                        <button className="mx-2"><ContentCutIcon fontSize='medium' /></button>
                        <button className="mx-2"><ContentCopyIcon fontSize='medium' /></button>
                        <div className="flex p-2">
                            <button className="mx-2"><ZoomInIcon fontSize='medium' /></button>
                            <div className="h-4 w-28 border border-slate-600 mt-1 p-1">

                                <div style={{ width: 50 + "%" }} className="bg-slate-600 h-2"></div>
                            </div>
                            <button className="mx-2"><ZoomOutIcon fontSize='medium' /></button>
                        </div>
                    </div>

                    <button onClick={() => navigate('/output')} type="button" className="flex justify-between items-center w-20 h-6 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        export</button>
                </div>

                <div style={{ backgroundImage: "url(" + `${thumb})` }} className="m-4 relative w-[70vw] h-20 bg-center bg-repeat-x bg-contain">
                    <div style={{ width: currentTimeSec == 0 ? 0 + "%" : parseFloat(currentTimeSec / durationSec * 100) + "%" }} className="relative w-[70vw]">
                        <div className={`bg-slate-950 absolute -top-2 -right-[10px] w-4 h-3 rounded-2xl`}></div>
                    </div>
                    <input
                        type="range"
                        className="w-[70vw] range absolute -top-1"
                        min={0}
                        step={0.001}
                        max={durationSec}
                        value={currentTimeSec}
                        onChange={handleRangeChange}
                    />
                </div>
            </div>
        </>
    );
})

export default VideoEditorControls;
