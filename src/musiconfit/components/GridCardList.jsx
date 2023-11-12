import { Card } from "./Card"
import * as playlist from "../../lib/data.json"




const playlistArray = playlist.default;
export const GridCardList = () => {
    return (
        <main className="main rounded-section grid-card-list">
            {playlistArray.map((item, index) => {
                return <Card playlist={item} key={index} />
            })}

        </main>
    )
}
