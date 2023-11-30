import { useNavigate } from "react-router-dom"

export const AuthButtons = () => {

    const navigate = useNavigate();
    const onRegisterClick = () => {
        navigate("/auth/register");
    };

    const onLoginClick = () => {
        navigate("/auth/login");
    }

    return (
        <div className="header-actions">
            <button className="login-btn" onClick={onLoginClick}>Iniciar sesión</button>
            <button className="register-btn" onClick={onRegisterClick}>Registrarte gratis</button>
        </div>
    )
}
