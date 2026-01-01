import './Education.css'

interface EducationItem {
  degree: string
  institution: string
  period?: string
  location?: string
  details?: string[]
  gpa?: string
}

const education: EducationItem[] = [
  {
    degree: "B. Tech",
    institution: "Sreenivasa Institute of Technology and Management Studies, Chittoor",
    period: "2016",
    details: [
      "Affiliated to JNTU, Anantapur",
      "Electronics and Communication Engineering"
    ]
  }
]

const Education = () => {
  return (
    <section className="education">
      <h2 className="section-title">
        <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
        Education
      </h2>
      
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <div className="degree-info">
                <h3 className="degree">{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
              </div>
              <div className="education-meta">
                {edu.period && <span className="period">{edu.period}</span>}
                {edu.gpa && <span className="gpa">{edu.gpa}</span>}
              </div>
            </div>
            
            {edu.details && (
              <ul className="education-details">
                {edu.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
