import { Badge, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import CategoryOutlined from '../icons/CategoryOutline';
import Home from '../icons/Home';
import ShoppingBagOutlined from '../icons/ShoppingBagOutlined';
import User2 from '../icons/User2';
import NavLink from '../nav-link/NavLink';
// import { useAppContext } from 'contexts/AppContext';
import useWindowSize from '../../hooks/useWindowSize';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import React from 'react';
import { layoutConstant } from '../../utils/constants'; // styled components

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: layoutConstant.mobileNavHeight,
  justifyContent: 'space-around',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 1px 4px 3px rgba(0, 0, 0, 0.1)',
  zIndex: 999,
  '@media only screen and (max-width: 900px)': {
    display: 'flex',
    width: '100vw',
  },
}));
const StyledNavLink = styled(NavLink)(() => ({
  flex: '1 1 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '13px',
}));

const MobileNavigationBar = () => {
  const width = useWindowSize();
  // const { state } = useAppContext();
  const cartList =
    useSelector((state) => state.customer?.cart, shallowEqual) || [];
  const iconStyle = {
    marginBottom: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return width <= 900 ? (
    <Wrapper>
      {list.map((item) => (
        <StyledNavLink href={item.href} key={item.title}>
          {item.title === 'Cart' ? (
            <Badge badgeContent={cartList.length} color='primary'>
              <item.icon fontSize='small' sx={iconStyle} />
            </Badge>
          ) : (
            <item.icon sx={iconStyle} fontSize='small' />
          )}

          {item.title}
        </StyledNavLink>
      ))}
    </Wrapper>
  ) : null;
};

const list = [
  {
    title: 'Home',
    icon: Home,
    href: '/',
  },
  {
    title: 'Category',
    icon: CategoryOutlined,
    href: '/mobile-category-nav',
  },
  {
    title: 'Cart',
    icon: ShoppingBagOutlined,
    href: '/cart',
  },
  {
    title: 'Account',
    icon: User2,
    href: '/profile',
  },
];
export default MobileNavigationBar;
