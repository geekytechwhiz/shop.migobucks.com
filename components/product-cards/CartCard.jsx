/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Close, Remove } from '@mui/icons-material';
import { Button, Card, IconButton } from '@mui/material';
import Image from 'components/MBImage';
import { FlexBox } from 'components/flex-box';
import { Span } from 'components/Typography';
import Link from 'next/link';
import { useCallback } from 'react'; // styled components
import { useSelector, useDispatch } from 'react-redux';

import { styled } from '@mui/material/styles';

const Wrapper = styled(Card)(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  position: 'relative',
  borderRadius: '10px',
  marginBottom: '1.5rem',
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,
  '@media only screen and (max-width: 425px)': {
    flexWrap: 'wrap',
    img: {
      height: 'auto',
      minWidth: '100%',
    },
  },
})); // =========================================================

// =========================================================
const CartCard = ({ ProductId, ProductName, Quantity, SellingPrice, Url }) => {
  const cartItems = useSelector((state) => state.customer?.cart) || [];
  const dispatch = useDispatch();
  let price = parseInt(SellingPrice);
  let qnty = parseInt(Quantity);

  const handleRemove = useCallback((item) => {
    const modifiedCart = cartItems.filter(
      (x) => x.ProductId !== item.ProductId
    );
    dispatch();
  });
  const handleCartAmountChange = useCallback(
    (quantity, product) => async () => { 
      let cartItem = []
      if (quantity === 1) {
        const cart = cartList.find(x => x.ProductId === product.ProductId)
        if (cart) {
          const items = cartList.map(item => { 
            if (item.ProductId == product.ProductId) { 
              return { ...obj, Quantity: (item.Quantity + 1) }
            } 
          })
          cartItem = items
        } else {
          const item = [{
            ProductId: product.ProductId,
            ProductName: product.ProductName,
            SellingPrice: product.SellingPrice,
            Quantity: 1
          }]
          cartItem = [...item, ...cartList]
        }

      } else {
        cartItem = cartList.filter(x => {
          return (x.ProductId !== product.ProductId)
        })
      }

      const mobile = localStorage.getItem('mobile') || '9037243199';

      const req = {
        CustomerId: 'C1663935964411',
        Mobile: mobile,
        CartItems: cartItem
      }
      dispatch(postCartThunk(req))
    },
    []
  ); 
  
  return (
    <Wrapper>
      <Image
        alt={ProductName}
        width={140}
        height={140}
        display='block'
        src={Url || '/assets/images/products/iphone-xi.png'}
      />

      <IconButton
        size='small'
        onClick={handleCartAmountChange(0)}
        sx={{
          position: 'absolute',
          right: 15,
          top: 15,
        }}
      >
        <Close fontSize='small' />
      </IconButton>

      <FlexBox p={2} rowGap={2} width='100%' flexDirection='column'>
        <Link href={`/product/${ProductId}`}>
          <a>
            <Span ellipsis fontWeight='600' fontSize={18}>
              {ProductName}
            </Span>
          </a>
        </Link>

        <FlexBox gap={1} flexWrap='wrap' alignItems='center'>
          <Span color='grey.600'>
            ${price} x {qnty}
          </Span>

          <Span fontWeight={600} color='primary.main'>
            ${(price * qnty).toFixed(2)}
          </Span>
        </FlexBox>

        <FlexBox alignItems='center'>
          <Button
            color='primary'
            sx={{
              p: '5px',
            }}
            variant='outlined'
            disabled={qnty === 1}
            onClick={handleCartAmountChange(qnty - 1)}
          >
            <Remove fontSize='small' />
          </Button>

          <Span mx={1} fontWeight={600} fontSize={15}>
            {qnty}
          </Span>
          <Button
            color='primary'
            sx={{
              p: '5px',
            }}
            variant='outlined'
            onClick={handleCartAmountChange(qnty + 1)}
          >
            <Add fontSize='small' />
          </Button>
        </FlexBox>
      </FlexBox>
    </Wrapper>
  );
};

export default CartCard;
