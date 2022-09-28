// import axios from "axios"
import { apiInstance } from '../helper/api';
import { baseApiUrl } from '../helper/api';
import { responseBuilder } from '../helper/index';

export const getProducts = async () => {
    
  return responseBuilder(
    await apiInstance.get(`${baseApiUrl}/inventory/products`, {
      params: {
        Status: 'PUBLISHED',
      },
    })
  );
};
export const getProductDetails = async (productId) => {
    
  return responseBuilder(
    await apiInstance.get(
      `${baseApiUrl}/inventory/products/${productId}`,
      {
        params: {
          Status: 'PUBLISHED',
        },
      }
    )
  );
};

export const searchProduct = async (params) => {
  ;
  return responseBuilder(
    await apiInstance.get(`${baseApiUrl}/inventory/products/search`, {
      params: {
        params: params,
      },
    })
  );
};
