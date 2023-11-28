import Proptypes from "prop-types";
import { Card } from "./Card"
import { Header } from "./Header"


export const GridCardList = ({ allPlaylists }) => {
    return (
        <main className="main rounded-section ">
            <Header />
            <div className="grid-card-list">
                {allPlaylists.map((item, index) => {
                    return <Card playlist={item} key={index} />
                })}
            </div>
        </main>
    )
}

GridCardList.propTypes = {
    allPlaylists: Proptypes.array.isRequired
}
