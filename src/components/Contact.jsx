import Reveal from "./Reveal";
import { PERSONAL } from "../data/content";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <Reveal>
        <div className="contact-box">
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's connect</h2>
          <p>
            Open to opportunities, collaborations, or just a good conversation
            about tech.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${PERSONAL.email}`} className="btn btn-white">
              Email me
            </a>
            <a
              href={PERSONAL.github}
              className="btn btn-ghost-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={PERSONAL.linkedin}
              className="btn btn-ghost-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
