import React, { useState } from 'react';
import useReactRouter from 'use-react-router';

// core components
import WebsiteNavbar from 'components/Navbars/WebsiteNavbar.js';
import WebsiteFooter from 'components/Footers/WebsiteFooter.js';
import { Button, Card, Form, Input, InputGroup, Container, Row, Col } from 'reactstrap';

const initialState = {
  email: '',
  password: '',
  fullname: '',
  phone: '',
  newsletter: false
};

function SignupPage() {
  window.location.href="https://app.flinvests.com/register"
  const [state, setState] = useState(initialState);
  const { history } = useReactRouter();
  const changePage = (page, id) => {
    return history.push(`${page}`);
  };

  const handleChange = ({ target: { value, name } }) => {
    setState({ [name]: value });
  };

  const handleSubmit = ({ target, name, prevenDefault }) => {
    console.log({ target, name, prevenDefault });
  };
  return (
    <main>
      <WebsiteNavbar auth />
      <Container>
        <main className="signup-container">
          <Row>
            <Col xs="12" sm="12" md="12" lg="6">
              <section className="signup-section-a">
                <h2>We make it seemless and secure to invest and get investments.</h2>
                <p>Every deal is verified by our team of seasoned experts.</p>
                <img alt="" src={require('assets/images/bg-signup-illustration.png')} />
              </section>
            </Col>
            <Col xs="12" sm="12" md="12" lg="6">
              <section>
                <Card className="signup-card">
                  <h2>Join Flinvest</h2>
                  <hr />
                  <Form onSubmit={handleSubmit}>
                    <label>Full Name</label>
                    <InputGroup>
                      <Input type="text" placeholder="" value={state.email} name="fullname" onChange={handleChange} />
                    </InputGroup>
                    <label>Email</label>
                    <InputGroup>
                      <Input type="text" placeholder="" value={state.email} name="email" onChange={handleChange} />
                    </InputGroup>
                    <label>Phone Number</label>
                    <InputGroup>
                      <Input type="text" placeholder="" value={state.phone} name="phone" onChange={handleChange} />
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup>
                      <Input type="password" value={state.password} placeholder="" name="password" onChange={handleChange} />
                    </InputGroup>
                    <span className="input-radio">
                      <Input type="checkbox" checked={state.newsletter} onChange={handleChange} />
                      <a href="/forgot">I would like to receive newsletter from Flinvest</a>
                    </span>
                    <Button block className="btn-round" color="danger" type="submit" onClick={e => e.preventDefault()}>
                      Click to Get Started
                    </Button>
                    <div className="signup-footer-container">
                      <span className="signup-footer">
                        <p>Already have an account?</p>
                        <p className="colored" onClick={() => changePage('/signin')}>
                          Sign in{' '}
                        </p>
                      </span>
                      <hr />
                      <a href="/privacy" className="signin-terms">
                        Terms of Use and Privacy
                      </a>
                    </div>
                  </Form>
                </Card>
              </section>
            </Col>
          </Row>
        </main>
      </Container>
      <WebsiteFooter auth />
    </main>
  );
}

export default SignupPage;
