import React from 'react';
import { Row, Col } from 'reactstrap';

const photo1 = require('./StringsFront.jpg');

class Home extends React.Component {
  render() {
    return(
      <div className='home-page'>
        <Row>
            <Col>
                <p>Home Page!</p>
                <img src={photo1} alt='strings-front' />
            </Col>
        </Row>
      </div>  

    );
  }
}
export default Home;