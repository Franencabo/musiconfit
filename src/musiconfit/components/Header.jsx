import { useNavigate } from "react-router-dom"
import { Previous } from './icons/Previous'
import { Next } from './icons/Next'
import { AuthButtons } from "./AuthButtons"
import { usePlayerStore } from "../store/playerStore.js";
import { LoggedButtons } from "./LoggedButtons.jsx";

export const Header = () => {
    const { user } = usePlayerStore(state => state);

    const isLogged = user.isLogged;

    const navigate = useNavigate()

    const onNavigateBack = () => {
        navigate(-1)
    }

    const onNavigateNext = () => {
        navigate(1)
    }


    return (
        <div className="header">
            <div className="header-nav">
                <button className="previous-btn"
                    onClick={onNavigateBack}>
                    <Previous className="previous-icon" />
                </button>
                <button className="next-btn"
                    onClick={onNavigateNext}>
                    <Next className="next-icon" />
                </button>
            </div>
            <div>
                {!isLogged && <AuthButtons />}
                {isLogged && <LoggedButtons />}
            </div>
        </div >
    )
}
