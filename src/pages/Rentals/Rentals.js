import React from 'react';
import { Row, Col, Container } from 'reactstrap';

import RentalCarousel from './RentalCarousel';


class Rentals extends React.Component {
  renderSecondBlock() {
    return(
      <Container>
        <Row className='align-items-center' style={{paddingTop: 36}}>
          <Col style={{textAlign: 'left'}} xs='12' sm='12' md='12' lg='6'>
            <h2>
              Make it easy
            </h2>
            <h4>Whether you want to try a new and different instrument or just test your commitment to play without the burden of a purchase, come in to the shop  and rent one of our instruments. We also rent sound systems, lights and lasers for short or long term rentals from corporate events and weddings to wild parties. Rentals are easy, fun and affordable.  Come see us at the shop or contact us via phone or e-mail to get a quote today! </h4>
          </Col>
          <Col xs='12' sm='12' md='12' lg='6'>
            {/* NEED BETTER IMAGE FOR CENTERING..... this one is too small and thus, looks off-center */}
            <img src='https://strings-store.nyc3.digitaloceanspaces.com/IMG_20160218_121901_grande.jpg' />
          </Col>
        </Row>
      </Container>  

    );
  }

  render() {
    return (
      <div className='rentals-page'>
        <Row style={{textAlign: 'center', paddingTop: 24 }}>
          <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
            <h2>
              Rentals
            </h2>
          </Col>
        </Row>
        <RentalCarousel />
        {this.renderSecondBlock()}
      </div>
    );
  }
}

export default Rentals;