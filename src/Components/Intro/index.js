import Typewriter from 'typewriter-effect'
import './index.css'

const Intro = () => {
  const value = 'const'
  console.log(value)
  return (
    <div className="introContainer" id="introduction">
      <div className="columnContainer">
        <h1>
          Hey<span className="red">,</span> I<span className="red">&#39;</span>m
        </h1>
        <div className="typeWriting">
          <Typewriter
            className="fontSize"
            onInit={typewriter => {
              typewriter
                .typeString(`<span style="color: red;">S</span>ujith `)
                .typeString(`<span style="color: red;">C</span>harles `)
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">W</span>eb <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">F</span>rontend <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">B</span>ackend <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">F</span>ullstack <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">R</span>eact <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString(
                  '<span style="color: red;">P</span>ython <span style="color: red;">D</span>eveloper',
                )
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span style="color: red;">D</span>eveloper')
                .start()
            }}
          />
        </div>
      </div>
      <div className="positioned">
        <img
          className="imgContainer"
          src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Untitled.jpg"
          alt="men"
        />
      </div>
    </div>
  )
}

export default Intro
