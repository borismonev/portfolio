import { Link, useLocation } from 'react-router-dom';
import '../css/components/NavBar.css';
import logoSvg from '../assets/logo.svg';

function NavBar() {
    const location = useLocation();

    return (
        <div className='navbar-container'>
            <Link to='/' className='logo-circle'>
                <img src={logoSvg} alt="Logo" className="navbar-logo" />
            </Link>
            <div className='wrapper'>
                <nav>
                    <input type="radio" name="tab" id="home" checked={location.pathname === '/'} readOnly />
                    <input type="radio" name="tab" id="about" checked={location.pathname === '/about'} readOnly />
                    <input type="radio" name="tab" id="skills" checked={location.pathname === '/skills'} readOnly />
                    <input type="radio" name="tab" id="projects" checked={location.pathname === '/projects'} readOnly />

                    <label htmlFor="home" className="home">
                        <Link to='/'>Home</Link>
                    </label>
                    <label htmlFor="about" className="about">
                        <Link to='/about'>About</Link>
                    </label>
                    <label htmlFor="skills" className="skills">
                        <Link to='/skills'>Skills</Link>
                    </label>
                    <label htmlFor="projects" className="projects">
                        <Link to='/projects'>Projects</Link>
                    </label>

                    <div className="tab"></div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;