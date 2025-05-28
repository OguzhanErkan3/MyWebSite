"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-[var(--accent)] to-[var(--background)] dark:from-[#222222] dark:to-[#333333] py-32 md:py-40"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <div className="mb-6 inline-block relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-[#ff5a51] to-[#ffe11f] blur-md opacity-70 rounded-lg pointer-events-none"></span>
              <h1 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--foreground)] to-[var(--primary)] dark:from-white dark:to-[#ff7a73] p-1">
                Oğuzhan Erkan
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-[var(--primary)] mb-6 relative">
              <span className="before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-16 before:h-1 before:bg-[#ff5a51] md:before:left-0 before:left-1/2 before:-translate-x-1/2 md:before:translate-x-0 pointer-events-none"></span>
              Full Stack Developer & Computer Engineer
            </p>

            <p className="text-lg mb-8 text-[var(--muted-foreground)] max-w-lg mx-auto md:mx-0">
              Creating innovative web solutions and immersive digital experiences with a passion for clean code and
              modern design.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <a href="#contact" className="btn btn-primary relative overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff5a51] to-[#e04940] transition-all duration-300 group-hover:scale-110 pointer-events-none"></span>
                <span className="relative">Get in Touch</span>
              </a>
              <a
                href="/Oguzhan_Erkan_CV.pdf"
                download="Oguzhan_Erkan_CV.pdf"
                className="btn btn-outline relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-[#ff5a51] transition-all duration-300 group-hover:w-full pointer-events-none"></span>
                <span className="relative flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <span className="group-hover:text-white">Download CV</span>
                </span>
              </a>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/OguzhanErkan3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon group relative inline-block"
              >
                <span className="absolute inset-0 bg-[#ff5a51] scale-0 transition-transform duration-300 rounded-full group-hover:scale-100 pointer-events-none"></span>
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
                  className="relative z-10 group-hover:text-white"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/oguzhan-erkan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon group relative inline-block"
              >
                <span className="absolute inset-0 bg-[#ff5a51] scale-0 transition-transform duration-300 rounded-full group-hover:scale-100 pointer-events-none"></span>
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
                  className="relative z-10 group-hover:text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:erkan.oguzhan99@gmail.com"
                aria-label="Email"
                className="social-icon group relative inline-block"
              >
                <span className="absolute inset-0 bg-[#ff5a51] scale-0 transition-transform duration-300 rounded-full group-hover:scale-100 pointer-events-none"></span>
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
                  className="relative z-10 group-hover:text-white"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="photo-frame">
              <div className="photo-container">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20240923-WA0006.jpg-vWlKQ5O7nNEYvLASdprbrieDvOzRJW.jpeg"
                  alt="Oğuzhan Erkan"
                  width={686}
                  height={1094}
                  className="photo"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
