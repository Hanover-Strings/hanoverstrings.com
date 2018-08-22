import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavLink, Container, NavbarBrand, Navbar, Row, Col,  Button } from 'reactstrap';
import { Link } from 'react-router-dom';


import logo from  './logo.png';


class Header extends React.Component {
  render() {
    return(
      <div>
        <Container>
        <Row>
          <Col className='App-header' xs='12'>
            <img src={logo} className='App-logo' alt='logo' />
          </Col>
            <Row>
              <Col className='align-items-center navbar'>
            <Navbar>
              <Nav navbar style={{display:"flex", flexDirection:"row"}}>
                <Col >
                <NavItem>
                  <IndexLinkContainer to="/">
                  <NavLink>Home</NavLink>
                  </IndexLinkContainer>    
                </NavItem>
                </Col>
                <Col>
                <NavItem>
                  <LinkContainer to="/about">
                    <NavLink>About</NavLink>
                  </LinkContainer>
                </NavItem>
                </Col>
                <Col>
                <NavItem>
                  <LinkContainer to="/contact">
                    <NavLink>Contact</NavLink>
                  </LinkContainer>
                </NavItem>
                </Col>
              </Nav>
            </Navbar>
            </Col>
            </Row>
        </Row>
        </Container>

      </div>
    );
  }
}

export default Header;