const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
import {
  addToCart,
  getCustomer,
} from '../../pages/api/products/[id]/index';



const initialState = {
  orders: [],
  cart: [],
  customerInfo: {},
};

export const getOrdersThunk = createAsyncThunk(
  '/oms/customer/orders',
  async () => {
    const response = await getProducts();
    return response;
  }
);

export const postCartThunk = createAsyncThunk(
  '/oms/customer/post-order',
  async (request) => {
    
    const res = await addToCart(request);
    return res;
  }
);

export const getCustomerThunk = createAsyncThunk(
  '/oms/customer/get-customer',
  async (mobile) => {
    ;
    const response = await getCustomer(mobile);
    return response;
  }
);
const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postCartThunk.fulfilled, (state, action) => {
       
      state.cart = action.payload;
    });
    builder.addCase(getCustomerThunk.fulfilled, (state, action) => { 
      state.cart = action.payload?.Cart;
      state.customerInfo = action.payload;
    });
    builder.addCase(getCustomerThunk.rejected, (state, action) => {

      state.cart = action.payload?.Cart;
      state.customerInfo = action.payload;
    });
  },
});

export default customerSlice.reducer;
