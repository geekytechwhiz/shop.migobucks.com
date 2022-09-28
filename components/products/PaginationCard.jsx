import { Pagination } from '@mui/material';
import { FlexBetween } from '../flex-box';
import ProductCard from '../product-cards/ProductCard';
import productDatabase from '../../data/product-database';
import React from 'react';
import { Span } from '../Typography'; // ==========================================================

// ==========================================================
const PaginationCard = () => {
  return (
    <div>
      {productDatabase.slice(95, 104).map((item, ind) => (
        <ProductCard key={ind} {...item} />
      ))}

      <FlexBetween flexWrap='wrap' mt={4}>
        <Span color='grey.600'>Showing 1-9 of 1.3k Products</Span>
        <Pagination count={10} variant='outlined' color='primary' />
      </FlexBetween>
    </div>
  );
};

export default PaginationCard;
