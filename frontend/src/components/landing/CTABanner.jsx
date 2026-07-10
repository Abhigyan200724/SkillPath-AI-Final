import { Link } from 'react-router-dom';

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="banner">
        <h1 className='h-title'>Ready to build your <span className='gradient-text2'>personalized skill path?</span></h1>
      <p style={{color:'grey', fontSize:'18px'}}>Join thousands of students learning at their own pace with AI.</p>
      <Link to="/register" className="btn-light"><button className='btn'>Get Started Now</button></Link>
      </div>
    </section>
  );
}

export default CTABanner;