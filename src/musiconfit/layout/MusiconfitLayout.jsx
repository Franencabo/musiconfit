import { useState, useEffect } from "react";
import { AsideMenu, GridCardList, Player } from "../components";


export const MusiconfitLayout = () => {
    const [allPlaylists, setAllPlaylists] = useState([]);


    const getAllPlaylists = async () => {
        try {
            const response = await fetch("http://localhost:1234/");
            const playlists = await response.json();
            return playlists;
        } catch (error) {
            console.error("Error fetching playlists:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch data from server
                const playlists = await getAllPlaylists();
                setAllPlaylists(playlists);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <AsideMenu />
            <GridCardList allPlaylists={allPlaylists} />
            <Player />
        </>
    );
};
