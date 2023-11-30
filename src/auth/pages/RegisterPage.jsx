import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { usePlayerStore } from "../../musiconfit/store/playerStore.js";

export const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2023);

    const { setUser } = usePlayerStore(state => state);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email,
            password,
            nickname,
            birthdate: `${year}-${month}-${day}`,
        };

        fetch(`http://localhost:1234/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setUser({ isLogged: true, nickname: data[0].nickname })
                navigate("/");
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error al enviar los datos:', error);
            });

    }

    return (
        <div className="register-page">
            <div className="logo-row">
                <Link to={'/'}>
                    <picture className="logo-picture">
                        <img className="logo-img" src="../../../public/assets/Musiconfit-logo.png" alt="" />
                    </picture>
                    <h1 className="logo-title">Musiconfit</h1>
                </Link>
            </div>
            <h2>Regístrate con tu correo electrónico</h2>

            <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="email">¿Cuál es tu correo electrónico?</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Pon tu correo electrónico"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Crea una contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    placeholder="Crea una contraseña"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="nickname">¿Cómo quieres que te llamemos?</label>
                <input
                    type="text"
                    name="nickname"
                    id="nickname"
                    placeholder="Pon un nombre de perfil"
                    required
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <label className="nickname-info">Esto aparecerá en tu perfil</label>
                <label htmlFor="birthday">¿Cuál es tu fecha de nacimiento?</label>

                <div className="selects-birthdate">
                    <div className="select day">
                        <label htmlFor="day">Día</label>
                        <select
                            name="day"
                            id="day"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                        >
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                    </div>
                    <div className="select month">
                        <label htmlFor="month">Mes</label>
                        <select
                            name="month"
                            id="month"
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}>
                            <option value="1">Enero</option>
                            <option value="2">Febrero</option>
                            <option value="3">Marzo</option>
                            <option value="4">Abril</option>
                            <option value="5">Mayo</option>
                            <option value="6">Junio</option>
                            <option value="7">Julio</option>
                            <option value="8">Agosto</option>
                            <option value="9">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </select>
                    </div>

                    <div className="select year">
                        <label htmlFor="year">Año</label>
                        <select
                            name="year"
                            id="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}>
                            {Array.from({ length: 80 }, (_, i) => 2023 - i).map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="legal-text">

                    <div className="terms">
                        Al hacer clic en Registrarte, aceptas los términos y condiciones de uso de Musiconfit.
                    </div>

                    <div className="privacy">
                        Para obtener más información sobre cómo Musiconfit recopila, usa, comparte y protege tus datos personales, consulta la Política de privacidad  de Musiconfit.
                    </div>


                </div>

                <button className="register-btn" type="submit">Registrarte</button>
            </form>


            <div className="login">¿Ya tienes una cuenta? <a href="/auth/login">Inicia sesión</a></div>

        </div>
    )
}
