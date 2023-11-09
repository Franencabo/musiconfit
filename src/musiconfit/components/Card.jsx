import PropTypes from "prop-types";
import { CardPlayButton } from "./CardPlayButton";


export const Card = ({ playlist }) => {
    const { title, cover, description } = playlist;

    return (
        <div className="card">
            <a className="card-link" href="">
                <picture className="card-picture">
                    <img className="card-image" src={cover} alt={title} />
                </picture>

                <div>
                    <h4 className="card-title">{title}</h4>
                    <p className="card-description">{description}</p>
                </div>

                <CardPlayButton id={playlist.id} />

            </a>
        </div>
    )
}


Card.propTypes = {
    playlist: PropTypes.object.isRequired
}