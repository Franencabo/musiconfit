import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Song } from "./Song";


export const Playlist = ({ playlist }) => {

    const { id } = useParams();

    const playlistSelected = playlist.find(playlist => playlist.id === id);

    const { title, banner, tracks } = playlistSelected;

    return (
        <main className="main rounded-section">
            <picture className="banner">
                <img className="banner-img" src={banner} alt="" />
                <div className="overlay"></div>
            </picture>

            <div className="playlist-dashboard">
                <div className="playlist-table">
                    <p className="playlist-title"># {title}
                        <i className=""></i>
                    </p>
                    {tracks.map((track, index) => {

                        return <Song key={index} track={track} index={index} />
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