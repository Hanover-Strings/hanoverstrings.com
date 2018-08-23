import React from 'react';
import {logo} from '../../logo.svg';
import { Container, Row, Col } from 'reactstrap';


const copyrightYear = () => {
  const currentYear = '2018'
  return currentYear === '2017' ? '2017' : `2017-${currentYear}`;
};

const Footer = () => (
  <div className="Footer fixed-bottom">
      <Row>
        <Col>I AM A FOOTER!</Col>
      </Row>
  </div>
);

export default Footer;