
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import SerpGapAnalysis from "./pages/SerpGapAnalysis.jsx";
import PythonLearning from "./pages/PythonLearning.jsx";
import MachineLearning from "./pages/MachineLearning.jsx";
import DeepLearning from "./pages/DeepLearning.jsx";
import GenerativeAI from "./pages/GenerativeAI.jsx";

import "./App.css";

const guides = [
  {
    title: "Python for AI/ML",
    category: "PROGRAMMING",
    description:
      "Build a strong Python foundation and learn the libraries used in AI and machine learning.",
    level: "Beginner",
    link: "/python",
    icon: "🐍",
  },
  {
    title: "Machine Learning",
    category: "CORE AI/ML",
    description:
      "Understand supervised learning, unsupervised learning, model evaluation, and practical ML projects.",
    level: "Beginner",
    link: "/machine-learning",
    icon: "🤖",
  },
  {
    title: "Deep Learning",
    category: "NEURAL NETWORKS",
    description:
      "Explore neural networks, CNNs, transformers, model training, and deep learning projects.",
    level: "Intermediate",
    link: "/deep-learning",
    icon: "🧠",
  },
  {
    title: "Generative AI",
    category: "MODERN AI",
    description:
      "Learn about LLMs, prompt engineering, RAG, AI agents, and AI-powered applications.",
    level: "Beginner to Intermediate",
    link: "/generative-ai",
    icon: "✨",
  },
  {
    title: "SERP Gap Analysis",
    category: "SEO & RESEARCH",
    description:
      "Learn how to identify missing topics and content opportunities by comparing search results.",
    level: "Practical Guide",
    link: "/serp-gap-analysis",
    icon: "🔎",
  },
];

const learningPaths = [
  {
    number: "01",
    title: "Start with Python",
    description:
      "Learn programming fundamentals, data structures, NumPy, and Pandas.",
    link: "/python",
    label: "Explore Python",
  },
  {
    number: "02",
    title: "Understand Machine Learning",
    description:
      "Learn how models find patterns in data and make predictions.",
    link: "/machine-learning",
    label: "Explore ML",
  },
  {
    number: "03",
    title: "Explore Deep Learning",
    description:
      "Move on to neural networks, computer vision, and transformers.",
    link: "/deep-learning",
    label: "Explore Deep Learning",
  },
  {
    number: "04",
    title: "Build with Generative AI",
    description:
      "Explore language models, prompt engineering, RAG, and AI agents.",
    link: "/generative-ai",
    label: "Explore Generative AI",
  },
];

function HomePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredGuides = guides.filter((guide) => {
    const searchableText =
      `${guide.title} ${guide.category} ${guide.description}`.toLowerCase();

    return searchableText.includes(search.toLowerCase());
  });

  const goToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openGuide = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <Link className="brand" to="/">
            <span className="brand-icon">✦</span>
            <span>AI/ML Learning Hub</span>
          </Link>

          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/python">Python</Link>
            <Link to="/machine-learning">Machine Learning</Link>
            <Link to="/deep-learning">Deep Learning</Link>
            <Link to="/generative-ai">Generative AI</Link>

            <button
              className="nav-text-button"
              onClick={() => goToSection("learning-paths")}
            >
              Learning Paths
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">
              ✨ YOUR JOURNEY INTO ARTIFICIAL INTELLIGENCE
            </span>

            <h1>
              Learn AI &amp; Machine Learning,
              <span> One Step at a Time.</span>
            </h1>

            <p>
              Your learning companion for Python, machine learning, deep
              learning, and Generative AI. Understand concepts, follow
              structured learning paths, and build practical projects.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => openGuide("/python")}
              >
                Start Learning <span>→</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => goToSection("guides")}
              >
                Explore Guides
              </button>
            </div>

            <div className="hero-highlights">
              <div>
                <strong>Beginner-friendly</strong>
                <span>Simple explanations</span>
              </div>

              <div>
                <strong>Structured paths</strong>
                <span>Learn step by step</span>
              </div>

              <div>
                <strong>Practical projects</strong>
                <span>Apply what you learn</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="visual-card visual-card-main">
              <span className="visual-label">YOUR AI/ML ROADMAP</span>

              <div className="roadmap-item">
                <span className="roadmap-icon">🐍</span>

                <div>
                  <strong>Python</strong>
                  <small>Your foundation</small>
                </div>

                <span className="roadmap-check">✓</span>
              </div>

              <div className="roadmap-connector"></div>

              <div className="roadmap-item">
                <span className="roadmap-icon">📊</span>

                <div>
                  <strong>Machine Learning</strong>
                  <small>Learn from data</small>
                </div>

                <span className="roadmap-number">02</span>
              </div>

              <div className="roadmap-connector"></div>

              <div className="roadmap-item">
                <span className="roadmap-icon">🧠</span>

                <div>
                  <strong>Deep Learning</strong>
                  <small>Neural networks</small>
                </div>

                <span className="roadmap-number">03</span>
              </div>

              <div className="roadmap-connector"></div>

              <div className="roadmap-item">
                <span className="roadmap-icon">✨</span>

                <div>
                  <strong>Generative AI</strong>
                  <small>Build AI applications</small>
                </div>

                <span className="roadmap-number">04</span>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stat-item">
            <strong>5+</strong>
            <span>Learning Guides</span>
          </div>

          <div className="stat-item">
            <strong>4</strong>
            <span>Learning Paths</span>
          </div>

          <div className="stat-item">
            <strong>Beginner</strong>
            <span>Friendly Content</span>
          </div>

          <div className="stat-item">
            <strong>Hands-on</strong>
            <span>Practical Learning</span>
          </div>
        </section>

        <section className="guides-section" id="guides">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-eyebrow">EXPLORE THE HUB</span>
              <h2>Find Your Next Learning Guide</h2>

              <p>
                Choose a topic and learn at your own pace with clear
                explanations and practical examples.
              </p>
            </div>

            <div className="guide-search">
              <span>⌕</span>

              <input
                type="search"
                placeholder="Search Python, Machine Learning, Generative AI..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <div className="guide-grid">
              {filteredGuides.map((guide) => (
                <button
                  className="guide-card"
                  key={guide.title}
                  onClick={() => openGuide(guide.link)}
                >
                  <div className="guide-card-top">
                    <span className="guide-icon">{guide.icon}</span>
                    <span className="guide-level">{guide.level}</span>
                  </div>

                  <span className="guide-category">{guide.category}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>

                  <span className="guide-card-link">
                    Explore guide <span>→</span>
                  </span>
                </button>
              ))}
            </div>

            {filteredGuides.length === 0 && (
              <p className="no-results">
                No guides found. Try searching for Python, Machine Learning,
                Deep Learning, or Generative AI.
              </p>
            )}
          </div>
        </section>

        <section className="learning-paths-section" id="learning-paths">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-eyebrow">YOUR ROADMAP</span>
              <h2>A Clear Path to Learning AI/ML</h2>

              <p>
                Follow a suggested order if you are starting from scratch.
                You can also explore any topic that interests you.
              </p>
            </div>

            <div className="paths-grid">
              {learningPaths.map((path) => (
                <article className="path-card" key={path.number}>
                  <span className="path-number">{path.number}</span>
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>

                  <button
                    className="path-link"
                    onClick={() => openGuide(path.link)}
                  >
                    {path.label} →
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-content">
            <span className="section-eyebrow">ABOUT THIS HUB</span>
            <h2>Make AI/ML Easier to Understand</h2>

            <p>
              AI/ML Learning Hub brings important concepts together in one
              place. Start with the basics, build your understanding, and
              practise by creating projects of your own.
            </p>

            <button
              className="primary-button"
              onClick={() => openGuide("/generative-ai")}
            >
              Explore Generative AI <span>→</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <Link className="brand footer-brand" to="/">
            <span className="brand-icon">✦</span>
            <span>AI/ML Learning Hub</span>
          </Link>

          <p>
            Learn the fundamentals. Explore new ideas. Build something useful.
          </p>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/python">Python</Link>
            <Link to="/machine-learning">Machine Learning</Link>
            <Link to="/deep-learning">Deep Learning</Link>
            <Link to="/generative-ai">Generative AI</Link>
            <Link to="/serp-gap-analysis">SERP Gap Analysis</Link>
          </div>

          <span className="footer-copyright">
            © {new Date().getFullYear()} AI/ML Learning Hub
          </span>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/python" element={<PythonLearning />} />
      <Route path="/machine-learning" element={<MachineLearning />} />
      <Route path="/deep-learning" element={<DeepLearning />} />
      <Route path="/generative-ai" element={<GenerativeAI />} />
      <Route path="/serp-gap-analysis" element={<SerpGapAnalysis />} />
    </Routes>
  );
}

export default App;
