import { useState } from "react";
import { usePlayerStore } from "../../musiconfit/store/playerStore.js";
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = usePlayerStore(state => state);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) return;
        try {
            const response = await fetch(`http://localhost:1234/user/${email}`);
            const user = await response.json();
            setUser({ isLogged: true, nickname: user.nickname })
            navigate("/");
            return user;
        } catch (error) {
            console.error("Error fetching user:", error);
            return [];
        }

    }

    return (
        <div className="register-page">
            <div className="logo-row">
                <picture className="logo-picture">
                    <img className="logo-img" src="../../../public/assets/Musiconfit-logo.png" alt="" />
                </picture>
                <h1 className="logo-title">Musiconfit</h1>
            </div>
            <h2>Regístrate con tu correo electrónico</h2>

            <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Pon tu correo electrónico"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Crea una contraseña"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />


                <button className="login-btn" type="submit">Inicia sesión</button>
            </form>


            <div className="register">¿No tienes cuenta? <a href="">Regístrate en Musiconfit</a></div>

        </div>
    )
}
