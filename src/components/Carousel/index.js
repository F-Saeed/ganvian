import Slider from 'react-slick';

// Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ children }) => {
  const settings = {
    arrows: false,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],

    // nextArrow: <CarouselArrow arrow={arrowRight} arrowName='arrowRight' />,
    // prevArrow: <CarouselArrow arrow={arrowLeft} arrowName='arrowLeft' />,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
