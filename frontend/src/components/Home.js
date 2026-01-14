import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="welcome-tag">Welcome to my world</span>
            <h1>I am <span className="highlight">Nikhil Reddy</span></h1>
            <h2>Full Stack Web Developer</h2>
            <p>I build high-end reaching, interactive, and user-friendly web applications that provide seamless experiences.</p>
            <div className="hero-btns">
              <a href="/projects" className="btn btn-primary">Check My Work</a>
              <a href="/contact" className="btn btn-outline">Let's Talk</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/images/hero-bg.png" alt="Nikhil Reddy" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <i className="fab fa-react"></i>
              <h3>Frontend</h3>
              <p>React.js, Next.js, HTML5, CSS3, JavaScript (ES6+)</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-server"></i>
              <h3>Backend</h3>
              <p>Node.js, Express.js, MongoDB, RESTful APIs</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-tools"></i>
              <h3>Tools</h3>
              <p>Git, GitHub, Vercel, Postman, VS Code</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="featured-header">
            <h2 className="section-title">Featured Projects</h2>
            <a href="/projects" className="view-all">View All Projects <i className="fas fa-arrow-right"></i></a>
          </div>
          <div className="project-preview">
            <div className="preview-content">
              <h3>Latest Project</h3>
              <p>Check out my most recent work where I implemented advanced features using React and Node.js.</p>
              <a href="/projects" className="btn btn-primary">View Project</a>
            </div>
            <div className="preview-image">
              <img src="./images/p2.png" alt="Latest Project" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
