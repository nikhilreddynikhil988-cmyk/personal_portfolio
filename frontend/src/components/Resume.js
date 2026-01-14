import React from 'react';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-page">
            <div className="container">
                <header className="resume-header">
                    <h1>Nikhil Reddy</h1>
                    <p className="resume-subtitle">B.Tech – Information Technology (3rd Year)</p>
                    <div className="contact-info">
                        <span>📍 Telangana, India</span>
                        <span>🔗 LinkedIn: <a href="https://www.linkedin.com/in/chittepu-nikhil-reddy-3a78172b6" target="_blank" rel="noopener noreferrer">chittepu-nikhil-reddy-3a78172b6</a></span>
                        <span>📄 <a href="/pdf/Resume.pdf" download="Nikhil_Reddy_Resume.pdf" className="resume-download-link">Download PDF</a></span>
                    </div>
                </header>

                <main className="resume-main">
                    <section className="resume-section">
                        <h2>Career Objective</h2>
                        <p>Motivated B.Tech IT student with hands-on experience in full-stack web development. Passionate about building real-world applications using modern web technologies and eager to apply technical skills in software development roles.</p>
                    </section>

                    <section className="resume-section">
                        <h2>Education</h2>
                        <div className="education-item">
                            <h3>B.Tech – Information Technology</h3>
                            <p>Anurag University, Telangana</p>
                            <p className="date">(3rd Year – R22 Regulation)</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Technical Skills</h2>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <strong>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, React (Basics)
                            </div>
                            <div className="skill-category">
                                <strong>Backend:</strong> JavaScript, Node.js (Basics)
                            </div>
                            <div className="skill-category">
                                <strong>Database:</strong> MongoDB, MySQL
                            </div>
                            <div className="skill-category">
                                <strong>Tools:</strong> Git, VS Code, Vercel
                            </div>
                            <div className="skill-category">
                                <strong>Concepts:</strong> DBMS, OOPS, Web Development Fundamentals
                            </div>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Projects</h2>
                        <div className="project-item">
                            <h3>Civic Issue Reporting System</h3>
                            <p>Developed a web platform for citizens to report civic issues such as potholes, garbage, and water leakage.</p>
                            <p>Implemented issue tracking with real-time status updates and location-based reporting.</p>
                            <p>Improved civic engagement through a clean and user-friendly interface.</p>
                        </div>
                        <div className="project-item">
                            <h3>Student–Teacher Appointment Booking System</h3>
                            <p>Built an online system that allows students to book appointments with teachers.</p>
                            <p>Implemented dashboards showing appointment status (pending, approved, rejected).</p>
                            <p>Enabled communication through messaging features.</p>
                        </div>
                        <div className="project-item">
                            <h3>Gas Agency Management System</h3>
                            <p>Designed a web application for booking gas cylinders online.</p>
                            <p>Implemented secure user registration and login functionality.</p>
                            <p>Simplified booking management for customers.</p>
                        </div>
                        <div className="project-item">
                            <h3>Personal Programming Blog Website</h3>
                            <p>Created a responsive blog platform to share content on HTML, CSS, and JavaScript.</p>
                            <p>Added category filtering and search functionality.</p>
                            <p>Focused on clean UI and beginner-friendly content presentation.</p>
                        </div>
                        <div className='project-item'>
                            <h3>Civic Issue Reporting System</h3>
                            <p>Developed a web platform for citizens to report civic issues such as potholes, garbage, and water leakage.</p>
                            <p>Implemented issue tracking with real-time status updates and location-based reporting.</p>
                            <p>Improved civic engagement through a clean and user-friendly interface.</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2>Certifications & Learning</h2>
                        <ul className="resume-list">
                            <li>Machine Learning Course (Started May 2025)</li>
                            <li>Self-learning in Full-Stack Web Development</li>
                        </ul>
                    </section>

                    <section className="resume-section">
                        <h2>Strengths</h2>
                        <ul className="resume-list">
                            <li>Strong problem-solving skills</li>
                            <li>Quick learner and self-motivated</li>
                            <li>Good understanding of real-world project development</li>
                        </ul>
                    </section>

                    <section className="resume-section declaration">
                        <h2>Declaration</h2>
                        <p>I hereby declare that the information provided above is true to the best of my knowledge.</p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Resume;
