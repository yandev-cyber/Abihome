import { combineReducers } from 'redux';
import { StoreState } from './interface';
import imagesReducer from './imagesReducer';

export default combineReducers<StoreState>({
  images: imagesReducer,
});

export * from './interface';
