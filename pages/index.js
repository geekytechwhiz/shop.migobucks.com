 
import AppLayout from '../components/layouts/AppLayout';
import {
  getTopRatedProduct,
  getTopRatedBrand,
  getServiceList,
  getCategories,
  getTopCategories,
} from '../utils/api/static-data-helper';
import MainCarousel from '../components/product-listing/MainCarousel';
import Categories from '../components/product-listing/Categories';
import MoreItems from '../components/product-listing/MoreItems';
import ShoppingOptions from '../components/product-listing/ShoppingOptions';
import BigDiscount from '../components/product-listing/BigDiscount';
import FlashDeals from '../components/product-listing/FlashDeals';
import TopCategory from '../components/product-listing/TopCategory';
import TopRated from '../components/product-listing/TopRated';
import NewArrivals from '../components/product-listing/NewArrivals';
import FlashPromo from '../components/product-listing/FlashPromo';
import { getProducts } from './api/products/index';

export default function IndexPage(props) { 
  const {
    moreItems,
    serviceList,
    topCategories,
    flashDealsData,
    topRatedBrands,
    newArrivalsList,
    bigDiscountList,
    mainCarouselData,
    topRatedProducts,
    bottomCategories,
  } = props;
  // console.log('moreItems',moreItems);
  // console.log('serviceList',serviceList);
  // console.log('topCategories',topCategories);
  // console.log('flashDealsData',flashDealsData);
  // console.log('topRatedBrands',topRatedBrands);
  // console.log('bigDiscountList',bigDiscountList);
  // console.log('mainCarouselData',mainCarouselData);
  // console.log('topRatedProducts',topRatedProducts);
  // console.log('bottomCategories',bottomCategories); 
  return (
    <AppLayout>
      <MainCarousel carouselData={mainCarouselData} />
      
      <FlashDeals flashDeals={flashDealsData} />
      <TopCategory categoryList={topCategories} />
      <TopRated
        topRatedList={topRatedProducts || []}
        topRatedBrands={topRatedBrands || []}
      />
      <NewArrivals newArrivalsList={newArrivalsList} />
      <BigDiscount bigDiscountList={bigDiscountList} />
      <Categories categories={bottomCategories} />
      <FlashPromo />
      {/* <MoreItems moreItems={moreItems} /> */}
      <ShoppingOptions serviceList={serviceList} />
      layouts
    </AppLayout>
  );
}
export async function getStaticProps() {
  debugger;
  const data = await getProducts();
  const serviceList = await getServiceList();
  const bottomCategories = await getCategories();
  const topCategories = await getTopCategories();
  const topRatedBrands = await getTopRatedBrand();
  const topRatedProducts = await getTopRatedProduct();
  return {
    props: {
      moreItems: data?.Products || [],
      serviceList,
      topCategories: topCategories || [],
      flashDealsData: data?.FlashDeals || [],
      topRatedBrands: topRatedBrands || [],
      newArrivalsList: data?.NewArrivals?.slice(0, 6) || [],
      bigDiscountList: data?.BigDiscount || [],
      mainCarouselData: data?.CarouselData || [],
      topRatedProducts: topRatedProducts,
      bottomCategories,
    },
  };
}
