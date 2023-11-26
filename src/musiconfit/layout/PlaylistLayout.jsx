import { useEffect, useState } from "react";
import { AsideMenu, Player, Playlist } from "../components"
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PlaylistLayout = () => {
    const [tracks, setTracks] = useState([]);
    const { id } = useParams();

    const getAllTracks = async () => {
        try {
            const response = await fetch(`http://localhost:1234/playlist/${id}`);
            const tracks = await response.json();
            return tracks;

        } catch (error) {
            console.error("Error fetching playlists:", error);
            return [];
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch data from server
                const tracks = await getAllTracks();
                setTracks(tracks);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [])



    return (
        <>
            <AsideMenu />
            <div>{JSON.stringify(tracks)}</div>
            {/* <Playlist playlist={playlist} /> */}
            <Player />
        </>

    )
}
