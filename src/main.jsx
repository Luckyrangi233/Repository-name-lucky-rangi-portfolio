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

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Portfolio Contact from " + form.name
    );

    const body = encodeURIComponent(
      "Name: " +
        form.name +
        "\nEmail: " +
        form.email +
        "\n\nMessage:\n" +
        form.message
    );

    window.location.href =
      "mailto:" +
      p.email +
      "?subject=" +
      subject +
      "&body=" +
      body;
  };

  const educationItems = [
    {
      period: "2022 – 2026",
      title: "B.Tech — Computer Science and Engineering",
      institution: "Poornima Institute of Engineering and Technology",
      location: "Jaipur, Rajasthan",
      result: "CGPA: 7.4 / 10",
    },
    {
      period: "July 2019 – April 2021",
      title: "Senior Secondary — Class 12 (Science, PCM)",
      institution:
        "Government New Building Senior Secondary School",
      location: "Sirohi, Rajasthan",
      result: "67.40%",
    },
    {
      period: "Completed Secondary Education",
      title: "Secondary — Class 10",
      institution:
        "Aadarsh Vidha Mandir Senior Secondary School",
      location: "Sirohi, Rajasthan",
      result: "74.83%",
    },
  ];

  return (
    <div className="app">
      <div className="grain" />

      {/* ================= NAVIGATION ================= */}
      <header className="nav">
        <a
          className="brand"
          href="#top"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            {p.shortName}
          </span>

          <span>{p.name}</span>
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {[
            "about",
            "experience",
            "projects",
            "skills",
            "education",
            "contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            className="nav-resume"
            href={p.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <Arrow />
          </a>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? "☼" : "☾"}
          </button>
        </nav>
      </header>

      <main id="top">

        {/* ================= HERO ================= */}
        <section className="hero section">
          <div className="hero-copy reveal">

            <div className="eyebrow">
              <span className="pulse" />
              {p.hero.eyebrow}
            </div>

            <div className="hero-name">
              LUCKY RANGI
            </div>

            <div className="hero-roles">
              AI/ML Engineer · Data Scientist · Data Analyst
            </div>

            <div className="role-stack">
              <span>Machine Learning</span>
              <span>Data Science</span>
              <span>Python</span>
              <span>SQL</span>
            </div>

            <p className="hero-text">
              Computer Science graduate with hands-on
              experience building machine learning models,
              data-driven applications, REST APIs, and
              deployable AI/ML systems.
            </p>

            <p className="hero-text secondary-hero-text">
              I enjoy solving real-world problems through data,
              developing practical machine learning solutions,
              and taking projects from experimentation to
              deployment using modern engineering tools.
            </p>

            <div className="hero-actions">
              <a
                className="button primary"
                href="#projects"
              >
                View Projects <Arrow />
              </a>

              <a
                className="button secondary"
                href={p.resume}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>

            <div className="availability">
              <span className="availability-dot" />
              Open to AI/ML Engineer · Data Scientist ·
              Data Analyst opportunities
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

          {/* ================= HERO VISUAL ================= */}
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

                <span className="live-badge">
                  LIVE
                </span>
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
                  <span>Machine Learning</span>
                  <span>MLOps</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="stats">
          {p.stats.map((s) => (
            <div
              className="stat"
              key={s.label}
            >
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="section split-section"
        >
          <div className="section-label">
            01 / About
          </div>

          <div className="section-content">

            <h2>
              Computer Science Engineer with a{" "}
              <span>practical mindset.</span>
            </h2>

            <p className="large-copy">
              I am a Computer Science graduate who enjoys
              building useful software and data-driven
              solutions. My primary focus is Artificial
              Intelligence, Machine Learning, Data Science,
              and problem solving.
            </p>

            <p className="large-copy">
              My experience covers the complete development
              cycle — from understanding raw data and
              performing EDA to feature engineering, model
              training, evaluation, API development,
              containerization, and deployment.
            </p>

            <div className="about-grid">

              <div>
                <span className="mini-label">
                  Based in
                </span>

                <strong>{p.location}</strong>
              </div>

              <div>
                <span className="mini-label">
                  Education
                </span>

                <strong>
                  {p.education.degree}
                </strong>
              </div>

              <div>
                <span className="mini-label">
                  Primary focus
                </span>

                <strong>
                  AI/ML · Data Science · Analytics
                </strong>
              </div>

              <div>
                <span className="mini-label">
                  Programming
                </span>

                <strong>
                  Python · SQL · Java
                </strong>
              </div>

            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section
          id="experience"
          className="section split-section"
        >
          <div className="section-label">
            02 / Experience
          </div>

          <div className="section-content">

            <h2>
              Experience built through{" "}
              <span>learning and building.</span>
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
                        {job.company} ·{" "}
                        {job.location}
                      </p>
                    </div>

                    <time>
                      {job.period}
                    </time>

                  </div>

                  <ul>
                    {job.bullets.map((b) => (
                      <li key={b}>
                        {b}
                      </li>
                    ))}
                  </ul>

                </article>
              ))}

            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          className="section projects-section"
        >
          <div className="section-label">
            03 / Selected Work
          </div>

          <div className="section-content">

            <h2>
              Projects that show{" "}
              <span>the full picture.</span>
            </h2>

            <p className="large-copy">
              A selection of projects covering machine
              learning, data analytics, full-stack
              development, APIs, and practical
              problem-solving.
            </p>

            <div className="projects">

              {p.projects.map((project) => (
                <article
                  className="project-card"
                  key={project.number}
                >

                  <div className="project-number">
                    {project.number}
                  </div>

                  <div
                    className={`project-visual ${project.visual}`}
                  >

                    <div className="visual-label">
                      {project.category}
                    </div>

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
                            0.927
                            <small>
                              ROC-AUC
                            </small>
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
                            100+
                            <small>
                              records
                            </small>
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
                            RF
                            <small>
                              classifier
                            </small>
                          </div>
                        </>
                      )}

                      {project.visual === "customer" && (
                        <>
                          <div className="customer-clusters">
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                          </div>

                          <div className="mini-bars">
                            <span />
                            <span />
                            <span />
                            <span />
                          </div>

                          <div className="visual-stat">
                            Segments
                            <small>
                              Customer Analysis
                            </small>
                          </div>
                        </>
                      )}

                    </div>
                  </div>

                  <div className="project-main">

                    <div className="project-meta">
                      {project.category}
                    </div>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="result">
                      {project.result}
                    </div>

                    <div className="chips">
                      {project.stack.map((x) => (
                        <span key={x}>
                          {x}
                        </span>
                      ))}
                    </div>

                    <ul className="project-bullets">
                      {project.bullets.map((b) => (
                        <li key={b}>
                          {b}
                        </li>
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

        {/* ================= SKILLS ================= */}
        <section
          id="skills"
          className="section split-section"
        >
          <div className="section-label">
            04 / Toolkit
          </div>

          <div className="section-content">

            <h2>
              Technical skills built for{" "}
              <span>real-world projects.</span>
            </h2>

            <div className="skill-grid">

              {p.skills.map((group) => (
                <div
                  className="skill-group"
                  key={group.group}
                >

                  <h3>{group.group}</h3>

                  <div className="chips">
                    {group.items.map((x) => (
                      <span key={x}>
                        {x}
                      </span>
                    ))}
                  </div>

                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section
          id="education"
          className="section split-section"
        >
          <div className="section-label">
            05 / Education
          </div>

          <div className="section-content">

            <h2>
              Academic foundation and{" "}
              <span>continuous learning.</span>
            </h2>

            <div className="education-timeline">

              {educationItems.map((item) => (
                <article
                  className="education-item"
                  key={item.title}
                >

                  <div className="education-period">
                    {item.period}
                  </div>

                  <div className="education-main">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.institution}
                      <br />
                      {item.location}
                    </p>

                    {item.result && (
                      <strong>
                        {item.result}
                      </strong>
                    )}

                  </div>
                </article>
              ))}

            </div>

            <div className="certifications">

              <h3>
                Certifications & Achievements
              </h3>

              {p.certifications.map((c) => (
                <div key={c}>
                  <span>✦</span>
                  {c}
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= PROFILES ================= */}
        <section className="section split-section">

          <div className="section-label">
            06 / Profiles
          </div>

          <div className="section-content">

            <h2>
              Learn more about my{" "}
              <span>
                work and problem solving.
              </span>
            </h2>

            <p className="large-copy">
              I practice consistently to strengthen my
              programming, problem-solving, data science,
              and machine learning fundamentals. Explore
              my profiles and recent work.
            </p>

            <div className="profile-grid">

              {p.profiles.map((profile) => (
                <a
                  className="profile-card"
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                >

                  <div>
                    <span className="mini-label">
                      {profile.label}
                    </span>

                    <h3>
                      {profile.note}
                    </h3>
                  </div>

                  <Arrow />

                </a>
              ))}

              <a
                className="profile-card"
                href={p.linkedin}
                target="_blank"
                rel="noreferrer"
              >

                <div>
                  <span className="mini-label">
                    LinkedIn
                  </span>

                  <h3>
                    Professional Profile · Networking
                  </h3>
                </div>

                <Arrow />

              </a>

            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="contact section"
        >
          <div className="contact-inner">

            <div className="eyebrow">
              07 / LET'S CONNECT
            </div>

            <h2>
              Let’s build something{" "}
              <span>meaningful.</span>
            </h2>

            <p>
              Have a project idea, job opportunity,
              collaboration, or simply want to connect?
              I’m open to meaningful conversations and
              new opportunities in AI, data, and software
              engineering.
            </p>

            <div className="contact-layout">

              {/* ================= CONTACT INFORMATION ================= */}
              <div className="contact-info">

                <div className="contact-info-item">
                  <span className="mini-label">
                    Name
                  </span>

                  <strong>
                    {p.name}
                  </strong>
                </div>

                <div className="contact-info-item">
                  <span className="mini-label">
                    Location
                  </span>

                  <strong>
                    {p.location}
                  </strong>
                </div>

                <div className="contact-info-item">
                  <span className="mini-label">
                    Email
                  </span>

                  <a href={`mailto:${p.email}`}>
                    {p.email}
                  </a>
                </div>

                <div className="contact-info-item">
                  <span className="mini-label">
                    Phone
                  </span>

                  <a href={`tel:${p.phone}`}>
                    {p.phone}
                  </a>
                </div>

                <div className="contact-info-item">
                  <span className="mini-label">
                    Open to
                  </span>

                  <strong>
                    AI/ML Engineering · Data Science · Data Analytics
                  </strong>
                </div>

                {/* ================= SOCIAL LINKS ================= */}
                <div className="contact-socials">

                  <span className="mini-label">
                    Find me online
                  </span>

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

                  </div>
                </div>

              </div>

              {/* ================= CONTACT FORM ================= */}
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="form-heading">

                  <span className="mini-label">
                    SEND A MESSAGE
                  </span>

                  <h3>
                    Start a conversation.
                  </h3>

                </div>

                <label>
                  <span>Name</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </label>

                <label>
                  <span>Email</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </label>

                <label>
                  <span>Message</span>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project, opportunity, or idea..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    required
                  />

                </label>

                <button
                  type="submit"
                  className="button primary big"
                >
                  Send Message <Arrow />
                </button>

              </form>

            </div>

            {/* ================= CONTACT FOOTER ================= */}
            <div className="contact-bottom">

              <span>
                Available for opportunities,
                collaborations & projects
              </span>

              <a href={`mailto:${p.email}`}>
                {p.email} <Arrow />
              </a>

            </div>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer>

        <span>
          © {new Date().getFullYear()} {p.name}
        </span>

        <span>
          Built with React · Designed for humans
        </span>

      </footer>
    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);