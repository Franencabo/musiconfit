import PropTypes from 'prop-types';
import { useTimeConverter } from '../hooks/useTimeConverter';
import { useRef, useEffect } from 'react';
import { userPlayerStore } from '../store/playerStore';

export const Song = ({ track, nextTrack, duration, src }) => {
    const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = userPlayerStore(state => state);

    const trackDuration = nextTrack
        ? (nextTrack.timeToStart - track.timeToStart)
        : (duration - track.timeToStart);

    const { minutes, seconds } = useTimeConverter(trackDuration)

    const audioRef = useRef();

    useEffect(() => {
        if (currentMusic.song === track && isPlaying) {
            audioRef.current.currentTime = track.timeToStart;
            audioRef.current.src = src;
            audioRef.current.play();
        } else if (currentMusic.song !== track) {
            audioRef.current.pause();
        }
    }, [currentMusic, isPlaying, track, src]);


    const handleClick = () => {

        if (currentMusic.song === track) {
            audioRef.current.pause();
            setIsPlaying(false);
            return;
        }
        audioRef.current.currentTime = track.timeToStart;
        audioRef.current.src = src;
        audioRef.current.play();

        setIsPlaying(true);

        setCurrentMusic({ ...currentMusic, song: track });
    }



    return (
        <div className="song" onClick={handleClick}>
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
