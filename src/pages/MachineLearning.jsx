
import { Link } from "react-router-dom";
import "./PythonLearning.css";

const modules = [
  {
    number: "01",
    title: "Introduction to Machine Learning",
    icon: "🤖",
    description:
      "Understand what machine learning is, how it works, and where it is used in real life.",
    topics: ["AI vs. ML", "Real-world applications", "ML workflow"],
  },
  {
    number: "02",
    title: "Supervised Learning",
    icon: "🎯",
    description:
      "Learn how models use labeled examples to predict outcomes.",
    topics: ["Regression", "Classification", "Training labels"],
  },
  {
    number: "03",
    title: "Unsupervised Learning",
    icon: "🔍",
    description:
      "Discover patterns and groups in data without predefined target labels.",
    topics: ["Clustering", "K-means", "Pattern discovery"],
  },
  {
    number: "04",
    title: "Training and Testing",
    icon: "🧪",
    description:
      "Learn how datasets are divided to train a model and evaluate its performance.",
    topics: ["Train-test split", "Overfitting", "Generalization"],
  },
  {
    number: "05",
    title: "Model Evaluation",
    icon: "📈",
    description:
      "Understand how to measure whether a model makes reliable predictions.",
    topics: ["Accuracy", "Precision and recall", "Confusion matrix"],
  },
  {
    number: "06",
    title: "Your First ML Project",
    icon: "💻",
    description:
      "Bring the concepts together in a small, practical machine learning project.",
    topics: ["Prepare data", "Train a model", "Evaluate results"],
  },
];

function MachineLearning() {
  return (
    <main className="learning-page">
      <section className="learning-hero">
        <div className="learning-container">
          <div className="learning-breadcrumb">
            <a href="/">Home</a>
            <span> / Machine Learning</span>
          </div>

          <span className="learning-label">LEARNING PATH 02</span>

          <h1>
            Discover <span>Machine Learning</span>
          </h1>

          <p>
            Learn how computers identify patterns in data, make predictions,
            and improve their performance through experience. Start with the
            fundamentals and progress toward practical projects.
          </p>

          <div className="learning-meta">
            <span>🎯 Beginner friendly</span>
            <span>📚 6 learning modules</span>
            <span>📊 Practical concepts</span>
          </div>

          <a className="learning-button" href="#ml-modules">
            Explore the modules ↓
          </a>
        </div>
      </section>

      <section className="learning-container learning-intro">
        <span className="learning-label">UNDERSTAND THE BASICS</span>
        <h2>What is Machine Learning?</h2>

        <p>
          Machine learning is a branch of artificial intelligence in which
          computer systems learn patterns from data to make predictions or
          support decisions. Instead of manually writing every rule, we train
          a model using examples.
        </p>

        <div className="learning-callout">
          <strong>A simple example</strong>
          <p>
            Imagine training a model using examples of houses and their prices.
            By learning patterns such as size and location, the model can
            estimate the price of a house it has not seen before. Its
            predictions still need to be evaluated against real data.
          </p>
        </div>
      </section>

      <section
        className="learning-container learning-modules"
        id="ml-modules"
      >
        <div className="learning-section-heading">
          <span className="learning-label">YOUR ROADMAP</span>
          <h2>Explore the learning modules</h2>
          <p>
            Work through these topics in order to understand the foundations
            of machine learning.
          </p>
        </div>

        <div className="learning-grid">
          {modules.map((module) => (
            <article className="learning-card" key={module.number}>
              <div className="learning-card-top">
                <span className="learning-card-icon">{module.icon}</span>
                <span className="learning-card-number">{module.number}</span>
              </div>

              <h3>{module.title}</h3>
              <p>{module.description}</p>

              <ul>
                {module.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>

              <span className="learning-card-footer">
                Learning module <span aria-hidden="true">↗</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-container learning-next">
        <span className="learning-label">KEEP EXPLORING</span>
        <h2>Build on your programming foundations</h2>
        <p>
          Python is a useful starting point for working with data and
          implementing machine learning algorithms.
        </p>

        <Link className="learning-button" to="/python">
          Revisit Python for AI/ML →
        </Link>

        <div>
          <a className="learning-back-link" href="/">
            ← Back to AI/ML Learning Hub
          </a>
        </div>
      </section>
    </main>
  );
}

export default MachineLearning;
