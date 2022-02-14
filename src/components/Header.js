import '../styles/header.scss';
import { NavLink, Logo } from './'

function Header() {

    return (
        <div className="header">
            <nav>
                <NavLink active name="Home" />
                <NavLink name="Products" />
                <Logo />
                <NavLink name="Blog" />
                <NavLink name="Contact" />
            </nav>
        </div>
    );
}

export default Header;
