import { useNavigate } from "react-router-dom";
import { usePlayerStore } from "../store/playerStore.js";

export const LoggedButtons = () => {
    const { setUser } = usePlayerStore(state => state);
    const navigate = useNavigate();

    const onLogoutClick = () => {
        setUser({ isLogged: false })
        navigate("/");
    };

    return (
        <div className="header-actions">
            <button className="register-btn" onClick={onLogoutClick}>Cerrar sesión</button>
        </div>
    )
}
