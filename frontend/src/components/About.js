import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hello! I'm a passionate web developer with experience in building modern and responsive web applications. I have a strong background in JavaScript, React, Node.js, and other web technologies.</p>
            <p>I am a quick learner and always eager to take on new challenges. I am passionate about creating high-quality code that is both scalable and maintainable.</p>
            <p>In my free time, I enjoy contributing to open-source projects, reading tech blogs, and exploring new technologies.</p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">Download Resume</a>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/300" alt="About Me" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
