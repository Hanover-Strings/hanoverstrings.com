import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';


class Lessons extends React.Component {
  render() {
    return(
      <Container className='lessons-page'>
          <Row style={{textAlign: 'center', paddingTop: 24 }}>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
              <h2>
                Lessons
              </h2>
            </Col>
          </Row>
          <Row className='align-items-center' style={{paddingTop: 48}}>
            <Col style={{textAlign: 'left'}} xs='12' sm='12' md='12' lg='6'>
              <h4>Hanover Strings offers guitar lessons for learners of all ages. Our teachers are excellent and will be happy to help you achieve your musical ambitions. Please contact them directly for more information, email links are below.</h4>
            </Col>
            <Col xs='12' sm='12' md='12' lg='6'>
              <Card>
                <CardImg top width="80%" src='https://strings-store.nyc3.digitaloceanspaces.com/Tony_in_store_large.jpg' alt='group guitar class' />
              </Card>
            </Col>
          </Row>
          <Row style={{textAlign: 'center', paddingTop: 24 }}>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
              <h2>
                Teachers
              </h2>
            </Col>
          </Row>
          <Row style={{paddingTop: 24}}> 
          <Col xs='12' sm='12' md='12' lg='3'>
              <img src='https://strings-store.nyc3.digitaloceanspaces.com/ED1_large.JPG' alt="" />
              <h5>Ed's Videos</h5>
              <a href="https://youtu.be/aCujS4jeIE4" target="_blank" rel="noopener noreferrer">I'll See You In My Dreams</a>
              <a href="https://youtu.be/PDsSky2dz1g" target="_blank" rel="noopener noreferrer">Golden Slumbers w/ Student</a>
              <a href="https://youtu.be/6KW9wX6nFCw" target="_blank" rel="noopener noreferrer">Musetta's Waltz </a>
              <a href="https://youtu.be/0mhlhwaDKZY" target="_blank" rel="noopener noreferrer">And I Love Her w/ Student</a>
            </Col>
            <Col xs='12' sm='12' md='12' lg='9' style={{paddingLeft: 36}}>
              <h3>Ed Eastridge</h3>
              <h4>
                <a href="mailto:eeastridge@gmail.com" target="_top">email</a>
              </h4>
              <h4>
                <a href="tel:8027854221">phone</a>
              </h4>
              <p>Ed is a pro player and world class engineer who has been teaching at Hanover Strings for over 16 years. He studied classical guitar technique with Andy Merrill in Annapolis, MD at age 15 and continued his studies in Washington DC at Charlie Byrd's Studios through the age of 18. In 1968 he began his career as a professional guitarist in Washington, DC. In 1983 he founded Big Mo Recording Services (a live recording company). With his wife Diana, he founded Big Mo Records in 1992. As a recording engineer, musician and producer Mr. Eastridge has worked for hundreds of the world’s premiere artists including Sheryl Crowe, Emmylou Harris, and Wynton Marsalis. As a teacher for all ages and abilities, Ed is accomplished in many genres and styles of music including rock, folk, contemporary, classical, Brazilian and finger style guitar and bass guitar.</p>
            </Col>
          </Row>
          <Row style={{paddingTop: 24}}>
            <Col xs='12' sm='12' md='12' lg='3'>
              <img src='https://strings-store.nyc3.digitaloceanspaces.com/tonyMas_large.jpg' alt="" />
            </Col>
            <Col xs='12' sm='12' md='12' lg='9' style={{paddingLeft: 36}}>
              <h3>Tony Mastaler</h3>
              <h4>
                <a href="mailto:tonymastaler@yahoo.com" target="_top">email</a>
              </h4>
              <h4>
                <a href="tel:8028852084">phone</a>
              </h4>
              <p>Tony studied classical guitar with Philip Rhinelander at UVM and Middlebury College, and jazz guitar with acclaimed jazz guitarist Barry Galbraith. Tony also collaborated with Mr. Galbraith on a History of the Jazz Guitar for VPR. He also completed an accredited practicum in guitar instruction and advanced course work in music theory for guitar. His performance work includes multiple excursions into musical theatre along with recording and performance work in New England, New York and the Boston area. Tony has taught at Lebanon College, Kimball Union Academy, the Church Street Center for Continuing Education and other organizations.</p>
            </Col>
          </Row>
      </Container>  

    );
  }
}
export default Lessons;
