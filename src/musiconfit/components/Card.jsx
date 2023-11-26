import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CardPlayButton } from "./CardPlayButton";


export const Card = ({ playlist }) => {
    const { id, title, cover, description } = playlist;

    return (
        <div className="card">
            <Link to={`/playlist/${id}`} id={id} className="card-link">
                <picture className="card-picture">
                    <img className="card-image" src={cover} alt={title} />
                </picture>

                <div>
                    <h4 className="card-title">{title}</h4>
                    <p className="card-description">{description}</p>
                </div>

                <CardPlayButton id={id} />
            </Link>
        </div>
    )
}


Card.propTypes = {
    playlist: PropTypes.object.isRequired
}