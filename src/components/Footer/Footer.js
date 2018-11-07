import React from 'react';
import { Container, Row, Col, Navbar, NavLink } from 'reactstrap';



const Footer = () => (
  <div className="Footer">
    <Container>
      <Row className='text-dark' style={{textAlign: 'center'}}>
        <Col>
          <h3>Check Out <a href='http://upstreamlive.tv'><img width='20%' alt='upstream live' src='https://strings-store.nyc3.digitaloceanspaces.com/USL%20Lower%203rd.png' /></a></h3>
        </Col>
      </Row>
      <Navbar>
        <NavLink>
          <h3 style={{ paddingTop:'12px'}}>
            <a href='https://www.instagram.com/hanoverstrings/'><i style={{  color:'#e95950' }}  class="fab fa-instagram"></i></a>
          </h3>
        </NavLink>
        <NavLink>
          <h3 style={{ paddingTop:'12px'}}>
            <a href='https://www.facebook.com/HanoverStrings/'><i style={{  color:'#4267b2' }} class="fab fa-facebook-square"></i></a>
          </h3>
        </NavLink>
        <NavLink>
          <h3 style={{ paddingTop:'12px'}}>
            <a href='https://www.twitter.com/hanoverstrings/'><i style={{  color:'#2fc2ef' }}  class="fab fa-twitter"></i></a>
          </h3>
        </NavLink>
      </Navbar>
      <Row style={{paddingTop: 12}}>
        <Col xs='12' sm='12' md='12' lg='2'>
          <h6>Hanover Strings</h6>
        </Col>
        <Col xs='12' sm='12' md='12' lg='2'>
          <h6>info@hanoverstrings.com</h6>
        </Col>
        <Col xs='12' sm='12' md='12' lg='2'>
          <h6>604 643 3143</h6>
        </Col>
        <Col xs='12' sm='12' md='12' lg='2'>
          <h6>34 South Main Street</h6>
        </Col>
        <Col xs='12' sm='12' md='12' lg='2'>
          <h6>Hanover, NH 03755</h6>
        </Col>
        <Col xs='12' sm='12' md='12' lg='2'>
          <h6>©2018 Winny Weezy LLC</h6>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;