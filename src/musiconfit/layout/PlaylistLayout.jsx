
import { useEffect, useState } from "react";
import { AsideMenu, Player, Playlist } from "../components"
import { useParams } from "react-router-dom";

export const PlaylistLayout = () => {

    const [playlistInfo, setPlaylistInfo] = useState({});

    const { id } = useParams();

    console.log(id);

    const getPlaylists = async () => {
        const response = await fetch(`http://localhost:1234/playlist/${id}`);
        const playlist = await response.json();
        setPlaylistInfo(playlist);
    }

    useEffect(() => {
        // fetch data from server
        const playlistInfo = getPlaylists();
        setPlaylistInfo(playlistInfo);
    }, [])


    return (
        <>
            {/* {playlistInfo && <Loading />} */}
            <AsideMenu />
            <Playlist playlist={playlistInfo} />
            <Player />
        </>

    )
}
