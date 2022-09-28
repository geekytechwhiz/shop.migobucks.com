import { apiInstance } from '../../../../utils/helper/api';
import { baseApiUrl } from '../../../../utils/constants';
import { responseBuilder } from '../../../../utils/helper/index';  

export const getProductDetails = async (productId) => {
  return responseBuilder(
    await apiInstance.get(
      `${baseApiUrl}/inventory/products/${productId}`,
      {
        params: {
          Status: 'Published',
        },
      }
    )
  );
};

export const addToCart = async (request) => {
  try {
    ;
    const res = await apiInstance.patch(`${baseApiUrl}/customer/cart/${request.Mobile}`, request);

    const { data } = res;

    if (!data) {
      return responseBody;
    }
    if ((data && data.statusCode) &&
      data?.statusCode &&
      (data?.statusCode === 200 || data?.statusCode === 201)
    ) {
      return responseBuilder(
        await apiInstance.get(`${baseApiUrl}/customer/cart/${mobile}`)
      );
    } else {
      return null;
    }

  } catch (err) {
    return null;
  }
};

export const getCart = async (mobile) => {
  try {
    ;
    return responseBuilder(
      await apiInstance.get(`${baseApiUrl}/customer/cart/${mobile}`)
    );
  } catch (err) {
    return null;
  }
};


export const getCustomer = async (mobile) => {
  try {
    ;
    return responseBuilder(
      await apiInstance.get(`${baseApiUrl}/customer/account/${mobile}`)
    );
  } catch (err) {
    return null;
  }
};
