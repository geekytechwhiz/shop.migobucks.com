import { bgcolor, borderRadius, compose, spacing } from '@mui/system';

import { styled } from '@mui/material/styles';
import NextImage from 'next/image';
import React from 'react';
const LazyImage = styled(({ borderRadius, ...rest }) => (
  <NextImage {...rest} />
))(compose(spacing, borderRadius, bgcolor));
export default LazyImage;
