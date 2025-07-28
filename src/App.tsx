import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-bg">
      <header className="header">
        <h1>Peter Majors</h1>
        <div className="nav-links">
          <a href={process.env.PUBLIC_URL + '/personal/petermajors_resume.pdf'} target="_blank" rel="noopener noreferrer">Resume</a>
          <span className="nav-sep">|</span>
          <a href="https://www.linkedin.com/in/petermajors/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="nav-sep">|</span>
          <a href="https://github.com/peterlmajors" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </header>
      <main className="main">
        <section className="intro-flex">
          <img src={process.env.PUBLIC_URL + '/personal/pfp.JPG'} alt="Peter Majors profile" className="profile-pic" />
          <p>Peter Majors is a developer at Marsh McLennan, building financial applications and research tools with 
            language models. As a student at Fordham, he performed independent research and competed in case competitions 
            in sports analytics. </p>
        </section>
        <section>
          <h2>Case Competitions</h2>
          <ul>
            <li><a href="https://github.com/peterlmajors/Offensive-Linemen-Immediate-Zone" target="_blank" rel="noopener noreferrer">2023 NFL Big Data Bowl (GitHub)</a></li>
            <li><a href={process.env.PUBLIC_URL + '/case_compeititons/2022%20March%20Data%20Crunch%20Madness.pdf'} target="_blank" rel="noopener noreferrer">2022 Fordham March Data Crunch Madness (PDF)</a></li>
            <li><a href={process.env.PUBLIC_URL + '/case_compeititons/2022%20Syracuse%20Football%20Analytics%20Blitz.pdf'} target="_blank" rel="noopener noreferrer">2022 Syracuse Football Analytics Blitz (PDF)</a></li>
            <li><a href={process.env.PUBLIC_URL + '/case_compeititons/2022%20Milwaukee%20Bucks%20Hackathon.pdf'} target="_blank" rel="noopener noreferrer">2022 Milwaukee Bucks Hackathon (PDF)</a></li>
          </ul>
        </section>
        <section>
          <h2>Research</h2>
          <ul>
            <li><a href={process.env.PUBLIC_URL + "/research/Quantifying%20The%20Different%20Look.pdf"} target="_blank" rel="noopener noreferrer">Quantifying The Different Look (PDF)</a></li>
            <li><a href="https://fordhamsas.wixsite.com/website/post/what-makes-a-cy-a-study-of-volume-and-efficiency-in-cy-young-voting" target="_blank" rel="noopener noreferrer">What Makes A Cy? A Study in Volume and Efficiency (Blog)</a></li>
            <li><a href="https://fordhamsas.wixsite.com/website/post/the-yankees-2021-rotation-a-study-in-tommy-john-recovery" target="_blank" rel="noopener noreferrer">The Yankees 2021 Rotation: A Study in Tommy John Recovery (Blog)</a></li>
            <li><a href="https://fordhamsas.wixsite.com/website/post/the-wild-and-wacky-2020-mlb-season-which-statistics-can-we-trust" target="_blank" rel="noopener noreferrer">The Wild 2020 MLB Season: Which Statistics Can We Trust? (Blog)</a></li>
            <li><a href="https://fordhamsas.wixsite.com/website/post/how-anyone-can-calculate-league-normalized-statistics-ops-and-wrc" target="_blank" rel="noopener noreferrer">How Truly Anyone Can Calculate League Normalized Stats (Blog)</a></li>

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
