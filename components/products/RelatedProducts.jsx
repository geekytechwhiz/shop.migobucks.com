import { Box, Grid } from '@mui/material';
import ProductCard from '../product-cards/ProductCard';
import { H3 } from '../Typography';
import React from 'react'; // ===================================================

// ===================================================
const RelatedProducts = ({ productsData }) => {
  if (!productsData) return <></>;
  return (
    <Box mb={7.5}>
      <H3 mb={3}>Realted Products</H3>
      <Grid container spacing={8}>
        {productsData.map((item, ind) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
            {/* <ProductCard1 {...item} hoverEffect /> */}
            <ProductCard
              imgUrl={
                item.ImageUrl ||
                'https://mibuploaddev.s3.ap-south-1.amazonaws.com/inbound/inventory/brand/BR1651736511090/P1651745595431/aa2e4e45-92aa-4166-956b-507d9f6724ad.jpg'
              }
              id={item.ProductId}
              tittle={item.Title}
              brandId={item.BrandId}
              price={item.SellingPrice || 0}
              rating={item.Rating}
              hideRating={''}
              hoverEffect
              discount={item.Discount}
              showProductSize={''}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedProducts;
