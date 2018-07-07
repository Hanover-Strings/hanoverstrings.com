import React from 'react';
import {logo} from './logo.png';
import { Container, Row, Col } from 'reactstrap';


const copyrightYear = () => {
  const currentYear = '2018'
  return currentYear === '2017' ? '2017' : `2017-${currentYear}`;
};

const Footer = () => (
  <div className="Footer fixed-bottom">
    <Container>
      <Row>
        <Col xs='12' sm='12' md='3' className='align-items-center'>
          <img src={logo} className="img-fluid" />
        </Col>
        <Col xs='12' sm='12' md='3'>
          <div><h4>CONTACT</h4></div>
          <div>34 South Main Street</div>
          <div>Hanover, NH 03755</div>
          <div>info@hanoverstrings.com</div>
        </Col>
      </Row>
      <Row>
      <Col xs='12' sm='12' md='12' lg='12'>
      <p className='copyright'>&copy; {copyrightYear()} Winny Weezy LLC</p>
      </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;