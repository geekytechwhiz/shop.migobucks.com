import { Button, Grid } from '@mui/material';

import { styled } from '@mui/material/styles';
import MBImage from '../MBImage';
import { FlexBetween } from '../flex-box';
import { Paragraph } from '../Typography';
// styled component
const StyledBox = styled(FlexBetween)(({ theme }) => ({
  '.title': {
    fontSize: 50,
    marginTop: 0,
    lineHeight: 1.2,
    marginBottom: '1.35rem',
  },
  [theme.breakpoints.up('sm')]: {
    '.grid-item': {
      minHeight: 424,
      display: 'flex',
      alignItems: 'baseline',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    paddingLeft: 0,
    '.title': {
      fontSize: 32,
    },
  },
  [theme.breakpoints.down('xs')]: {
    '.title': {
      fontSize: 16,
    },
    '.title + *': {
      fontSize: 13,
    },
    '.button-link': {
      height: 36,
      padding: '0 1.5rem',
      fontSize: 13,
    },
  },
})); // ==================================================

// ==================================================
const CarouselCard = ({ carousel }) => {
  return (
    <StyledBox>
      <Grid container spacing={3} alignItems='center' justifyContent='center'>
        <Grid item className='grid-item' sm={5} xs={12}>
          <h1 className='title'>{carousel.title}</h1>
          <Paragraph color='secondary.main' mb={2.7}>
            {carousel.description}
          </Paragraph>

          <a href={carousel.buttonLik}>
            <Button
              color='primary'
              disableElevation
              variant='contained'
              className='button-link'
              sx={{
                px: '1.75rem',
                height: 44,
                borderRadius: '8px',
              }}
            >
              {carousel.buttonText}
            </Button>
          </a>
        </Grid>

        <Grid item sm={5} xs={12}>
          <MBImage
            alt='apple-watch-1'
            src={carousel.photoUrl}
            sx={{
              mx: 'auto',
              maxHeight: 400,
              display: 'block',
              maxWidth: '100%',
            }}
          />
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default CarouselCard;
