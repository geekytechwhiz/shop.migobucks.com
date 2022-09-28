import { Box } from '@mui/material';
import HoverBox from '../HoverBox';
import LazyImage from '../LazyImage';
import { H4 } from '../Typography';
import React from 'react'; // ==========================================================

// ==========================================================
const TopRatedBrand = ({ ImageUrl, Title }) => {
  return (
    <Box>
      <HoverBox borderRadius='5px' mb={1}>
        <LazyImage
          alt={Title}
          width={260}
          src={ImageUrl || ''}
          height={175}
          objectFit='cover'
          layout='responsive'
        />
      </HoverBox>
      <H4 fontSize={14}>{Title}</H4>
    </Box>
  );
};

export default TopRatedBrand;
