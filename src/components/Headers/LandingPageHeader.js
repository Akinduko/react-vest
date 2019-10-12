import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

import landing from "assets/img/landing.png";
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + landing + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        {/*<div className="filter" />*/}
        <Container>
          <div className="motto">
            <Button className="" color="info" type="button">
              SIGN UP NOW
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
