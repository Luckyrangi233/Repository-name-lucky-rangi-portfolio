import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { portfolio as p } from "./data";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="grain" />

      <header className="nav">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">{p.shortName}</span>
          <span>{p.name}</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["about", "experience", "projects", "skills", "contact"].map(
            (item) => (
              <a key={item} href={`#${item}`} onClick={closeMenu}>
                {item}
              </a>
            )
          )}

          <a
            className="nav-resume"
            href={p.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <Arrow />
          </a>

          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? "☼" : "☾"}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="pulse" /> {p.hero.eyebrow}
            </div>

            <h1>{p.hero.title}</h1>

            <div className="role-stack">
              <span>AI / ML Engineer</span>
              <span>Data Scientist</span>
              <span>Data Analyst</span>
            </div>

            <p className="hero-text">{p.hero.description}</p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <Arrow />
              </a>

              <a
                className="button secondary"
                href={p.resume}
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
            </div>

            <div className="availability">
              <span className="availability-dot" />
              {p.hero.availability}
            </div>

            <div className="profile-links">
              {p.profiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{profile.label}</strong>
                  <span>{profile.note}</span>
                  <Arrow />
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal delay">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="dashboard-card">
              <div className="dashboard-top">
                <span className="window-dots">
                  <i />
                  <i />
                  <i />
                </span>

                <small>AI / DATA WORKSPACE</small>

                <span className="live-badge">LIVE</span>
              </div>

              <div className="dashboard-body">
                <div className="metric-row">
                  <div>
                    <small>MODEL</small>
                    <strong>ROC-AUC</strong>
                    <b>0.927</b>
                  </div>

                  <div>
                    <small>REPORTING</small>
                    <strong>TIME SAVED</strong>
                    <b>40%</b>
                  </div>
                </div>

                <div className="chart">
                  <div className="chart-grid">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>

                  <svg
                    viewBox="0 0 420 150"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points="0,125 55,108 95,116 140,80 190,94 235,54 275,68 325,31 370,43 420,12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />

                    <polyline
                      points="0,145 55,132 95,137 140,118 190,122 235,101 275,109 325,87 370,93 420,73"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity=".3"
                    />
                  </svg>
                </div>

                <div className="dashboard-tags">
                  <span>Python</span>
                  <span>SQL</span>
                  <span>ML</span>
                  <span>MLOps</span>
                  <span>GenAI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          {p.stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section split-section">
          <div className="section-label">01 / About</div>

          <div className="section-content">
            <h2>
              Engineering with a <span>practical mindset.</span>
            </h2>

            <p className="large-copy">
              I enjoy taking a machine-learning idea beyond the notebook —
              from understanding the data and evaluating the model to exposing
              it through APIs and preparing it for deployment.
            </p>

            <div className="about-grid">
              <div>
                <span className="mini-label">Based in</span>
                <strong>{p.location}</strong>
              </div>

              <div>
                <span className="mini-label">Education</span>
                <strong>{p.education.degree}</strong>
              </div>

              <div>
                <span className="mini-label">Current direction</span>
                <strong>GenAI · Agentic Systems · Cloud</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section split-section">
          <div className="section-label">02 / Experience</div>

          <div className="section-content">
            <h2>
              Where I've <span>learned by building.</span>
            </h2>

            <div className="timeline">
              {p.experience.map((job) => (
                <article
                  className="timeline-item"
                  key={`${job.company}-${job.period}`}
                >
                  <div className="timeline-marker" />

                  <div className="timeline-head">
                    <div>
                      <h3>{job.role}</h3>
                      <p>
                        {job.company} · {job.location}
                      </p>
                    </div>

                    <time>{job.period}</time>
                  </div>

                  <ul>
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-label">03 / Selected work</div>

          <div className="section-content">
            <h2>
              Projects that show <span>the full picture.</span>
            </h2>

            <div className="projects">
              {p.projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>

                  <div className={`project-visual ${project.visual}`}>
                    <div className="visual-label">{project.category}</div>

                    <div className="visual-window">
                      {project.visual === "loan" && (
                        <>
                          <div className="mini-chart">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>

                          <div className="visual-stat">
                            0.927 <small>ROC-AUC</small>
                          </div>
                        </>
                      )}

                      {project.visual === "physio" && (
                        <>
                          <div className="body-line" />

                          <div className="mini-bars">
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>

                          <div className="visual-stat">
                            100+ <small>records</small>
                          </div>
                        </>
                      )}

                      {project.visual === "instructor" && (
                        <>
                          <div className="donut" />

                          <div className="mini-bars">
                            <span />
                            <span />
                            <span />
                          </div>

                          <div className="visual-stat">
                            RF <small>classifier</small>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="project-main">
                    <div className="project-meta">
                      {project.category}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="result">{project.result}</div>

                    <div className="chips">
                      {project.stack.map((x) => (
                        <span key={x}>{x}</span>
                      ))}
                    </div>

                    <ul className="project-bullets">
                      {project.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    <div className="project-actions">
                      {project.github && (
                        <a
                          className="text-link"
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub <Arrow />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          className="text-link"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo <Arrow />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section split-section">
          <div className="section-label">04 / Toolkit</div>

          <div className="section-content">
            <h2>
              A toolkit built for <span>shipping.</span>
            </h2>

            <div className="skill-grid">
              {p.skills.map((group) => (
                <div className="skill-group" key={group.group}>
                  <h3>{group.group}</h3>

                  <div className="chips">
                    {group.items.map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section split-section">
          <div className="section-label">05 / Education</div>

          <div className="section-content education-card">
            <div>
              <div className="mini-label">
                {p.education.period}
              </div>

              <h2>{p.education.degree}</h2>

              <p>
                {p.education.institution}
                <br />
                {p.education.location}
              </p>
            </div>

            <strong className="grade">{p.education.grade}</strong>
          </div>

          <div className="certifications">
            {p.certifications.map((c) => (
              <div key={c}>
                <span>✦</span>
                {c}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-inner">
            <div className="eyebrow">06 / Let's connect</div>

            <h2>
              Have a problem worth <span>solving?</span>
            </h2>

            <p>
              I'm open to opportunities where I can build useful AI/ML
              systems and keep growing as an engineer.
            </p>

            <a
              className="button primary big"
              href={`mailto:${p.email}`}
            >
              Start a conversation <Arrow />
            </a>

            <div className="contact-links">
              <a
                href={p.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>

              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>

              <a
                href={p.kaggle}
                target="_blank"
                rel="noreferrer"
              >
                Kaggle <Arrow />
              </a>

              <a
                href={p.leetcode}
                target="_blank"
                rel="noreferrer"
              >
                LeetCode <Arrow />
              </a>

              <a href={`mailto:${p.email}`}>
                Email <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>
          © {new Date().getFullYear()} {p.name}
        </span>

        <span>Built with React · Designed for humans</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);