
export const RegisterPage = () => {
    return (
        <div className="register-page">
            <div className="logo-row">
                <picture className="logo-picture">
                    <img className="logo-img" src="../../../public/assets/Musiconfit-logo.png" alt="" />
                </picture>
                <h1 className="logo-title">Musiconfit</h1>
            </div>
            <h2>Regístrate con tu correo electrónico</h2>
            <form className="register-form" action="">
                <label htmlFor="email">¿Cuál es tu correo electrónico?</label>
                <input type="email" name="email" id="email" autoComplete="email" placeholder="Pon tu correo electrónico" />
                <label htmlFor="password">Crea una contraseña</label>
                <input type="password" name="password" id="password" autoComplete="new-password" placeholder="Crea una contraseña" />
                <label htmlFor="nickname">¿Cómo quieres que te llamemos?</label>
                <input type="text" name="nickname" id="nickname" placeholder="Pon un nombre de perfil" />
                <label className="nickname-info">Esto aparecerá en tu perfil</label>
                <label htmlFor="birthday">¿Cuál es tu fecha de nacimiento?</label>

                <div className="selects-birthdate">
                    <div className="select day">
                        <label htmlFor="day">Día</label>
                        <select name="day" id="day">
                            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                                <option key={day} value={day}>{day}</option>
                            ))}
                        </select>
                    </div>
                    <div className="select month">
                        <label htmlFor="month">Mes</label>
                        <select name="month" id="month">
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
                        <select name="year" id="year">
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


            <div className="login">¿Ya tienes una cuenta? <a href="">Inicia sesión</a></div>

        </div>
    )
}
