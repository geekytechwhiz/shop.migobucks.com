/* eslint-disable */
import { Box } from '@mui/material';
import MBCard from '../MBCard';
import Carousel from '../carousel/Carousel';
import CategorySectionCreator from '../CategorySectionCreator';
import { FlexBox } from '../flex-box';
import HoverBox from '../HoverBox';
import GiftBox from '../icons/GiftBox';
import LazyImage from '../LazyImage';
import { H4 } from '../Typography';
import useWindowSize from '../../hooks/useWindowSize';
// import { styled } from '@mui/system';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const ContentWrapper = styled(Box)(() => ({
  padding: '1rem',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  '& .Tittle, & .categories': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));
const BigDiscount = ({ bigDiscountList }) => {
  const [visibleSlides, setVisibleSlides] = useState(6);
  const width = useWindowSize();
  useEffect(() => {
    if (width < 370) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(6);
  }, [width]);
  return (
    <CategorySectionCreator
      icon={<GiftBox />}
      title='Big Discounts'
      seeMoreLink='#'
    >
      <Box my='-0.25rem'>
        <Carousel totalSlides={9} visibleSlides={visibleSlides}>
          {bigDiscountList.map((item) => (
            <Box py={0.5} key={item.ProductId}>
              <MBCard
                sx={{
                  p: '1rem',
                }}
              >
                <Link href={`/product/${item.ProductId}`}>
                  <a>
                    <HoverBox borderRadius='8px' mb={1}>
                      <LazyImage
                        width={100}
                        height={100}
                        src={item.ImageUrl || ''}
                        layout='responsive'
                        alt={item.Title}
                      />
                    </HoverBox>
                    <ContentWrapper>
                      <H4
                        fontWeight='600'
                        fontSize='14px'
                        className='Tittle'
                        mb={0.5}
                        title={item.Title}
                      >
                        {item.Title}
                      </H4>
                    </ContentWrapper>
                    <FlexBox gap={1}>
                      <H4 fontWeight='600' fontSize='14px' color='primary.main'>
                        ${Math.ceil(item.SellingPrice).toLocaleString()}
                      </H4>

                      <H4 fontWeight='600' fontSize='14px' color='grey.600'>
                        <del>
                          ${Math.ceil(item.SellingPrice).toLocaleString()}
                        </del>
                      </H4>
                    </FlexBox>
                  </a>
                </Link>
              </MBCard>
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
};

export default BigDiscount;
