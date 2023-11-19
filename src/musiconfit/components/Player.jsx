import { useState, useRef, useEffect } from 'react';
import Proptypes from 'prop-types';
import { Play } from './icons/Play';
import { Pause } from './icons/Pause';


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