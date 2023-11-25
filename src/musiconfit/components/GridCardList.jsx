import Proptypes from "prop-types";
import { Card } from "./Card"


export const GridCardList = ({ allPlaylists }) => {
    return (
        <main className="main rounded-section grid-card-list">
            {allPlaylists.map((item, index) => {
                return <Card playlist={item} key={index} />
            })}
        </main>
    )
}

GridCardList.propTypes = {
    allPlaylists: Proptypes.array.isRequired
}
