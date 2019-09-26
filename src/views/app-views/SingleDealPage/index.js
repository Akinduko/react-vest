import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  Progress,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
  Container
} from "reactstrap";

import WebsiteNavbar from "components/Navbars/WebsiteNavbar.js";
import WebsiteFooter from "components/Footers/WebsiteFooter.js";
import reaction from "assets/icons/icon-favourite.svg";
import women from "assets/img/women.png";
import graph from "assets/img/svg-icons/graph.svg";
import poster from "assets/images/single-deal-poster.svg";
import share from "assets/icons/icon-share.svg";
import roi from "assets/icons/icon-roi.svg";
import avatar from "assets/icons/icon-placeholder.svg";
import { singleDeal } from "../../../store/actions/deals";

// core components

const singleData = (each, props) => {
  return (
    <div key={props.deals[each]} className="single--deal">
      <Card className="subscription-card">
        <span className={`card-label ${each.status}`}>{each.title}</span>
        <img className="subscription-card-image" alt="..." src={women} />

        <CardBody>
          <div className="invest-time">
            <img alt="..." src={graph} />
            <span>{`${each.interest}% Returns in ${each.duration} months`}</span>
          </div>
          <div className="author">
            <h6 className="card-category">{each.category}</h6>
          </div>
          <p className="card-description">{each.description}</p>
        </CardBody>
        <CardFooter>
          <div className="d-flex justify-content-end buyers-amount">
            <i className="fa fa-user" />
            <span className="mr-1">{each.count}</span>
            <span>Buyers</span>
          </div>
          <Progress max="100" value="60" barClassName="progress-bar-primary" />
          <div className="d-flex justify-content-between mt-2">
            <div>
              <span className="mr-1 font-weight-bold">N{each.amount}</span>
              <span>raised</span>
            </div>
            <div>
              <span>Total</span>
              <span className="ml-1 font-weight-bold">${each.total}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

function DealsPage(props) {
  const id = window.location.pathname.split("/")[2];
  const {
    deal: { data, loaded },
    deals
  } = props;
  useEffect(() => {
    if (!loaded) props.singleDeal(id);
  });
  return (
    <main>
      <WebsiteNavbar />
      <Container>
        <section>
          <Row>
            <Col xs="12" sm="12" md="7">
              <div className="deal-info-container">
                <img alt="poster" className="deal-info-poster" src={poster} />
                <div className="deal-reaction-container">
                  <span className="deal-reaction">
                    <img alt="poster" src={reaction} />
                    <p>1</p>
                  </span>
                  <span className="deal-reaction">
                    <img alt="poster" src={share} />
                    <p>100</p>
                  </span>
                  <span className="deal-reaction">
                    <img alt="poster" src={roi} />
                    <p>8% R0I</p>
                  </span>
                </div>
                <div className="deal-info">
                  <h2> {data.title}</h2>
                  {data.description}
                </div>
                {/* <div className="card deal-comment">
                  <div className="deal-comment-header">
                    <span className="btn btn--avatar">
                      <img alt="avatar" src={avatar} />
                      <h2>Leave a comment</h2>
                    </span>
                    <hr />
                    <div className="deal-comment-upload">
                      <span className="btn btn--upload">
                        <img alt="avatar" src={avatar} />
                        upload photos
                      </span>
                      <button className="btn btn--post" type="button">
                        Post
                      </button>
                    </div>
                  </div>

                  <div className="deal-comment-body">
                    <div className="comment-header justify-content-between">
                      <div className="d-flex flex-row">
                        <img alt="avatar" src={{ avatar }} />
                        <span>
                          <h5>Gary Maxey</h5>
                          <p>18 days ago</p>
                        </span>
                      </div>

                      <span className="comment-reactions">
                        <img alt="reaction" src={reaction} />
                        <img alt="reaction" src={share} />
                      </span>
                    </div>
                    {/* <div className="comment-body">{props.deal.description}</div> 
                  </div>
                </div>
                */}
                <span className="card other-deals">
                  Other Deals by the Seller
                </span>
                <div className="other-deals-body">
                  {deals.data.map(each => singleData(each, props))}
                </div>
              </div>
            </Col>
            <Col xs="12" sm="12" md="5">
              <div className="deal-add-info">
                <Card className="d-flex flex-column deal-expiry-card">
                  <span>
                    <h2>N500</h2> of N1,200
                  </span>
                  <Progress
                    max="100"
                    value="60"
                    barClassName="progress-bar-primary"
                  />
                  <span className="mr-1">
                    Deal Expiry Date : 28th January 2019
                  </span>
                  <button className="btn" type="button">
                    BUY A DEAL
                  </button>
                  <h5>Share on social media</h5>
                </Card>
                <div className="deal-seller-info">
                  <img alt="avatar" src={avatar} />
                  <span className="seller-info">
                    <h5>Mark Edward</h5>
                    <p>Deal Created on the 17th Dec, 2018</p>
                  </span>
                </div>
                <span className="card recent-buyer-card">Recent Buyers</span>
                <div className="recent-buyer">
                  <div className="buyer-profile">
                    <img alt="poster" src={avatar} />
                    <span className="buyer-info">
                      <h5>Gary Maxey</h5>
                      <p>17th December, 2018</p>
                    </span>
                  </div>

                  <span className="buyer-amount">
                    <h5>$1,000</h5>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <WebsiteFooter />
    </main>
  );
}

const mapDispatchToProps = {
  singleDeal
};

function mapStateToProps(state) {
  return {
    deals: state.deals,
    deal: state.deal
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealsPage);
