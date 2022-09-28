 
import { Add, Favorite, Remove } from '@mui/icons-material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { Box, Button, Chip, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import MBCard from '../MBCard';
import MBRating from '../MBRating';
import LazyImage from '../LazyImage';
import { H3, Span } from '../Typography';
import Link from 'next/link';
import React, { Fragment, useCallback, useState, memo } from 'react';
import { FlexBox } from '../flex-box';
import { useSelector, shallowEqual } from 'react-redux'; 


const StyledMBCard = styled(MBCard)(() => ({
  height: '100%',
  margin: 'auto',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'all 250ms ease-in-out',
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  display: 'inline-block',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));
const StyledChip = styled(Chip)(() => ({
  zIndex: 1,
  top: '10px',
  left: '10px',
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: '10px',
  position: 'absolute',
}));
const LoveIconWrapper = styled(Box)(() => ({
  zIndex: 2,
  top: '7px',
  right: '15px',
  cursor: 'pointer',
  position: 'absolute',
}));
const ContentWrapper = styled(Box)(() => ({
  padding: '1rem',
  '& .title, & .categories': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
})); 

const ProductCard = ({
  imgUrl,
  id,
  tittle,
  brandId,
  price,
  rating,
  hideRating,
  hoverEffect,
  discount = 0,
  showProductSize,
}) => {
   
  const [isFavorite, setIsFavorite] = useState(false);
  const cartItem =
    useSelector((state) => state.customer?.cart, shallowEqual) || [];
  const toggleIsFavorite = () => setIsFavorite((fav) => !fav);

  const handleCartAmountChange = useCallback(
    (quantity, product) => async () => { 
      let cartItem = [];
      if (quantity === 1) {
        const cart = cartList.find(x => x.ProductId === product.ProductId);
        if (cart) {
          const items = cartList.map(item => { 
            if (item.ProductId == product.ProductId) { 
              return { ...obj, Quantity: (item.Quantity + 1) };
            } 
          });
          cartItem = items;
        } else {
          const item = [{
            ProductId: product.ProductId,
            ProductName: product.ProductName,
            SellingPrice: product.SellingPrice,
            Quantity: 1
          }];
          cartItem = [...item, ...cartList];
        }

      } else {
        cartItem = cartList.filter(x => {
          return (x.ProductId !== product.ProductId);
        });
      }

      const mobile = localStorage.getItem('mobile') || '9037243199';

      const req = {
        CustomerId: 'C1663935964411',
        Mobile: mobile,
        CartItems: cartItem
      };
      dispatch(postCartThunk(req));
    },
    []
  ); 
  
  return (
    <StyledMBCard hoverEffect={hoverEffect}>
      <ImageWrapper>
        {!!discount && (
          <StyledChip color='primary' size='small' label={`${discount}% off`} />
        )}

        <LoveIconWrapper>
          <IconButton
            sx={{
              p: '6px',
            }}
            onClick={toggleIsFavorite}
          >
            {isFavorite ? (
              <Favorite color='primary' fontSize='small' />
            ) : (
              <FavoriteBorder fontSize='small' />
            )}
          </IconButton>
        </LoveIconWrapper>

        <Link href={`/product/${id}`}>
          <a>
            <LazyImage
              src={imgUrl || ''} 
              width={0} 
              height={0}
              layout='responsive'
              alt={tittle}
            />
          </a>
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <FlexBox>
          <Box flex='1 1 0' minWidth='0px' mr={1}>
            <Link href={`/product/${id}`}>
              <a>
                <H3
                  mb={1}
                  title={tittle}
                  fontSize='14px'
                  fontWeight='600'
                  className='title'
                  color='text.secondary'
                >
                  {tittle}
                </H3>
              </a>
            </Link>

            {!hideRating && (
              <MBRating value={rating || 0} color='warn' readOnly />
            )}

            {showProductSize && (
              <Span color='grey.600' mb={1} display='block'>
                300ml
              </Span>
            )}

            <FlexBox alignItems='center' gap={1} mt={0.5}>
              <Box fontWeight='600' color='primary.main'>
                ${price?.toFixed(2)} 
              </Box>

              {!!discount && (
                <Box color='grey.600' fontWeight='600'>
                  <del>{discount?.toFixed(2)}</del>
                </Box>
              )}
            </FlexBox>
          </Box>

          <FlexBox
            width='30px'
            alignItems='center'
            className='add-cart'
            flexDirection='column-reverse'
            justifyContent={!!cartItem?.Quantity ? 'space-between' : 'flex-start'}
          >
            <Button
              color='primary'
              variant='outlined'
              sx={{
                padding: '3px',
              }}
              onClick={handleCartAmountChange()}
            >
              <Add fontSize='small' />
            </Button>

            {!!cartItem?.Quantity && (
              <Fragment>
                <Box color='text.primary' fontWeight='600'>
                  {cartItem?.Quantity}
                </Box>
                <Button
                  color='primary'
                  variant='outlined'
                  sx={{
                    padding: '3px',
                  }}
                  onClick={handleCartAmountChange()}
                >
                  <Remove fontSize='small' />
                </Button>
              </Fragment>
            )}
          </FlexBox>
        </FlexBox>
      </ContentWrapper>
    </StyledMBCard>
  );
};

export default memo(ProductCard);
