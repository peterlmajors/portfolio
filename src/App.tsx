import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-bg">
      <header className="header">
        <h1>Peter Majors</h1>
        <div className="nav-links">
          <a href="/personal/petermajors_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <span className="nav-sep">|</span>
          <a href="https://www.linkedin.com/in/petermajors/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="nav-sep">|</span>
          <a href="https://github.com/peterlmajors" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>
      <main className="main">
        <section className="intro-flex">
          <img src={process.env.PUBLIC_URL + '/personal/pfp.JPG'} alt="Peter Majors profile" className="profile-pic" />
          <p>Peter Majors is currently an application developer at Marsh McLennan, building financial applications and and research tools with 
            language models. As founder of Fordham's Sports Analytics Society, he performed research, competed in case competitions, and led community 
            initiatives at the intersection of sports and technology.</p>
        </section>
        <section>
          <h2>Case Competitions</h2>
          <ul>
            <li><a href="https://github.com/peterlmajors/Offensive-Linemen-Immediate-Zone" target="_blank" rel="noopener noreferrer">2023 NFL Big Data Bowl: Offensive-Linemen-Immediate-Zone (GitHub)</a></li>
            <li><a href="/case_compeititons/2022%20March%20Data%20Crunch%20Madness.pdf" target="_blank" rel="noopener noreferrer">2022 Fordham March Data Crunch Madness (PDF)</a></li>
            <li><a href="/case_compeititons/2022%20Syracuse%20Football%20Analytics%20Blitz.pdf" target="_blank" rel="noopener noreferrer">2022 Syracuse Football Analytics Blitz (PDF)</a></li>
            <li><a href="/case_compeititons/2022%20Milwaukee20Bucks%20Hackathon.pdf" target="_blank" rel="noopener noreferrer">2022 Milwaukee Bucks Hackathon (PDF)</a></li>
          </ul>
        </section>
        <section>
          <h2>Sports Analytics Research</h2>
          <ul>
            <li><a href="/research/Quantifying%20The%20Different%20Look.pdf" target="_blank" rel="noopener noreferrer">Quantifying The Different Look (PDF)</a></li>
          </ul>
        </section>
        <section>
          <h2>Study Materials</h2>
          <ul>
            <li><a href="https://www.notion.so/LLM-Resources-1b2c8885d18f8011b438d7b38c48331e?pvs=21" target="_blank" rel="noopener noreferrer">Large Language Models (Notion Site)</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
