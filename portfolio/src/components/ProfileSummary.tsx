import './ProfileSummary.css'

const summaryPoints = [
  "Senior UI Developer with 8+ years of overall experience, including 5+ years specializing in building complex, scalable, and high-impact UI platforms and dashboards.",
  "Strong expertise in React, JavaScript (ES6+), HTML, and CSS, with a focus on building responsive, pixel-perfect, and maintainable user interfaces.",
  "Proven ability to translate designs and wireframes into high-quality, production-ready code with strong attention to UX and performance.",
  "Experienced in owning critical product modules such as Accounts and Documents, driving feature development, stability, and long-term scalability.",
  "Played a key role in reducing onboarding timelines from 40 days to 3 days by designing efficient UI workflows and improving system integrations.",
  "Hands-on experience with micro-frontend architecture, enabling modular, scalable, and independently deployable UI components.",
  "Strong understanding of React concepts including components, hooks, state management, Redux, Context API, React Router, and React Query.",
  "Built reusable components and custom React hooks to improve development speed and maintainability.",
  "Applied performance optimization techniques such as lazy loading, code splitting, and optimized API consumption.",
  "Proficient in version control using Git/GitHub and collaborative development workflows.",
  "Experienced in cross-functional collaboration with product managers, designers, and backend engineers to deliver end-to-end features.",
  "Strong problem-solving and debugging skills with a focus on quality, performance, and reliability.",
  "Comfortable working in Agile environments, contributing to planning, reviews, and continuous improvement.",
  "Demonstrated ownership mindset with the ability to take features from concept to production.",
  "Quick learner who adapts rapidly to new tools, technologies, and evolving product requirements."
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
