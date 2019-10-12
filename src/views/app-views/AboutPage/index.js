import React from "react";

// core components
import WebsiteNavbar from "components/Navbars/WebsiteNavbar.js";
import WebsiteFooter from "components/Footers/WebsiteFooter.js";
import Slider from "react-slick";

const SimpleSlider = () => {
  const settings = {
    centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 30000,
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="testimonial--container">
      <Slider {...settings}>
        <div className="legend">
          <div
            className="caption"
            style={{
              backgroundImage: `url('https://via.placeholder.com/250')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          >
            <p>Doyin Adegbulugbe</p>
            <p className="role">CEO</p>
          </div>
          <div className="text-overflow">
            <p>
              An alumnus of Harvard Business School (Executive Education
              Programme), Boston, USA (Global Strategic Management).
              <br />
              <br />
              Holds an MBA from Lagos State University, Lagos, Nigeria He has
              two decades of banking experience in and outside Nigeria.
              <br />
              <br />
              Held strategic positions in Ecobank Plc Zenith Bank Plc Guaranty
              Trust Bank Plc Former Executive Director, Business Development and
              Strategy, Skye Bank Gambia (a subsidiary of Polaris bank Nigeria).
              <br />
              <br />
              Former Managing Director/Chief Executive Officer of Skye Bank
              Gambia.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

function AboutPage() {
  return (
    <main
      className="about--main--container"
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <WebsiteNavbar customClassName="about--nav" />
      <section className="about--header-container">
        <div className="about--header-container__background">
          <div className="about--header-copy">
            <h1> Dream, Get Finance and Establish your ideas!</h1>
            <p className="about--header-copy__p">
              <span>WE EMPOWER:</span>
              <span className="colored">INVIDUALS | CORPORATE BODIES</span>
            </p>
            <a href="/contact" className="btn btn__about">
              <button>Contact us</button>
            </a>
          </div>
        </div>
      </section>

      <section className="about--section-container">
        <div className="about--section-content">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <h1>Flinvest Group</h1>
            <p>
              Our core objective is to provide investors with higher returns
              than can be accessed through traditional investment routes whilst
              simultaneously providing financing to experienced commercial
              borrowers within the UK residential property market.
            </p>
            <br />
            <br />
            <p>
              It is important to remember that as with most investments, there
              is a risk that if a borrower does not repay you may lose your
              initial invested capital. This means your capital is at risk and
              interest payments are not guaranteed.
            </p>
          </div>
          <div
            className="right--video"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="20"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            {/* <video height="240" controls>
              <source
                src="https://www.youtube.com/watch?v=neD5tZlDCs4&gl=NG&hl=en-GB"
                type="video/mp4"
              />
            </video> */}
            <iframe
              width="500"
              title="testimonial"
              height="270"
              src="https://www.youtube.com/embed/cPy65Kl7Un8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="about--offers-container pt-0 pb-5">
        <div className="about--offers-content">
          <h2>What Flinvest offers ?</h2>

          <div
            className="offer"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <h1>Reinvent credit and investing</h1>
            <p>
              Our technology is designed to deliver creative finance solutions
              that remove barriers to credit acquisition for deal owners, and
              furthermore expand investment options for dealmakers.
            </p>
          </div>
          <div
            className="offer"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="60"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <h1>Deliver World-Class And Personalized Experience</h1>
            <p>
              We make the process of harmonizing deals and investment a seamless
              and convenient experience for everyone looking to access credit
              and viable investment, with a few clicks.
            </p>
          </div>
          <div
            className="offer"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          >
            <h1>Verified And Safe Investment Opportunities</h1>
            <p>
              Our platform presents a trading floor that levels the playing
              field for deal owners and deal makers, keeping the risk low
              through an efficient verification process, and a growing listing
              of opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="about--leadership-container">
        <div className="about--header-container__background">
          <h1>Leadership</h1>
          <SimpleSlider />
        </div>
      </section>

      <WebsiteFooter />
    </main>
  );
}

export default AboutPage;
