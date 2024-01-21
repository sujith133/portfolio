import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'
import './index.css'

const NavBar = () => {
  const [hambug, setHambug] = useState(0)
  const dropDown = () => {
    setHambug(hambug === 1 ? 0 : 1)
  }
  return (
    <div className="navContainer">
      <div className="row">
        <h1 className="logo">
          <img
            src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Sujith%20Charles%20(1).png"
            alt="logo"
            className="logoSizes"
          />
        </h1>
        <button className="hamburger" type="button" onClick={() => dropDown()}>
          {hambug === 0 ? <GiHamburgerMenu /> : <MdOutlineClose />}
          <span className="greyColor">_</span>
        </button>
      </div>

      {hambug === 1 ? (
        <nav id="vertical" className="navOptions columnContainer">
          <a href="#introduction">
            <span className="red anchor">H</span>ome
          </a>
          <a href="#aboutMe">
            <span className="red anchor">A</span>bout
          </a>
          <a href="#skills">
            <span className="red anchor">S</span>kills
          </a>
          <a href="#project">
            <span className="red anchor">P</span>rojects
          </a>
          <a href="#blog">
            <span className="red anchor">P</span>ersonal
          </a>
          <a href="#contact">
            <span className="red anchor">C</span>ontact
          </a>
        </nav>
      ) : (
        <nav id="horizontal" className="navOptions rowContainer">
          <a href="#introduction">
            <span className="red anchor">H</span>ome
          </a>
          <a href="#aboutMe">
            <span className="red anchor">A</span>bout
          </a>
          <a href="#skills">
            <span className="red anchor">S</span>kills
          </a>
          <a href="#project">
            <span className="red anchor">P</span>rojects
          </a>
          <a href="#blog">
            <span className="red anchor">P</span>ersonal
          </a>
          <a href="#contact">
            <span className="red anchor">C</span>ontact
          </a>
        </nav>
      )}
    </div>
  )
}
export default NavBar
