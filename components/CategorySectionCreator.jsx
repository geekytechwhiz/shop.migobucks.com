import { Box, Container } from '@mui/material';
import React from 'react';
import CategorySectionHeader from './CategorySectionHeader';

const CategorySectionCreator = ({
  icon,
  title,
  children,
  seeMoreLink,
  ...props
}) => {
  return (
    <Box mb={7.5} {...props}>
      <Container
        sx={{
          pb: '1rem',
        }}
      >
        {title && (
          <CategorySectionHeader
            title={title}
            seeMoreLink={seeMoreLink}
            icon={icon}
          />
        )}

        {children}
      </Container>
    </Box>
  );
};

export default CategorySectionCreator;
