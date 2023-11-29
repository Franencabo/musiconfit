import { useNavigate } from "react-router-dom"
import { Previous } from './icons/Previous'
import { Next } from './icons/Next'

export const Header = () => {

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
            <div className="header-actions">
                <button className="login-btn">Iniciar sesión</button>
                <button className="register-btn">Registrarte gratis</button>
            </div>
        </div>
    )
}
