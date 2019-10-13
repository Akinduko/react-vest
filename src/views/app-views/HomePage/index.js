import React, { useEffect } from "react";
import useReactRouter from "use-react-router";
import { connect } from "react-redux";

// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import WebsiteNavbar from "components/Navbars/WebsiteNavbar.js";
import WebsiteFooter from "components/Footers/WebsiteFooter.js";

import { getDeals } from "../../../store/actions/deals";
import homepageIllustration from "assets/images/illustration-homepage-sect2.svg";
import sme from "assets/img/svg-icons/sme.svg";
import investments from "assets/img/svg-icons/investments.svg";
import projectImg from "assets/img/svg-icons/project.svg";
import howItWorksImage from "assets/images/how-it-works.png";

function HomePage(props) {
  const { loaded } = props.deals;

  useEffect(() => {
    if (!loaded) props.getDeals();
  });
  const { innerHeight } = window;
  const { history } = useReactRouter();

  const changePage = page => {
    return history.push(`${page}`);
  };

  return (
    <>
      <WebsiteNavbar customClassName="homepage--nav" />
      <section
        className="homepage--header-container"
        style={{ height: innerHeight * 0.915 }}
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="homepage--header-container__background">
          <div className="homepage--header-copy">
            <h1>
              The No 1 place for <br />
              highly secured deals.
            </h1>
            <p className="homepage--header-copy__p">
              Dream, get finance, and establish your ideas.
            </p>
            <a
              href="https://app.flinvests.com/register"
              className="btn btn__homepage"
            >
              <button>Get started here.</button>
            </a>
          </div>
        </div>
      </section>
      <section className="homepage--pattern-container">
        <div
          className="homepage--pattern-illustration"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <img alt="..." src={homepageIllustration} />
        </div>
        <div
          className="caption"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <h1>Invest, Get Investment And Grow.</h1>
          <p>
            The grind to get a project up and running is not a walk in the park,
            but absolutely possible. For a project idea to come full cycle and
            assume a semblance of existence, the elephant in the room (FUNDING)
            must be addressed. This is where FLINVEST’s forte comes to play.
          </p>
          <a href="/about" className="btn-link">
            <button onClick={() => changePage("/about")}>More about Us.</button>
            <span className="btn--border--bottom" />
          </a>
        </div>
      </section>

      <div className="main">
        <div className="section deals">
          <Container>
            <section className="homepage-how-it-works">
              <div className="homepage-overlay">
                <h1>How Flinvest works</h1>
                <img
                  className="img-fluid mt-5"
                  alt="..."
                  src={howItWorksImage}
                />
              </div>
            </section>

            <Row>
              <Col xs="12" md="4">
                <Card className="deals-card">
                  <div className="card-image-container">
                    <img alt="..." src={sme} />
                  </div>
                  <CardBody>
                    <div className="author">
                      <h6 className="card-category">
                        SME Receivable Investments
                      </h6>
                    </div>
                    <p className="card-description text-center">
                      These are investments availed against invoices for jobs
                      already executed by sellers.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" md="4">
                <Card className="deals-card">
                  <div className="card-image-container">
                    <img alt="..." src={investments} />
                  </div>
                  <CardBody>
                    <div className="author">
                      <h6 className="card-category">Fintech Establishment</h6>
                    </div>
                    <p className="card-description text-center">
                      Your security is a priority. We always keep your payments
                      and personal information safe, and our anti-fraud team
                      protects every transaction.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" md="4">
                <Card className="deals-card">
                  <div className="card-image-container">
                    <img alt="..." src={projectImg} />
                  </div>
                  <CardBody>
                    <div className="author">
                      <h6 className="card-category">Greenfield Investments</h6>
                    </div>
                    <p className="card-description text-center">
                      These are funds invested by buyers in new projects
                      initiated by SMEs. Flinvest shall review proposals within
                      24 hours.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <WebsiteFooter />
    </>
  );
}

const mapDispatchToProps = {
  getDeals
};

function mapStateToProps(state) {
  return {
    deals: state.deals
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
