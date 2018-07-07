import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, NavbarToggler, Collapse, Container, NavbarBrand, Navbar, Row, Col, Button } from 'reactstrap';

import FontAwesome from 'react-fontawesome';

import logo from  './logo.png';

class Navigation extends React.Component {
  render() {
    return(
      <Row className='App-header'>
        <Col xs='12'>
          <img src={logo} className='App-logo' alt='logo' />
        </Col>
      </Row>
    );
  }
}

export default Navigation;