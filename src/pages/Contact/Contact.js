import React from 'react';
import { Row, Col, Container } from 'reactstrap';


class Contact extends React.Component {
  render() {
    return(
      <Container className='contact-page'> 
        <Row>
          <Col style={{textAlign: 'center'}} xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
            <h3>
              email: info@hanoverstrings.com
            </h3>
            <h3>
              phone: 603 643 3143
            </h3>
          </Col>
        </Row>
      </Container>  
    );
  }
}
export default Contact;