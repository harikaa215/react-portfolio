import Header from '../components/Header'
import PersonalInfo from '../components/PersonalInfo'
import WorkExperience from '../components/WorkExperience'
import Education from '../components/Education'
import ProfileSummary from '../components/ProfileSummary'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import './Resume.css'

const Resume = () => {
  return (
    <div className="resume-wrapper">
      {/* Page 1 */}
      <div className="resume-container page-1">
        <Header />
        
        <div className="resume-content">
          {/* Left Column - Personal Details, Work Experience, Education */}
          <div className="resume-column left-column">
            <PersonalInfo />
            <div className="section-spacer"></div>
            <WorkExperience />
            <div className="section-spacer"></div>
            <Education />
          </div>
          
          {/* Right Column - Profile Summary, Skills */}
          <div className="resume-column right-column">
            <ProfileSummary />
            <Skills />
          </div>
        </div>
        <Footer />
      </div>

      {/* Page 2 */}
      <div className="resume-container page-2">
        <div className="page-2-header">
          <h2>Projects</h2>
        </div>
        <div className="page-2-content">
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Resume
