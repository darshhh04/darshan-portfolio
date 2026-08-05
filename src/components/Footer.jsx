function Footer() {
  return (
    <footer className="px-6 max-w-6xl mx-auto py-8 border-t border-lineLight dark:border-line">
      <p className="font-mono text-xs text-mutedLight dark:text-muted">
        © {new Date().getFullYear()} Darshan Bhatarkar.
      </p>
    </footer>
  );
}

export default Footer;
