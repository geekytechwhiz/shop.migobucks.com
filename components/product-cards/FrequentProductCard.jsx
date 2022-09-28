import MBCard from '../MBCard';
import { FlexBox } from '../flex-box';
import HoverBox from '../HoverBox';
import LazyImage from '../LazyImage';
import { H6, Span } from '../Typography';
import Link from 'next/link';
import React from 'react'; // =======================================================

// =======================================================
const FrequentProductCard = (props) => {
  const { ProductId, ImageUrl, SellingPrice, Title, sx = {} } = props;
  return (
    <MBCard
      sx={{
        p: 2,
        ...sx,
      }}
    >
      <Link href={`/product/${ProductId}`}>
        <a>
          <HoverBox mb={1.5} borderRadius='8px'>
            <LazyImage
              width={500}
              height={500}
              borderRadius='8px'
              layout='responsive'
              objectFit='contain'
              objectPosition='center'
              src={ImageUrl || '/assets/images/products/Rectangle 116.png'}
            />
          </HoverBox>

          <Span Title={Title} mb={0.5} color='inherit' ellipsis display='block'>
            {Title}
          </Span>

          <FlexBox alignItems='center'>
            <H6 color='primary.main' mr={0.5}>
              ${SellingPrice}
            </H6>

            <Span color='grey.600'>
              <del>$1600</del>
            </Span>
          </FlexBox>
        </a>
      </Link>
    </MBCard>
  );
};

export default FrequentProductCard;
