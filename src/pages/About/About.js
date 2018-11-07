import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';


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
              <h3>The Best Music Store in the Universe</h3>
              <h4>Hanover Strings is a small, full-line musical instrument store located in Hanover, NH. It was started in 1975 by Charley Conquest and more than forty years later we strive every day to continue his caring, knowledgeable legacy and his commitment for people to reach their musical potential.</h4>
            </Col>
            <Col style={{paddingTop: 48 }} xs='12' sm='12' md='12' lg={{size:6, offset: 3}}>
              <iframe title='store map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.4393258164264!2d-72.29128818423472!3d43.7014183573289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb4c9e7dcfade43%3A0x38932ab24f851ed1!2s34+S+Main+St%2C+Hanover%2C+NH+03755!5e0!3m2!1sen!2sus!4v1499438631510" style={{border: 0, allowfullscreen: true , width: 600, height: 450, frameborder: 0 }}></iframe>
            </Col>
          </Row>
      </Container>  

    );
  }
}
export default About;