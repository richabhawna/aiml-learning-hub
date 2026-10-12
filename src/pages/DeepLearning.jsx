
import { Link } from "react-router-dom";
import "./PythonLearning.css";

const modules = [
  {
    number: "01",
    icon: "🧠",
    title: "Neural Network Fundamentals",
    description:
      "Understand how artificial neural networks learn patterns from data.",
    topics: ["Neurons and layers", "Weights and biases", "Activation functions"],
  },
  {
    number: "02",
    icon: "🖼️",
    title: "Convolutional Neural Networks",
    description:
      "Learn how neural networks identify features in images and visual data.",
    topics: ["Convolution", "Pooling", "Image classification"],
  },
  {
    number: "03",
    icon: "🔄",
    title: "Sequential Models",
    description:
      "Explore models designed to work with sequences and time-dependent data.",
    topics: ["Sequence data", "RNN basics", "LSTM concepts"],
  },
  {
    number: "04",
    icon: "✨",
    title: "Transformers and Attention",
    description:
      "Discover the architecture behind many modern language and AI systems.",
    topics: ["Attention mechanism", "Transformer blocks", "Embeddings"],
  },
  {
    number: "05",
    icon: "⚙️",
    title: "Training Deep Learning Models",
    description:
      "Understand how models learn and how training performance is evaluated.",
    topics: ["Loss functions", "Backpropagation", "Overfitting"],
  },
  {
    number: "06",
    icon: "💻",
    title: "Your First Deep Learning Project",
    description:
      "Apply the fundamentals to a small image classification or prediction task.",
    topics: ["Prepare a dataset", "Train a model", "Evaluate predictions"],
  },
];

function DeepLearning() {
  return (
    <main className="learning-page">
      <section className="learning-hero">
        <div className="learning-container">
          <div className="learning-breadcrumb">
            <a href="/">Home</a>
            <span> / Deep Learning</span>
          </div>

          <span className="learning-label">LEARNING PATH 03</span>

          <h1>
            Explore <span>Deep Learning</span>
          </h1>

          <p>
            Discover how neural networks learn complex patterns, recognize
            images, understand language, and power modern artificial
            intelligence applications.
          </p>

          <div className="learning-meta">
            <span>🧠 Neural networks</span>
            <span>📚 6 learning modules</span>
            <span>💻 Practical learning</span>
          </div>

          <a className="learning-button" href="#deep-modules">
            Explore the modules ↓
          </a>
        </div>
      </section>

      <section className="learning-container learning-intro">
        <span className="learning-label">UNDERSTAND THE BASICS</span>
        <h2>What is Deep Learning?</h2>

        <p>
          Deep learning is a branch of machine learning that uses neural
          networks with multiple layers to learn useful representations from
          data. It is widely used in image recognition, speech processing,
          language models, and generative AI.
        </p>

        <div className="learning-callout">
          <strong>A simple example</strong>
          <p>
            A neural network trained on many cat and dog images can learn
            visual patterns that help it classify a new image. Its accuracy
            depends on the quality of its data, training process, and
            evaluation.
          </p>
        </div>
      </section>

      <section
        className="learning-container learning-modules"
        id="deep-modules"
      >
        <div className="learning-section-heading">
          <span className="learning-label">YOUR ROADMAP</span>
          <h2>Explore the learning modules</h2>
          <p>
            Start with neural network fundamentals and gradually explore
            advanced architectures.
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
        <h2>Build your AI foundations</h2>
        <p>
          Strengthen your programming and machine learning knowledge before
          moving on to advanced neural network projects.
        </p>

        <div className="learning-meta">
          <Link className="learning-button" to="/python">
            Learn Python →
          </Link>
          <Link className="learning-button" to="/machine-learning">
            Learn Machine Learning →
          </Link>
        </div>

        <div>
          <a className="learning-back-link" href="/">
            ← Back to AI/ML Learning Hub
          </a>
        </div>
      </section>
    </main>
  );
}

export default DeepLearning;
