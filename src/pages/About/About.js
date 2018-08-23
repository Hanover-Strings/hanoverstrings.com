import React from 'react';
import { Row, Column } from 'simple-flexbox';


class About extends React.Component {
  render() {
    return(
      <div className='about-page'>
        <Column flexGrow={1}>
            <Row horizontal="center">
              <Column>
                <h5>About Us</h5>
                <h5>34 South Main Street</h5>
                <h5>Hanover, NH 03755</h5>
                <h5>© 2017-2018 Winny Weezy LLC</h5>
                </Column>
            </Row>
        </Column>
      </div>  

    );
  }
}
export default About;