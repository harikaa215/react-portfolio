import './Projects.css'

interface Project {
  name: string
  period: string
  description: string
  technologies: string[]
  responsibilities: string[]
}

const projects: Project[] = [
  {
    name: "TSX Onboarding",
    period: "July 2024 - Present",
    description: "Developed intuitive UI flows and system integrations for US Innovation Economy onboarding, accelerating client activation from 40 days to 3 days.",
    technologies: ["React", "TypeScript", "Context API", "Material UI", "Webpack", "Jest", "npm", "Bitbucket"],
    responsibilities: [
      "Developed and maintained scalable UI components for client onboarding workflows using micro-frontend architecture",
      "Implemented UI-driven process improvements that reduced onboarding timelines from 40 days to 3 days",
      "Worked extensively on accounts and documents management screens, ensuring seamless user experience and data accuracy",
      "Applied frontend performance optimizations including lazy loading, code splitting, and modular design patterns",
      "Integrated REST APIs and collaborated with cross-functional teams to deliver production-ready features",
      "Ensured UI reliability through debugging, performance tuning, and adherence to frontend best practices",
      "Owned and maintained Accounts and Documents management workflows, delivering feature enhancements, performing code reviews, and ensuring accurate and reliable data handling"
    ]
  },
  {
    name: "Instrument Renovation System",
    period: "Oct 2021 - June 2024",
    description: "A robust and user-friendly platform for customizing, accessing, and managing financial instruments and configurations.",
    technologies: ["React", "TypeScript", "Redux", "HTML", "Tailwind CSS", "Git", "Node", "NPM", "Vite", "Jest"],
    responsibilities: [
      "Built user-friendly interfaces for configuring products and managing financial instruments, including create, update, and delete workflows",
      "Integrated and displayed futures and market data from Refinitiv APIs, with responsive UI and data visualizations",
      "Implemented powerful search and filtering capabilities to quickly locate specific instruments",
      "Provided clear user feedback and logging mechanisms to support debugging and improve overall user experience"
    ]
  },
  {
    name: "Meeting Space",
    period: "Sep 2019 - July 2021",
    description: "Simplifies room booking and management. Easily reserve, track, and manage meeting spaces for efficient and organized collaboration.",
    technologies: ["React", "HTML", "CSS", "Bootstrap", "Git", "Node", "NPM", "Webpack"],
    responsibilities: [
      "Developed and maintained the user interface with React, ensuring a user-friendly design",
      "Implemented data validation on the client-side to ensure data accuracy",
      "Provided user-friendly error messages",
      "Implemented state management for real-time updates on room availability and bookings",
      "Ensured a responsive design for a seamless user experience on various devices",
      "Collaborated with cross-functional teams for successful project delivery",
      "Created custom React hooks to enhance code modularity"
    ]
  },
  {
    name: "Hongkong HKT",
    period: "Sep 2016 - Sep 2019",
    description: "A billing mediation platform encompassing data collection, distribution, and various modules like retail billing, interconnect settlement, fraud detection, and revenue assurance.",
    technologies: ["WebdriverIO", "JavaScript", "Jira", "SQL", "Axios"],
    responsibilities: [
      "Conducted manual End-to-End testing and participated in User Acceptance Testing",
      "Contributed to test plan and test case review meetings",
      "Developed automation scripts using WebdriverIO and Node based modules",
      "Maintained code and resources in GitHub for ongoing improvements",
      "Ensured regression testing by enhancing and running scripts",
      "Configured builds on Jenkins for Continuous Integration",
      "Assisted in defect tracking and resolution"
    ]
  }
]

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-title">
        <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
        </svg>
        Projects
      </h2>
      
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-title-row">
                <h3 className="project-name">{project.name}</h3>
                <span className="project-number">0{index + 1}</span>
              </div>
              <span className="project-period">{project.period}</span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <div className="project-responsibilities">
              <h4 className="responsibilities-title">Key Contributions:</h4>
              <ul>
                {project.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
