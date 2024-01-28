import {useState} from 'react'
import './index.css'

const AboutMe = () => {
  const value = 'about Me'
  console.log(value)
  const [about, setAbout] = useState(0)

  const changeAbout = m => {
    setAbout(m)
  }
  return (
    <div className="aboutContainer row" id="aboutMe">
      <div className="column columnContaining">
        <img
          src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/IMG_8976.jpg"
          alt="profile"
          className="image"
        />
      </div>
      <div className="column aboutContaining">
        <h1>
          About <span className="red">Me</span>
        </h1>
        <div className="aboutrow widther">
          <p>
            Hello<span className="red">!!!</span> I&#39;m{' '}
            <span className="red">S</span>ujith <span className="red">C</span>
            harles<span className="red">,</span> a passionate and dedicated Full
            Stack Developer with a keen interest in creating innovative and
            efficient solutions<span className="red">.</span> My journey in the
            world of technology has been exciting
            <span className="red">,</span> and I&#39;m continually motivated to
            learn
            <span className="red">,</span> adapt<span className="red">,</span>{' '}
            and contribute to the ever-evolving field of web development
            <span className="red">.</span>
          </p>
          <img
            src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/IMG_8976.jpg"
            alt="profile"
            className="imagemobile"
          />
        </div>

        <div className="aboutbuttonrow height">
          <button
            type="button"
            onClick={() => changeAbout(0)}
            className={about === 0 ? 'active' : 'eeButton'}
          >
            Education
          </button>
          <button
            type="button"
            onClick={() => changeAbout(1)}
            className={about === 1 ? 'active' : 'eeButton'}
          >
            Experience
          </button>
        </div>

        {about === 0 ? (
          <div className="column divider widther">
            <label className="red font" htmlFor="nxtWave">
              2022-present
            </label>
            <h5 id="nxtWave">
              Undergoing through a FullStack training Programm.
            </h5>

            <label className="red font" htmlFor="mtech">
              2019-2021
            </label>
            <h5 id="mtech">
              Post Graduated in Remote Sensing from Andhra University
              Vishakapatnam.
            </h5>
            <label className="red font" htmlFor="btech">
              2015-2019
            </label>
            <h5 id="btech">
              Graduated in Electronic and Communication from Chaitanya
              Engineering College Vishakapatnam.
            </h5>
          </div>
        ) : (
          <div className="column divider widther">
            <label className="red" htmlFor="tcs">
              Oct 2021-Mar 2023
            </label>
            <h4 id="tcs">TCS (System Engineer)</h4>
            <p>
              Specialized in testing algorithms for airbag systems of car
              models, like Volkswagen and Honda. using the Embedded C, Cantata
              and MxV Suit tools.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
export default AboutMe
