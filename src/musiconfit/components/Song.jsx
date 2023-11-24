import PropTypes from 'prop-types';
import { useTimeConverter } from '../hooks/useTimeConverter';
import { usePlayerStore } from '../store/playerStore';
import { useEffect, useState } from 'react';
import { useAudio } from './AudioContext.jsx';


export const Song = ({ playlist, track, nextTrack, duration }) => {
    const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } = usePlayerStore(state => state);

    const [isCurrentPlaying, setIsCurrentPlaying] = useState(false);

    const audio = useAudio();



    const trackDuration = nextTrack
        ? (nextTrack.timeToStart - track.timeToStart)
        : (duration - track.timeToStart);

    const { minutes, seconds } = useTimeConverter(trackDuration)



    useEffect(() => {

        if (currentMusic.song === track && isPlaying) {
            audio.currentTime = track.timeToStart;
            audio.src = playlist.src;
            audio.play();
            setIsCurrentPlaying(true);
        } else if (currentMusic.song !== track && isPlaying) {
            audio.pause();
            setIsCurrentPlaying(false);
        }
    }, [currentMusic, isPlaying, setIsPlaying]);

    useEffect(() => {
        const handleCanPlayThrough = () => {
            console.log('Audio cargado, listo para reproducir');
            if (currentMusic.song === track && isPlaying) {
                audio.play();
                setIsCurrentPlaying(true);
            }
        };

        audio.addEventListener('canplaythrough', handleCanPlayThrough);

        return () => {
            audio.removeEventListener('canplaythrough', handleCanPlayThrough);
        };
    }, [audio, currentMusic, isPlaying, setIsCurrentPlaying, track]);

    const handleClick = () => {
        if (currentMusic.song === track && isPlaying) {
            audio.pause();
            setIsPlaying(false);
            setIsCurrentPlaying(false);
            return;
        }

        audio.currentTime = track.timeToStart;
        audio.src = playlist.src;
        audio.play();
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
        </div>
    )
}

Song.propTypes = {
    playlist: PropTypes.object.isRequired,
    track: PropTypes.object.isRequired,
    nextTrack: PropTypes.object,
    duration: PropTypes.number.isRequired
}
