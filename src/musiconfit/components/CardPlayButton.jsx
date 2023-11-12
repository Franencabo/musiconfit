import PropTypes from "prop-types";
import { Pause, Play } from './Player';

import { userPlayerStore } from '../store/playerStore';

export const CardPlayButton = ({ id }) => {
    const {
        currentMusic,
        setCurrentMusic,
        isPlaying,
        setIsPlaying } = userPlayerStore(state => state);


    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(false)
            return
        }
        fetch(`/api/get-info-playlist?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[0] })
                console.log("he hecho el fetch")
            })
    }

    return (
        <button className="card-play-button" onClick={handleClick}>
            {isPlayingPlaylist ? <Pause className="player-icon" /> : <Play className="pause-icon" />}
        </button>
    )
}



CardPlayButton.propTypes = {
    id: PropTypes.string.isRequired
}