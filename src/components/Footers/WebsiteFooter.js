import React from "react";

import useReactRouter from "use-react-router";

// reactstrap components
import { Row, Button, Col, Container, Nav, NavLink, NavItem } from "reactstrap";

import FlinvestImg from "../../assets/img/logo.png";

function WebsiteFooter({ auth }) {
  const { history } = useReactRouter();
  const changePage = (page, id) => {
    return history.push(`${page}`);
  };

  return (
    <>
      <div className="get-started-container">
        {auth ? null : (
          <div className="get-started">
            <h3>Get Started Now.</h3>

            <Button
              color="warning"
              onClick={() => {
                return (window.location.href =
                  "https://app.flinvests.com/register");
              }}
            >
              Create an Account
            </Button>
          </div>
        )}
      </div>

      <footer className="footer website-footer">
        <Container>
          <Row className="justify-content-between">
            {/* <Col xs="12" sm="8">
              <Nav className="footer-nav" navbar>
                <Row>
                  <Col xs="6" sm="4">
                    <h3>Solutions</h3>
                    <NavItem>
                      <NavLink onClick={() => changePage("/about")}>
                        Overview
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => changePage("/")}>
                        Resource Center
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => changePage("/")}>Reviews</NavLink>
                    </NavItem>
                  </Col>
                  <Col xs="6" sm="4">
                    <h3>PARTNERSHIP</h3>
                    <NavItem>
                      <NavLink onClick={() => changePage("/")}>
                        How Funding works
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => changePage("/")}>
                        Return on ROIs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => changePage("/")}>
                        Why use Flinvest ?
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => changePage("/")}>
                        Partnerships
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col xs="6" sm="4">
                    <h3>About Us</h3>
                    <NavItem>
                      <NavLink onClick={() => changePage("/about")}>
                        Company
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => changePage("/")}>Careers</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => changePage("/about")}>
                        Testimonial
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={() => changePage("/about")}>
                        What we offer?
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col xs="6" sm="4">
                    <NavItem>
                      <NavLink
                        className="colored-link"
                        onClick={() => changePage("/")}
                      >
                        Open and Fund a Deal
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col xs="6" sm="4">
                    <NavItem>
                      <NavLink
                        className="bold-link"
                        onClick={() => changePage("/")}
                      >
                        BLOGS
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col xs="6" sm="4">
                    <NavItem>
                      <NavLink
                        className="bold-link"
                        onClick={() => changePage("/")}
                      >
                        BUSINESS FUNDS
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="bold-link"
                        onClick={() => changePage("/")}
                      >
                        INSURANCE POLICY
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col xs="6" sm="4"></Col>
                  <Col xs="6" sm="4">
                    <NavItem>
                      <NavLink
                        className="bold-link"
                        onClick={() => changePage("/")}
                      >
                        PARTNERS
                      </NavLink>
                    </NavItem>
                  </Col>
                </Row>
              </Nav>
            </Col>
            <Col
              xs="12"
              sm="4"
              className="d-flex flex-row justify-content-center"
            >
              <div className="footer-address mt-sm-0">
                <img src={FlinvestImg} className="footer-logo" alt="" />
                <p>
                  #1B Emma Abimbola Cole, <br />
                  Lekki Phase One, Lagos
                </p>

                <span className="copyright">
                  <Button className="social-button fb btn-round">
                    <i className="fa fa-facebook" />
                  </Button>

                  <Button className="social-button twitter btn-round">
                    <i className="fa fa-twitter" />
                  </Button>

                  <Button className="social-button linkedin btn-round">
                    <i className="fa fa-linkedin" />
                  </Button>
                </span>
                <p>Copyright © 2019 Flinvest</p>
              </div>
            </Col> */}
            <Col
              xs="12"
              sm="3"
              className="d-flex flex-row justify-content-center"
            >
              <div className="footer-address mt-sm-0">
                <img src={FlinvestImg} className="footer-logo" alt="" />
              </div>
            </Col>
            <Col
              xs="12"
              sm="3"
              className="d-flex flex-row justify-content-center"
            >
              <div className="footer-address mt-sm-0 custom-footer-address">
                <h3>Contact</h3>
                <a className="custom-colored" href="mailto:info@Flinvest.com">
                  info@Flinvest.com
                </a>
                <p>
                  #1B Emma Abimbola Cole, <br />
                  Lekki Phase One, Lagos
                </p>
                
              </div>
            </Col>
            <Col
              xs="12"
              sm="3"
              className="d-flex flex-row justify-content-center"
            >
              <div className="footer-address mt-sm-0">
                <h3>Socials</h3>
                <span className="copyright">
                  <Button className="social-button fb btn-round">
                    <i className="fa fa-facebook" />
                  </Button>

                  <Button className="social-button twitter btn-round">
                    <i className="fa fa-twitter" />
                  </Button>

                  <Button className="social-button linkedin btn-round">
                    <i className="fa fa-linkedin" />
                  </Button>
                </span>
                <p>Copyright © 2019 Flinvest</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default WebsiteFooter;
