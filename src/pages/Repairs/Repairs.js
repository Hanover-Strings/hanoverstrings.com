import React from 'react';
import { Row, Column } from 'simple-flexbox';


class Repairs extends React.Component {
  render() {
    return(
      <div className='repairs-page'>
        <Column flexGrow={1}>
            <Row horizontal="center">
                <p>We fix!</p>
            </Row>
        </Column>
      </div>  

    );
  }
}
export default Repairs;