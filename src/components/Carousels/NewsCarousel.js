import React from "react";

import Slider from "react-slick";
import news1 from "assets/img/post-1.jpg";
import news2 from "assets/img/post-3.jpg";
import news3 from "assets/img/post-2.jpg";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
};

function NewsCarousel() {
  return (
    <div className="news-carousel">
      <div className="text-center">
        <h4>News</h4>
      </div>
      <Slider {...settings} className="slider-content">
        <div>
          <a
            href="/"
            style={{
              backgroundImage: "url(" + news1 + ")"
            }}
            className="news-link"
          >
            <span className="news-filter"></span>
            <span className="news-title">Ten Smart ways to Market...</span>
            <span className="source">printivo.com</span>
          </a>
        </div>
        <div>
          <a
            href="/"
            style={{
              backgroundImage: "url(" + news2 + ")"
            }}
            className="news-link"
          >
            <span className="news-filter"></span>
            <span className="news-title">Women owned Businesses...</span>
            <span className="source">channelnews.com</span>
          </a>
        </div>
        <div>
          <a
            href="/"
            style={{
              backgroundImage: "url(" + news3 + ")"
            }}
            className="news-link"
          >
            <span className="news-filter"></span>
            <span className="news-title">Small Businesses about to...</span>
            <span className="source">channelnews.com</span>
          </a>
        </div>
        <div>
          <a
            href="/"
            style={{
              backgroundImage: "url(" + news1 + ")"
            }}
            className="news-link"
          >
            <span className="news-filter"></span>
            <span className="news-title">Ten Smart ways to Market...</span>
            <span className="source">printivo.com</span>
          </a>
        </div>
        <div>
          <a
            href="/"
            style={{
              backgroundImage: "url(" + news2 + ")"
            }}
            className="news-link"
          >
            <span className="news-filter"></span>
            <span className="news-title">Women owned Businesses...</span>
            <span className="source">channelnews.com</span>
          </a>
        </div>
        <div>
          <a
            href="/"
            style={{
              backgroundImage: "url(" + news3 + ")"
            }}
            className="news-link"
          >
            <span className="news-filter"></span>
            <span className="news-title">Small Businesses about to...</span>
            <span className="source">channelnews.com</span>
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default NewsCarousel;
