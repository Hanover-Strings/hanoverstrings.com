import React from 'react';
import {logo} from '../../logo.svg';
import { Container, Row, Col } from 'reactstrap';



const Footer = () => (
  <div className="Footer">
    <Container>
      <Row style={{paddingTop: 48}}>
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