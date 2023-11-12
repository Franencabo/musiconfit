import PropTypes from "prop-types";
import { useParams } from "react-router-dom";


export const Playlist = ({ playlist }) => {

    const { id } = useParams();

    const playlistSelected = playlist.find(playlist => playlist.id === id);

    const { title, banner } = playlistSelected;

    return (
        <div>
            <picture className="banner">
                <img src={banner} alt="" />
            </picture>
            <h2>{title}</h2>
        </div>
    );
};

Playlist.propTypes = {
    playlist: PropTypes.array.isRequired
};