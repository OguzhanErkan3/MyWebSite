"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export function Projects() {
  const [activeSlide, setActiveSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: "Minipati Veteriner",
      description:
        "A professional 24/7 veterinary clinic website featuring appointment scheduling, blog, and contact functionalities.",
      desktopImage: "/minipati-desktop.png",
      mobileImage: "/minipati-mobile.png",
      tags: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "HTML5 & CSS3",
        "JavaScript (ES6)",
        "SEO",
        "Responsive Design",
      ],
      demoLink: "https://www.minipativeteriner.com",
      githubLink: "https://github.com/OguzhanErkan3/Minipati-Clinic/tree/deploy-v1",
      responsive: true,
      hasBothVersions: true,
    },
    {
      title: "Mazeball",
      description: "A fun web game developed with Unity where users navigate balls through a maze to reach the exit.",
      image: "/mazeball-game.png",
      tags: ["Unity", "C#", "WebGL"],
      demoLink: "https://drive.google.com/file/d/1MO7cUY3aF4QTWMmuhOcECErViHku3nJ4/view?usp=drive_link",
      githubLink: "https://github.com/OguzhanErkan3/Mazeball",
      responsive: true,
      hasBothVersions: false,
      isLandscape: true,
    },
    {
      title: "Heat Pump Systems",
      description:
        "A comprehensive website for heat pump systems with product catalog, technical specifications, energy efficiency calculator, and customer support features.",
      tags: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
      inDevelopment: true,
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? 1 : prev - 1))
  }

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current
      slider.style.transform = `translateX(-${activeSlide * 100}%)`
    }
  }, [activeSlide])

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[var(--accent)] to-[var(--background)] dark:from-[#222222] dark:to-[#333333]"
    >
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        <p className="text-center text-[var(--muted-foreground)] max-w-2xl mx-auto mb-12">
          Some of my significant projects showcasing my skills and experience
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="card group">
              <div className="p-6">
                {project.responsive ? (
                  project.hasBothVersions ? (
                    <div className="mb-6">
                      <div className="project-slider" style={{ height: "280px" }}>
                        <div className="slider-container" ref={sliderRef}>
                          <div className="slider-item">
                            <div className="desktop-frame" style={{ maxWidth: "100%", height: "240px" }}>
                              <div className="desktop-screen" style={{ height: "200px" }}>
                                <Image
                                  src={project.desktopImage || "/placeholder.svg"}
                                  alt={`${project.title} - Desktop`}
                                  width={800}
                                  height={450}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="desktop-base"></div>
                            </div>
                          </div>
                          <div className="slider-item flex justify-center items-center">
                            <div className="iphone-frame" style={{ maxWidth: "120px", height: "240px" }}>
                              <div className="iphone-notch"></div>
                              <div className="iphone-screen" style={{ height: "220px" }}>
                                <Image
                                  src={project.mobileImage || "/placeholder.svg"}
                                  alt={`${project.title} - Mobile`}
                                  width={375}
                                  height={812}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="iphone-button"></div>
                            </div>
                          </div>
                        </div>

                        <div className="slider-arrow prev" onClick={prevSlide}>
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
                            <polyline points="15 18 9 12 15 6"></polyline>
                          </svg>
                        </div>
                        <div className="slider-arrow next" onClick={nextSlide}>
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
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>

                        <div className="slider-controls">
                          <div
                            className={`slider-dot ${activeSlide === 0 ? "active" : ""}`}
                            onClick={() => setActiveSlide(0)}
                          ></div>
                          <div
                            className={`slider-dot ${activeSlide === 1 ? "active" : ""}`}
                            onClick={() => setActiveSlide(1)}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ) : project.isLandscape ? (
                    <div className="mb-6 flex justify-center" style={{ height: "280px" }}>
                      <div className="iphone-landscape-frame">
                        <div className="iphone-landscape-notch"></div>
                        <div className="iphone-landscape-screen">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={800}
                            height={450}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="iphone-landscape-button"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6 flex justify-center" style={{ height: "280px" }}>
                      <div className="iphone-frame" style={{ maxWidth: "140px", height: "260px" }}>
                        <div className="iphone-notch"></div>
                        <div className="iphone-screen" style={{ height: "240px" }}>
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={375}
                            height={812}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="iphone-button"></div>
                      </div>
                    </div>
                  )
                ) : project.inDevelopment ? (
                  <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-[var(--card)] to-[var(--background)] dark:from-[#222222] dark:to-[#333333] flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="inline-block p-3 rounded-full bg-[var(--primary)]/10 mb-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[var(--primary)]"
                          >
                            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                            <path d="M12 2v2" />
                            <path d="M12 22v-2" />
                            <path d="m17 20.66-1-1.73" />
                            <path d="M11 10.27 7 3.34" />
                            <path d="m20.66 17-1.73-1" />
                            <path d="m3.34 7 1.73 1" />
                            <path d="M14 12h8" />
                            <path d="M2 12h2" />
                            <path d="m20.66 7-1.73 1" />
                            <path d="m3.34 17 1.73-1" />
                            <path d="m17 3.34-1 1.73" />
                            <path d="m7 20.66-1-1.73" />
                          </svg>
                        </div>
                        <h3 className="text-[var(--primary)] font-bold mb-1">Under Development</h3>
                        <p className="text-sm text-[var(--muted-foreground)]">Not yet published</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}

                <h3 className="text-xl font-bold mb-3 text-[var(--primary)] group-hover:text-[var(--primary-light)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted-foreground)] mb-4 group-hover:text-[var(--foreground)] transition-colors">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary text-sm py-2 px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline text-sm py-2 px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
