import { ChevronRight } from '@mui/icons-material';
import { Box, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import React from 'react'; //styled component

const Wrapper = styled(Box)(({ theme }) => ({
  '& .category-dropdown-link': {
    height: 40,
    display: 'flex',
    minWidth: '278px',
    cursor: 'pointer',
    whiteSpace: 'pre',
    padding: '0px 1rem',
    alignItems: 'center',
    transition: 'all 250ms ease-in-out',
    '& .title': {
      flexGrow: 1,
      paddingLeft: '0.75rem',
    },
  },
  '&:hover': {
    '& > .category-dropdown-link': {
      color: theme.palette.primary.main,
      background: theme.palette.primary.light,
    },
    '& > .mega-menu': {
      display: 'block',
    },
  },
})); // =============================================================

// =============================================================
const CategoryMenuItem = (props) => {
  const { href, title, caret, children, ...rest } = props;
  return (
    <Wrapper>
      <Link href={href} passHref>
        <MenuItem className='category-dropdown-link'>
          {rest.icon && <rest.icon fontSize='small' color='inherit' />}
          <span className='title'>{title}</span>
          {caret && <ChevronRight fontSize='small' />}
        </MenuItem>
      </Link>

      {children}
    </Wrapper>
  );
};

CategoryMenuItem.defaultProps = {
  caret: true,
};
export default CategoryMenuItem;
