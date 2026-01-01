import './Skills.css'

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Redux", "Context API"]
  },
  {
    category: "Styling",
    skills: ["Tailwind CSS", "Material UI", "Bootstrap", "CSS Modules", "Responsive Design"]
  },
  {
    category: "Build Tools",
    skills: ["Webpack", "Vite", "npm", "Node.js"]
  },
  {
    category: "Testing",
    skills: ["Jest", "WebdriverIO", "E2E Testing", "UAT"]
  },
  {
    category: "Version Control & CI/CD",
    skills: ["Git", "Bitbucket", "GitHub", "Jenkins"]
  },
  {
    category: "Other Tools",
    skills: ["Jira", "SQL", "Axios", "REST APIs", "Refinitiv APIs"]
  }
]

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="section-title">
        <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        Technical Skills
      </h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
