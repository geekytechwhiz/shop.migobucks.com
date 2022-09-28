 
import Rating from '@mui/material/Rating';
import { Box, Button, TextField } from '@mui/material';
import { FlexBox } from '../flex-box';
import { H2, H5 } from '../Typography';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import ProductComment from './ProductComment';

const ProductReview = ({ data }) => {
  const handleFormSubmit = async (values, { resetForm }) => {
    resetForm();
  };

  const {
    dirty,
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    onSubmit: handleFormSubmit,
    initialValues: initialValues,
    validationSchema: reviewSchema,
  });
  return (
    <Box>
      {data?.Reviews?.map((item, ind) => (
        <ProductComment {...item} key={ind} />
      ))}

      <H2 fontWeight='600' mt={7} mb={2.5}>
        Write a Review for this product
      </H2>

      <form onSubmit={handleSubmit}>
        <Box mb={2.5}>
          <FlexBox mb={1.5} gap={0.5}>
            <H5 color='grey.700'>Your Rating</H5>
            <H5 color='error.main'>*</H5>
          </FlexBox>

          <Rating
            color='warn'
            size='medium'
            value={values.rating}
            onChange={(_, value) => setFieldValue('rating', value)}
          />
        </Box>

        <Box mb={3}>
          <FlexBox mb={1.5} gap={0.5}>
            <H5 color='grey.700'>Your Review</H5>
            <H5 color='error.main'>*</H5>
          </FlexBox>

          <TextField
            rows={8}
            multiline
            fullWidth
            name='comment'
            variant='outlined'
            onBlur={handleBlur}
            value={values.comment}
            onChange={handleChange}
            placeholder='Write a review here...'
            error={!!touched.comment && !!errors.comment}
            helperText={touched.comment && errors.comment}
          />
        </Box>

        <Button
          variant='contained'
          color='primary'
          type='submit'
          disabled={!(dirty && isValid)}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

const commentList = [
  {
    name: 'Jannie Schumm',
    imgUrl: '/assets/images/faces/7.png',
    rating: 4.7,
    date: '2021-02-14',
    comment:
      ' ',
  },
  {
    name: 'Joe Kenan',
    imgUrl: '/assets/images/faces/6.png',
    rating: 4.7,
    date: '2019-08-10',
    comment:
      ' ',
  },
  {
    name: 'Jenifer Tulio',
    imgUrl: '/assets/images/faces/8.png',
    rating: 4.7,
    date: '2021-02-05',
    comment:
      '',
  },
];
const initialValues = {
  rating: 0,
  comment: '',
  date: new Date().toISOString(),
};
const reviewSchema = yup.object().shape({
  rating: yup.number().required('required'),
  comment: yup.string().required('required'),
});
export default ProductReview;
