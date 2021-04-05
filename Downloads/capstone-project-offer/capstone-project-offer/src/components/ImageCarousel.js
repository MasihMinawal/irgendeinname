import styled from 'styled-components/macro'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import fussball from '../material/images/fussball/fussballImage1.png'
import fussball2 from '../material/images/fussball/fussballImage2.png'

export default function ImageCarousel() {
  return (
    <ImageSlider {...sliderSettings}>
      <div>
        <img src={fussball} alt="" width="" height="auto"/>
      </div>
      <div>
        <img src={fussball2} alt="" width="" height="auto"/>
      </div>
    </ImageSlider>
  )
}

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const ImageSlider = styled(Slider)`
  .slick-dots {
    bottom: 10px;
    max-width=100%;
  }
  .slick-dots li button:before {
    color: #fff;
    font-size: 10px;
  }
`
