 
import { apiInstance } from '../../../utils/helper/api';
import { baseApiUrl } from '../../../utils/constants';
import { responseBuilder } from '../../../utils/helper/index';

export const getProducts = async () => {
    
  return responseBuilder(
    await apiInstance.get(`${baseApiUrl}/inventory/products`, {
      params: {
        Status: 'PUBLISHED',
      },
    })
  );
};