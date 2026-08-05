import { useState } from "react";


const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  //MENU FOR PHONES
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-line bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-accent">
          darshan<span className="text-text">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/darshhh04/darshan-portfolio/blob/main/RESUME-DARSHAN.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-colors"
          >
            Resume
          </a>
        </nav>

       //HAMBURGER
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden font-mono text-sm text-text"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "close" : "hamburger"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col border-t border-line bg-background px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-mono text-sm text-muted hover:text-text transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/darshhh04/darshan-sPortfolio/blob/main/Darshan-Bhatarkar-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-accent"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
