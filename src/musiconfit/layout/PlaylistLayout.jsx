import { useEffect, useState } from "react";
import { AsideMenu, Player, Playlist } from "../components"
import { useParams } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export const PlaylistLayout = () => {
    const [playlistInfo, setPlaylistInfo] = useState({});
    const { id } = useParams();

    const getPlaylistInfo = async () => {
        try {
            const response = await fetch(`http://localhost:1234/playlist/${id}`);
            const playlistInfo = await response.json();
            return playlistInfo;

        } catch (error) {
            console.error("Error fetching playlists:", error);
            return {};
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch data from server
                const playlistInfo = await getPlaylistInfo();
                setPlaylistInfo(playlistInfo);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [])



    return (
        <>
            <AsideMenu />
            {Object.keys(playlistInfo).length > 0 && <Playlist playlist={playlistInfo} />}
            <Player />
        </>

    )
}
