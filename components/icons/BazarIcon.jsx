import { SvgIcon } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const MigobucksIcon = () => {
  return (
    <SvgIcon htmlColor='primary' viewBox='0 0 24 24'> 
      <Image
        src='/assets/images/icons/bag.svg'
        alt='Cart'
        width={50}
        height={50}
      />
    </SvgIcon>
  );
};

export default MigobucksIcon;
