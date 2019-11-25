import React from 'react';

// core components
import SimpleSlider from 'components/Sliders';
import WebsiteNavbar from 'components/Navbars/WebsiteNavbar.js';
import WebsiteFooter from 'components/Footers/WebsiteFooter.js';
import leaderDapo from 'assets/images/leadership-dapo.JPG';

const Leadership = () => {
  return (
    <div className="legend">
      <div
        className="caption"
        style={{
          backgroundImage: 'url(' + leaderDapo + ')',
          backgroundPosition: 'center',
          backgroundSize: 'cover',

          backgroundRepeat: 'no-repeat',
        }}
      >
        <p className="role">Dapo Eniola</p>
        <p className="role">CEO</p>
      </div>
      <div className="text-overflow">
        <p>
          Dapo is an ingenious business developer, a business solutions integrator with over 15
          years of executive management level experience identifying, qualifying, building policies
          for, and selling enabling technologies and enterprise systems that facilitate business
          processes, national development and strategic organization objectives.
          <br />
          <br />
          He combines a powerful blend of technology vision and business acumen in consistent
          pursuit and development of innovative business strategies supported by cost-eﬀective,
          high-performance IT infrastructures and applications.
          <br />
          <br />
          A recipient of several innovative and consulting excellence awards, he possesses great
          analytic skills and expert knowledge of turn-key enterprise solutions in Payment
          Solutions, Fintech Solutions, Multi-Channel Transaction Management, Multi-Channel
          Marketing Solutions, Enterprise Data Warehouse &amp; Data Analytics.
        </p>
      </div>
    </div>
  );
};

function AboutPage () {
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
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
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
          <div className="testimonial--container">
            <SimpleSlider
              components={[{Component: Leadership}]}
              autoplay={false}
              arrows={true}
              dots={true}
              centerMode={true}
            />
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </main>
  );
}

export default AboutPage;
