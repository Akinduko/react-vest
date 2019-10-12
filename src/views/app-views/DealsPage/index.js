import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "@opuscapita/react-searchbar";
import useReactRouter from "use-react-router";
// core components
import WebsiteNavbar from "components/Navbars/WebsiteNavbar.js";
import WebsiteFooter from "components/Footers/WebsiteFooter.js";

import {
  Progress,
  CardBody,
  Card,
  CardFooter,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import classnames from "classnames";
import { getDeals } from "../../../store/actions/deals";
import women from "assets/img/women.png";
import graph from "assets/img/svg-icons/graph.svg";
import carret from "assets/icons/icon-caret.svg";
import correct from "assets/icons/icon-correct.svg"

const initialState = {
  searchValue: "",
  activeTab: "1",
  showSelect: false,
  filterType: "Date"
};

function DealsPage(props) {
  window.location.href = "https://app.flinvests.com/deals";

  const { data, loaded } = props.deals;

  useEffect(() => {
    if (!loaded) props.getDeals();
  });

  const [state, setState] = useState(initialState);
  const { history } = useReactRouter();

  const handleChange = event => {
    const {
      target: { value }
    } = event;
    setState({ searchValue: value });
  };

  const toggle = tab => {
    if (state.activeTab !== tab) {
      setState({
        activeTab: tab
      });
    }
  };

  const toggleSelect = () => {
    setState({
      showSelect: !state.showSelect
    });
  };

  const selectFilter = name => {
    if (state.filterType !== name) {
      setState({
        filterType: name
      });
    }
  };

  const viewDeal = id => {
    history.push(`/deal/${id}`);
  };

  const singleData = each => {
    return (
      <div
        key={data[each]}
        className="single--deal"
        onClick={() => viewDeal(each.id)}
      >
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
                <span className="ml-1 font-weight-bold">${each.total}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  };

  return (
    <main>
      <WebsiteNavbar />
      <section className="deals--search-container">
        <div className="deals--search-background">
          <h2>Our Reviewed Deals</h2>
          <div className="deals--search-section">
            <SearchBar
              onSearch={event => handleChange(event)}
              value={state.value}
              translations={{
                searchPlaceHolder:
                  "Type your question here, someone might have asked it already"
              }}
            />
            <div className="deals-search-select">
              <div className="btn btn--select" onClick={() => toggleSelect()}>
                <p>{state.filterType || "Filter by"}</p>
                <img alt="carret" src={carret} />
              </div>
              <div className="card card--select" hidden={!state.showSelect}>
                <span onClick={() => selectFilter("Date")}>
                  <p>Date</p>
                  <img
                    alt="selected"
                    hidden={state.filterType !== "Date"}
                    src={correct}
                  />
                </span>
                <span onClick={() => selectFilter("Duration")}>
                  <p>Duration</p>
                  <img
                    alt="selected"
                    hidden={state.filterType !== "Duration"}
                    src={correct}
                  />
                </span>

                <span onClick={() => selectFilter("Industry")}>
                  <p>Industry</p>
                  <img
                    alt="selected"
                    hidden={state.filterType !== "Industry"}
                    src={correct}
                  />
                </span>

                <span onClick={() => selectFilter("Amount")}>
                  <p>Amount</p>
                  <img
                    alt="selected"
                    hidden={state.filterType !== "Amount"}
                    src={correct}
                  />
                </span>
                <span onClick={() => selectFilter("Type")}>
                  <p>Type</p>
                  <img
                    alt="selected"
                    hidden={state.filterType !== "Type"}
                    src={correct}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="deals--tabs-container">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: state.activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              All Deals
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: state.activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Newest Deals
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: state.activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Most Successful Deals
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: state.activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Highly Funded Deals
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={state.activeTab}>
          <TabPane tabId="1">
            <div className="section subscribe text-center">
              <Container>
                {!data.length > 0 ? (
                  <div className="subscription-carousel deals-carousel">
                    <p>There are currently no deals.</p>
                  </div>
                ) : (
                  <div className="subscription-carousel">
                    {[...data].map(each => singleData(each))}
                  </div>
                )}
              </Container>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="section subscribe text-center">
              <Container>
                {!data.length > 0 ? (
                  <div className="subscription-carousel deals-carousel">
                    <p>There are currently no deals.</p>
                  </div>
                ) : (
                  <div className="subscription-carousel">
                    {[...data].map(each => singleData(each))}
                  </div>
                )}
              </Container>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="section subscribe text-center">
              <Container>
                {!data.length > 0 ? (
                  <div className="subscription-carousel deals-carousel">
                    <p>There are currently no deals.</p>
                  </div>
                ) : (
                  <div className="subscription-carousel">
                    {[...data].map(each => singleData(each))}
                  </div>
                )}
              </Container>
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div className="section subscribe text-center">
              <Container>
                {!data.length > 0 ? (
                  <div className="subscription-carousel deals-carousel">
                    <p>There are currently no deals.</p>
                  </div>
                ) : (
                  <div className="subscription-carousel">
                    {[...data].map(each => singleData(each))}
                  </div>
                )}
              </Container>
            </div>
          </TabPane>
        </TabContent>
      </section>
      <WebsiteFooter />
    </main>
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
)(DealsPage);
