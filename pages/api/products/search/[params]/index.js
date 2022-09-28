import { apiInstance } from '../../../../../utils/helper/api';
import { baseApiUrl } from '../../../../../utils/constants'; 
import { responseBuilder } from '../../../../../utils/helper/index';  

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
