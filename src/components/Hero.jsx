import { useEffect, useState } from "react";

const roles = ["web developer", "java programmer", "cse student"];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && typedText === currentRole) {
      delay = 1200; // pause after finishing a word
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24"
    >
      <p className="font-mono text-sm text-accent mb-6 overflow-hidden">
        <span className="rise-in inline-block" style={{ animationDelay: "0.1s" }}>
          hi, my name is
        </span>
      </p>

      <h1 className="font-display font-bold leading-[0.95] tracking-tight text-[clamp(3rem,12vw,8rem)]">
        <span className="block overflow-hidden">
          <span
            className="rise-in inline-block"
            style={{ animationDelay: "0.2s" }}
          >
            Darshan
          </span>
        </span>
        <span className="block overflow-hidden">
          <span
            className="rise-in inline-block text-muted"
            style={{ animationDelay: "0.35s" }}
          >
            Bhatarkar
          </span>
        </span>
      </h1>

      <p className="font-mono text-lg md:text-xl text-muted mt-8">
        <span className="text-text">{"> "}</span>
        {typedText}
        <span className="blinking-cursor">&nbsp;</span>
      </p>

      <p className="font-body text-muted max-w-md mt-6 leading-relaxed">
        From frontend pixels to backend logic + AI models, I handle it all
      </p>
    </section>
  );
}

export default Hero;
