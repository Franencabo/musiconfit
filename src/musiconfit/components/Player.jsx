
import { Play } from './icons/Play';
import { Pause } from './icons/Pause';
import { usePlayerStore } from '../store/playerStore';



export const Player = () => {
    const { isPlaying, setIsPlaying } = usePlayerStore(state => state);

    const handleClick = () => {
        setIsPlaying(!isPlaying);
    }


    return (
        <footer className={`footer ${isPlaying ? 'enabled-player' : 'disabled-player'}`}>
            <div>CurrentSong</div>
            <div>

                <button className="footer-button" disabled={!isPlaying} onClick={handleClick}>
                    {isPlaying ? <Pause className="player-icon" /> : <Play className="pause-icon" />}
                </button>
            </div>
            <div>Volumen</div>

        </footer>
    )
}


