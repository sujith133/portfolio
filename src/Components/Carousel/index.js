import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const Carousel = props => {
  const {carouselData} = props
  console.log(carouselData.image1)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  }
  return (
    <div>
      <Slider className="row" {...settings}>
        <div className="imageContainer">
          <img className="carouselImages" src={carouselData.image1} alt="1" />
        </div>
        <div className="imageContainer">
          <img className="carouselImages" src={carouselData.image2} alt="2" />
        </div>
        <div className="imageContainer">
          <img className="carouselImages" src={carouselData.image3} alt="3" />
        </div>
      </Slider>
    </div>
  )
}
export default Carousel
