import React from 'react';
import { Row, Column } from 'simple-flexbox';

const photo1 = require('../../StringsFront.jpg');

class Home extends React.Component {
  render() {
    return(
      <div className='home-page'>
        <Column flexGrow={1}>
            <Row horizontal="center">
              <p>Home Page!</p>
            </Row>
            <Row horizontal="center">
              <img src={photo1} alt='strings-front' />
            </Row>
        </Column>
      </div>  

    );
  }
}
export default Home;