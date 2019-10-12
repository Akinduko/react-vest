import React, { PureComponent } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

// pages
import HomePage from "./views/app-views/HomePage";
import AboutPage from "./views/app-views/AboutPage";
import ContactPage from "./views/app-views/ContactPage";
import PrivacyPage from "./views/app-views/PrivacyPage";
import FaqPage from "./views/app-views/FaqPage";
import { history } from "./utils";
import AOS from "aos";
import 'aos/dist/aos.css';

class App extends PureComponent {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/faq" component={FaqPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
