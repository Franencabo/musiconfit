import PropTypes from 'prop-types';
import { useTimeConverter } from '../hooks/useTimeConverter';

import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useState } from 'react';


export const Song = ({ track, nextTrack, duration, src }) => {
    const { audioRef,
        togglePlay,
        isPlaying } = useAudioPlayer();

    const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);

    const trackDuration = nextTrack
        ? (nextTrack.timeToStart - track.timeToStart)
        : (duration - track.timeToStart);

    const { minutes, seconds } = useTimeConverter(trackDuration)

    const handleClick = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsCurrentPlaying(false);
        } else {
            audioRef.current.currentTime = track.timeToStart;
            audioRef.current.src = src;
            audioRef.current.play();
            setIsCurrentPlaying(true);
        }

        togglePlay();
    }


    const songStatus = `song ${isCurrentPlaying ? 'is-playing' : ''}`;

    return (
        <div className={songStatus} onClick={handleClick}>
            <span className="song-number">{track.id}</span>
            <p className="song-title">{track.title}</p>
            <p className="song-duration">{minutes}:{seconds}</p>
            <audio ref={audioRef}></audio>
        </div>
    )
}

Song.propTypes = {
    track: PropTypes.object.isRequired,
    nextTrack: PropTypes.object,
    duration: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
}
