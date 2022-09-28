import { Box, Tab, Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useState } from 'react';
import NavbarLayout from '../../components/layouts/NavbarLayout'; 
import AdditionalInfo from '../../components/products/AdditionalInfo';
import FrequentlyBought from '../../components/products/FrequentlyBought';
import ProductDescription from '../../components/products/ProductDescription';
import ProductIntro from '../../components/products/ProductIntro';
import ProductReview from '../../components/products/ProductReview';
import RelatedProducts from '../../components/products/RelatedProducts';
import {
  getFrequentlyBought,
  getRelatedProducts,
} from '../../utils/api/static-data-helper';
import { getProductDetails } from '../api/products/[id]/index';
const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  '& .inner-tab': {
    minHeight: 40,
    fontWeight: 600,
    textTransform: 'capitalize',
  },
})); 

const ProductDetails = (props) => { 
   
  const router = useRouter();
  const { id } = router.query;
  const { frequentlyBought, relatedProducts, details } = props;  
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (_, newValue) => {
    setSelectedOption(newValue);
  };

  if (!details) return <></>;
  return (
    <NavbarLayout>
      <ProductIntro product={details} />
      <StyledTabs
        textColor='primary'
        value={selectedOption}
        indicatorColor='primary'
        onChange={handleOptionClick}
      >
        <Tab className='inner-tab' label='Description' />
        <Tab
          className='inner-tab'
          label={`Reviews ( ${details?.Reviews?.length||0} )`}
        />
      </StyledTabs>

      <Box mb={6}>
        {selectedOption === 0 && <ProductDescription data={details} />}
        {selectedOption === 1 && <ProductReview data={details} />}
      </Box>
      {/* <AdditionalInfo data={details}></AdditionalInfo> */}
      <FrequentlyBought productsData={frequentlyBought} />
      <RelatedProducts productsData={relatedProducts} />
    </NavbarLayout>
  );
};

export async function getServerSideProps(context) {
  console.log(context);
  ;
  const productId = context.params.id; 
  const data = await getProductDetails(productId);
  const frequentlyBought = await getFrequentlyBought();
  const relatedProducts = await getRelatedProducts();

  return {
    props: {
      frequentlyBought,
      relatedProducts,
      details: data || null,
    },
  };
}
export default ProductDetails;
