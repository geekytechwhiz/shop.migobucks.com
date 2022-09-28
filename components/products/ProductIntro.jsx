
import { Add, Remove } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import MBAvatar from '../MBAvatar';
import MBButton from '../MBButton';
import MBRating from '../MBRating';
import LazyImage from '../LazyImage';
import { H1, H2, H3, H6 } from '../Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import React, { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import { FlexBox, FlexRowCenter } from '../flex-box'; // ================================================================
import { postCartThunk } from '../../store/slices/customerSlice';
import { useSelector, shallowEqual } from 'react-redux';

// ================================================================
const ProductIntro = ({ product }) => {
  const dispatch = useDispatch();
  ;
  const {
    ProductId,
    Title,
    ImageLinks,
    ProductBrand,
    Rating,
    Reviews,
    BrandName,
    ProductName,
    SellingPrice,
    Color,
    ModelName,
  } = product;
  const router = useRouter();
  const routerId = router.query.id;
  const [selectedImage, setSelectedImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const cartItems =
    useSelector((state) => state.customer?.cart, shallowEqual) || [];
  const cartList = [];
  const cartItem = cartList.find(
    (item) => item.id === ProductId || item.id === routerId
  );

  const handleImageClick = (ind) => () => {
    setSelectedImage(ind);
  };

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

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

  // const handleBuy = () => {
  //   router.replace('/cart');
  // };
  return (
    <Box width='100%'>
      <Grid container spacing={3} justifyContent='space-around'>
        <Grid item md={6} xs={12} alignItems='center'>
          <FlexBox justifyContent='center' mb={6}>
            <LazyImage
              width={300}
              alt={Title}
              height={300}
              loading='eager'
              objectFit='contain'
              src={ImageLinks && ImageLinks[selectedImage] || Title}
              onClick={() =>
                openImageViewer(ImageLinks?.indexOf(ImageLinks[selectedImage]))
              }
            />
            {isViewerOpen && (
              <ImageViewer
                src={ImageLinks}
                onClose={closeImageViewer}
                currentIndex={currentImage}
                backgroundStyle={{
                  backgroundColor: 'rgba(0,0,0,0.9)',
                  zIndex: 1501,
                }}
              />
            )}
          </FlexBox>

          <FlexBox overflow='auto'>
            {ImageLinks?.map((url, ind) => (
              <FlexRowCenter
                key={ind}
                width={64}
                height={64}
                minWidth={64}
                bgcolor='white'
                border='1px solid'
                borderRadius='10px'
                ml={ind === 0 ? 'auto' : 0}
                style={{
                  cursor: 'pointer',
                }}
                onClick={handleImageClick(ind)}
                mr={ind === ImageLinks?.length - 1 ? 'auto' : '10px'}
                borderColor={
                  selectedImage === ind ? 'primary.main' : 'grey.400'
                }
              >
                <MBAvatar src={url} variant='square' height={40} />
              </FlexRowCenter>
            ))}
          </FlexBox>
        </Grid>

        <Grid item md={6} xs={12} alignItems='center'>
          <H1 mb={2}>{Title}</H1>

          <FlexBox alignItems='center' mb={2}>
            <Box>Brand:</Box>
            <H6 ml={1}>{ProductBrand}</H6>
          </FlexBox>

          <FlexBox alignItems='center' mb={2}>
            <Box lineHeight='1'>Rated:</Box>
            <Box mx={1} lineHeight='1'>
              <MBRating
                color='warn'
                fontSize='1.25rem'
                value={Rating}
                readOnly
              />
            </Box>
            <H6 lineHeight='1'>{`(${Reviews?.length || 0})`}</H6>
          </FlexBox>

          <Box mb={3}>
            <H2 color='primary.main' mb={0.5} lineHeight='1'>
              ₹{SellingPrice}
            </H2>
            <Box color='inherit'>Stock Available</Box>
          </Box>

          {!cartItem?.qty ? (
            <FlexBox gap={3}>
              <MBButton
                color='secondary'
                variant='contained'
                onClick={handleCartAmountChange(1)}
                sx={{
                  mb: 4.5,
                  px: '1.75rem',
                  height: 40,
                }}
              >
                Add to Cart
              </MBButton>
              <MBButton
                color='primary'
                variant='contained'
                onClick={() => {
                  router.replace('/checkout');
                }}
                sx={{
                  mb: 4.5,
                  px: '1.75rem',
                  height: 40,
                }}
              >
                Buy Now
              </MBButton>
            </FlexBox>
          ) : (
            <FlexBox alignItems='center' mb={4.5}>
              <MBButton
                size='small'
                sx={{
                  p: 1,
                }}
                color='primary'
                variant='outlined'
                onClick={handleCartAmountChange(cartItem?.qty - 1)}
              >
                <Remove fontSize='small' />
              </MBButton>

              <H3 fontWeight='600' mx={2.5}>
                {cartItem?.qty.toString().padStart(2, '0')}
              </H3>

              <MBButton
                size='small'
                sx={{
                  p: 1,
                }}
                color='primary'
                variant='outlined'
                onClick={handleCartAmountChange(cartItem?.qty + 1)}
              >
                <Add fontSize='small' />
              </MBButton>
            </FlexBox>
          )}

          <FlexBox alignItems='center' mb={2}>
            <Box>Sold By:</Box>
            <Link href='/shops/fdfdsa'>
              <a>
                <H6 ml={1}>{BrandName}</H6>
              </a>
            </Link>
          </FlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductIntro;
