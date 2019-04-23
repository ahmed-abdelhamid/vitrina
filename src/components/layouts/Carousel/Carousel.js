import React from 'react';
import { Divider, Container, Button, Message } from 'semantic-ui-react';
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  Dot
} from 'pure-react-carousel';

const Carousel = ({ ads }) => {
  const renderSlides = () =>
    ads.map(({ imagePath }, index) => (
      <Slide key={index} index={index} tag="a">
        <Image src={imagePath} />
      </Slide>
    ));

  const renderButtons = () =>
    ads.map((ads, index) => (
      <Button as={Dot} key={index} icon="circle" slide={index} />
    ));

  if (ads.length === 0) {
    return (
      <Message info size="big">
        <Message.Header content="لا يوجد لديك إعلانات فى الوقت الحالى" />
      </Message>
    );
  }

  return (
    <div dir="ltr">
      <CarouselProvider
        isPlaying
        naturalSlideWidth={10}
        naturalSlideHeight={1}
        totalSlides={ads.length}
      >
        <Slider>{renderSlides()}</Slider>
        <Divider />
        <Container textAlign="center">
          <Button.Group size="mini">{renderButtons()}</Button.Group>
        </Container>
      </CarouselProvider>
    </div>
  );
};

export default Carousel;
