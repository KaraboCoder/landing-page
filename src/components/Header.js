import { NavLink, Logo } from './'
import '../styles/header.scss';
import MenuIcon from '../images/menu.svg';
import CloseIcon from '../images/close.svg';

function Header({ toggleMenu, menuState }) {

    return (
        <div className="header">
            <nav>
                <button className='menu-button' onClick={toggleMenu}>
                    {!menuState ? <img alt='menu' src={MenuIcon} /> : <img alt='menu' src={CloseIcon} />}
                </button>
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
