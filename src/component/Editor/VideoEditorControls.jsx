import { forwardRef, useEffect, useState } from "react"

const VideoEditorControls = forwardRef((props, ref) => {

    const [volume, setVolume] = useState(1);
    const [currentTime, setCurrentTime] = useState(["00", "00"]);
    const [currentTimeSec, setCurrentTimeSec] = useState(0);
    const [duration, setDuration] = useState(["00", "00"]);
    const [durationSec, setDurationSec] = useState(0);
    let { isPlaying, togglePlay, thumb } = props

    const videoref = ref

    const handleVolumeChange = (event) => {
        const value = parseFloat(event.target.value);
        setVolume(value);
        videoref.current.volume = value;
    };

    const sec2Min = (sec) => {
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        return {
            min: min,
            sec: secRemain,
        };
    };

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
                <button onClick={togglePlay}>
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <input
                    type="range"
                    min={0}
                    max={1}
                    value={volume}
                    onChange={handleVolumeChange}
                />
                <div className="duration">
                    {currentTime[0]}:{currentTime[1]} / {duration[0]}:{duration[1]}
                </div>
                <div style={{ backgroundImage: "url(" + `${thumb})` }} className="m-4 relative w-[80vw] h-20 bg-center bg-repeat-x bg-contain">
                <input
                    type="range"
                    min={0}
                    max={durationSec && durationSec}
                    default={0}
                    value={currentTimeSec}
                    className="w-[80vw] range absolute top-0"
                    onChange={(e) => {
                        videoref.current.currentTime = e.target.value;
                    }}
                />
                </div>
            </div>
        </>

    );
})

export default VideoEditorControls;
