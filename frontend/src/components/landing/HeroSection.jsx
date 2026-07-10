import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero-section">
     <div className='hero1'>
       <h1 className='h-title'>Personalized<span className="gradient-text2"> AI Roadmaps</span> for Lifelong Learning</h1>
      <p>Aligning with UN SDG 4 to make quality education and AI-guided learning free and accessible to all.</p>
      <div className="hero-buttons">
        <Link to="/register"><button className='btn btn-primary' style={{background:'#5852D4'}}>Start Learning Free</button></Link>
        <Link to="/about"><button className='btn btn-secondary' style={{background:'white', border:'1px solid'}}>Learn More</button></Link>
      </div>
      <div className='hero2'>
        <div className='item1'>
            <h4>10k+</h4>
            <p>Students</p>
        </div>
        <div className='item1'>
            <h4>500+</h4>
            <p>Roadmaps</p>
        </div>
        <div className='item1'>
            <h4>90%</h4>
            <p>Satisfaction</p>
        </div>
     </div>
     </div>

     <div className='hero3'>
      <div className="hero-card">
        <span>AI RoadMap Generated</span>
        <ol>
          <li>HTML & CSS Basics</li><hr/>
          <li>JavaScript Core</li><hr/>
          <li>React Fundamentals</li><hr/>
          <li>Node.js & Express</li><hr/>
          <li>MongoDB & Deploy</li><hr/>
        </ol>
      </div>
     </div>
     
    </section>
  );
}

export default HeroSection;