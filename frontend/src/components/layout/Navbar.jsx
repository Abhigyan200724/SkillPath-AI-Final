import { useState } from "react";
import {Link, NavLink} from "react-router-dom"; 



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
            <span>SkillPath<span className="gradient-text">AI</span></span>
            </Link>
            <div className={`navbar-links ${menuOpen ? 'active': ''}` }>
                <NavLink to="/" className={({isActive})=> isActive ? 'navbar-links active': 'nav-links'}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? 'navbar-links active': 'nav-links'}>About</NavLink>
                <NavLink to="/contact"  className={({isActive})=> isActive ? 'navbar-links active': 'nav-links'}>Contact</NavLink>
                
            </div>
            <div className={`navbar-links ${menuOpen ? 'active': ''}` }>
                <Link to="/login" ><button className="nav-btn-login">Login</button></Link>
                <Link to="/register" ><button className="nav-btn-register">Get Started</button></Link>
              
            </div>
        </nav>
    )
}
export default Navbar