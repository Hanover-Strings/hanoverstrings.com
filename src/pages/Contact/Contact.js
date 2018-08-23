import React from 'react';
import { Row, Column } from 'simple-flexbox';


class Contact extends React.Component {
  render() {
    return(
      <div className='contact-page'>
        <Column flexGrow={1}>
            <Row horizontal="center">
                <p>Contact Us at info@hanoverstrings.com</p>
            </Row>
        </Column>
      </div>  

    );
  }
}
export default Contact;