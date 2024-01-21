import Slider from 'react-slick'
import './index.css'

const PersonalBlog = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <div className="personalBLog" id="blog">
      <h1>
        <span className="red">P</span>ersonal <span className="red">B</span>log
      </h1>
      <p>
        I am a passionate and skilled photographer with a keen eye for capturing
        moments that tell compelling stories. My photography style is
        characterized by a blend of creativity, technical proficiency, and a
        deep appreciation for the beauty found in everyday life.
      </p>

      <div className="photoContainer">
        <Slider {...settings}>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/IMG_6168-min.JPG"
              alt="DSC-0562-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/IMG_6178-min.JPG"
              alt="DSC-2490-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/DSC_2589-min.JPG"
              alt="DSC-2513-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/DSC_2587-min.JPG"
              alt="DSC-2586-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/DSC_2586-min.JPG"
              alt="DSC-2587-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/DSC_2513-min.JPG"
              alt="DSC-2589-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/DSC_2490-min.JPG"
              alt="IMG-6168-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://raw.githubusercontent.com/sujith133/myPortfolio/main/Myportfolio/DSC_0562-min.JPG"
              alt="IMG-6178-min"
              border="0"
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}
export default PersonalBlog
