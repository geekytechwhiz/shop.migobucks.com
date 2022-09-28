import { Box } from '@mui/material';
import { H3, H6 } from '../Typography'; 
const ProductDescription = ({ data }) => {
  debugger;
  const { ProductBrand, CountryOfOrigin } = data;
  const { ModelName } = data?.VariantInfo || '';
  return (
    <Box>
      <H3 mb={2}>About this item:</H3>
      <Box>
        {data?.ProductDescription} <br />
      </Box>
      <Box display={'flex'} mt={2}>
        <H6 mr={2}> Brand:</H6> {ProductBrand} <br />
      </Box>
      <Box display={'flex'}>
        <H6 mr={2}>Model:</H6> {ModelName} <br />
      </Box>
      <Box display={'flex'}>
        <H6 mr={2}>Origin:</H6> {CountryOfOrigin} <br />
      </Box>
    </Box>
  );
};

export default ProductDescription;
