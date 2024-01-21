import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {RiFolderDownloadLine} from 'react-icons/ri'
import {FaSquareInstagram} from 'react-icons/fa6'

import './index.css'

const ContactMe = () => {
  const val = 3
  const downLoadCv = () => {
    const url =
      'https://drive.google.com/file/d/1iXb5VpTiXUA1s2kjbSo9GNSFfid70AoE/view?usp=drive_link'
    window.open(url, '_blank')
  }
  console.log(val)
  return (
    <div className="contactContainer" id="contact">
      <div className="miContainer minContainer">
        <h1>
          <span className="red">C</span>ontact <span className="red">Me</span>
        </h1>
        <div className="columnCon">
          <p>
            <span className="labelText">Email: </span>sujithcharles007@gmail.com
          </p>
          <p>
            <span className="labelText">Contact No: </span>+91 8500267894
          </p>
          <div className="socialrow">
            <a
              className="socialrow"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/__sujithcharles__/"
            >
              <span className="labelText">|</span>
              <FaFacebook className="icons" />
            </a>

            <a
              className="socialrow"
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/__sujithcharles__/"
            >
              <span className="labelText">|</span>
              <FaSquareInstagram className="icons" />
            </a>
            <a
              className="socialrow"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sujith-charles-943b1317a/"
            >
              <span className="labelText">|</span>
              <FaLinkedin className="icons" />
            </a>
            <a
              className="socialrow"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sujith133"
            >
              <span className="labelText">|</span>
              <FaGithub className="icons" />
              <span className="labelText">|</span>
            </a>
          </div>
          <button
            type="button"
            onClick={() => downLoadCv()}
            className="cvButton"
          >
            Download CV <RiFolderDownloadLine />
          </button>
        </div>
      </div>
      <div className="minContainer">
        <h1>
          <span className="labelText">Thankyou</span> for Visiting
          <span className="labelText">...</span>
        </h1>
        <div className="signContainer">
          <img
            src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/Sujith%20(1).png"
            className="signImg"
            alt="sign"
          />
        </div>
      </div>
    </div>
  )
}
export default ContactMe
