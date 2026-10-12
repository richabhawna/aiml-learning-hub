
import { Link } from "react-router-dom";
import "./PythonLearning.css";

const modules = [
  {
    number: "01",
    title: "Introduction to Generative AI",
    level: "Beginner",
    description:
      "Understand what Generative AI is, how it works, and how it differs from traditional AI and machine learning.",
    topics: [
      "What is Generative AI?",
      "Generative vs. discriminative AI",
      "Types of generative models",
      "Real-world applications",
    ],
    project: "Explore real-world Generative AI applications",
  },
  {
    number: "02",
    title: "Large Language Models (LLMs)",
    level: "Beginner",
    description:
      "Learn how language models understand and generate text, and explore the concepts behind modern AI assistants.",
    topics: [
      "What are LLMs?",
      "Tokens and embeddings",
      "Transformer architecture basics",
      "Model training and inference",
    ],
    project: "Experiment with an LLM-powered chatbot",
  },
  {
    number: "03",
    title: "Prompt Engineering",
    level: "Beginner",
    description:
      "Learn to write clear instructions that help AI models produce more accurate and useful responses.",
    topics: [
      "Writing effective prompts",
      "Zero-shot and few-shot prompting",
      "Role and context prompting",
      "Structured outputs",
    ],
    project: "Build a prompt collection for everyday tasks",
  },
  {
    number: "04",
    title: "Retrieval-Augmented Generation (RAG)",
    level: "Intermediate",
    description:
      "Learn how AI applications retrieve information from documents and use it to answer questions with relevant context.",
    topics: [
      "RAG architecture",
      "Document loading and chunking",
      "Embeddings and vector databases",
      "Retrieval and answer generation",
    ],
    project: "Create a document question-answering assistant",
  },
  {
    number: "05",
    title: "AI Agents and Workflows",
    level: "Intermediate",
    description:
      "Explore how AI agents use tools, follow workflows, and complete multi-step tasks.",
    topics: [
      "What are AI agents?",
      "Tools and function calling",
      "Agent workflows",
      "Introduction to LangChain and LangGraph",
    ],
    project: "Build a simple AI agent that uses a tool",
  },
  {
    number: "06",
    title: "Build a Generative AI Project",
    level: "Intermediate",
    description:
      "Bring your learning together by building a practical application powered by a language model.",
    topics: [
      "Choosing a project idea",
      "Connecting an AI model through an API",
      "Building a simple user interface",
      "Testing and documenting your project",
    ],
    project: "Build and document your own Generative AI application",
  },
];

function GenerativeAI() {
  return (
    <main className="learning-page">
      <section className="learning-hero">
        <div className="learning-container">
          <div className="learning-breadcrumb">
            <a href="/">Home</a>
            <span> / Generative AI</span>
          </div>

          <span className="learning-eyebrow">
            AI/ML LEARNING HUB
          </span>

          <h1>Generative AI Learning Path</h1>

          <p className="learning-hero-description">
            Learn how modern AI systems generate content, work with
            language models, retrieve information, and power intelligent
            applications through practical projects.
          </p>

          <div className="learning-meta">
            <span>6 Learning Modules</span>
            <span>Beginner to Intermediate</span>
            <span>Project-Based Learning</span>
          </div>

          <a className="learning-button" href="#genai-modules">
            Start Learning →
          </a>
        </div>
      </section>

      <section
        className="learning-container learning-content"
        id="genai-modules"
      >
        <div className="learning-section-heading">
          <span className="learning-eyebrow">YOUR ROADMAP</span>
          <h2>Learn Generative AI Step by Step</h2>
          <p>
            Follow the modules in order, practise each concept, and
            gradually build your own AI-powered application.
          </p>
        </div>

        <div className="learning-modules">
          {modules.map((module) => (
            <article className="learning-module" key={module.number}>
              <div className="learning-module-number">
                {module.number}
              </div>

              <div className="learning-module-content">
                <div className="learning-module-top">
                  <h3>{module.title}</h3>
                  <span className="learning-level">
                    {module.level}
                  </span>
                </div>

                <p>{module.description}</p>

                <h4>Topics covered</h4>
                <ul>
                  {module.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>

                <div className="learning-project">
                  <strong>Practice:</strong> {module.project}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-container learning-next">
        <div>
          <span className="learning-eyebrow">KEEP EXPLORING</span>
          <h2>Continue Your AI/ML Journey</h2>
          <p>
            Strengthen your programming and machine learning
            foundations alongside Generative AI.
          </p>
        </div>

        <div className="learning-next-links">
          <Link className="learning-button" to="/python">
            Learn Python →
          </Link>

          <Link className="learning-button" to="/machine-learning">
            Learn Machine Learning →
          </Link>

          <Link className="learning-button" to="/deep-learning">
            Learn Deep Learning →
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

export default GenerativeAI;
