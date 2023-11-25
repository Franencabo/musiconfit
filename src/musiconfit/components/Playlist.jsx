import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Song } from "./Song";
import { TimeIcon } from "./icons/Time"



export const Playlist = ({ playlist }) => {
    console.log(playlist);

    const { id } = useParams();

    const playlistSelected = playlist.find(playlist => playlist.id === id);

    const { title, banner, tracks, duration } = playlistSelected;

    return (
        <main className="main rounded-section">
            <picture className="banner">
                <img className="banner-img" src={banner} alt="" />
                <div className="overlay"></div>
            </picture>

            <div className="playlist-dashboard">
                <div className="playlist-table">
                    <div className="playlist-name">

                        <span className="playlist-number">#</span>
                        <p className="playlist-title">{title}</p>
                        <p className="playlist-duration"><TimeIcon className="time-icon" /></p>


                    </div>
                    {tracks.map((track, index) => {

                        const nextTrack = tracks[index + 1];

                        return <Song key={index} playlist={playlistSelected} track={track} nextTrack={nextTrack} duration={duration} />
                    })}
                </div>
                <div className="pitch-control"></div>
            </div>
        </main>
    );
};

Playlist.propTypes = {
    playlist: PropTypes.array.isRequired
};