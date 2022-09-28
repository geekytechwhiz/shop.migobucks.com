import { Container, Grid } from '@mui/material';
import AppLayout from 'components/layouts/AppLayout';
import Navbar from 'components/navbar/Navbar';
import React from 'react';
import Navigations from './Navigations';

const CustomerDashboardLayout = ({ children }) => (
  <AppLayout navbar={<Navbar />}>
    <Container
      sx={{
        my: '2rem',
      }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          lg={3}
          xs={12}
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
            },
          }}
        >
          <Navigations />
        </Grid>

        <Grid item lg={9} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  </AppLayout>
);

export default CustomerDashboardLayout;
