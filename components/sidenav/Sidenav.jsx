import { Drawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import React, { cloneElement, useEffect, useState } from 'react'; // styled component

const Wrapper = styled('div')(() => ({
  '& .handle': {
    cursor: 'pointer',
  },
})); // ================================================================

// ================================================================
const Sidenav = (props) => {
  // props list
  const {
    position,
    open,
    width = 280,
    handle,
    children,
    toggleSidenav,
  } = props; // state

  const [sidenavOpen, setSidenavOpen] = useState(open);

  const handleToggleSidenav = () => setSidenavOpen(!sidenavOpen);

  useEffect(() => {
    setSidenavOpen(open);
  }, [open]);
  return (
    <Wrapper>
      <Drawer
        anchor={position}
        open={sidenavOpen}
        onClose={toggleSidenav || handleToggleSidenav}
        SlideProps={{
          style: {
            width,
          },
        }}
      >
        {children}
      </Drawer>

      {handle &&
        cloneElement(handle, {
          onClick: toggleSidenav || handleToggleSidenav,
          className: clsx(handle.props?.className, 'handle'),
        })}
    </Wrapper>
  );
}; // set default component props

Sidenav.defaultProps = {
  width: 280,
  position: 'left',
  open: false,
};
export default Sidenav;
