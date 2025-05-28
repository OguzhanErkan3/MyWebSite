export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--card)] py-8 border-t border-[var(--border)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">Oğuzhan Erkan</h3>
            <p className="text-[var(--muted-foreground)] text-sm">Full Stack Developer & Computer Engineer</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/OguzhanErkan3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/oguzhan-erkan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="mailto:erkan.oguzhan99@gmail.com" aria-label="Email" className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 text-center text-sm text-[var(--muted-foreground)] border-t border-[var(--border)]">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="#home" className="hover:text-[var(--primary)] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[var(--primary)] transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-[var(--primary)] transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-[var(--primary)] transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-[var(--primary)] transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-[var(--primary)] transition-colors">
              Contact
            </a>
          </div>
          <p>© {currentYear} Oğuzhan Erkan. All rights reserved.</p>
          <p className="mt-2 text-xs">Handcrafted by Oğuzhan Erkan</p>
        </div>
      </div>
    </footer>
  )
}
