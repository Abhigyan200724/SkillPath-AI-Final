import { useState } from "react";
import {Link, NavLink} from "react-router-dom"; 
import ThemeToggle from "../ui/ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from '../../context/AuthContext.jsx';
import Button from '../ui/Button';



const Navbar = () => {
    const { user, logout } = useAuth()
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
             <div className="navbar__actions">
        {user ? (
          <>
            <Link to="/dashboard">
              <Button className="nav-btn-login" >Dashboard</Button>
            </Link>
            <Button className="nav-btn-register" onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <Link to="/login"><Button className="nav-btn-login">Login</Button></Link>
            <Link to="/register"><Button className="nav-btn-register">Get Started</Button></Link>
          </>
        )}
        <ThemeToggle />
      </div>

      <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', background: 'none', border: 'none', color: 'var(--color-text)', fontSize: '1.5rem' }}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
        </nav>
    )
}
export default Navbar