import useReveal from "../hooks/useReveal";

const socials = [
  { label: "GitHub", href: "https://github.com/darshhh04" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/darshan-bhatarkar-320ab3314/" },
  { label: "LeetCode", href: "https://leetcode.com/u/BVB5Kbc8lb/" },
];

function Contact() {
  const [ref, isVisible] = useReveal();

  return (
    <section
      id="contact"
      className="px-6 max-w-6xl mx-auto py-28 border-t border-lineLight dark:border-line"
    >
      <p className="font-mono text-sm text-accent mb-8">04 — contact</p>

      <a
        ref={ref}
        href="https://mail.google.com/mail/?view=cm&fs=1&to=darshanbhatarkar04@gmail.com"
        target="_blank"
        rel="noreferrer"
        className={`block font-display text-[clamp(2rem,8vw,5rem)] leading-none text-textLight dark:text-text hover:text-accent transition-all duration-700 break-all ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        darshanbhatarkar04@gmail.com
      </a>

      <p className="font-body text-mutedLight dark:text-muted mt-6 max-w-md">
        Yes, I am available for work—and yes, I actually reply to emails.
      </p>

      <div className="flex flex-wrap gap-x-10 gap-y-3 mt-12 font-mono text-sm">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="text-mutedLight dark:text-muted hover:text-textLight dark:hover:text-text transition-colors"
          >
            {social.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
