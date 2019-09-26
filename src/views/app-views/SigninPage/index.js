import React, { useState } from 'react';
import useReactRouter from 'use-react-router';

// reactstrap components
import { Button, Card, Form, Input, InputGroup, Container, Row, Col } from 'reactstrap';
// core components
import WebsiteNavbar from 'components/Navbars/WebsiteNavbar.js';
import WebsiteFooter from 'components/Footers/WebsiteFooter.js';

const initialState = {
  email: '',
  password: ''
};

function SigninPage() {
  window.location.href="https://app.flinvests.com/login"
  const [state, setState] = useState(initialState);

  const { history } = useReactRouter();
  const changePage = (page, id) => {
    return history.push(`${page}`);
  };

  const handleChange = ({ target: { value, name } }) => {
    setState({ [name]: value });
  };

  return (
    <>
      <main>
        <WebsiteNavbar auth />
        <Container>
          <main className="signin-container">
            <Row>
              <Col xs="12" sm="12" md="12" lg="6">
                <section className="signin-section-a">
                  <h2>You can get your best investements in one place.</h2>
                  <p>You can easily manage and track your investments on FLivest.</p>
                  <img alt="" src={require('assets/images/bg-signin-illustration.png')} />
                </section>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6">
                <section>
                  <Card className="signin-card">
                    <h2>Login to Flinvest</h2>
                    <hr />
                    <Form>
                      <label>Email</label>
                      <InputGroup>
                        <Input type="text" placeholder="" value={state.email} name="email" onChange={handleChange} />
                      </InputGroup>
                      <label>Password</label>
                      <InputGroup>
                        <Input placeholder="Password" type="password" value={state.password} name="password" onChange={handleChange} />
                        <span>Forgot Password?</span>
                      </InputGroup>
                      <Button block className="btn-round" color="danger" type="button">
                        Login
                      </Button>
                      <span className="signin-footer">
                        <p>Don't have an account? </p>
                        <p className="colored" onClick={() => changePage('/signup')}>
                          Sign Up{' '}
                        </p>
                      </span>
                    </Form>
                  </Card>
                </section>
              </Col>
            </Row>
          </main>
        </Container>
        <WebsiteFooter auth />
      </main>
    </>
  );
}

export default SigninPage;
