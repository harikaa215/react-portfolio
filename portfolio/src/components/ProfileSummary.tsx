import './ProfileSummary.css'

const summaryPoints = [
  "Senior Software Engineer with 8+ years of total experience and 5+ years specializing in UI development, designing and building scalable, high-performance web applications and enterprise platforms.",
  "Strong expertise in React, TypeScript, JavaScript (ES6+), HTML5, and CSS3 with a focus on clean architecture and maintainable code.",
  "Deep knowledge of React ecosystem: Hooks, Redux, Context API, React Router, React Query, and micro-frontend architecture for modular, independently deployable components.",
  "Proven track record of delivering impactful solutions—reduced client onboarding timelines from 40 days to 3 days through optimized UI workflows and system integrations.",
  "Took ownership of features end-to-end—from understanding requirements to shipping reliable, maintainable code in production.",
  "Applied software engineering best practices: performance optimization (lazy loading, code splitting), reusable component design, and custom hooks for improved development velocity.",
  "Proficient in modern build tools (Webpack, Vite), testing frameworks (Jest, WebdriverIO), version control (Git, Bitbucket), and CI/CD workflows (Jenkins).",
  "Strong collaborator with cross-functional teams including product managers, designers, and backend engineers to deliver end-to-end solutions in Agile environments.",
  "Quick learner with demonstrated ownership mindset—consistently takes features from concept to production with focus on quality and reliability."
]

const ProfileSummary = () => {
  return (
    <section className="profile-summary">
      <h2 className="section-title">
        <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        Profile Summary
      </h2>
      
      <ul className="summary-list">
        {summaryPoints.map((point, index) => (
          <li key={index} className="summary-point">{point}</li>
        ))}
      </ul>
    </section>
  )
}

export default ProfileSummary
