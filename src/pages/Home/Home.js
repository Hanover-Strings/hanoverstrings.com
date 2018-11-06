import React from 'react';
import { Row, Col, Container, Card, CardImg } from 'reactstrap';

const photo1 = require('../../StringsFront.jpg');

class Home extends React.Component {
  render() {
    return(
      <Container className='home-page'>
        <Row style={{textAlign: 'center', paddingTop: 24 }}>
          <Col xs='12' sm='12' md ='12' lg='12'>
            <h2 style={{fontWeight: 'bold'}}>The Best Music Store in the Universe!</h2>
          </Col>
        </Row>
        <Row style={{paddingTop: '24px'}}>
          <Col xs='12' sm='12' md ='12' lg={{size: 4, offset: 4}}>
            <Card>
              <CardImg top width="100%"  src={photo1} alt='strings-front' />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs='12' sm='12' md ='12' lg={{size: 8, offset: 2}}>
            <h4>Hanover Strings is a small, full-line musical instrument store located in Hanover, NH. It was started in 1975 by Charley Conquest and more than forty years later we strive every day to continue his caring, knowledgeable legacy and his commitment for people to reach their musical potential.</h4>
          </Col>
        </Row>
      </Container>  

    );
  }
}
export default Home;