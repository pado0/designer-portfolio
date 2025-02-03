import Navigation from "../atom/Navigation.tsx";
import Logo from "../atom/Logo.tsx";
import "./Header.css"

const Header = () => {
    return <div className="Header">
        <Logo/>
        <Navigation/>
    </div>
}

export default Header