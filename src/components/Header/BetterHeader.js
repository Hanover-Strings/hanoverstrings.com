import React from 'react';
import { LinkContainer, IndexLinkContainer, Link } from 'react-router-bootstrap';
import { Row, Col, Container, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Collapse} from 'reactstrap';
import $ from 'jquery';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import ResponsiveMenu from 'react-responsive-navbar';

import logo from  '../../logo.svg';

library.add(faBars)

class BetterHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this)

    this.state = {
      collapsed: true,
      dropdownOpen: false,
      isMobileMenuOpen: false,
      width: 0
    };
  }

  

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggle() {
    this.state.dropdownOpen ? $("#navbar-id").css("border-bottom", "1px solid white") : $("#navbar-id").css("border-bottom", "1px solid black");

    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleMobileMenu() {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen
    });
  }


  updateDimensions() {
    this.setState({ width: $(window).width() });
  } 

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }


  renderLogo() {
    return(
      <Container>
        <Row className='logo'>
          <Col xs='12' sm='12' md='12' lg='12'>
            <embed src={logo} alt='logo' style={{ width: "100%", height: "auto", paddingTop: "24px" }} />
          </Col>
        </Row>
      </Container>
    )
  }

  /* renderNav() {
    return(
    <ResponsiveMenu
    menuOpenButton={<div>
      <FontAwesomeIcon icon="bars" />
    </div>}
    menuCloseButton={<div>
      <FontAwesomeIcon icon="bars" />
    </div>}
    changeMenuOn="500px"
    largeMenuClassName="large-menu-classname"
    smallMenuClassName="small-menu-classname"
    menu={
      <div className='text-dark'>
        <Container>
        <Row>
          <Navbar className=''>
            <Nav navbar style={{flexDirection: 'row', alignItems: 'stretch'}} >
            <Col xs='6' sm='6' md='2' lg='2'>
              <NavItem className="navbar">
                <IndexLinkContainer to="/">
                  <NavLink className='navtab'><h3>Home</h3></NavLink>
                </IndexLinkContainer>   
              </NavItem>
            </Col>
            <Col xs='6' sm='6' md='2' lg='2'>
              <NavItem className="navbar">
                <LinkContainer to="/about">
                  <NavLink><h3>About</h3></NavLink>
                </LinkContainer>
              </NavItem>
              </Col>
              <Col xs='6' sm='6' md='2' lg='2'>
              <NavItem className="navbar">
                <LinkContainer to="/lessons">
                  <NavLink><h3>Lessons</h3></NavLink>
                </LinkContainer>
              </NavItem>
            </Col>
            <Col xs='6' sm='6' md='2' lg='2'>
              <NavItem className="navbar">
                <LinkContainer to="/rentals">
                  <NavLink><h3>Rentals</h3></NavLink>
                </LinkContainer>
              </NavItem>
            </Col>
            <Col xs='6' sm='6' md='2' lg='2'>
              <NavItem className="navbar">
                <LinkContainer to="/repairs">
                  <NavLink><h3>Repairs</h3></NavLink>
                </LinkContainer>
              </NavItem>
            </Col>
            <Col xs='6' sm='6' md='2' lg='2'>
              <NavItem className="navbar">
                <LinkContainer to="/contact">
                  <NavLink><h3>Contact</h3></NavLink>
                </LinkContainer>
              </NavItem>
            </Col>
            </Nav>
          </Navbar>
        </Row>
        </Container>
    </div> */
