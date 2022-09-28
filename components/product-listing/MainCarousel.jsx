/* eslint-disable */
import { Box, Container } from '@mui/material';
import CarouselCard from '../carousel-cards/CarouselCard';
import Carousel from '../carousel/Carousel';
import Navbar from '../navbar/Navbar';
import { Fragment } from 'react';

const MainCarousel = ({ carouselData }) => {
  debugger;
  return (
    <Fragment>
      <Navbar />

      <Box bgcolor='white' mb={7.5}>
        <Container
          sx={{
            py: 4,
          }}
        >
          <Carousel
            totalSlides={2}
            visibleSlides={1}
            infinite={true}
            autoPlay={false}
            showDots={true}
            showArrow={false}
            spacing='0px'
          >
            {carouselData.map((data, ind) => (
              <CarouselCard carousel={data} key={ind} />
               
            ))}
          </Carousel>
        </Container>
      </Box>
    </Fragment>
  );
};

export default MainCarousel;
