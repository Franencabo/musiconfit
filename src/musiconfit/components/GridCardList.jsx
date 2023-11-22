import { Card } from "./Card"
import * as playlists from "../../lib/data.json"




const playlistsArray = playlists.default;
export const GridCardList = () => {
    return (
        <main className="main rounded-section grid-card-list">
            {playlistsArray.map((item, index) => {
                return <Card playlist={item} key={index} />
            })}
        </main>
    )
}
