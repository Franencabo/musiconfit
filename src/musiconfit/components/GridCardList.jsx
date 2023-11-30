import Proptypes from "prop-types";
import { Card } from "./Card"
import { Header } from "./Header"
import { usePlayerStore } from "../store/playerStore";


export const GridCardList = ({ allPlaylists }) => {

    const { user } = usePlayerStore();

    const userIsLogged = user.isLogged;

    return (
        <main className="main rounded-section ">
            <Header />

            <div className="grid-card">
                {userIsLogged && <div className="greeting">¡Hola {user.nickname}!</div>}
                <div className="grid-card-list">
                    {allPlaylists.map((item, index) => {
                        return <Card playlist={item} key={index} />
                    })}
                </div>
            </div>
        </main>
    )
}

GridCardList.propTypes = {
    allPlaylists: Proptypes.array.isRequired
}
