export const PERSONAL = {
  name: "Hadis Farrokhi",
  role: "Software Engineering Student",
  tagline: "Software engineering student at the University of Waterloo, pursuing a specialization in AI.",
  about: "I'm a software engineering student at the University of Waterloo, pursuing a specialization in AI. I have a strong interest in AI, machine learning, and software development, and I love using new technologies to build meaningful things and contribute to the future of tech. I'm eager to gain new experiences, keep learning, and grow into a stronger engineer along the way.",
  email: "ha.farokhi85@gmail.com",
  github: "https://github.com/Hadis-fa",
  linkedin: "https://linkedin.com/in/hadis-f",
};

export const SKILLS = [
  "Python",
  "JavaScript",
  "TypeScript",
  "C++",
  "C",
  "SQL",
  "MySQL",
  "React",
  "Node.js",
  "Flask",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "NLTK",
  "Hugging Face",
  "LLMs",
  "Prompt Engineering",
  "REST APIs",
  "AWS",
  "Git",
];

export const PROJECTS = [
  {
    title: "Crypto Developer Health Score (CDHS)",
    description:
      "A full-stack platform that scores 10 major crypto projects based on the health of their GitHub developer activity, not price. Built with FastAPI and React, it pulls data from GitHub and CoinGecko APIs, runs percentile-based scoring across 5 dimensions, and uses Pearson correlation to test whether developer activity actually predicts token price. The results challenged my hypothesis. Turns out more dev activity doesn't mean higher prices.",
    tags: ["Python", "FastAPI", "React", "NumPy", "SciPy"],
    link: "https://github.com/Hadis-fa/github-quant-factor",
  },
  {
    title: "Destination Climate",
    description:
      "A Flask web app that flips the usual travel search on its head: instead of picking a place and checking the weather, you pick the weather and it finds the place. Users enter a target temperature and the app queries a third-party climate API to return cities that actually match, with a responsive Bootstrap frontend so it works on phones too. Building it taught me more about defensive API design than anything else most of the work ended up being exception handling and rollback logic so a flaky upstream response wouldn't take the whole app down.",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "#",
  },
];
