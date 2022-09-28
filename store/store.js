
import { configureStore, getDefaultMiddleware ,combineReducers} from '@reduxjs/toolkit';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';
import productSlice from './slices/productSlice'; 
import customerSlice from './slices/customerSlice'; 
import { createWrapper,HYDRATE } from 'next-redux-wrapper';

const combinedReducer = combineReducers({
  migoStore: productSlice, 
  customer:customerSlice
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      getProductsThunk: {
        products:{...state.products}
      } 
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};
function makeStore(preloadedState) {
  const store = configureStore({
    reducer:masterReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState,
    enhancers: [monitorReducersEnhancer],
    devTools: true,
  }); 
  return store;
}
export const wrapper = createWrapper(makeStore, { debug: true });
