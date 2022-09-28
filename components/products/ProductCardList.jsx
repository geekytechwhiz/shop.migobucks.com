import { Grid, Pagination } from '@mui/material';
import { FlexBetween } from '../flex-box';
import ProductCard from '../product-cards/ProductCard';
import { Span } from '../Typography';
import { Fragment } from 'react';
const ProductCardList = ({ products }) => {
  ;
  return (
    <Fragment>
      <Grid container spacing={3}>
        {products.map((item, ind) => (
          <Grid item lg={4} sm={6} xs={12} key={ind}>
            <ProductCard
              imgUrl={
                item.ImageUrl ||
                'https://mibuploaddev.s3.ap-south-1.amazonaws.com/inbound/inventory/brand/BR1651736511090/P1651745595431/aa2e4e45-92aa-4166-956b-507d9f6724ad.jpg'
              }
              id={item.ProductId}
              brandId={item.BrandId}
              tittle={item.Title}
              price={item.SellingPrice || 0}
              rating={item.Rating}
              hideRating={''}
              hoverEffect={''}
              discount={item?.Discount}
              showProductSize={''}
            />
          </Grid>
        ))}
      </Grid>

      <FlexBetween flexWrap='wrap' mt={4}>
        <Span color='grey.600'>Showing 1-9 of {products.length}  Products</Span>
        <Pagination count={10} variant='outlined' color='primary' />
      </FlexBetween>
    </Fragment>
  );
};

export default ProductCardList;
