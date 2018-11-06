import React from 'react';
import { Row, Col, Container, Card, CardImg, CardText, CardBody,
  CardTitle, } from 'reactstrap';


class Repairs extends React.Component {
  render() {
    return(
      <Container className='repairs-page'>
          <Row style={{textAlign: 'center', paddingTop: 24 }}>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
              <h2>
                Repairs
              </h2>
            </Col>
          </Row>
          <Row className='align-items-center'>
            <Col xs='12' sm='12' md='12' lg='6'>
              <Card>
                <CardImg top width="100%" src="https://strings-store.nyc3.digitaloceanspaces.com/DuncInAction.jpg" alt="Card image cap" />
              </Card>              
            </Col>
            <Col xs='12' sm='12' md='12' lg='6'>
              <h3>Yes. We can fix it.</h3>
              <h4>We've been repairing, restoring and modifying stringed and fretted instruments since 1973. This includes everything from set ups and adjustments, to neck resets, and major structural repairs, building and modification that encompasses fretted and viol family instruments. If you have something that needs attention, bring it on by for an estimate.</h4>
            </Col>
          </Row>
          <Row style={{paddingTop: 24}}>
            <Col xs='12' sm='12' md='12' lg='4' style={{paddingTop: 24}}>
              <img src='https://strings-store.nyc3.digitaloceanspaces.com/IMG_1751_1_medium.jpg' />
            </Col>
            <Col xs='12' sm='12' md='12' lg='4' style={{paddingTop: 24}}>
              <img src='https://strings-store.nyc3.digitaloceanspaces.com/IMG_1806_1_medium.jpg' />
            </Col>
            <Col xs='12' sm='12' md='12' lg='4' style={{paddingTop: 24}}>
              <img src='https://strings-store.nyc3.digitaloceanspaces.com/IMG_1488_2_1_medium.jpg' />
            </Col>
          </Row>
          <Row style={{paddingTop: 48}}>
            <Col xs='12' sm='12' md='12' lg='12'>
              <h3>Setups</h3>
              <h4>If your instrument is not set up - it cannot really be played. "Action" must be within a tolerance in order to "fret" correctly (be in tune) and feel good to play. All stringed and fretted instruments "wander" from their original factory adjustment over time. Moves across the country will exacerbate the situation. Adjustments on guitars vary with type, make, style and model (electric, acoustic, classical etc.). Getting a guitar set up properly is not rocket science, but when it is "right" it is heaven! We love doing it and we are pretty darn good at it. Come on in with your obstreperous guitar, mandolin, violin or banjo and we'll make it behave and "be all that it can be".</h4>
            </Col>
          </Row>
          <Row style={{paddingTop: 24}}>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 1}} style={{paddingTop: 24}}>
              <img src='https://strings-store.nyc3.digitaloceanspaces.com/repair_large.jpg' />
            </Col>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 1}} style={{paddingTop: 24}}>
              <img src='https://strings-store.nyc3.digitaloceanspaces.com/repair_setup_large.jpg' />
            </Col>
          </Row>
          <Row style={{paddingTop: 48}}>
            <Col xs='12' sm='12' md='12' lg='12'>
              <h3>Electrifying Your Acoustic Guitar</h3>
              <h4>Things have come a long way from the old in-sound-hole D'Armond pickup. We install Fishman and LR Baggs systems. Both companies make a variety of systems for guitar, mandolin, and viol family instruments. Its easy to amplify an acoustic instrument. It is a little trickier to actually make an acoustic instrument sound good! Depends on budget, application, and what instrument you want to modify. Bring in you instrument for a consultation and test drive these systems at Hanover Strings!</h4>
            </Col>
          </Row>
          <Row style={{paddingTop: 24}}>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 1}} style={{paddingTop: 24}}>
              <img src='https://strings-store.nyc3.digitaloceanspaces.com/pickup_installation_large.jpg' />
            </Col>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 1}} style={{paddingTop: 24}}>
              <img src='https://strings-store.nyc3.digitaloceanspaces.com/IMG_2207_1_medium.jpg' />
            </Col>
          </Row>
      </Container>  

    );
  }
}
export default Repairs;