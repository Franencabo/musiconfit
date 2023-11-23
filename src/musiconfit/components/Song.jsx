import PropTypes from 'prop-types';
import { useTimeConverter } from '../hooks/useTimeConverter';
import { usePlayerStore } from '../store/playerStore';
import { useEffect, useRef, useState } from 'react';


export const Song = ({ playlist, track, nextTrack, duration, src }) => {
    const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state);

    const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);

    const audioRef = useRef();


    const trackDuration = nextTrack
        ? (nextTrack.timeToStart - track.timeToStart)
        : (duration - track.timeToStart);

    const { minutes, seconds } = useTimeConverter(trackDuration)

    useEffect(() => {
        if (currentMusic.song === track && isPlaying) {
            audioRef.current.currentTime = track.timeToStart;
            audioRef.current.src = src;
            audioRef.current.play();
            setIsCurrentPlaying(true);
        } else if (currentMusic.song !== track) {
            audioRef.current.pause();
            setIsCurrentPlaying(false);
        }
    }, [currentMusic, isPlaying, setIsPlaying]);



    const handleClick = () => {
        if (currentMusic.song === track && isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            setIsCurrentPlaying(false);
            return;
        }

        audioRef.current.currentTime = track.timeToStart;
        audioRef.current.src = src;
        audioRef.current.play();

        setIsPlaying(true);
        setIsCurrentPlaying(true);

        setCurrentMusic({ ...currentMusic, playlist, song: track });
    }


    const songStatus = `song ${isCurrentPlaying ? 'is-playing' : ''}`;

    return (
        <div className={songStatus} onClick={handleClick}>
            <span className="song-number">{track.id}</span>
            <p className="song-title">{track.title}</p>
            <p className="song-duration">{minutes}:{seconds}</p>
            <audio ref={audioRef} />

        </div>
    )
}

Song.propTypes = {
    playlist: PropTypes.object.isRequired,
    track: PropTypes.object.isRequired,
    nextTrack: PropTypes.object,
    duration: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
}
