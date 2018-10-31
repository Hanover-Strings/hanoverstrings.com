import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Row, Col, Container, Nav, NavItem, NavLink, Navbar} from 'reactstrap';
import { Column} from 'simple-flexbox';


import logo from  '../../logo.svg';


class Header extends React.Component {
  render() {
    return(
      <div>
        <Column flexGrow={1}>
          <Row horizontal="center" vertical='center' className='logo'>
            <embed src={logo} alt='logo' style={{ width: "50%", height: "auto", paddingTop: "24px" }} />
          </Row>
          <Row vertical='center' horizontal='center'>
            <Navbar>
              <Nav navbar style={{display:"flex", flexDirection:"row", alignItems:"stretch" }} >
              <Column flexGrow={1} horizontal='center'>
                <NavItem className="navbar">
                  <IndexLinkContainer to="/">
                    <NavLink>Home</NavLink>
                  </IndexLinkContainer>    
                </NavItem>
              </Column>
              <Column flexGrow={1} horizontal='center'>
                <NavItem className="navbar">
                  <LinkContainer to="/about">
                    <NavLink>About</NavLink>
                  </LinkContainer>
                </NavItem>
                </Column>
              <Column flexGrow={1} horizontal='center'>
                <NavItem className="navbar">
                  <LinkContainer to="/lessons">
                    <NavLink>Lessons</NavLink>
                  </LinkContainer>
                </NavItem>
              </Column>
              <Column flexGrow={1} horizontal='center'>
                <NavItem className="navbar">
                  <LinkContainer to="/rentals">
                    <NavLink>Rentals</NavLink>
                  </LinkContainer>
                </NavItem>
              </Column>
              <Column flexGrow={1} horizontal='center'>
                <NavItem className="navbar">
                  <LinkContainer to="/repairs">
                    <NavLink>Repairs</NavLink>
                  </LinkContainer>
                </NavItem>
              </Column>
                <Column flexGrow={1} horizontal='center'>
                <NavItem className="navbar">
                  <LinkContainer to="/contact">
                    <NavLink>Contact</NavLink>
                  </LinkContainer>
                </NavItem>
              </Column>
              </Nav>
            </Navbar>
          </Row>
        </Column>
      </div>
    );
  }
}

export default Header;
