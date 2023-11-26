import PropTypes from "prop-types";
import { Play } from './icons/Play';
import { Pause } from './icons/Pause';

import { usePlayerStore } from '../store/playerStore';

export const CardPlayButton = ({ id }) => {
    const {
        currentMusic,
        isPlaying,
        setIsPlaying } = usePlayerStore(state => state);


    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(false)
            return
        }
    }

    return (
        <button className="card-play-button" onClick={handleClick}>
            {isPlayingPlaylist ? <Pause className="player-icon" /> : <Play className="pause-icon" />}
        </button>
    )
}



CardPlayButton.propTypes = {
    id: PropTypes.number.isRequired
}