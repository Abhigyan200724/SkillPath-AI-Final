import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function AboutPage() {
  return (
    <div className="page-container">
      <Navbar />
      <main className="about-main">
        <h1>About <span className='gradient-text2'>SkillPath AI</span></h1>
        <p className="about-intro">SkillPath AI was built to solve a real problem: millions of students want to learn technology<br/> skills, but have no structured, personalized guidance. We bridge that gap using AI.</p>
        <h1>Our Mission: <span className="gradient-text">Quality Education for All</span></h1>
        <p className="about-intro">SkillPath AI directly addresses UN SDG 4 — Quality Education. We leverage advanced artificial intelligence <br/>to democratize education and build high-quality, personalized learning paths for everyone, everywhere.</p>
        
        <div className="about-grid">
          <div className="about-card">
            <h3>SDG 4 Alignment</h3>
            <p>By providing free roadmap generation, instant 24/7 mentoring, and project planning, we remove financial and geographical barriers to expert tutoring.</p>
          </div>
          <div className="about-card">
            <h3>Tech Stack</h3>
            <p>Built using the MERN stack (MongoDB, Express, React, Node.js) and powered by the Groq AI API for lightning-fast roadmaps.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;