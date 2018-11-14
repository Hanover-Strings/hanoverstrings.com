import React from 'react';
import { Row, Col, Container, Button, Collapse, Card, CardBody, CardImg } from 'reactstrap';

import RentalCarousel from './RentalCarousel';


class Rentals extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  renderSecondBlock() {
    return(
      <Container>
        <Row className='align-items-center' style={{paddingTop: 36}}>
          <Col style={{textAlign: 'left'}} xs='12' sm='12' md='12' lg='6'>
            <h2>
              Make it easy
            </h2>
            <h4>Whether you want to try a new and different instrument or just test your commitment to play without the burden of a purchase, come in to the shop  and rent one of our instruments. We also rent sound systems, lights and lasers for short or long term rentals from corporate events and weddings to wild parties. Rentals are easy, fun and affordable.  Come see us at the shop or contact us via phone or e-mail to get a quote today! </h4>
            <h3>
              <a href="mailto:info@hanoverstrings.com" target="_top">email: info@hanoverstrings.com</a>
            </h3>
            <h3>
              <a href="tel:6036433143">phone: 603 643 3143</a>
            </h3>
          </Col>
          <Col xs='12' sm='12' md='12' lg='6'>
            <Card>
              <CardImg top width="100%" src="https://strings-store.nyc3.digitaloceanspaces.com/IMG_20160218_121901_grande.jpg" alt="sitting in the store with guitar" />
            </Card>
          </Col>
        </Row>
      </Container>  

    );
  }

  render() {
    return (
      <div className='rentals-page'>
        <Row style={{textAlign: 'center', paddingTop: 24 }}>
          <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
            <h2>
              Rentals
            </h2>
          </Col>
        </Row>
        <RentalCarousel />
        {this.renderSecondBlock()}
        <Row style={{textAlign: 'center', paddingTop: 24 }}>
          <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
            <Button size='lg' onClick={this.toggle} style={{ marginBottom: '1rem' }}>Rental Policies</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                <CardBody><h3>ALL RENTAL RETURNS ARE DUE BY NOON</h3>
 
                  <p><strong>1. Instrument:</strong> Renter and Hanover Strings examine the instrument, and agree that it is in good working condition. </p>
                    
                  <p><strong>2. Rental Period:</strong> The instrument will be rented for an agreed duration of time. Rent for the agreed period will be due at the beginning of the rental and must be charged to a valid credit card, unless otherwise arranged with Hanover Strings. Monthly rental renewal fees will be due on the same day of the month as the initial rental. The renter may return the instrument to Hanover Strings at any time, and this agreement will be canceled provided all fees and charges have been paid up to the date of return. Rentals are required to be returned to Hanover Strings by 12 PM NOON EST on the last day of the rental period.</p>
                    
                  <p><strong>3. Contact and Billing Information:</strong> Renter must provide a valid credit card number and contact information at the time of rental. Renter agrees to update this information with Hanover Strings if it changes, for the duration of the rental period. </p>
                    
                  <p><strong>4. Auto Pay Authorization:</strong> By initialing the Auto Pay box, the Renter authorizes automatic debiting of the credit card on file for the monthly payments under this agreement. </p>
                    
                  <p><strong>5. Manual Payment:</strong> If the Renter elects to make payments by cash or check, rent will be due ON OR BEFORE the monthly renewal date. If payment is not received by the due date, then the card on file will be charged for the amount due. </p>
                    
                  <p><strong>6. Late Charges:</strong> If the credit card on file is declined, and if the Renter’s monthly payment is not received within 7 days after it is due, an additional $20 late fee will be assessed. Late fees do not count toward the purchase discount.</p>
                    
                  <p><strong>7. Purchase Discount:</strong> Hanover Strings will apply a discount equal to 60% of the accrued monthly rent if the Renter decides to purchase the rental instrument. This accrued discount cannot be applied to any other item in the shop. The discount will be forfeited when the instrument is returned and this agreement is canceled. The discount will be forfeited if the Renter fails to pay or return the instrument.</p>
                    
                  <p><strong>8. Damage or Loss:</strong> Renter is responsible and liable for the loss or damage of the rented instrument beyond ordinary wear and tear. In the event of loss or theft, or damage beyond repair of rented instrument, Renter will be responsible for compensating Hanover Strings in an amount equal to the Retail Purchase Price of the instrument in question, less any accrued discount amount if the rental is otherwise in good standing.</p>
                    
                  <p><strong>9. Repair and Maintenance:</strong> Renter is responsible for any repairs and adjustments necessary to keeping the rented instrument in proper working condition. All maintenance and repairs must be completed by Hanover Strings, unless otherwise approved by Hanover Strings.</p>
                    
                  <p><strong>10. Default:</strong> Hanover Strings declares the Renter to be in default if: (i) Renter fails to pay a scheduled rental payment and late charges within 21 days after the due date of the scheduled rental payment; (ii) Renter provided inaccurate or misleading information on this agreement; (iii) any circumstances arise that Hanover Strings believes will endanger the safety of the instrument. If Hanover Strings declares the Renter to be in default, the instrument must be returned to Hanover Strings within 24 hours, and all outstanding fees paid upon delivery, or it will be subject to repossession. Failure to return the rented instrument to Hanover Strings in the event of default, or at their request, may constitute an act of theft, which may be considered a felony punishable by fine or imprisonment under the laws of this state.</p>
                    
                  <p><strong>11. Repossession:</strong> If Hanover Strings declares a Renter to be in default of this Agreement, Hanover Strings is entitled to repossess the instrument according to the State of New Hampshire and Federal law. If Hanover Strings takes possession of the instrument, this agreement shall terminate and there will be no further responsibility on either party with the exception that the Renter will be liable for past due payments and any repairs due to damage beyond normal wear and tear. Renter will also be responsible for any associated collection fees.</p>
                    
                  <p><strong>12. Termination:</strong> Hanover Strings reserves the right to terminate this Rental Agreement at our discretion at any time. Upon Termination of the Rental Agreement, the Renter must return the instrument within 24 hours or the Renter will be subject to the Default and Repossession terms above.</p>
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Rentals;