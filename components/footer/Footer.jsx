import { Box, Container, Grid } from '@mui/material';

import { styled } from '@mui/material/styles'; 
import AppStore from '../AppStore';
import MBIconButton from '../MBIconButton';
import Image from '../MBImage';
import { FlexBox } from '../flex-box';
import Facebook from '../icons/Facebook';
import Google from '../icons/Google';
import Instagram from '../icons/Instagram';
import Twitter from '../icons/Twitter';
import Youtube from '../icons/Youtube';
import { Paragraph } from '../Typography';
import Link from 'next/link';
import React from 'react'; // styled component

const StyledLink = styled('a')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: '0.3rem 0rem',
  color: theme.palette.grey[500],
  cursor: 'pointer',
  borderRadius: 4,
  '&:hover': {
    color: theme.palette.grey[100],
  },
}));

const Footer = () => {
  return (
    <footer>
      <Box bgcolor='#0c0e30'>
        <Container
          sx={{
            p: '1rem',
            color: 'white',
          }}
        >
          <Box py={10} overflow='hidden'>
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href='/'>
                  <a>
                    <Image
                      mb={2.5}
                      src='/assets/images/miblogo.png'
                      alt='logo'
                    />
                  </a>
                </Link>

                <Paragraph mb={2.5} color='grey.500'>
                  Migobucks, a product of Migobucks Technology Private Limited,
                  is India’s one of the young social-commerce software, which
                  offers you a platform for sharing brand experience, create
                  personal circles and connect with them by Sharing and earning
                  rewards.
                </Paragraph>

                <AppStore />
              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize='25px'
                  fontWeight='600'
                  mb={2.5}
                  lineHeight='1'
                  color='white'
                >
                  About Us
                </Box>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <Link href='/' key={ind} passHref>
                      <StyledLink>{item}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize='25px'
                  fontWeight='600'
                  mb={2.5}
                  lineHeight='1'
                  color='white'
                >
                  Customer Care
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <Link href='/' key={ind} passHref>
                      <StyledLink>{item}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize='25px'
                  fontWeight='600'
                  mb={2.5}
                  lineHeight='1'
                  color='white'
                >
                  Contact Us
                </Box>
                <Box py={0.6} color='grey.500'>
                  NO.14, Hosabasavanapura, Krishnarajapura, Bengaluru,
                  Karnataka, India
                </Box>
                <Box py={0.6} color='grey.500'>
                  Email: support@migobucks.com
                </Box>
                <Box py={0.6} mb={2} color='grey.500'>
                  Phone: +91 9037243199
                </Box>

                <FlexBox className='flex' mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <a
                      href={item.url}
                      target='_blank'
                      rel='noreferrer noopenner'
                      key={ind}
                    >
                      <MBIconButton
                        m={0.5}
                        bgcolor='rgba(0,0,0,0.2)'
                        fontSize='12px'
                        padding='10px'
                      >
                        <item.icon fontSize='inherit' />
                      </MBIconButton>
                    </a>
                  ))}
                </FlexBox>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

const aboutLinks = [
  'Careers',
  'Our Stores',
  'Our Cares',
  'Terms & Conditions',
  'Privacy Policy',
];
const customerCareLinks = [
  'Help Center',
  'How to Buy',
  'Track Your Order',
  'Corporate & Bulk Purchasing',
  'Returns & Refunds',
];
const iconList = [
  {
    icon: Facebook,
    url: 'https://www.facebook.com/UILibOfficial',
  },
  {
    icon: Twitter,
    url: 'https://twitter.com/uilibofficial',
  },
  {
    icon: Youtube,
    url: 'https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg',
  },
  {
    icon: Google,
    url: '/',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/uilibofficial/',
  },
];
export default Footer;
