 
import Add from '@mui/icons-material/Add';
import Close from '@mui/icons-material/Close';
import Remove from '@mui/icons-material/Remove';
import { Box, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MBAvatar from '../MBAvatar';
import MBButton from '../MBButton';
import MBIconButton from '../MBIconButton';
import { FlexBox } from '../flex-box';
import ShoppingBagOutlined from '../icons/ShoppingBagOutlined';
import LazyImage from '../LazyImage';
import { H5, Tiny } from '../Typography';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { postCartThunk } from '../../store/slices/customerSlice';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

const MiniCart = ({ toggleSidenav }) => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  debugger;
  const cartList =
    useSelector((state) => state.customer?.cart, shallowEqual) || [];

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

  const getTotalPrice = () => {
    return cartList.reduce((accum, item) => accum + item.SellingPrice * item.Quantity, 0);
  };


  return (
    <Box width='380px'>
      <Box
        overflow='auto'
        height={`calc(100vh - ${!!cartList.length ? '80px - 3.25rem' : '0px'})`}
      >
        <FlexBox
          alignItems='center'
          m='0px 20px'
          height='74px'
          color='secondary.main'
        >
          <ShoppingBagOutlined color='inherit' />
          <Box fontWeight={600} fontSize='16px' ml={1}>
            {cartList.length} item
          </Box>
        </FlexBox>

        <Divider />

        {!!!cartList.length && (
          <FlexBox
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            height='calc(100% - 74px)'
          >
            <LazyImage
              src='/assets/images/logos/shopping-bag.svg'
              width={90}
              height={100}
            />
            <Box
              component='p'
              mt={2}
              color='grey.600'
              textAlign='center'
              maxWidth='200px'
            >
              Your shopping bag is empty. Start shopping
            </Box>
          </FlexBox>
        )}
        {cartList.map((item) => (
          <FlexBox
            alignItems='center'
            py={2}
            px={2.5}
            borderBottom={`1px solid ${palette.divider}`}
            key={item.id}
          >
            <FlexBox alignItems='center' flexDirection='column'>
              <MBButton
                variant='outlined'
                color='primary'
                sx={{
                  height: '32px',
                  width: '32px',
                  borderRadius: '300px',
                }}
                onClick={handleCartAmountChange(1, item)}
              >
                <Add fontSize='small' />
              </MBButton>
              <Box fontWeight={600} fontSize='15px' my='3px'>
                {item.Quantity}
              </Box>
              <MBButton
                variant='outlined'
                color='primary'
                sx={{
                  height: '32px',
                  width: '32px',
                  borderRadius: '300px',
                }}
                onClick={handleCartAmountChange(0, item)}
                disabled={item.Quantity === 1}
              >
                <Remove fontSize='small' />
              </MBButton>
            </FlexBox>

            <Link href={`/product/${item.id}`}>
              <a>
                <MBAvatar
                  src={item.imgUrl || '/assets/images/products/iphone-x.png'}
                  mx={2}
                  alt={item.ProductName}
                  height={76}
                  width={76}
                />
              </a>
            </Link>

            <Box flex='1 1 0'>
              <Link href={`/product/${item.id}`}>
                <a>
                  <H5 className='title' fontSize='14px'>
                    {item.ProductName}
                  </H5>
                </a>
              </Link>
              <Tiny color='grey.600'>
                ${item?.SellingPrice?.toFixed(2)} x {item.Quantity}
              </Tiny>
              <Box
                fontWeight={600}
                fontSize='14px'
                color='primary.main'
                mt={0.5}
              >
                ${(item.Quantity * item.SellingPrice).toFixed(2)}
              </Box>
            </Box>

            <MBIconButton
              ml={2.5}
              size='small'
              onClick={handleCartAmountChange(0, item)}
            >
              <Close fontSize='small' />
            </MBIconButton>
          </FlexBox>
        ))}
      </Box>

      {!!cartList.length && (
        <Box p={2.5}>
          <Link href='/checkout' passHref>
            <MBButton
              variant='contained'
              color='primary'
              sx={{
                mb: '0.75rem',
                height: '40px',
              }}
              fullWidth
              onClick={toggleSidenav}
            >
              Checkout Now (${getTotalPrice().toFixed(2)})
            </MBButton>
          </Link>
          <Link href='/cart' passHref>
            <MBButton
              color='primary'
              variant='outlined'
              sx={{
                height: 40,
              }}
              fullWidth
              onClick={toggleSidenav}
            >
              View Cart
            </MBButton>
          </Link>
        </Box>
      )}
    </Box>
  );
};

MiniCart.defaultProps = {
  toggleSidenav: () => { },
};
export default MiniCart;
