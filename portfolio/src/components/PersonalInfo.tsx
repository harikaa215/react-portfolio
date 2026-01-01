import './PersonalInfo.css'

const PersonalInfo = () => {
  return (
    <section className="personal-info">
      <h2 className="section-title">
        <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        Personal Details
      </h2>
      
      <div className="info-grid">
        <div className="info-item">
          <span className="info-label">Full Name</span>
          <span className="info-value">Harika A</span>
        </div>
        <div className="info-item">
          <span className="info-label">Current Role</span>
          <span className="info-value">Software Engineer III</span>
        </div>
        <div className="info-item">
          <span className="info-label">Experience</span>
          <span className="info-value">8+ Years</span>
        </div>
        <div className="info-item">
          <span className="info-label">Current Company</span>
          <span className="info-value">JP Morgan Chase & Co.</span>
        </div>
        <div className="info-item">
          <span className="info-label">Contact</span>
          <span className="info-value">+91 9606653857</span>
        </div>
        <div className="info-item">
          <span className="info-label">Email</span>
          <span className="info-value">msgtoharikaa@gmail.com</span>
        </div>
      </div>
    </section>
  )
}

export default PersonalInfo
