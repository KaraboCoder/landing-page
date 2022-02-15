import '../styles/menu.scss'

function Menu() {
    return (
        <div className='menu'>
            <a href='#' className='menu-link active'>
                <span />
                Home
            </a>
            <a href='#' className='menu-link'>
                <span />
                Products
            </a>
            <a href='#' className='menu-link'>
                <span />
                Blog
            </a>
            <a href='#' className='menu-link'>
                <span />
                Contact
            </a>
        </div>
    );
}

export default Menu;
