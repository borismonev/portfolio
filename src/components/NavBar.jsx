import { Link, useLocation } from 'react-router-dom';
import '../css/NavBar.css';
// Import your logo here. Assuming it's in the same folder or an 'assets' folder
import logoSvg from '../assets/logo.svg'; // Adjust the path if necessary

function NavBar() {
    const location = useLocation();

    return (
        // New parent container to hold both the logo and the navigation links
        <div className='navbar-container'>

            {/* 1. Logo Container (New Element) */}
            <Link to='/' className='logo-circle'>
                <img src={logoSvg} alt="Logo" className="navbar-logo" />
            </Link>

            {/* 2. Existing Navigation Wrapper */}
            <div className='wrapper'>
                <nav>
                    <input type="radio" name="tab" id="home" checked={location.pathname === '/'} readOnly />
                    <input type="radio" name="tab" id="about" checked={location.pathname === '/about'} readOnly />
                    <input type="radio" name="tab" id="projects" checked={location.pathname === '/projects'} readOnly />
                    <input type="radio" name="tab" id="contact" checked={location.pathname === '/contact'} readOnly />

                    <label htmlFor="home" className="home">
                        <Link to='/'>Home</Link>
                    </label>
                    <label htmlFor="about" className="about">
                        <Link to='/about'>About</Link>
                    </label>
                    <label htmlFor="projects" className="projects">
                        <Link to='/projects'>Projects</Link>
                    </label>
                    <label htmlFor="contact" className="contact">
                        <Link to='/contact'>Contact</Link>
                    </label>

                    <div className="tab"></div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;