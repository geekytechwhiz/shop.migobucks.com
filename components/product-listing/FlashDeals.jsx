/* eslint-disable */
import { Box } from '@mui/material';
import Carousel from '../carousel/Carousel';
import CategorySectionCreator from '../CategorySectionCreator';
import Light from '../icons/Light';
import ProductCard from '../product-cards/ProductCard';
import useWindowSize from '../../hooks/useWindowSize';
import React, { useEffect, useState } from 'react';

const FlashDeals = ({ flashDeals }) => {
  const [visibleSlides, setVisibleSlides] = useState(4);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);
  return (
    <CategorySectionCreator
      icon={<Light color='primary' />}
      title='Flash Deals'
      seeMoreLink='#'
    >
      <Box mt={-0.5} mb={-0.5}>
        <Carousel
          totalSlides={flashDeals.length}
          visibleSlides={visibleSlides}
          infinite={true}
        >
          {flashDeals.map((item, ind) => (
            <Box py={0.5} key={ind}>
              <ProductCard
                imgUrl={
                  item.ImageUrl }
                id={item.ProductId}
                brandId={item.BrandId}
                tittle={item.Title}
                price={item.SellingPrice || 0}
                rating={item.Rating}
                hideRating={''}
                hoverEffect={''}
                discount={item.DiscountPercentage}
                showProductSize={''}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default FlashDeals;
