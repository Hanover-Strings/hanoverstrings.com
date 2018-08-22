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
        <Col xs='12' sm='12' md='12' className='align-items-center'>
          <img src={logo} className="img-fluid" />
        </Col>
        <Col xs='12' sm='12' md='12'>
          <h4>CONTACT</h4>
        </Col>
        <Col xs='12' sm='12' md='12'>
          34 South Main Street
        </Col>
        <Col xs='12' sm='12' md='12'>
          Hanover, NH 03755
        </Col>
        <Col xs='12' sm='12' md='12'>
          info@hanoverstrings.com
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