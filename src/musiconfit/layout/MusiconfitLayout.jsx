import { useState, useEffect } from "react";
import { AsideMenu, GridCardList, Player } from "../components"


export const MusiconfitLayout = () => {
    const [allPlaylists, setAllPlaylists] = useState([{}]);

    const getAllPlaylists = async () => {
        const response = await fetch(`http://localhost:1234/`);
        const allPlaylists = await response.json();
        return allPlaylists;
    }


    useEffect(() => {
        // fetch data from server
        const allPlaylists = getAllPlaylists();
        setAllPlaylists(allPlaylists);
    }, [])

    return (
        <>

            <AsideMenu />
            <GridCardList allPlaylists={allPlaylists} />
            <Player />

        </>

    )
}
