
import { Play } from './icons/Play';
import { Pause } from './icons/Pause';

import { useAudioPlayer } from '../hooks/useAudioPlayer';


export const Player = () => {
    const { audioRef,
        togglePlay,
        isPlaying, } = useAudioPlayer();




    return (
        <footer className={`footer ${isPlaying ? 'enabled-player' : 'disabled-player'}`}>
            <div>CurrentSong</div>
            <div>

                <button className="footer-button" disabled={!isPlaying} onClick={togglePlay}>
                    {isPlaying ? <Pause className="player-icon" /> : <Play className="pause-icon" />}
                </button>
            </div>
            <div>Volumen</div>

            <audio ref={audioRef}></audio>
        </footer>
    )
}


