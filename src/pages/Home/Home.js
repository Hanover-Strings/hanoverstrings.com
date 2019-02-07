import React from 'react';
import { Row, Col, Container, Card, CardImg, Button, Collapse, CardBody } from 'reactstrap';

import MailchimpSubscribe from "react-mailchimp-subscribe"



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
    return(
      <Container className='home-page'>
        <Row style={{textAlign: 'center', paddingTop: 24 }}>
          <Col xs='12' sm='12' md ='12' lg='12'>
            <h2 style={{fontWeight: 'bold'}}>The Best Music Store in the Universe!</h2>
          </Col>
        </Row>
        <Row className='align-items-center' style={{paddingTop: 24}}>
          <Col xs='12' sm='12' md='12' lg='6'>
            <Card>
              <CardImg top width="100%" src="https://strings-store.nyc3.digitaloceanspaces.com/Shop%20Facade.jpg" alt="Card image cap" />
            </Card>
          </Col>
          <Col xs='12' sm='12' md='12' lg='6'>
            <h4>Hanover Strings is a small, full-line musical instrument store located in Hanover, NH. It was started in 1975 by Charley Conquest and more than forty years later we strive every day to continue his caring, knowledgeable legacy and his commitment for people to reach their musical potential.</h4>
            <h4>In addition to our instrument retail, we also offer instrument repair and maintenance, live sound services, and audio system consultation and installation.</h4>
            <h4>If you are looking to pick our brains on a particular audio challenge or just want to strum one of our many guitars, please stop by for a visit while you're in town!</h4>
            <br />
            <h3><strong>Hours:</strong></h3>
            <h4><strong>Monday thru Friday | 9:30 - 5:30</strong></h4>
            <h4><strong>Saturday | 10 - 3</strong></h4>
            <h4><strong>CLOSED Sundays</strong></h4>
            <br />
            <h4>Sign up for our mailing list to hear the latest!</h4>
            <MailchimpSubscribe className='fluid' url='https://hanoverstrings.us3.list-manage.com/subscribe/post?u=f74bbeb8cf613cbdece7061b1&amp;id=4e345d06b1'/>
            <a href='https://www.google.com/maps/search/?api=1&query=hanover+strings'><h1><i style={{color: 'green'}} class="fas fa-map-marked-alt"></i>   Link to map</h1></a>
          </Col>
        </Row>
        <Row style={{textAlign: 'center', paddingTop: 24 }}>
          <Col xs='12' sm='12' md='12' lg={{size: 6, offset: 3}}>
            <Button size='lg' onClick={this.toggle} style={{ marginBottom: '1rem' }}>Return and Trade-In Policies</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody>
                <h4>If an item is returned in acceptable condition within 5 business days of purchase, we are willing to accept the return and process a refund reflecting the original payment method.</h4>
                <h4>All returns at Hanover Strings, including those made within our stated 5-day return window, are accepted at our discretion. Hanover Strings reserves the right to remit payment in the form of store credit. Hanover Strings also reserves the right to collect a “restocking fee” for any returned item.</h4>
                <h4>Special Order returns are accepted purely at our discretion and will be refunded with store credit only. Shipping fees associated with special orders will not be refunded under any circumstances.</h4>
                <h4>*</h4>
                <h4>On rare occasions and very much at our discretion, Hanover Strings will accept instrument trade-ins. We are not obligated to purchase any instrument considered for trade-in and will always advise our customers that a private sale via online marketplace or community board is their best option to sell their instruments.</h4>
                <h4>If you have an instrument that you are interested in selling or trading, we strongly recommend that you call or e-mail us before bringing it in.</h4>
                <h4>Hanover Strings does not offer consignment services to our customers.</h4>
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </Container>  

    );
  }
}
export default Home;