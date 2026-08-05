function About() {
  return (
    <section id="about" className="px-6 max-w-6xl mx-auto py-28 border-t border-line">
      <div className="grid md:grid-cols-[1fr_2fr] gap-10">
        <p className="font-mono text-sm text-accent">01 — about</p>

        <div className="max-w-2xl">
          <p className="font-body text-xl md:text-2xl text-text leading-relaxed">
            INTRODUCTION.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-8 font-mono text-sm">
            <div>
              <p className="text-muted mb-2">education</p>
              <p className="text-text">EDUCATION</p>
            </div>
            <div>
              <p className="text-muted mb-2">currently</p>
              <p className="text-text">GOAL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
