import { AsideMenu, Player, Playlist } from "../components"
import * as playlist from "../../lib/data.json"

const playlistInfo = playlist.default;


export const PlaylistLayout = () => {
    return (
        <>
            <AsideMenu />
            <Playlist playlist={playlistInfo} />
            <Player />
        </>

    )
}
