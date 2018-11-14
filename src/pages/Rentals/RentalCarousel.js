import React from 'react';

import { Row, Col, Container,  Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

import './Rentals';

var items = [
  {
    src: 'https://strings-store.nyc3.digitaloceanspaces.com/instapost710.jpg',
    altText: 'Let out Your Inner Rock Star!',
    caption: ''
  },
  {
    src: 'https://strings-store.nyc3.digitaloceanspaces.com/instapostsevenseven.jpg',
    altText: 'Out of This World Party Rentals!',
    caption: ''  },
  {
    src: 'https://strings-store.nyc3.digitaloceanspaces.com/instaxmartins.jpg',
    altText: 'Excellent Guitars!',
    caption: ''
  },
  {
    src: 'https://strings-store.nyc3.digitaloceanspaces.com/instapostbarrett%20HUGE.jpg',
    altText: 'Amazing Instruments!',
    caption: ''
  }
  

];


class RentalCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
        </CarouselItem>
      );
    });
    return (
      <div className='RentalCarousel'>
        <Container>
          <Row>
            <Col xs='12' sm='12' md='12' lg='12'>
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default RentalCarousel;