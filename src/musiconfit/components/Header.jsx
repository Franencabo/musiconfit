import { Previous } from './icons/Previous'
import { Next } from './icons/Next'

export const Header = () => {
    return (
        <div className="header">
            <div className="header-nav">
                <button className="previous-btn">
                    <Previous className="previous-icon" />
                </button>
                <button className="next-btn">
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
