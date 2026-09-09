// ============================================================
// SINGLE SOURCE OF TRUTH
// Edit this file when you want to update your portfolio.
// Replace public/resume.pdf when you upload a newer CV.
// ============================================================

export const portfolio = {
  name: "Lucky Rangi",
  shortName: "LR",
  role: "AI / ML Engineer · Data Scientist · Data Analyst",
  location: "Sirohi, Rajasthan, India",
  email: "luckyrangi9@gmail.com",
  phone: "+91-7737031870",

  linkedin: "https://linkedin.com/in/lucky-rangi-871623256",
  github: "https://github.com/Luckyrangi233",
  kaggle: "https://www.kaggle.com/luckyrangi56",
  leetcode: "https://leetcode.com/u/luckyop22/",
  resume: "/resume.pdf",

  hero: {
    eyebrow: "B.Tech Computer Science · 2026",
    title: "AI/ML Engineer building intelligent data-driven systems.",
    description:
      "I build practical machine learning and data solutions that turn raw data into insights, predictions, and deployable applications. My work spans Python, SQL, Data Science, Machine Learning, APIs, MLOps, and Generative AI — with a focus on building systems that solve real-world problems.",
    availability:
      "Open to AI/ML Engineer · Data Scientist · Data Analyst opportunities"
  },

  profiles: [
    {
      label: "GitHub",
      href: "https://github.com/Luckyrangi233",
      note: "Projects · Code · MLOps"
    },
    {
      label: "Kaggle",
      href: "https://www.kaggle.com/luckyrangi56",
      note: "Data Science · Notebooks"
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/luckyop22/",
      note: "DSA · Problem Solving"
    }
  ],

  stats: [
    { value: "3", label: "Featured projects" },
    { value: "3", label: "Internship experiences" },
    { value: "15%", label: "Model accuracy improvement" },
    { value: "40%", label: "Manual reporting reduced" }
  ],

  skills: [
    {
      group: "Programming",
      items: ["Python", "SQL", "Java", "HTML", "CSS"]
    },
    {
      group: "Machine Learning",
      items: [
        "Machine Learning",
        "Predictive Modeling",
        "Feature Engineering",
        "EDA",
        "Classification",
        "Regression",
        "Model Evaluation",
        "Scikit-Learn",
        "XGBoost",
        "Random Forest"
      ]
    },
    {
      group: "Data Science & Analytics",
      items: [
        "Pandas",
        "NumPy",
        "Statistics",
        "Matplotlib",
        "Seaborn",
        "Power BI"
      ]
    },
    {
      group: "Deployment & MLOps",
      items: [
        "Flask",
        "FastAPI",
        "Streamlit",
        "Docker",
        "Kubernetes",
        "MLflow",
        "Git",
        "GitHub",
        "Render"
      ]
    },
    {
      group: "Databases",
      items: [
        "MySQL"
      ]
    }
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
      result: "ROC-AUC 0.927 · Production-ready ML architecture",
      stack: [
        "Python",
        "XGBoost",
        "Random Forest",
        "Flask",
        "FastAPI",
        "MLflow",
        "Docker",
        "Kubernetes",
        "Render"
      ],
      bullets: [
        "Built an end-to-end ML pipeline using XGBoost and Random Forest on large-scale loan datasets.",
        "Handled preprocessing, feature engineering, class imbalance, and model evaluation using ROC-AUC.",
        "Developed REST APIs with Flask and FastAPI for real-time loan risk prediction.",
        "Containerized the service with Docker and deployed via Kubernetes on Render."
      ],
      github: "https://github.com/Luckyrangi233/loan-default-predictor",
      demo: ""
    },

    {
      number: "02",
      visual: "instructor",
      title: "Instructor Effectiveness Prediction",
      category: "Machine Learning · Analytics",
      description:
        "A machine learning project that predicts instructor effectiveness from learner outcomes, engagement, and feedback data.",
      result: "Instructor-level effectiveness scoring",
      stack: [
        "Python",
        "Pandas",
        "Scikit-Learn",
        "Random Forest",
        "EDA"
      ],
      bullets: [
        "Performed EDA to identify patterns in learner outcome, engagement, and feedback data.",
        "Created an Instructor Effectiveness Score by aggregating batch-level information to instructor level.",
        "Trained and evaluated a Random Forest classification model using standard metrics."
      ],
      github:
        "https://github.com/Luckyrangi233/Instructor_Effectiveness_Modeling",
      demo: ""
    },

    {
      number: "03",
      visual: "customer",
      title: "Customer Segmentation",
      category: "Machine Learning · Data Analytics",
      description:
        "A Python-based customer segmentation project focused on analyzing customer behavior and grouping customers into meaningful segments for data-driven business decisions.",
      result: "Customer behavior segmentation",
      stack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "EDA",
        "Data Visualization"
      ],
      bullets: [
        "Performed exploratory data analysis to understand customer behavior and purchasing patterns.",
        "Applied machine learning techniques to identify meaningful customer segments.",
        "Used data visualization to analyze and communicate differences between customer groups.",
        "Built the project as a reusable data science workflow for customer analysis."
      ],
      github:
        "https://github.com/Luckyrangi233/customer_segmentation_project",
      demo: ""
    }
  ],

  education: {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Poornima Institute of Engineering and Technology",
    location: "Jaipur, Rajasthan",
    period: "2022 – 2026",
    grade: "CGPA: 7.4 / 10",

    secondary: {
      title: "Secondary — Class 10",
      institution: "Aadarsh Vidha Mandir Senior Secondary School",
      location: "Sirohi, Rajasthan",
      grade: "74.83%"
    }
  },

  certifications: [
    "SQL for Data Science — Udemy Certification (2024)",
    "G20 Summit Hackathon Participant (2023)",
    "Young Indians Debate Competition — Public Speaking Award (2023)"
  ]
};