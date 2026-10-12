import "./PythonLearning.css";
import { Link } from "react-router-dom";

const topics = [
  {
    number: "01",
    title: "Python Fundamentals",
    description:
      "Understand variables, data types, operators, conditions, loops, and functions.",
    icon: "🐍",
  },
  {
    number: "02",
    title: "Working with Data",
    description:
      "Learn lists, dictionaries, file handling, and basic data manipulation.",
    icon: "🗂️",
  },
  {
    number: "03",
    title: "NumPy",
    description:
      "Work with arrays, mathematical operations, dimensions, and numerical data.",
    icon: "🔢",
  },
  {
    number: "04",
    title: "Pandas",
    description:
      "Explore DataFrames, data cleaning, filtering, and data analysis.",
    icon: "📊",
  },
  {
    number: "05",
    title: "Matplotlib",
    description:
      "Create charts and visualizations to understand patterns in datasets.",
    icon: "📈",
  },
  {
    number: "06",
    title: "Your First AI/ML Dataset",
    description:
      "Bring your Python skills together to inspect and prepare a dataset for machine learning.",
    icon: "🤖",
  },
];

function PythonLearning() {
  return (
    <main className="learning-page">
      <section className="learning-hero">
        <div className="learning-container">
          <div className="learning-breadcrumb">
            <Link to="/">Home</Link>
            <span> / Python for AI/ML</span>
          </div>

          <span className="learning-label">LEARNING PATH 01</span>

          <h1>
            Python for <span>AI & ML</span>
          </h1>

          <p>
            Start with Python and gradually build the programming and data
            skills needed to explore artificial intelligence and machine
            learning.
          </p>

          <div className="learning-meta">
            <span>🐍 Beginner friendly</span>
            <span>📚 6 learning modules</span>
            <span>💻 Practice oriented</span>
          </div>

          <a className="learning-button" href="#python-modules">
            Explore the modules ↓
          </a>
        </div>
      </section>

      <section className="learning-container learning-intro">
        <span className="learning-label">START HERE</span>
        <h2>Why learn Python for AI/ML?</h2>

        <p>
          Python is widely used in AI and machine learning because its syntax
          is approachable and its ecosystem includes powerful libraries for
          data analysis, visualization, and model development.
        </p>

        <div className="learning-callout">
          <strong>Beginner tip</strong>
          <p>
            You do not need to master everything before starting. Learn the
            fundamentals, write small programs, and practise consistently.
          </p>
        </div>
      </section>

      <section
        className="learning-container learning-modules"
        id="python-modules"
      >
        <div className="learning-section-heading">
          <span className="learning-label">YOUR ROADMAP</span>
          <h2>Explore the learning modules</h2>
          <p>
            Follow these topics in order, from programming basics to preparing
            data for machine learning.
          </p>
        </div>

        <div className="learning-grid">
          {topics.map((topic) => (
            <article className="learning-card" key={topic.number}>
              <div className="learning-card-top">
                <span className="learning-card-icon">{topic.icon}</span>
                <span className="learning-card-number">{topic.number}</span>
              </div>

              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <span className="learning-card-footer">
                Learning module <span aria-hidden="true">↗</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-container learning-next">
        <span className="learning-label">KEEP EXPLORING</span>
        <h2>Ready to explore machine learning?</h2>
        <p>
          Once you are comfortable with Python and data handling, move on to
          the fundamentals of machine learning.
        </p>

        <Link className="learning-button" to="/machine-learning">
          Explore Machine Learning →
        </Link>

        <div>
          <Link className="learning-back-link" to="/">
            ← Back to AI/ML Learning Hub
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PythonLearning;
