import { useState, useRef, useEffect } from 'react';
import Proptypes from 'prop-types';


export const Pause = ({ className }) => (
    <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

export const Play = ({ className }) => (
    <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)

export const Player = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();

    useEffect(() => {
        audioRef.current.src = '../../../music/DANCE7.mp3'
    }, [])


    const handleClick = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            audioRef.current.volume = 0.1;
        }
        setIsPlaying(!isPlaying);
    }


    return (
        <footer className="footer">

            <div>CurrentSong</div>
            <div>

                <button className="footer-button" onClick={handleClick}>
                    {isPlaying ? <Pause className="player-icon" /> : <Play className="pause-icon" />}
                </button>
            </div>
            <div>Volumen</div>

            <audio ref={audioRef}></audio>
        </footer>
    )
}


Pause.propTypes = {
    className: Proptypes.string.isRequired
}

Play.propTypes = {
    className: Proptypes.string.isRequired
}