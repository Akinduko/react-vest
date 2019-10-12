import React from "react";


// reactstrap components
import { Row, Button, Col, Container } from "reactstrap";

import FlinvestImg from "../../assets/img/logo.png";

function WebsiteFooter({ auth }) {
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
