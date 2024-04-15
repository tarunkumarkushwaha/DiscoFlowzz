import { forwardRef, useEffect, useState } from "react"
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

const VideoEditorControls = forwardRef((props, ref) => {
    const [currentTime, setCurrentTime] = useState(["00", "00"]);
    const [currentTimeSec, setCurrentTimeSec] = useState(0);
    const [duration, setDuration] = useState(["00", "00"]);
    const [durationSec, setDurationSec] = useState(10);
    let { isPlaying, thumb } = props

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
            <div className="absolute bottom-0 left-44">
                <div className="flex justify-between">
                    <div className="flex">
                        <button className="mx-2"><UndoIcon fontSize='medium' /></button>
                        <button className="mx-2"><RedoIcon fontSize='medium' /></button>
                        <button className="mx-2"><ContentCutIcon fontSize='medium' /></button>
                        <button className="mx-2"><ContentCopyIcon fontSize='medium' /></button>
                        <div className="flex">
                            <button className="mx-2"><ZoomInIcon fontSize='medium' /></button>
                            <div className="h-4 w-28 border border-slate-600 mt-1 p-1">
                                {/* width can be changed to veiw zoom level */}
                                <div style={{ width: 50 + "%" }} className="bg-slate-600 h-2"></div>
                            </div>
                            <button className="mx-2"><ZoomOutIcon fontSize='medium' /></button>
                        </div>
                    </div>

                    <div className="duration">
                        {currentTime[0]}:{currentTime[1]} / {duration[0]}:{duration[1]}
                    </div>
                </div>

                <div style={{ backgroundImage: "url(" + `${thumb})` }} className="m-4 relative w-[80vw] h-20 bg-center bg-repeat-x bg-contain">
                    <div style={{ width: currentTimeSec == 0 ? 0 + "%" : parseFloat(currentTimeSec / durationSec * 100) + "%" }} className="relative w-[80vw]">
                        <div className={`bg-slate-950 absolute -top-2 -right-[10px] w-4 h-3 rounded-2xl`}></div>
                    </div>
                    <input
                        type="range"
                        className="w-[80vw] range absolute -top-1"
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
