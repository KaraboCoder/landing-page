import '../styles/nav-link.scss'

function NavLink({ active, name }) {
    return (
        <div className={`nav-link ${active ? 'active' : ''}`}>
            <a href={`#${name}`} >
                {name}
            </a>
            <span></span>
        </div>
    );
}

export default NavLink;
