import { Box, Grid, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import MBCard from '../MBCard';
import NavLink from '../nav-link/NavLink';
import { H6 } from '../Typography';
// style ..
const Wrapper = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative',
  transition: 'color 150ms ease-in-out',
  ':hover': {
    color: theme.palette.primary.main,
    '& .menu-list': {
      display: 'block',
    },
  },
}));
const MenusContainer = styled(ListItem)(({ theme }) => ({
  zIndex: 2,
  top: '100%',
  minWidth: 1000,
  display: 'none',
  position: 'absolute',
  transform: 'translate(-50%, 0%)',
  [theme.breakpoints.down(1070)]: {
    minWidth: 800,
  },
}));
const MenuListItem = styled(ListItem)(() => ({
  padding: '.5rem 0',
}));
const StyledNavLink = styled(NavLink)(() => ({
  transition: 'all 0.3s',
  ':hover': {
    paddingLeft: 5,
  },
})); // ===============================================================

// ===============================================================
const gridSize = (length) => {
  if (length === 1) return 12;
  if (length === 2) return 6;
  if (length === 3) return 4;
  if (length === 4) return 3;
  return 3;
};

const MegaMenu = ({ title, menuList }) => {
  debugger;
  // get grid size the basis of menu list
  const grid = gridSize(menuList.length);
  return (
    <Wrapper>
      <Box>{title}</Box>

      <MenusContainer className='menu-list'>
        <MBCard
          elevation={3}
          sx={{
            mt: 1.5,
            overflow: 'hidden',
          }}
        >
          <Grid container>
            {menuList.slice(0, 4).map((category, key) => (
              <Grid
                item
                md={grid}
                key={key}
                sx={{
                  px: 4,
                  py: 2,
                  ':nth-of-type(odd)': {
                    backgroundColor: 'grey.100',
                  },
                }}
              >
                {category.map((item) => {
                  return (
                    <List key={item.title}>
                      <H6 mb={0.5}>{item.title}</H6>

                      {item.child.map((sub) => {
                        return (
                          <MenuListItem key={sub.title}>
                            <StyledNavLink href='#'>{sub.title}</StyledNavLink>
                          </MenuListItem>
                        );
                      })}
                    </List>
                  );
                })}
              </Grid>
            ))}
          </Grid>
        </MBCard>
      </MenusContainer>
    </Wrapper>
  );
};

export default MegaMenu;
