import useReveal from "../hooks/useReveal";

const projects = [
  {
    name: "AI Legal Document Analyzer",
    description:
      "Upload a contract and get clause-by-clause risk analysis streamed back in real time, plus a chat interface to ask questions about the document.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind"],
    github: "[GITHUB LINK]",
    demo: "[LIVE DEMO LINK]",
    featured: true,
  },
  {
    name: "Zentora",
    description: "A tour packages booking website.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "[GITHUB LINK]",
    demo: "https://zentoratravels.netlify.app/",
  },
  {
    name: "Stakez",
    description: "A gambling website clone built to show how the games are rigged.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "[GITHUB LINK]",
    demo: "https://stakez.netlify.app/",
  },
  {
    name: "Collaborative Code Editor",
    description: "In progress — real-time collaborative code editing.",
    tech: ["[TECHNOLOGIES]"],
    github: "[GITHUB LINK]",
    demo: "[LIVE DEMO LINK]",
    comingSoon: true,
  },
];

function Projects() {
  const [headingRef, headingVisible] = useReveal();
  const [listRef, listVisible] = useReveal();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="px-6 max-w-6xl mx-auto py-28 border-t border-lineLight dark:border-line">
      <p className="font-mono text-sm text-accent mb-12">02 — projects</p>

      //MAIN PROJECT FEATURED
      <div
        ref={headingRef}
        className={`grid md:grid-cols-2 gap-10 items-center pb-20 border-b border-lineLight dark:border-line transition-all duration-700 ${
          headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="aspect-video bg-surfaceLight dark:bg-surface border border-lineLight dark:border-line flex items-center justify-center">
          <span className="font-mono text-xs text-mutedLight dark:text-muted">[PROJECT IMAGE]</span>
        </div>

        <div>
          <p className="font-mono text-xs text-mutedLight dark:text-muted mb-3">featured project</p>
          <h3 className="font-display text-3xl md:text-4xl text-textLight dark:text-text mb-4">
            {featured.name}
          </h3>
          <p className="font-body text-mutedLight dark:text-muted leading-relaxed mb-6">
            {featured.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {featured.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs text-accent2 border border-lineLight dark:border-line px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-6 font-mono text-sm">
            <a href={featured.github} target="_blank" rel="noreferrer" className="text-textLight dark:text-text hover:text-accent transition-colors">
              github ↗
            </a>
            <a href={featured.demo} target="_blank" rel="noreferrer" className="text-textLight dark:text-text hover:text-accent transition-colors">
              live demo ↗
            </a>
          </div>
        </div>
      </div>

      //PROJECT LIST
      <div
        ref={listRef}
        className={`mt-4 transition-all duration-700 ${
          listVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {rest.map((project, index) => (
          <a
            key={project.name}
            href={project.comingSoon ? undefined : project.demo}
            target={project.comingSoon ? undefined : "_blank"}
            rel="noreferrer"
            className="group flex items-center gap-6 py-8 border-b border-lineLight dark:border-line"
          >
            <span className="font-mono text-sm text-mutedLight dark:text-muted">
              {String(index + 2).padStart(2, "0")}
            </span>

            <div className="flex-1">
              <h4 className="font-display text-xl md:text-2xl text-textLight dark:text-text group-hover:text-accent transition-colors">
                {project.name}
                {project.comingSoon && (
                  <span className="font-mono text-xs text-mutedLight dark:text-muted ml-3">
                    coming soon
                  </span>
                )}
              </h4>
              <p className="font-body text-sm text-mutedLight dark:text-muted mt-1 max-w-md">
                {project.description}
              </p>
            </div>

            <span className="hidden md:inline font-mono text-xs text-mutedLight dark:text-muted group-hover:text-accent transition-colors">
              {project.tech.join(" / ")}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
