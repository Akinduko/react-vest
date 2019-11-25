import React from 'react';
import useReactRouter from 'use-react-router';

// nodejs library that concatenates strings
import classnames from 'classnames';
import logo from '../../assets/img/logo.png';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from 'reactstrap';

function WebsiteNavbar({customClassName, auth}) {
  const [navbarCollapse, setNavbarCollapse] = React.useState (false);

  const toggleNavbarCollapse = async () => {
    await setNavbarCollapse (!navbarCollapse);
    await document.documentElement.classList.toggle ('nav-open');
  };

  const {history} = useReactRouter ();

  const changePage = (page, id) => {
    return history.push (`${page}`);
  };

  return (
    <Navbar expand="lg" className={customClassName}>
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            onClick={() => changePage ('/')}
            title="Flinvest"
          >
            <img src={logo} alt="" />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames ('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse,
            })}
            onClick={() => toggleNavbarCollapse ()}
          >
            <span className={classnames ('navbar-toggler-bar bar1')} />
            <span className={classnames ('navbar-toggler-bar bar2')} />
            <span className={classnames ('navbar-toggler-bar bar3')} />
          </button>
        </div>

        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink onClick={() => changePage ('/')}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => changePage ('/about')}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => changePage ('/faq')}>FAQs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://app.flinvests.com/login">
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn-round"
                color="dark"
                href="https://app.flinvests.com/register"
              >
                Sign Up
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default WebsiteNavbar;
