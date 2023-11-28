import { Home } from './icons/Home';
import { Search } from './icons/Search';


export const LogoCard = () => {
    return (
        <div className="logo-card rounded-section">
            <div className="logo-row">
                <picture className="logo-picture">
                    <img className="logo-img" src="../../../public/assets/Musiconfit-logo.png" alt="" />
                </picture>
                <h1 className="logo-title">Musiconfit</h1>
            </div>
            <div className="home-row">
                <Home className="home-icon" />
                <p>Inicio</p>
            </div>
            <div className="search-row">
                <Search className="search-icon" />
                Buscar
            </div>
        </div>
    )
}
