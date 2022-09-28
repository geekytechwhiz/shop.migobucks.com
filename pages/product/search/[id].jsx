import { Apps, FilterList, ViewList } from '@mui/icons-material';
import {
  Box,
  Card,
  Grid,
  IconButton,
  MenuItem,
  TextField,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FlexBox } from '../../../components/flex-box'; 
import NavbarLayout from '../../../components/layouts/NavbarLayout';
import ProductCardList from '../../../components/products/ProductCardList';
import PaginationCard from '../../../components/products/PaginationCard';
import ProductFilterCard from '../../../components/products/ProductFilterCard';
import Sidenav from '../../../components/sidenav/Sidenav';
import { H5, Paragraph } from '../../../components/Typography';
import React, { useCallback, useState } from 'react'; 
import { searchProduct } from '../../api/products/search/[params]';
import { useRouter } from 'next/router';

const ProductSearchResult = ({ data, params }) => {
  const router = useRouter();
  const { id } = router.query;
  const [view, setView] = useState('grid');
  const downMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const toggleView = useCallback((v) => () => setView(v), []);
  return (
    <NavbarLayout>
      <Box pt={2.5}>
        <Card
          elevation={1}
          sx={{
            mb: '55px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: {
              sm: '1rem 1.25rem',
              md: '0.5rem 1.25rem',
              xs: '1.25rem 1.25rem 0.25rem',
            },
          }}
        >
          <Box>
            <H5>{`Searching for ${params}`} </H5>
            <Paragraph color='grey.600'>
              {`${data?.length} results found`}{' '}
            </Paragraph>
          </Box>

          <FlexBox
            alignItems='center'
            columnGap={4}
            flexWrap='wrap'
            my='0.5rem'
          >
            <FlexBox alignItems='center' gap={1} flex='1 1 0'>
              <Paragraph color='grey.600' whiteSpace='pre'>
                Short by:
              </Paragraph>

              <TextField
                select
                fullWidth
                size='small'
                variant='outlined'
                placeholder='Short by'
                defaultValue={sortOptions[0].value}
                sx={{
                  flex: '1 1 0',
                  minWidth: '150px',
                }}
              >
                {sortOptions.map((item) => (
                  <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </FlexBox>

            <FlexBox alignItems='center' my='0.25rem'>
              <Paragraph color='grey.600' mr={1}>
                View:
              </Paragraph>

              <IconButton onClick={toggleView('grid')}>
                <Apps
                  color={view === 'grid' ? 'primary' : 'inherit'}
                  fontSize='small'
                />
              </IconButton>

              <IconButton onClick={toggleView('list')}>
                <ViewList
                  color={view === 'list' ? 'primary' : 'inherit'}
                  fontSize='small'
                />
              </IconButton>

              {downMd && (
                <Sidenav
                  handle={
                    <IconButton>
                      <FilterList fontSize='small' />
                    </IconButton>
                  }
                >
                  <ProductFilterCard category={params} />
                </Sidenav>
              )}
            </FlexBox>
          </FlexBox>
        </Card>

        <Grid container spacing={3}>
          <Grid
            item
            md={3}
            sx={{
              display: {
                md: 'block',
                xs: 'none',
              },
            }}
          >
            <ProductFilterCard category={params} />
          </Grid>

          <Grid item md={9} xs={12}>
            {view === 'grid' ? (
              <ProductCardList products={data || []} />
            ) : (
              <PaginationCard />
            )}
          </Grid>
        </Grid>
      </Box>
    </NavbarLayout>
  );
};

const sortOptions = [
  {
    label: 'Relevance',
    value: 'Relevance',
  },
  {
    label: 'Date',
    value: 'Date',
  },
  {
    label: 'Price Low to High',
    value: 'Price Low to High',
  },
  {
    label: 'Price High to Low',
    value: 'Price High to Low',
  },
];
export async function getServerSideProps(context) {
  console.log(context);
  ;
  const params = context.params.id;
  const data = await searchProduct(params);
  return {
    props: {
      data: data || null,
      params,
    },
  };
}
export default ProductSearchResult;
