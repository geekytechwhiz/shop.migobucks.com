/* eslint-disable no-param-reassign */ 
// import { useDispatch } from "react-redux"; 
import { getTopRatedBrand, getTopRatedProduct,getTopCategories,getServiceList } from '../../utils/api/static-data-helper';
import { getProducts } from '../../utils/api/products'; 

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
 
const initialState = {
  products: [], 
  topRatedProduct:getTopRatedProduct(),
  topRatedBrands:getTopRatedBrand(),
  topCategories:getTopCategories(),
  serviceList: getServiceList()
};

export const getProductsThunk = createAsyncThunk(
  '/inventory/products/product',
  async ( ) => { 
    const response = await getProducts();  
    return response;
  }
); 
const productSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: { 
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
            
      state.products = action.payload;
    }); 
  },
});
export const { categories } =
productSlice.actions;
export default productSlice.reducer;
