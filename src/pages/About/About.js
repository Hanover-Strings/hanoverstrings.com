import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';

import MailchimpSubscribe from "react-mailchimp-subscribe"


class About extends React.Component {
  render() {
    return(
      <Container className='about-page'>
        <Row style={{textAlign: 'center', paddingTop: 24 }}>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
              <h2>
                About
              </h2>
            </Col>
          </Row>
          <Row className='align-items-center'>
            <Col xs='12' sm='12' md='12' lg='6'>
              <Card>
                <CardImg top width="100%" src="https://strings-store.nyc3.digitaloceanspaces.com/Shop%20Facade.jpg" alt="Card image cap" />
              </Card>
            </Col>
            <Col xs='12' sm='12' md='12' lg='6'>
              <h4>Hanover Strings is a small, full-line musical instrument store located in Hanover, NH. It was started in 1975 by Charley Conquest and more than forty years later we strive every day to continue his caring, knowledgeable legacy and his commitment for people to reach their musical potential.</h4>
              <br />
              <h4>Sign up for our mailing list to hear the latest!</h4>
              <MailchimpSubscribe className='fluid' url='https://hanoverstrings.us3.list-manage.com/subscribe/post?u=f74bbeb8cf613cbdece7061b1&amp;id=4e345d06b1'/>
            </Col>
            <Col style={{paddingTop: 48 }} xs='12' sm='12' md='12' lg={{size:6, offset: 3}}>
              <iframe title='store map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.4393258164264!2d-72.29128818423472!3d43.7014183573289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb4c9e7dcfade43%3A0x38932ab24f851ed1!2s34+S+Main+St%2C+Hanover%2C+NH+03755!5e0!3m2!1sen!2sus!4v1499438631510" style={{border: 0, allowfullscreen: true , width: 600, height: 450, frameborder: 0 }}></iframe>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Return Policies</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>If an item is returned in acceptable condition within 5 business days of purchase, we are willing to accept the return and process a refund reflecting the original payment method.</h4>
              <h4>All returns at Hanover Strings, including those made within our stated 5-day return window, are accepted at our discretion. Hanover Strings reserves the right to remit payment in the form of store credit. Hanover Strings also reserves the right to collect a “restocking fee” for any returned item.</h4>
              <h4>Special Order returns are accepted purely at our discretion and will be refunded with store credit only. Shipping fees associated with special orders will not be refunded under any circumstances.</h4>
            </Col>
          </Row>
      </Container>  

    );
  }
}
export default About;