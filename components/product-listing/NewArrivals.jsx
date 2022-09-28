/* eslint-disable */
import { Grid } from '@mui/material';
import MBCard from '../MBCard';
import CategorySectionCreator from '../CategorySectionCreator';
import NewArrival from '../icons/NewArrival';
import NewArrivalCard from '../product-cards/NewArrivalCard';
import React from 'react';

const NewArrivals = ({ newArrivalsList }) => {
  return (
    <CategorySectionCreator
      icon={<NewArrival />}
      title='New Arrivals'
      seeMoreLink='#'
    >
      <MBCard
        sx={{
          p: 2,
        }}
      >
        <Grid container spacing={3}>
          {newArrivalsList.map((item) => (
            <Grid item lg={2} md={3} sm={4} xs={6} key={item.title}>
              <NewArrivalCard {...item} key={item.title} />
            </Grid>
          ))}
        </Grid>
      </MBCard>
    </CategorySectionCreator>
  );
};

export default NewArrivals;
