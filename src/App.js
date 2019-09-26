import React, { PureComponent } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

// pages
import HomePage from './views/app-views/HomePage';
import AboutPage from './views/app-views/AboutPage';
import ContactPage from './views/app-views/ContactPage';
import PrivacyPage from './views/app-views/PrivacyPage';
import FaqPage from './views/app-views/FaqPage';
import DealsPage from './views/app-views/DealsPage';
import SingleDealPage from './views/app-views/SingleDealPage';
import SignupPage from './views/app-views/SignupPage';
import SigninPage from './views/app-views/SigninPage';
import { history } from './utils';

// others
class App extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/index" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/deals" component={DealsPage} />
          <Route path="/deal" component={SingleDealPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/signin" component={SigninPage} />
          <Redirect to="/index" />
        </Switch>
      </Router>
    );
  }
}

export default App;
