import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom'
import { Row, Col, Container, Nav, NavItem, NavLink, Navbar, NavbarToggler, Collapse} from 'reactstrap';
import $ from 'jquery';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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

  //  renderBigNav() {
  //   return (
  //     <div className='text-dark'>
  //       <Container fluid='true'>
  //           <Navbar className='navbig'>
  //             <Nav>
  //               <Col >
  //                   <IndexLinkContainer to="/">
  //                     <NavLink><h3>Home</h3></NavLink>
  //                   </IndexLinkContainer>    
  //               </Col>
  //               <Col >
  //                   <LinkContainer to="/about">
  //                     <NavLink><h3>About</h3></NavLink>
  //                   </LinkContainer>
  //                 </Col>
  //                 <Col >
  //                   <LinkContainer to="/lessons">
  //                     <NavLink><h3>Lessons</h3></NavLink>
  //                   </LinkContainer>
  //               </Col>
  //               <Col >
  //                   <LinkContainer to="/rentals">
  //                     <NavLink><h3>Rentals</h3></NavLink>
  //                   </LinkContainer>
  //               </Col>
  //               <Col >
  //                   <LinkContainer to="/repairs">
  //                     <NavLink><h3>Repairs</h3></NavLink>
  //                   </LinkContainer>
  //               </Col>
  //               <Col >
  //                   <LinkContainer to="/contact">
  //                     <NavLink><h3>Contact</h3></NavLink>
  //                   </LinkContainer>
  //               </Col>
  //             </Nav>
  //           </Navbar>
  //         </Container>
  //     </div>
  //   );
  // }

  renderBigNav() {
    return (
      <div className='text-dark'>
        <Container>
            <Navbar className='navbig'>
              <Nav>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/'>
                    <h3>Home</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/about'>
                    <h3>About</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/lessons'>
                    <h3>Lessons</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/rentals'>
                    <h3>Rentals</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/repairs'>
                    <h3>Repairs</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName='active' tag={RRNavLink} exact to='/contact'>
                    <h3>Contact</h3>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink activeClassName='active' href='http://upstreamlive.tv'>
                    <h3>Upstream Live</h3>
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </Container>
      </div>
    );
  } 

  // renderMobileNav() {
  //   return(
  //     <Navbar>
  //     <NavbarToggler onClick={this.toggleNavbar} className="mx-auto">
  //       <FontAwesomeIcon style={{ width: "10%", height: "auto" }} icon="bars" />
  //     </NavbarToggler>
  //     <Collapse isOpen={!this.state.collapsed} navbar>
  //       <Nav>
  //         <Row style={{textAlign: 'left'}}>
  //           <Col style={{paddingTop: '12px'}}>
  //             <NavItem style={{paddingTop: '12px'}}>
  //               <IndexLinkContainer onClick={this.toggleNavbar} to="/">
  //                 <NavLink>Home</NavLink>
  //               </IndexLinkContainer> 
  //             </NavItem>
  //             <NavItem style={{paddingTop: '12px'}}>
  //               <LinkContainer onClick={this.toggleNavbar} to="/lessons">
  //                 <NavLink>Lessons</NavLink>
  //               </LinkContainer> 
  //             </NavItem>
  //             <NavItem style={{paddingTop: '12px'}}>
  //               <LinkContainer onClick={this.toggleNavbar} to="/rentals">
  //                 <NavLink>Rentals</NavLink>
  //               </LinkContainer> 
  //             </NavItem>
  //             <NavItem style={{paddingTop: '12px'}}>
  //               <LinkContainer onClick={this.toggleNavbar} to="/repairs">
  //                 <NavLink>Repairs</NavLink>
  //               </LinkContainer> 
  //             </NavItem>
  //             <NavItem style={{paddingTop: '12px'}}> 
  //               <LinkContainer onClick={this.toggleNavbar} to="/about">
  //                 <NavLink>About</NavLink>
  //               </LinkContainer> 
  //             </NavItem>
  //             <NavItem style={{paddingTop: '12px'}}>
  //               <LinkContainer onClick={this.toggleNavbar} to="/contact">
  //                 <NavLink>Contact</NavLink>
  //               </LinkContainer> 
  //             </NavItem>
  //             <NavItem style={{ paddingTop: '24px'}}>
  //               <a href='http://upstreamlive.tv'><NavLink>Upstream Live</NavLink></a>
  //             </NavItem>
  //           </Col>
  //         </Row>
  //       </Nav>
  //     </Collapse>
  //   </Navbar>
  //   )
  // }

  renderMobileNav() {
    return(
      <Navbar>
      <NavbarToggler onClick={this.toggleNavbar} className="mx-auto">
        <FontAwesomeIcon style={{ width: "10%", height: "auto" }} icon="bars" />
      </NavbarToggler>
      <Collapse isOpen={!this.state.collapsed} navbar>
        <Nav>
          <Row style={{textAlign: 'left'}}>
            <Col style={{paddingTop: '12px'}}>
              <NavItem style={{paddingTop: '12px'}}>
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/'>
                  <h5>Home</h5>
                </NavLink> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/lessons'>
                  <h5>Lessons</h5>
                </NavLink> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/rentals'>
                  <h5>Rentals</h5>
                </NavLink> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/repairs'>
                  <h5>Repairs</h5>
                </NavLink> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}> 
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/about'>
                  <h5>About</h5>
                </NavLink> 
              </NavItem>
              <NavItem style={{paddingTop: '12px'}}>
                <NavLink activeClassName='active' tag={RRNavLink} onClick={this.toggleNavbar} exact to='/contact'>
                  <h5>Contact</h5>
                </NavLink> 
              </NavItem>
              <NavItem style={{ paddingTop: '24px'}}>
                <img width='auto' alt='upstream live' src='https://strings-store.nyc3.digitaloceanspaces.com/USL%20Lower%203rd.png' />
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