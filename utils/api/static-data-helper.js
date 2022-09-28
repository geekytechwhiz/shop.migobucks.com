import {
  bottomCategoryList, 
  serviceList,
  topRatedBrandList,
  topRatedList,
  topCategoryList
} from '../../fake-db/server/superstore-shop/super-store-data'; 
import {
  relatedProducts, 
  frequentlyBoughtData, 
} from '../../fake-db/server/superstore-shop/related-data'; 
export const getTopRatedProduct=()=>{
  return topRatedList;
};
export const getTopRatedBrand=()=>{
  return topRatedBrandList;
};

export const getServiceList=()=>{
  return serviceList;
};
export const getCategories=()=>{
  return bottomCategoryList;
};
export const getTopCategories=()=>{
  return topCategoryList;
};

export const getFrequentlyBought=()=>{
  return frequentlyBoughtData;
};

export const getRelatedProducts=()=>{
  return relatedProducts;
};