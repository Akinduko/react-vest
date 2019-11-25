import React from 'react';
import useReactRouter from 'use-react-router';
import {connect} from 'react-redux';

// reactstrap components
import {Card, CardBody, Container, Row, Col} from 'reactstrap';

// core components
import SimpleSlider from 'components/Sliders';
import WebsiteNavbar from 'components/Navbars/WebsiteNavbar.js';
import WebsiteFooter from 'components/Footers/WebsiteFooter.js';

import {getDeals} from '../../../store/actions/deals';
import homepageIllustration
  from 'assets/images/illustration-homepage-sect2.svg';
import sme from 'assets/img/svg-icons/sme.svg';
import investments from 'assets/img/svg-icons/investments.svg';
import projectImg from 'assets/img/svg-icons/project.svg';
import landingBackground from 'assets/images/bg-homepage-header.png';

function HomePage (props) {
  const {history} = useReactRouter ();

  const changePage = page => {
    return history.push (`${page}`);
  };

  const Content = () => {
    return [
      'The grind to get a project up and running is not a walk in the park, but absolutely possible. For a project idea to come full cycle and assume a semblance of existence, the elephant in the room (FUNDING) must be addressed. This is where FLINVEST’s forte comes to play.',
      'Brilliant project ideas whose promoters struggle to find financing now have an alternative in FLINVEST. Our platform allows individuals and business entities with verifiable Project, LPO, and Venture deals in need of financing to raise funds, either in part or in full, to execute their ideas.',
      'FLINVEST has all the ducks in line to make financing projects easy, fast, and reliable. Our processes are firm and seamless, and all deal claims are authenticated before they are featured on our platform.',
      'We invest significantly in the verification of every deal, and with our seasoned team of auditors we gloss over every detail (source, process, payment) of an investable project to ensure that our investors’ capital is safe, insured, and profitable.',
      'For both deal owners and investors, FLINVEST is redefining the venture capital space with innovation, and ensuring a dependable system where vested interested are secured and well-rewarded.',
    ].map ((each, i) => {
      const Component = () => (
        <p key={`slider-${i}`}>
          <q>
            {each}
          </q>
        </p>
      );
      return {
        Component,
      };
    });
  };

  return (
    <main
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <WebsiteNavbar customClassName="homepage--nav" />

      <section
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(' + landingBackground + ')',
          backgroundOrigin: 'padding-box',
          height: '900px',
          backgroundPosition: 'center',
          margin: 0,
        }}
      >
        <div className="homepage--header-container__background">
          <Container>
            <div className="homepage--header-copy">
              <h1>
                The No 1 place for <br />
                highly secured deals.
              </h1>
              <p className="homepage--header-copy__p">
                WE EMPOWER: INDIVIDUALS AND BUSINESSES
              </p>
              <a
                href="https://app.flinvests.com/register"
                className="btn btn__homepage"
              >
                <button>Get started here.</button>
              </a>
            </div>
          </Container>
        </div>
      </section>
      <div className="information-container">
        <div className="information-background">

          <SimpleSlider
            components={Content ()}
            autoplay={true}
            arrows={false}
            dots={false}
            centerMode={true}
            slidesToShow={1}
            infinite={true}
          />
        </div>
      </div>

      <section className="homepage--pattern-container">
        <Container>
          <Row>
            <Col xs="12" md="6">
              <div
                className="homepage--pattern-illustration"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-delay="20"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <img alt="..." src={homepageIllustration} />
              </div>
            </Col>
            <Col xs="12" md="6">
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
                  <button onClick={() => changePage ('/about')}>
                    More about Us.
                  </button>
                  <span className="btn--border--bottom" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="main">
        <div className="section deals">
          <Container>
            <Row>
              <Col xs="12" md="4">
                <Card className="deals-card">
                  <div className="card-image-container">
                    <img alt="..." src={sme} />
                  </div>
                  <CardBody>
                    <div className="author">
                      <h6 className="card-category">
                        Real Estate Investments
                      </h6>
                    </div>
                    <p className="card-description text-center">
                      Our Real Estate deal focuses on projects involving IPOs in Acquisition of Building Materials, Development of Residential Homes and Office Complexes, Renovations of Leaseholds, Acquisition of Landed Properties, and Acquisition/ Leasing of Commercial Stalls or Warehouse.
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
                      Our Fintech deal prioritizes a number of opportunities which includes Fintech Startups Investment, Fintech Corporate Mergers, Fintech Asset Acquisitions, Crowd-funding, etc.
                      {' '}
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
                      <h6 className="card-category">Wholesale Distribution</h6>
                    </div>
                    <p className="card-description text-center">
                      Our Wholesale Distribution deals cuts across several industry which includes FCMG, Medical, Fashion, Electrical/ Electronics, Automobile, Computers, Telecommunications, Oil & Gas, Film Production, Security Soft/Hardware, etc.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <section className="homepage-how-it-works">
        <div className="homepage-overlay">
          <h1>How Flinvest works</h1>
          <img
            className="img-fluid mt-5"
            alt="..."
            src={require ('assets/images/how-it-works.png')}
          />
          {/* <div className="homepage-how-it-works-animated">
            <div className="d-flex  sm-flex-column">
              <img
                className="img-fluid mt-5 swingimage"
                alt="..."
                src={require("assets/icons/signup-icon.svg")}
              />

              <div className="d-flex flex-column justify-content-center arrow--group-top">
                <img
                  className="img-fluid mt-5 invest-icon alternate-image"
                  alt="..."
                  src={require("assets/icons/invest-arrow-icon.svg")}
                />
                <img
                  className="img-fluid mt-5 get-funds-icon alternate-image"
                  alt="..."
                  src={require("assets/icons/get-funds-icon.svg")}
                />
              </div>
            </div>
            <div className="d-flex flex-column middle-flex-column">
              <div className="d-flex flex-row top">
                <img
                  className="img-fluid mt-5 swingimage"
                  alt="..."
                  src={require("assets/icons/deals-icon.svg")}
                />
                <img
                  className="img-fluid mt-5"
                  alt="..."
                  src={require("assets/icons/bridge-icon.svg")}
                />
                <img
                  className="img-fluid mt-5 swingimage"
                  alt="..."
                  src={require("assets/icons/invest-icon.svg")}
                />
              </div>
              <div className="d-flex flex-row bottom">
                <img
                  className="img-fluid mt-5 swingimage"
                  alt="..."
                  src={require("assets/icons/create-deals-icon.svg")}
                />
                <img
                  className="img-fluid mt-5"
                  alt="..."
                  src={require("assets/icons/bridge-icon.svg")}
                />
                <img
                  className="img-fluid mt-5 swingimage"
                  alt="..."
                  src={require("assets/icons/upload-deals-icon.svg")}
                />
              </div>
            </div>
            <div className="d-flex  sm-flex-column">
              <div className="d-flex flex-column justify-content-center arrow--group-bottom">
                <img
                  className="img-fluid mt-5"
                  alt="..."
                  src={require("assets/icons/arrow-icon.svg")}
                />
                <img
                  className="img-fluid mt-5"
                  alt="..."
                  src={require("assets/icons/arrow-up-icon.svg")}
                />
              </div>
              <img
                className="img-fluid mt-5 swingimage"
                alt="..."
                src={require("assets/icons/get-paid-icon.svg")}
              />
            </div>
          </div>
        */}
        </div>
      </section>
      <WebsiteFooter />
    </main>
  );
}

const mapDispatchToProps = {
  getDeals,
};

function mapStateToProps (state) {
  return {
    deals: state.deals,
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (HomePage);
