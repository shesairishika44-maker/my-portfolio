
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">MyPortfolio<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="intro">HELLO, I'M</p>
          <h1>S Rishika <span>.</span></h1>
          <h2>B.Tech Student | Aspiring Software Developer</h2>
          <p className="description">
            I am a B.Tech student interested in software development,
            problem-solving, and building useful web applications.
            I am looking for opportunities to learn, grow, and contribute.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View My Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>

        
<img
  src="/profile.jpg"
  alt="My profile"
  className="profile-photo"
/>

      </section>

      <section className="section" id="about">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p>
          I am a B.Tech student building my skills in programming and
          software development. I enjoy working on projects that help me
          apply what I learn and develop practical experience.
        </p>
      </section>

      <section className="section" id="skills">
        <p className="section-label">WHAT I AM LEARNING</p>
        <h2>My <span>Skills</span></h2>
        <div className="skills-list">
          <div>Java</div>
          <div>Python</div>
          <div>HTML & CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>SQL</div>
        </div>
        <p className="note">
          Update this list to match your current skills and experience.
        </p>
      </section>

      <section className="section" id="projects">
        <p className="section-label">WHAT I HAVE WORKED ON</p>
        <h2>My <span>Projects</span></h2>

        <div className="project-grid">
          <article className="project-card">
            <p className="project-number">PROJECT 01</p>
            <h3>Smart Parking System</h3>
            <p>
              A software-based system designed to help users view and
              book parking slots through a website.
            </p>
            <span className="tag">Web Development</span>
          </article>

          <article className="project-card">
            <p className="project-number">PROJECT 02</p>
            <h3>Smart Pothole Detection System</h3>
            <p>
              An AI/ML-based project designed to identify potholes and
              help users report road issues.
            </p>
            <span className="tag">AI / ML</span>
          </article>

          <article className="project-card">
            <p className="project-number">PROJECT 03</p>
            <h3>Profitability Analysis System</h3>
            <p>
              A platform designed to help businesses analyze revenue,
              costs, discounts, and profit or loss.
            </p>
            <span className="tag">Full-Stack Development</span>
          </article>
        </div>
      </section>

      <section className="section" id="experience">
        <p className="section-label">MY JOURNEY</p>
        <h2>Experience & <span>Activities</span></h2>

        <div className="experience-card">
          <h3>CodeAlpha Internship</h3>
          <p>
            Worked on learning tasks involving Python, data analysis,
            and web scraping.
          </p>
        </div>

        <div className="experience-card">
          <h3>CSI Club — Event Coordinator</h3>
          <p>
            Student club role involving event coordination.
          </p>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <p className="section-label">LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
        <p>
          I am interested in internship and placement opportunities.
          Feel free to connect with me.
        </p>

        <div className="hero-buttons">
          <a className="btn primary" href="mailto:shesairishika44@gmail.com">
            Email Me
          </a>
          <a className="btn secondary" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn secondary" href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>Designed and built by S Rishika</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
