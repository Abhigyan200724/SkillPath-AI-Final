import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
       <div className='footer-about'>
         <span className='gradient-text1' style={{color:'black'}}>SkillPath<span className="gradient-text">AI</span></span>
        <p>
            AI-powered personalized learning for every student.<br/>
            Aligned with UN SDG 4 — Quality Education.
        </p>
       </div>
       <div className="footer-links">
         <ul>
          <li><span className='gradient-text1'>Platform</span></li><br/>
          <li><Link to="/" className='footer-links'>Home</Link></li><br/>
          <li><Link to="/about" className='footer-links'>About</Link></li><br/>
          <li><Link to="/login" className='footer-links'>Login</Link></li><br/>
          <li><Link to="/register" className='footer-links'>Register</Link></li><br/>
          <li><Link to="/contact" className='footer-links'>Contact</Link></li><br/>
         </ul>
        </div>
        <div className='footer-about'>
            <span className='gradient-text1'>SDG 4</span>
            <p>Quality Education — Ensure inclusive and equitable<br/> quality education and promote lifelong learning<br/> opportunities for all.</p>
        </div>
      </div>
      <hr/>
       <p style={{color:'grey'}}>© 2026 SkillPath AI. SDG 4: Quality Education.</p>
    </footer>
  );
}

export default Footer;