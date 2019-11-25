import React from 'react';
import Slider from 'react-slick';

const SimpleSlider = ({
  components,
  autoplay = false,
  arrows = false,
  dots = true,
  centerMode = false,
  infinite = false,
  slidesToShow = 3,
}) => {
  const settings = {
    centerMode,
    autoplay,
    autoplaySpeed: 4000,
    centerPadding: '0px',
    slidesToShow,
    dots,
    infinite,
    arrows,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows,
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '2px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '5px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  };
  console.log (components);
  return (
    <Slider {...settings}>
      {components.map (each => {
        const {Component} = each;
        return <Component />;
      })}
    </Slider>
  );
};

export default SimpleSlider;
