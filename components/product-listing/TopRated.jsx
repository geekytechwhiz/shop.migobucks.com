import { Box, Container, Grid } from '@mui/material';
import MBCard from '../MBCard';
import CategorySectionHeader from '../CategorySectionHeader';
import DottedStar from '../icons/DottedStar';
import RankBadge from '../icons/RankBadge';
import TopRatedCard from '../product-cards/TopRatedCard';
import TopRatedBrand from '../product-cards/TopRatedBrand';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { H2 } from '../Typography';

const TopRated = () => {
  const topRatedList =
    useSelector((state) => state.migoStore?.topRatedProduct) || [];
  const topRatedBrands =
    useSelector((state) => state.migoStore?.topRatedBrands) || [];
  if (!topRatedList || !topRatedBrands) return <H2>Loading</H2>;
  return (
    <Box mb={7.5}>
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={6} xs={12}>
            <CategorySectionHeader
              icon={<RankBadge />}
              title='Top Ratings'
              seeMoreLink='#'
            />

            <MBCard
              sx={{
                p: 2,
              }}
            >
              <Grid container spacing={4}>
                {topRatedList.map((item) => (
                  <Grid item md={3} sm={6} xs={6} key={item.title}>
                    <Link href={`/product/${item.id}`}>
                      <a>
                        <TopRatedCard {...item} />
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </MBCard>
          </Grid>

          <Grid item md={6} xs={12}>
            <CategorySectionHeader
              icon={<DottedStar />}
              title='Featured Brands'
              seeMoreLink='#'
            />

            <MBCard
              sx={{
                p: 2,
              }}
            >
              <Grid container spacing={4}>
                {topRatedBrands.map((item) => (
                  <Grid item sm={6} xs={12} key={item.title}>
                    <Link href={item.productUrl || ''}>
                      <a>
                        <TopRatedBrand {...item} />
                      </a>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </MBCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopRated;
