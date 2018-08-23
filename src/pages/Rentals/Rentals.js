import React from 'react';
import { Row, Column } from 'simple-flexbox';


class Rentals extends React.Component {
  render() {
    return(
      <div className='rentals-page'>
        <Column flexGrow={1}>
            <Row horizontal="center">
                <p>We Rent!</p>
            </Row>
        </Column>
      </div>  

    );
  }
}
export default Rentals;