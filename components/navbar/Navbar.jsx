import ArrowRight from '@mui/icons-material/ArrowRight';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { Box, Container, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import MBButton from '../MBButton';
import MBCard from '../MBCard';
import CategoryMenu from '../categories/CategoryMenu';
import { FlexBox } from '../flex-box';
import Category from '../icons/Category';
import NavLink from '../nav-link/NavLink';
import { Paragraph } from '../Typography';
import navbarNavigations from '../../data/navbarNavigations';
import MegaMenu from './MegaMenu'; // component props interface

// const common css style
const navLinkStyle = {
  cursor: 'pointer',
  transition: 'color 150ms ease-in-out',
  '&:hover': {
    color: 'primary.main',
  },
  '&:last-child': {
    marginRight: '0',
  },
}; // style components

const StyledNavLink = styled(NavLink)(() => ({ ...navLinkStyle }));
const ParentNav = styled(Box)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
    '& > .parent-nav-item': {
      display: 'block',
    },
  },
}));
const ParentNavItem = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 5,
  left: '100%',
  display: 'none',
  position: 'absolute',
  [theme.breakpoints.down(1640)]: {
    right: '100%',
    left: 'auto',
  },
}));
const NavBarWrapper = styled(MBCard)(({ theme }) => ({
  height: '60px',
  display: 'block',
  borderRadius: '0px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
const InnerContainer = styled(Container)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
const CategoryMenuButton = styled(MBButton)(({ theme }) => ({
  px: '1rem',
  width: '278px',
  height: '40px',
  backgroundColor: theme.palette.grey[100],
}));
const ChildNavsWrapper = styled(Box)(() => ({
  left: '50%',
  zIndex: 5,
  top: '100%',
  display: 'none',
  position: 'absolute',
  transform: 'translate(-50%, 0%)',
}));

const Navbar = ({ navListOpen, hideCategories }) => {
  const renderNestedNav = (list, isRoot = false) => {
    return list?.map((nav) => {
      if (isRoot) {
        if (nav.url && nav.extLink)
          return (
            <StyledNavLink
              href={nav.url}
              key={nav.title}
              target='_blank'
              rel='noopener noreferrer'
            >
              {nav.title}
            </StyledNavLink>
          ); // show megamenu

        if (nav.megaMenu)
          //@ts-ignore
          return (
            <MegaMenu key={nav.title} title={nav.title} menuList={nav.child} />
          );
        if (nav.url)
          return (
            <StyledNavLink href={nav.url} key={nav.title}>
              {nav.title}
            </StyledNavLink>
          );
        if (nav.child)
          return (
            <FlexBox
              key={nav.title}
              alignItems='center'
              position='relative'
              flexDirection='column'
              sx={{
                '&:hover': {
                  '& > .child-nav-item': {
                    display: 'block',
                  },
                },
              }}
            >
              <Box sx={navLinkStyle}>{nav.title}</Box>

              <ChildNavsWrapper className='child-nav-item'>
                <MBCard
                  elevation={3}
                  sx={{
                    mt: 2.5,
                    py: 1,
                    minWidth: 200,
                  }}
                >
                  {renderNestedNav(nav.child)}
                </MBCard>
              </ChildNavsWrapper>
            </FlexBox>
          );
      } else {
        if (nav.url)
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem>{nav.title}</MenuItem>
            </NavLink>
          );
        if (nav.child)
          return (
            <ParentNav position='relative' minWidth='230px' key={nav.title}>
              <MenuItem color='grey.700'>
                <Box flex='1 1 0' component='span'>
                  {nav.title}
                </Box>
                <ArrowRight fontSize='small' />
              </MenuItem>

              <ParentNavItem className='parent-nav-item' pl={1}>
                <MBCard
                  sx={{
                    py: '0.5rem',
                    minWidth: '230px',
                  }}
                  elevation={3}
                >
                  {renderNestedNav(nav.child)}
                </MBCard>
              </ParentNavItem>
            </ParentNav>
          );
      }
    });
  };

  return (
    <NavBarWrapper elevation={2} hoverEffect={false}>
      {!hideCategories ? (
        <InnerContainer>
          <CategoryMenu open={navListOpen}>
            <CategoryMenuButton variant='text'>
              <Category fontSize='small' />
              <Paragraph
                fontWeight='600'
                textAlign='left'
                flex='1 1 0'
                ml={1.25}
                color='grey.600'
              >
                Categories
              </Paragraph>

              <ChevronRight className='dropdown-icon' fontSize='small' />
            </CategoryMenuButton>
          </CategoryMenu>

          <FlexBox gap={4}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      ) : (
        <InnerContainer
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <FlexBox gap={4}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      )}
    </NavBarWrapper>
  );
};

export default Navbar;
