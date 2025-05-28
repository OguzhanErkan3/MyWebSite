export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[var(--background)] to-[var(--accent)] dark:from-[#333333] dark:to-[#222222]"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              I'm a Computer Engineer and Full Stack Developer with a strong foundation in software and hardware
              development. My expertise spans web development, database management, and game programming.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Throughout my career, I've developed various web applications and mobile game projects as a full-stack
              developer. I've also shared my knowledge by teaching courses on database management, network systems, and
              software development.
            </p>
            <p className="text-lg leading-relaxed">
              I'm passionate about creating innovative solutions and continuously improving my skills. As a
              team-oriented, enthusiastic, and goal-driven developer, I'm eager to take on new projects and challenges.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card p-6 hover:border-[var(--primary)] transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] p-3 rounded-full text-white shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-[var(--primary)]">Education</h3>
                  <p className="text-[var(--muted-foreground)]">Computer Engineering, Pamukkale University</p>
                </div>
              </div>
            </div>

            <div className="card p-6 hover:border-[var(--primary)] transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] p-3 rounded-full text-white shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-[var(--primary)]">Certifications</h3>
                  <p className="text-[var(--muted-foreground)]">
                    IYTE - Software Development and Full Stack Developer Certificate Program
                  </p>
                  <p className="text-[var(--muted-foreground)]">
                    Kariyer Eğitim Merkezi - Mobile Game Development Training
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6 hover:border-[var(--primary)] transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] p-3 rounded-full text-white shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 8l6 6" />
                    <path d="M4 14l6-6 2-3" />
                    <path d="M2 5l7 7" />
                    <path d="M14 13l-2 2" />
                    <path d="M8 21l4-4" />
                    <path d="M17 6l-3 3" />
                    <path d="M17 10l-3-3-3-3" />
                    <path d="M19 8l-6 6" />
                    <path d="M19 12l-6-6-2-2" />
                    <path d="M22 5l-7 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-[var(--primary)]">Languages</h3>
                  <p className="text-[var(--muted-foreground)]">English - C1</p>
                  <p className="text-[var(--muted-foreground)]">German - A2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
