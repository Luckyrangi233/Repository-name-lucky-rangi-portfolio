// ============================================================
// SINGLE SOURCE OF TRUTH
// Edit this file when you want to update your portfolio.
// Replace public/resume.pdf when you upload a newer CV.
// ============================================================

export const portfolio = {
  name: "Lucky Rangi",
  shortName: "LR",
  role: "AI / ML Engineer · Data Scientist · Data Analyst",
  location: "Jaipur, Rajasthan, India",
  email: "luckyrangi9@gmail.com",
  phone: "+91-7737031870",
  linkedin: "https://linkedin.com/in/lucky-rangi-871623256",
  github: "https://github.com/Luckyrangi233",
  kaggle: "https://www.kaggle.com/luckyrangi56",
  leetcode: "https://leetcode.com/u/luckyop22/",
  resume: "/resume.pdf",

  hero: {
    eyebrow: "B.Tech Computer Science · 2026",
    title: "Data. Intelligence. Systems that ship.",
    description:
      "I’m a Computer Science graduate working across Data Science, Data Analytics, and AI/ML Engineering — turning messy data into useful insights, predictive models, and deployable systems. I build with Python, SQL, machine learning, APIs, and MLOps, while expanding into Generative AI and agentic systems.",
    availability: "Open to AI / ML Engineer & Data Scientist opportunities"
  },

  profiles: [
    { label: "GitHub", href: "https://github.com/Luckyrangi233", note: "Projects & code" },
    { label: "Kaggle", href: "https://www.kaggle.com/luckyrangi56", note: "Data & notebooks" },
    { label: "LeetCode", href: "https://leetcode.com/u/luckyop22/", note: "DSA practice" }
  ],

  stats: [
    { value: "3", label: "Featured projects" },
    { value: "3", label: "Internship experiences" },
    { value: "15%", label: "Model accuracy improvement" },
    { value: "40%", label: "Manual reporting reduced" }
  ],

  skills: [
    { group: "Programming", items: ["Python", "SQL", "Java", "HTML", "CSS"] },
    { group: "AI / ML", items: ["Machine Learning", "Predictive Modeling", "Feature Engineering", "EDA", "Classification", "Regression", "Model Evaluation", "Model Deployment"] },
    { group: "Frameworks", items: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Flask", "FastAPI", "Streamlit", "Matplotlib", "Seaborn"] },
    { group: "MLOps & Tools", items: ["Docker", "Kubernetes", "MLflow", "Git", "GitHub", "Render", "Jupyter Notebook", "VS Code", "Power BI", "MySQL"] },
    { group: "GenAI — Foundational", items: ["AI Agent Architectures", "Agent Orchestration Concepts", "LLM Fundamentals", "Prompt Engineering"] }
  ],

  experience: [
    {
      role: "Data Science Intern",
      company: "Celebal Technologies",
      location: "Remote",
      period: "Jun 2025 – Aug 2025",
      bullets: [
        "Applied data preprocessing, feature engineering, and machine learning techniques on real-world datasets to build predictive models for fraud detection and customer segmentation, improving model accuracy by 15%.",
        "Built and evaluated classification and regression models using Python, Scikit-Learn, Pandas, and NumPy, reducing the false positive rate in fraud detection by 20%.",
        "Performed exploratory data analysis and statistical data visualization to uncover patterns and communicate actionable insights."
      ]
    },
    {
      role: "Frontend Development Intern",
      company: "Mission Minded Foundation",
      location: "Jaipur, Rajasthan",
      period: "Aug 2024 – Sep 2024",
      bullets: [
        "Developed 5+ responsive, interactive web pages using HTML, CSS, and JavaScript, improving cross-browser compatibility across Chrome, Firefox, and Edge.",
        "Collaborated with the design team to implement UI components, reducing page load time by 10% through code optimization."
      ]
    },
    {
      role: "IoT Intern",
      company: "PIET AICTE IDEA LAB",
      location: "Jaipur, Rajasthan",
      period: "Aug 2023",
      bullets: [
        "Built a real-time monitoring and alert system with Arduino and ESP32, reducing detection delay to under 2 seconds.",
        "Integrated temperature, motion, and gas sensors for 24/7 automated monitoring, achieving 98% uptime on a live prototype."
      ]
    }
  ],

  projects: [
    {
      number: "01",
      visual: "loan",
      title: "Smart Loan Default Prediction System",
      category: "AI / ML · MLOps",
      description:
        "An end-to-end machine learning pipeline for loan risk prediction, covering preprocessing, feature engineering, class-imbalance handling, evaluation, API inference, containerization, and deployment.",
      result: "Production-ready inference architecture",
      stack: ["Python", "XGBoost", "Random Forest", "Flask", "FastAPI", "MLflow", "Docker", "Kubernetes", "Render"],
      bullets: [
        "Built an end-to-end ML pipeline using XGBoost and Random Forest on large-scale loan datasets.",
        "Handled preprocessing, feature engineering, class imbalance, and model evaluation using ROC-AUC.",
        "Developed REST APIs with Flask and FastAPI for real-time loan risk prediction.",
        "Containerized the service with Docker and deployed via Kubernetes on Render."
      ],
      github: "https://github.com/Luckyrangi233"
    },
    {
      number: "02",
      visual: "physio",
      title: "Physiotherapy Case Management & Analysis System",
      category: "Full Stack · Data Visualization",
      description:
        "A case-management platform for treatment tracking and recovery analysis, combining a React frontend with Node.js, Express, and MySQL.",
      result: "40% less manual reporting",
      stack: ["React.js", "Node.js", "Express.js", "MySQL", "JWT", "bcrypt"],
      bullets: [
        "Managed 100+ patient records, treatment sessions, and recovery trends.",
        "Built dashboards for pain, mobility, and strength parameters to support data-driven decisions.",
        "Implemented secure JWT and bcrypt authentication.",
        "Optimized SQL queries for patient retrieval with response times under 200ms."
      ],
      github: "https://github.com/Luckyrangi233"
    },
    {
      number: "03",
      visual: "instructor",
      title: "Instructor Effectiveness Prediction",
      category: "Machine Learning · Analytics",
      description:
        "A machine learning project that predicts instructor effectiveness from learner outcomes, engagement, and feedback data.",
      result: "Instructor-level effectiveness scoring",
      stack: ["Python", "Pandas", "Scikit-Learn", "Random Forest", "EDA"],
      bullets: [
        "Performed EDA to identify patterns in learner outcome, engagement, and feedback data.",
        "Created an Instructor Effectiveness Score by aggregating batch-level information to instructor level.",
        "Trained and evaluated a Random Forest classification model using standard metrics."
      ],
      github: "https://github.com/Luckyrangi233"
    }
  ],

  education: {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Poornima Institute of Engineering and Technology",
    location: "Jaipur, Rajasthan",
    period: "2022 – 2026",
    grade: "CGPA: 7.4 / 10"
  },

  certifications: [
    "SQL for Data Science — Udemy Certification (2024)",
    "G20 Summit Hackathon Participant (2023)",
    "Young Indians Debate Competition — Public Speaking Award (2023)"
  ]
};
