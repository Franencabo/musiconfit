import { Volume } from './icons/Volume';
import { VolumeSilence } from './icons/VolumeSilence';
import { usePlayerStore } from '../store/playerStore';
import { useAudio } from './AudioContext.jsx';
import { useEffect, useState } from 'react';


export const VolumeControl = () => {
    const volume = usePlayerStore(state => state.volume)
    const setVolume = usePlayerStore(state => state.setVolume)
    const audio = useAudio();
    const [internalVolume, setInternalVolume] = useState(volume * 100);

    const isVolumeSilence = volume < 0.1;

    const handleClickVolume = () => {
        if (isVolumeSilence) {
            setVolume(internalVolume / 100);
        } else {
            setInternalVolume(0);
            setVolume(0);
        }
    };

    const handleChangeVolume = (value) => {
        setInternalVolume(value);
        const volumeValue = value / 100;
        setVolume(volumeValue);
    };

    useEffect(() => {
        audio.volume = volume;
    }, [volume])

    return (
        <div className="volume-control">
            <button className="volume-button" onClick={handleClickVolume}>
                {isVolumeSilence ? <VolumeSilence className="volume-icon" /> : <Volume className="volume-icon" />}
            </button>
            <input
                type="range"
                max={100}
                min={0}
                value={[volume * 100]}
                className="volume-slider"
                onChange={(e) => handleChangeVolume(e.target.value)}
            />
        </div>
    )
}
