import useReveal from "../hooks/useReveal";

// Skills grouped by category, matching the original site
// (with Express.js, MongoDB and Tailwind CSS added in from the
// AI Legal Document Analyzer's real stack).
const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Java", "Python", "Node.js", "Express.js", "MongoDB", "SQL"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS"],
  },
];

function Skills() {
  const [ref, isVisible] = useReveal();

  return (
    <section
      id="skills"
      className="px-6 max-w-6xl mx-auto py-28 border-t border-lineLight dark:border-line"
    >
      <div
        ref={ref}
        className={`grid md:grid-cols-[1fr_2fr] gap-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-mono text-sm text-accent">03 — skills</p>

        <div className="max-w-2xl space-y-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-lg text-textLight dark:text-text mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-sm text-mutedLight dark:text-muted border border-lineLight dark:border-line px-3 py-1.5 hover:border-accent hover:text-textLight dark:hover:text-text transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
