import NavBar from '../NavBar'
import Intro from '../Intro'
import AboutMe from '../AboutMe'
import Skills from '../Skills'
import Projects from '../Projects'
import ContactMe from '../ContactMe'
import PersonalBlog from '../PersonalBlog'
import './index.css'

const Home = () => {
  const val = 55
  console.log(val)
  return (
    <div className="bgContainer">
      <NavBar />
      <Intro id="introduction" />
      <AboutMe id="aboutMe" />
      <Skills id="skills" />
      <Projects id="project" />
      <PersonalBlog id="blog" />
      <ContactMe id="contact" />
    </div>
  )
}
export default Home
