import { AsideMenu, Player, Playlist } from "../components"
// import * as playlist from "../../lib/data.json"

// const playlistInfo = playlist.default;

import { PlaylistsModel } from "../../../models/mysql/playlists.js"

export const PlaylistLayout = () => {

    const playlistInfo = PlaylistsModel.getPlaylists();
    return (
        <>
            <AsideMenu />
            <Playlist playlist={playlistInfo} />
            <Player />
        </>

    )
}
