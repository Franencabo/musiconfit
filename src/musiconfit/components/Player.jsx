import Proptypes from 'prop-types';
import { Play } from './icons/Play';
import { Pause } from './icons/Pause';
import { usePlayerStore } from '../store/playerStore';
import { useAudio } from './AudioContext.jsx';
import { VolumeControl } from './VolumeControl.jsx';
import { CurrentSong } from './CurrentSong.jsx';


export const Player = () => {
    const { isPlaying, setIsPlaying } = usePlayerStore(state => state);
    const audio = useAudio();

    const handleClick = () => {
        if (isPlaying) {
            audio.pause()
            setIsPlaying(false);
        } else {

            setIsPlaying(true);
        }
    }


    return (
        <footer className={`footer ${isPlaying ? 'enabled-player' : 'disabled-player'}`}>
            <CurrentSong />
            <div>
                <button className="footer-button" disabled={!isPlaying} onClick={handleClick}>
                    {isPlaying ? <Pause className="player-icon" /> : <Play className="pause-icon" />}
                </button>
            </div>
            <VolumeControl />

        </footer>
    )
}


Player.propTypes = {
    audioRef: Proptypes.object
}


