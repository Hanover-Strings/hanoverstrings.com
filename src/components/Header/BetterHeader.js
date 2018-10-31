import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Row, Col, Container, Nav, NavItem, NavLink, Navbar} from 'reactstrap';

import logo from  '../../logo.svg';


class BetterHeader extends React.Component {
  render() {
    return (
      <div className='text-dark'>
        <Container>
        <Row className='logo'>
            <Col xs='12' sm='12' md='12' lg='12'>
              <embed src={logo} alt='logo' style={{ width: "100%", height: "auto", paddingTop: "24px" }} />
            </Col>
          </Row>
          <Row>
            <Col>
            <Navbar className=''>
              <Nav navbar style={{display:"flex", flexDirection:"row", alignItems:"stretch" }} >
              <Col >
                <NavItem className="navbar">
                  <IndexLinkContainer to="/">
                    <NavLink className='navtab'><h3>Home</h3></NavLink>
                  </IndexLinkContainer>    
                </NavItem>
              </Col>
              <Col >
                <NavItem className="navbar">
                  <LinkContainer to="/about">
                    <NavLink><h3>About</h3></NavLink>
                  </LinkContainer>
                </NavItem>
                </Col>
              <Col >
                <NavItem className="navbar">
                  <LinkContainer to="/lessons">
                    <NavLink><h3>Lessons</h3></NavLink>
                  </LinkContainer>
                </NavItem>
              </Col>
              <Col >
                <NavItem className="navbar">
                  <LinkContainer to="/rentals">
                    <NavLink><h3>Rentals</h3></NavLink>
                  </LinkContainer>
                </NavItem>
              </Col>
              <Col >
                <NavItem className="navbar">
                  <LinkContainer to="/repairs">
                    <NavLink><h3>Repairs</h3></NavLink>
                  </LinkContainer>
                </NavItem>
              </Col>
                <Col >
                <NavItem className="navbar">
                  <LinkContainer to="/contact">
                    <NavLink><h3>Contact</h3></NavLink>
                  </LinkContainer>
                </NavItem>
              </Col>
              </Nav>
            </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BetterHeader