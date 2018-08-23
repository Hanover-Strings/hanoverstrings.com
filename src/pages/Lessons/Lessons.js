import React from 'react';
import { Row, Column } from 'simple-flexbox';


class Lessons extends React.Component {
  render() {
    return(
      <div className='lessons-page'>
        <Column flexGrow={1}>
            <Row horizontal="center">
                <p>We teach music!</p>
            </Row>
        </Column>
      </div>  

    );
  }
}
export default Lessons;