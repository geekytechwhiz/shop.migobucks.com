import { Box } from '@mui/material';
import MBRating from '../MBRating';
import { FlexRowCenter } from '../flex-box';
import HoverBox from '../HoverBox';
import LazyImage from '../LazyImage';
import { H4, Small } from '../Typography';
import React from 'react';

const TopRatedCard = ({
  ImageUrl,
  Rating,
  Title,
  SellingPrice,
  ReviewCount = 0,
}) => {
  return (
    <Box>
      <HoverBox mb={2} mx='auto' borderRadius='8px'>
        <LazyImage
          src={ImageUrl || ''}
          width={0}
          height={0}
          layout='responsive'
          alt={Title}
          mx='auto'
        />
      </HoverBox>

      <FlexRowCenter mb={0.5}>
        <MBRating value={Rating} color='warn' readOnly />
        <Small fontWeight={600} pl={0.5}>
          ({ReviewCount})
        </Small>
      </FlexRowCenter>

      <H4 fontSize={14} textAlign='center' mb={0.5} title={Title} ellipsis>
        {Title}
      </H4>
      <H4 fontSize={14} textAlign='center' color='primary.main'>
        ${Math.ceil(SellingPrice).toLocaleString()}
      </H4>
    </Box>
  );
};

export default TopRatedCard;
