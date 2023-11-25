
import { useEffect, useState } from "react";
import { AsideMenu, Player, Playlist } from "../components"
import { useParams } from "react-router-dom";

export const PlaylistLayout = () => {

    const [playlistInfo, setPlaylistInfo] = useState(null);

    const { id } = useParams();

    const getPlaylists = async () => {
        try {
            const response = await fetch(`http://localhost:1234/playlist/${id}`);
            const playlist = await response.json();
            return playlist;

        } catch (error) {
            console.error("Error fetching playlists:", error);
            return null;
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch data from server
                const playlist = await getPlaylists();
                if (playlist) {
                    setPlaylistInfo(playlist);
                } else {
                    console.error("Error fetching data: Playlist is null");
                }

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id])


    return (
        <>
            {!playlistInfo && <div>Esta cargando</div>}
            <AsideMenu />
            <Playlist playlist={playlistInfo} />
            <Player />
        </>

    )
}
