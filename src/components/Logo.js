import '../styles/logo.scss'
import LogoImg from '../images/Logo.svg'

function Logo() {
    return (
        <div className='logo'>
            <img alt='logo' src={LogoImg} />
        </div>
    );
}

export default Logo;
