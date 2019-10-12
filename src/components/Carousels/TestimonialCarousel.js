/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Col, Card } from "reactstrap";

import Slider from "react-slick";
import user from "assets/img/user.png";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true
};

function TestimonialCarousel() {
  return (
    <div className="testimonial-carousel">
      <Card className="testimonial-card mt-5">
        <Slider {...settings} className="slider-content">
          <div>
            <Row className="justify-content-center">
              <Col xs="12" sm="7" className="align-items-center">
                <p className="testimonial-message">
                  Flinvest is an online Peer 2 Peer/Consulting platform which
                  connects businesses with investors and renders consulting
                  services online.
                </p>

                <img
                  className="testimonial-profile-img m-auto"
                  alt="..."
                  src={user}
                />

                <p className="testimonial-profile-name">Mmadu Kelechi</p>
                <p className="testimonial-profile-title">CEO, Flakes Inc.</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="justify-content-center">
              <Col xs="12" sm="7" className="align-items-center">
                <p className="testimonial-message">
                  Flinvest is an online Peer 2 Peer/Consulting platform which
                  connects businesses with investors and renders consulting
                  services online.
                </p>

                <img
                  className="testimonial-profile-img m-auto"
                  alt="..."
                  src={user}
                />

                <p className="testimonial-profile-name">Mmadu Kelechi</p>
                <p className="testimonial-profile-title">CEO, Flakes Inc.</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="justify-content-center">
              <Col xs="12" sm="7" className="align-items-center">
                <p className="testimonial-message">
                  Flinvest is an online Peer 2 Peer/Consulting platform which
                  connects businesses with investors and renders consulting
                  services online.
                </p>

                <img
                  className="testimonial-profile-img m-auto"
                  alt="..."
                  src={user}
                />

                <p className="testimonial-profile-name">Mmadu Kelechi</p>
                <p className="testimonial-profile-title">CEO, Flakes Inc.</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="justify-content-center">
              <Col xs="12" sm="7" className="align-items-center">
                <p className="testimonial-message">
                  Flinvest is an online Peer 2 Peer/Consulting platform which
                  connects businesses with investors and renders consulting
                  services online.
                </p>

                <img
                  className="testimonial-profile-img m-auto"
                  alt="..."
                  src={user}
                />

                <p className="testimonial-profile-name">Mmadu Kelechi</p>
                <p className="testimonial-profile-title">CEO, Flakes Inc.</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="justify-content-center">
              <Col xs="12" sm="7" className="align-items-center">
                <p className="testimonial-message">
                  Flinvest is an online Peer 2 Peer/Consulting platform which
                  connects businesses with investors and renders consulting
                  services online.
                </p>

                <img
                  className="testimonial-profile-img m-auto"
                  alt="..."
                  src={user}
                />

                <p className="testimonial-profile-name">Mmadu Kelechi</p>
                <p className="testimonial-profile-title">CEO, Flakes Inc.</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="justify-content-center">
              <Col xs="12" sm="7" className="align-items-center">
                <p className="testimonial-message">
                  Flinvest is an online Peer 2 Peer/Consulting platform which
                  connects businesses with investors and renders consulting
                  services online.
                </p>

                <img
                  className="testimonial-profile-img m-auto"
                  alt="..."
                  src={user}
                />

                <p className="testimonial-profile-name">Mmadu Kelechi</p>
                <p className="testimonial-profile-title">CEO, Flakes Inc.</p>
              </Col>
            </Row>
          </div>
        </Slider>
      </Card>
    </div>
  );
}

export default TestimonialCarousel;
