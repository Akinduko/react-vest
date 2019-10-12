import React, { useEffect } from "react";
import useReactRouter from "use-react-router";
import { connect } from "react-redux";

// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import WebsiteNavbar from "components/Navbars/WebsiteNavbar.js";
import SubscriptionCarousel from "components/Carousels/SubscriptionCarousel.js";
import WebsiteFooter from "components/Footers/WebsiteFooter.js";

import TestimonialCarousel from "components/Carousels/TestimonialCarousel.js";
import NewsCarousel from "components/Carousels/NewsCarousel.js";
import { getDeals } from "../../../store/actions/deals";
import homepageIllustration from "assets/images/illustration-homepage-sect2.svg";
import sme from "assets/img/svg-icons/sme.svg";
import investments from "assets/img/svg-icons/investments.svg";
import projectImg from "assets/img/svg-icons/project.svg";
import coinStackedImage from "assets/img/svg-icons/coins-stacked.svg";
import secureImage from "assets/icons/secure.svg";
import fundImage from "assets/icons/fund.svg";
import profitImage from "assets/icons/profits.svg";
import howItWorksImage from "assets/images/how-it-works.png";
import postBackground from "assets/img/post-1.jpg";
import post2Background from "assets/img/post-2.jpg";
import post3Background from "assets/img/post-3.jpg";

function HomePage(props) {
  const { data, loaded } = props.deals;

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
            <Row>
              <Col xs="12" sm="6">
                <h2 className="title">Project Investment</h2>
                <p className="deals-text">
                  These are funds availed by buyers to sellers (SMEs) for
                  expansion. SMEs must demonstrate track record
                </p>
              </Col>
            </Row>

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

        <div className="section features-section">
          <h2>Our Stats</h2>
          <Container>
            <Card className="feature-card text-center">
              <Row>
                <Col xs="12" sm="3" className="feature-item">
                  <img alt="..." src={coinStackedImage} />
                  <p>Stats coming soon</p>
                  {/* <small>to date</small> */}
                </Col>
                <Col xs="12" sm="3" className="feature-item">
                  <img alt="..." src={fundImage} style={{ width: 150 }} />
                  <p>Stats coming soon</p>
                  {/* <small>generated to date</small> */}
                </Col>
                <Col xs="12" sm="3" className="feature-item">
                  <img alt="..." src={secureImage} />
                  <p>Stats coming soon</p>
                  {/* <small>to date</small> */}
                </Col>
                <Col xs="12" sm="3" className="feature-item">
                  <img alt="..." src={profitImage} style={{ width: 150 }} />
                  <p>Stats coming soon</p>
                  {/* <small>generated to date</small> */}
                </Col>
              </Row>
            </Card>
          </Container>
        </div>

        <section className="homepage-how-it-works">
          <div className="homepage-overlay">
            <h1>How Flinvest works</h1>
            <img className="img-fluid mt-5" alt="..." src={howItWorksImage} />
          </div>
        </section>

        <div className="section subscribe text-center">
          <Container>
            <h2>Subscribe to a deal.</h2>
            <SubscriptionCarousel data={data} />
          </Container>
        </div>
        <section className="section testimonial text-center ">
          <Container>
            <h2>What our clients say</h2>
            <TestimonialCarousel />
          </Container>
        </section>
        <div className="section posts">
          <Container>
            <Row className="justify-content-center text-center">
              <Col xs="12" sm="8">
                <h2>Read posts</h2>

                <p className="welcome-note">
                  Flinvest is an online Peer 2 Peer/Consulting platform which
                  connects businesses with investors and renders consulting
                  services online.
                </p>
              </Col>
            </Row>
            <Row className="blog-post-row mt-5">
              <Col xs="12" sm="5">
                <a href="/">
                  <Card
                    className="blog-post post-1"
                    style={{
                      backgroundImage: `url(${postBackground})`
                    }}
                  >
                    <div className="blog-details">
                      <p className="blog-title">
                        Getting Started with Low or Minimum Capital
                      </p>
                      <p className="blog-author">Kenechi Peters</p>
                    </div>
                  </Card>
                </a>
              </Col>
              <Col xs="12" sm="7">
                <Row>
                  <Col xs="12" sm="6">
                    <a href="/">
                      <Card
                        className="blog-post post-2"
                        style={{
                          backgroundImage: `url(${post2Background})`
                        }}
                      >
                        <div className="blog-details">
                          <p className="blog-title">
                            Getting Started with Low or Minimum Capital
                          </p>
                          <p className="blog-author">Kenechi Peters</p>
                        </div>
                      </Card>
                    </a>
                  </Col>
                  <Col xs="12" sm="6">
                    <a href="/">
                      <Card
                        className="blog-post post-2"
                        style={{
                          backgroundImage: `url(${post3Background})`
                        }}
                      >
                        <div className="blog-details">
                          <p className="blog-title">
                            Getting Started with Low or Minimum Capital
                          </p>
                          <p className="blog-author">Kenechi Peters</p>
                        </div>
                      </Card>
                    </a>
                  </Col>
                  <Col
                    xs="12"
                    sm="12"
                    className="d-flex justify-content-center"
                  >
                    <Button
                      className="btn-link"
                      color="warning"
                      href="https://app.flinvests.com/blogs"
                    >
                      <i className="fa fa-plus" /> View more of our blog posts
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            <div />

            <NewsCarousel />
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
