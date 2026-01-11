import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a web developer specializing in creating beautiful and functional websites.</p>
          <a href="/contact" className="btn">Contact Me</a>
        </div>
      </div>
    </header>
  );
}

export default Home;
