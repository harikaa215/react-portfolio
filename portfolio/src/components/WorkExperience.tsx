import './WorkExperience.css'

interface ExperienceItem {
  company: string
  role: string
  period: string
  location?: string
  responsibilities?: string[]
  technologies?: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "JP Morgan Chase & Co.",
    role: "Software Engineer III",
    period: "July 2024 - Present",
    location: "Bangalore"
  },
  {
    company: "IG Infotech India Pvt. Ltd.",
    role: "UI Developer",
    period: "Oct 2021 - June 2024",
    location: "Bangalore"
  },
  {
    company: "Collabera Technologies",
    role: "Software Developer",
    period: "Sep 2019 - July 2021",
    location: "Bangalore"
  },
  {
    company: "Huawei Technologies",
    role: "Automation Engineer",
    period: "Sep 2016 - Sep 2019",
    location: "Bangalore"
  }
]

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h2 className="section-title">
        <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
        Work Experience
      </h2>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-title">
                <h3 className="company-name">{exp.company}</h3>
                <p className="role">{exp.role}</p>
              </div>
              <div className="experience-meta">
                <span className="period">
                  <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {exp.period}
                </span>
                {exp.location && (
                  <span className="location">
                    <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {exp.location}
                  </span>
                )}
              </div>
            </div>
            
            {exp.responsibilities && (
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            )}
            
            {exp.technologies && (
              <div className="tech-stack">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
