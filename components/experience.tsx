export function Experience() {
  const experiences = [
    {
      title: "Instructor",
      company: "Kara Astsubay MYO",
      period: "2023 - 2024",
      location: "Balıkesir",
      description: [
        "Computer Programming Language: Creating client applications using C# language with Windows Forms library.",
        "Computer Network Systems: Teaching fundamentals of computer networks, types, OSI layer model, network protocols, LAN technology, WLAN technology, network operating systems, network communication, network setup, network management, and network services.",
        "Database Management and Modeling: Providing training on data processing with MySQL, transaction management, DBMS architecture, and query optimization.",
      ],
      skills: ["C#", "Windows Forms", "Network Systems", "MySQL"],
    },
    {
      title: "Intern",
      company: "MTS Bilişim",
      period: "April 2022 - August 2022",
      location: "Denizli",
      description: [
        "Web development with HTML5, CSS, Bootstrap, PHP, JavaScript",
        "Game development with C# using Unity",
      ],
      skills: ["HTML", "CSS", "JavaScript", "PHP", "Unity", "C#"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-[var(--card)]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        <p className="text-center text-[var(--muted-foreground)] max-w-2xl mx-auto mb-12">
          My professional work experience
        </p>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.title} className="mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <h3 className="text-xl font-bold text-[var(--primary-light)]">{experience.title}</h3>
                  <p className="text-[var(--muted-foreground)] mb-2">
                    {experience.company} | {experience.location}
                  </p>
                  <p className="inline-block bg-[var(--primary-dark)] text-white text-sm px-3 py-1 rounded-full">
                    {experience.period}
                  </p>
                </div>

                <div className="md:w-2/3">
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-[var(--muted-foreground)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.skills.map((skill) => (
                      <span key={skill} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {index < experiences.length - 1 && <div className="border-b border-[var(--border)] my-8"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
