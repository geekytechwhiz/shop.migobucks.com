import { KeyboardArrowDown, PersonOutline } from '@mui/icons-material';
import { Badge, Box, Dialog, Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';
import MBButton from '../MBButton';
import Image from '../MBImage';
import CategoryMenu from '../categories/CategoryMenu'; 
import { FlexBox } from '../flex-box';
import Category from '../icons/Category';
import ShoppingBagOutlined from '../icons/ShoppingBagOutlined';
import MiniCart from '../mini-cart/MiniCart'; 
import Link from 'next/link';
import Login from '../sessions/Login';
import { useState } from 'react';
import { layoutConstant } from '../../utils/constants'; 
import SearchBox from '../search-box/SearchBox'; // styled component
import { useSelector, shallowEqual } from 'react-redux';

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: 'relative',
  height: layoutConstant.headerHeight,
  transition: 'height 250ms ease-in-out',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: {
    height: layoutConstant.mobileHeaderHeight,
  },
})); 
// ==============================================================

// ==============================================================
export const Header = ({ isFixed, className }) => { 
  const theme = useTheme(); 
  const cartItems =
    useSelector((state) => state.customer?.cart, shallowEqual) || [];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const toggleDialog = () => setDialogOpen(!dialogOpen);

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  const cartHandle = (
    <Badge badgeContent={cartItems?.length || 0} color='primary'>
      <Box
        component={IconButton}
        ml={2.5}
        bgcolor='grey.200'
        p={1.25}
        onClick={toggleSidenav}
      >
        <ShoppingBagOutlined />
      </Box>
    </Badge>
  );
  return (
    <HeaderWrapper className={clsx(className)}>
      <Container
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <FlexBox
          mr={2}
          minWidth='170px'
          alignItems='center'
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          <Link href='/'>
            <a>
              <Image
                height={28}
                mb={0.5}
                src='/assets/images/mib-log.png'
                alt='logo'
              />
            </a>
          </Link>

          {isFixed && (
            <CategoryMenu>
              <FlexBox color='grey.600' alignItems='center' ml={2}>
                <MBButton color='inherit'>
                  <Category fontSize='small' color='inherit' />
                  <KeyboardArrowDown fontSize='small' color='inherit' />
                </MBButton>
              </FlexBox>
            </CategoryMenu>
          )}
        </FlexBox>

        <FlexBox justifyContent='center' flex='1 1 0'>
          <SearchBox />
        </FlexBox>

        <FlexBox
          alignItems='center'
          gap={2}
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          <Box
            component={IconButton}
            p={1.25}
            bgcolor='grey.200'
            onClick={toggleDialog}
          >
            <PersonOutline />
          </Box>

          {cartHandle}
        </FlexBox>

        <Dialog
          open={dialogOpen}
          fullWidth={isMobile}
          scroll='body'
          onClose={toggleDialog}
        >
          <Login />
        </Dialog>

        <Drawer open={sidenavOpen} anchor='right' onClose={toggleSidenav}>
          <MiniCart />
        </Drawer>
      </Container>
    </HeaderWrapper>
  );
};

// export default Header;
