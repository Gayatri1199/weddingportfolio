import React from "react";

import Slider from "react-slick";
import styled from "styled-components";

const HeroBannerStyle = styled.div`
  max-height: 700px;
  overflow: hidden;

  button.slick-prev {
    left: 0px;
    &::before {
      content: "";
      background-image: url("../images/slider-arrow-prev.svg");
    }
  }

  button.slick-next {
    right: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const HeroBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <HeroBannerStyle>
      <Slider {...settings}>
        <div>
          <img
            src="https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/friends-thumb.png"
            alt="Slider"
          />
        </div>
        <div>
          <img
            src="https://weddingsincrete.gr/wp-content/uploads/2024/09/Elounda-luxury-wedding-WEDDINGS-IN-CRETE-413-2-e1726677312409.jpg"
            alt="Slider"
          />
        </div>{" "}
        <div>
          <img
            src="https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/friends-thumb.png"
            alt="Slider"
          />
        </div>{" "}
        <div>
          <img
            src="https://weddingsincrete.gr/wp-content/uploads/2022/01/Anna-John_Wedding-668.jpg"
            alt="Slider"
          />
        </div>{" "}
        <div>
          <img
            src="https://weddingsincrete.gr/wp-content/uploads/2022/01/valerie-george-aw1-3839-antigrafi.jpg"
            alt="Slider"
          />
        </div>{" "}
        <div>
          <img
            src="https://html.tf.dreamitsolution.net/lavewell/assets/images/home-1/friends-thumb.png"
            alt="Slider"
          />
        </div>
      </Slider>
    </HeroBannerStyle>
  );
};

export default HeroBanner;
