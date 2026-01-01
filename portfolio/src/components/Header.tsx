import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Harika A</h1>
        <div className="header-info-row">
          <p className="title">Software Engineer III</p>
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            <span>JP Morgan Chase & Co.</span>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>8+ Years Experience</span>
          </div>
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>React | TypeScript | Redux</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