/*       <div>
      <IndexLinkContainer to="/">
        <NavLink className='navtab'><h3>Home</h3></NavLink>
      </IndexLinkContainer>    
      <LinkContainer to="/about">
        <NavLink><h3>About</h3></NavLink>
      </LinkContainer>
      <LinkContainer to="/lessons">
        <NavLink><h3>Lessons</h3></NavLink>
      </LinkContainer>
      <LinkContainer to="/rentals">
        <NavLink><h3>Rentals</h3></NavLink>
      </LinkContainer>
      <LinkContainer to="/repairs">
        <NavLink><h3>Repairs</h3></NavLink>
      </LinkContainer>
      <LinkContainer to="/contact">
        <NavLink><h3>Contact</h3></NavLink>
      </LinkContainer>
      </div> */
  //           }
  // />
  //   );
  // }


   renderBigNav() {
    return (
      <div className='text-dark'>
        <Container fluid='true'>
            <Navbar>
              <Nav>
              <Col >
                  <IndexLinkContainer to="/">
                    <NavLink><h3>Home</h3></NavLink>
                  </IndexLinkContainer>    
              </Col>
              <Col >
                  <LinkContainer to="/about">
                    <NavLink><h3>About</h3></NavLink>
                  </LinkContainer>
                </Col>
                <Col >
                  <LinkContainer to="/lessons">
                    <NavLink><h3>Lessons</h3></NavLink>
                  </LinkContainer>
              </Col>
              <Col >
                  <LinkContainer to="/rentals">
                    <NavLink><h3>Rentals</h3></NavLink>
                  </LinkContainer>
              </Col>
              <Col >
                  <LinkContainer to="/repairs">
                    <NavLink><h3>Repairs</h3></NavLink>
                  </LinkContainer>
              </Col>
              <Col >
                  <LinkContainer to="/contact">
                    <NavLink><h3>Contact</h3></NavLink>
                  </LinkContainer>
              </Col>
              </Nav>
            </Navbar>
            <Row className='text-dark' style={{textAlign: 'center'}}>
              <Col>
              <h3>Check Out <a href='http://upstreamlive.tv'>Upstream Live</a></h3>
              </Col>
            </Row>
          </Container>
      </div>
    );
  } 

  renderMobileNav() {
    return(
      <Navbar>
      <NavbarBrand style={{alignItems: 'center'}} onClick={this.toggleNavbar} className="ml-auto">
      </NavbarBrand>
      <NavbarToggler onClick={this.toggleNavbar} className="mx-auto">
        <FontAwesomeIcon style={{ width: "10%", height: "auto", paddingTop: "12px" }} icon="bars" />
      </NavbarToggler>
      <Collapse isOpen={!this.state.collapsed} navbar>
        <Nav>
          <Row style={{textAlign: 'left'}}>
            <Col style={{paddingTop: '12px'}}>
              <NavItem style={{paddingTop: '12px'}}>
                <LinkContainer onClick={this.toggleNavbar} to="/">
                  <NavLink>Home</NavLink>
                </LinkContainer> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <LinkContainer onClick={this.toggleNavbar} to="/lessons">
                  <NavLink>Lessons</NavLink>
                </LinkContainer> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <LinkContainer onClick={this.toggleNavbar} to="/rentals">
                  <NavLink>Rentals</NavLink>
                </LinkContainer> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <LinkContainer onClick={this.toggleNavbar} to="/repairs">
                  <NavLink>Repairs</NavLink>
                </LinkContainer> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}> 
                <LinkContainer onClick={this.toggleNavbar} to="/about">
                  <NavLink>About</NavLink>
                </LinkContainer> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <LinkContainer onClick={this.toggleNavbar} to="/contact">
                  <NavLink>Contact</NavLink>
                </LinkContainer> 
              </NavItem>
              <NavItem style={{ paddingTop: '24px'}}>
                <a href='http://upstreamlive.tv'><NavLink>Upstream Live</NavLink></a>
              </NavItem>
            </Col>
          </Row>
        </Nav>
      </Collapse>
    </Navbar>
    )
  }

  renderMenu() {
    if (this.state.width <= 767) {
      return (this.renderMobileNav());
    } else {
      return (this.renderBigNav());
    }
  }


  render() {
    return(
      <div>
        {this.renderLogo()}
        {this.renderMenu()}
      </div>

    )
  }
}
export default BetterHeader