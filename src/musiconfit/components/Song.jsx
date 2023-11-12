import PropTypes from 'prop-types';

export const Song = ({ track, index }) => {

    const duration = track.timeToStart;

    return (
        <div className="song">
            <span className="song-number">{index + 1}</span>
            <p className="song-title">{track.title}</p>
            <p className="song-duration">{duration}</p>
        </div>
    )
}

Song.propTypes = {
    track: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}
