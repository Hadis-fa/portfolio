import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>Designed & built with care · © {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
