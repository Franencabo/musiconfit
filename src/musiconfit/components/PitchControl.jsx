import { usePlayerStore } from '../store/playerStore';
import { useEffect, useState } from 'react';
import { useAudio } from './AudioContext.jsx';

export const PitchControl = () => {
    const pitch = usePlayerStore(state => state.pitch);
    const setPitch = usePlayerStore(state => state.setPitch);
    const audio = useAudio();

    const [internalPlaybackRate, setInternalPlaybackRate] = useState(pitch);


    const handleChangePitchChange = (value) => {
        setInternalPlaybackRate(value);
        setPitch(value);
    }

    useEffect(() => {
        audio.playbackRate = pitch;
    }, [pitch, internalPlaybackRate])

    return (
        <div className="pitch-control">
            <label htmlFor="">BPM</label>
            <input
                className="pitch-slider"
                type="range"
                min="0.8"
                max="1.2"
                step="0.001"
                value={[pitch]}
                onChange={(e) => handleChangePitchChange(e.target.value)}
            />

            <span className="playbackRate min">- 30%</span>
            <span className="playbackRate max">+ 30%</span>

            <div className="pitch-lines">
                <div className='pitch-lines-relative'>
                    {Array(20).fill().map((item, index) => {
                        return (<span key={index} className="pitch-line"></span>)
                    })}

                </div>
            </div>
        </div >
    )
}
