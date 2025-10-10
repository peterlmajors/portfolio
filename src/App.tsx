import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-bg">
      <header className="header">
        <h1>Peter Majors</h1>
        <div className="nav-links">
          <a href={process.env.PUBLIC_URL + '/personal/petermajors_resume.pdf'} target="_blank" rel="noopener noreferrer" className="icon-link" title="Resume">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/petermajors/" target="_blank" rel="noopener noreferrer" className="icon-link" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://github.com/peterlmajors" target="_blank" rel="noopener noreferrer" className="icon-link" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </header>
      <main className="main">
        <section className="intro-flex">
          <img src={process.env.PUBLIC_URL + '/personal/pfp.JPG'} alt="Peter Majors profile" className="profile-pic" />
          <p>
            Peter Majors is a developer at Marsh McLennan, building financial reporting applications and research tools powered by language models. At Fordham, he 
            founded and led the Sports Analytics Society for three years - where the group's research efforts sparked his interest in software and data science.
          </p>
        </section>
        <section>
          <h2>Current Work</h2>
          <ul>
            <li>
              <a href="https://github.com/peterlmajors/lox-genie" target="_blank" rel="noopener noreferrer">Lox Genie (GitHub) (In Development)</a>
              <ul>
                <li>Agentic fantasy football consultant, with MCP server and vLLM inference</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>Case Competitions</h2>
          <ul>
            <li>
              <a href="https://github.com/peterlmajors/Offensive-Linemen-Immediate-Zone" target="_blank" rel="noopener noreferrer">2023 NFL Big Data Bowl (GitHub)</a>
              <ul>
                <li>Leveraged Next Gen Stats data to model pass-blocking engagements </li>
              </ul>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL + '/case_compeititons/2022%20March%20Data%20Crunch%20Madness.pdf'} target="_blank" rel="noopener noreferrer">2022 Fordham March Data Crunch Madness (PDF)</a>
              <ul>
                <li>Developed classification model to predict win probabilities for 2022 Men's March Madness </li>
              </ul>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL + '/case_compeititons/2022%20Syracuse%20Football%20Analytics%20Blitz.pdf'} target="_blank" rel="noopener noreferrer">2022 Syracuse Football Analytics Blitz (PDF)</a>
              <ul>
                <li>Created defensive game plan to counter Chiefs' 2021 offense using play-by-play data</li>
              </ul>
            </li>
            <li>
              <a href={process.env.PUBLIC_URL + '/case_compeititons/2022%20Milwaukee%20Bucks%20Hackathon.pdf'} target="_blank" rel="noopener noreferrer">2022 Milwaukee Bucks Hackathon (PDF)</a>
              <ul>
                <li>Devised shot difficulty metric to identify NBA's most efficient three-point shooters</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>Research</h2>
          <ul>
            {/* <li><a href={process.env.PUBLIC_URL + "/research/Quantifying%20The%20Different%20Look.pdf"} target="_blank" rel="noopener noreferrer">Quantifying The Different Look (PDF)</a></li> */}
            <li>
              <a href="https://fordhamsas.wixsite.com/website/post/what-makes-a-cy-a-study-of-volume-and-efficiency-in-cy-young-voting" target="_blank" rel="noopener noreferrer">What Makes A Cy? A Study in Volume and Efficiency (Blog)</a>
              <ul>
                <li>Explored the evolution of MLB CY Young voting preferences over the past 70 years</li>
              </ul>
            </li>
            <li>
              <a href="https://fordhamsas.wixsite.com/website/post/the-yankees-2021-rotation-a-study-in-tommy-john-recovery" target="_blank" rel="noopener noreferrer">The Yankees 2021 Rotation: A Study in Tommy John Recovery (Blog)</a>
              <ul>
                <li>Analyzed the impact of Tommy John surgery on MLB pitcher statistics</li>
              </ul>
            </li>
            <li>
              <a href="https://fordhamsas.wixsite.com/website/post/the-wild-and-wacky-2020-mlb-season-which-statistics-can-we-trust" target="_blank" rel="noopener noreferrer">The Wild 2020 MLB Season: Which Statistics Can We Trust? (Blog)</a>
              <ul>
                <li>Assessed the reliability of MLB hitting statistics from the abbreviated 2020 season</li>
              </ul>
            </li>
            <li>
              <a href="https://fordhamsas.wixsite.com/website/post/how-anyone-can-calculate-league-normalized-statistics-ops-and-wrc" target="_blank" rel="noopener noreferrer">How Truly Anyone Can Calculate League Normalized Stats (Blog)</a>
              <ul>
                <li>Tutorial on calculating OPS+ and WRC+ for non-professional baseball leagues</li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>Study Materials</h2>
          <ul>
            <li>
              <a href="https://www.notion.so/LLM-Resources-1b2c8885d18f8011b438d7b38c48331e?pvs=21" target="_blank" rel="noopener noreferrer">Large Language Models (Notion Site)</a>
              <ul>
                <li>Personal collection of blogs and research papers on LLMs and deep learning</li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
