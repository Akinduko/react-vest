import React from "react";

// reactstrap components
import { Progress, CardBody, Card, CardFooter } from "reactstrap";
import Slider from "react-slick";
import women from "assets/img/women.png";
import graphIcon from "assets/img/svg-icons/graph.svg";

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

function SubscriptionCarousel({ data = [] }) {
  const viewDeal = () => {
    return (window.location.href = `https://app.flinvests.com/deals`);
  };

  const singleData = each => {
    return (
      <div key={data[each]}>
        <Card className="subscription-card" onClick={() => viewDeal()}>
          <span className={`card-label ${each.status}`}>{each.title}</span>
          <img className="subscription-card-image" alt="..." src={women} />

          <CardBody>
            <div className="invest-time">
              <img alt="..." src={graphIcon} />
              <span>{`${each.interest}% Returns in ${each.duration} months}`}</span>
            </div>
            <div className="author">
              <h6 className="card-category">{each.category}</h6>
            </div>
            <p className="card-description">{each.description}</p>
          </CardBody>
          <CardFooter>
            <div className="d-flex justify-content-end buyers-amount">
              <i className="fa fa-user"></i>
              <span className="mr-1">{each.payments}</span>
              <span>Buyers</span>
            </div>
            <Progress
              max="100"
              value="60"
              barClassName="progress-bar-primary"
            />
            <div className="d-flex justify-content-between mt-2">
              <div>
                <span className="mr-1 font-weight-bold">N{each.amount}</span>{" "}
                <span>raised</span>
              </div>
              <div>
                <span>Total</span>{" "}
                <span className="ml-1 font-weight-bold">
                  ${each.total_payments}
                </span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  };

  if (data.length > 0) {
    return (
      <div className="subscription-carousel">
        <Slider {...settings} className="mt-5">
          {[...data].map(each => singleData(each))}
        </Slider>

        <div className="d-flex justify-content-end">
          <button
            className="btn-link pr-0 btn-link-homepage"
            onClick={() => {
              return (window.location.href = `https://app.flinvests.com/deals`);
            }}
          >
            View more Deals <i className="fa fa-arrow-right text-warning" />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="subscription-carousel deals-carousel">
      <p>There are currently no deals.</p>
    </div>
  );
}

export default SubscriptionCarousel;
