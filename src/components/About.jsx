import Reveal from "./Reveal";
import { PERSONAL, SKILLS } from "../data/content";

export default function About() {
  return (
    <section className="section" id="about">
      <Reveal>
        <div className="divider" />
        <div className="section-label">About</div>
        <h2 className="section-title">A bit about me</h2>
        <p className="about-text">{PERSONAL.about}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="section-label" style={{ marginBottom: "0.75rem" }}>
          Tech I use
        </div>
        <div className="skills-wrap">
          {SKILLS.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
