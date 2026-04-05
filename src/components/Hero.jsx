import { PERSONAL } from "../data/content";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-tag">{PERSONAL.role}</div>
        <h1>
          Hi, I'm <span className="highlight">{PERSONAL.name}</span>
        </h1>
        <p>{PERSONAL.tagline}</p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View my work
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5m7-7l7 7-7 7"
              />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
