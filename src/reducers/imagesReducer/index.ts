import { ImagesState } from './interface';
import { ActionTypes, Actions } from '@actions/types';

export const initialState: ImagesState = {
  images: [],
  loading: false,
  success: false,
  error: null,
};

export default (
  state: ImagesState = initialState,
  action: Actions,
): ImagesState => {
  console.log('action ', action);
  switch (action.type) {
    case ActionTypes.GET_IMAGES_REQUEST:
      return {
        images: [],
        loading: true,
        success: false,
        error: null,
      };
    case ActionTypes.GET_IMAGES_SUCCESS:
      return {
        images: action.payload,
        loading: false,
        success: true,
        error: null,
      };
    case ActionTypes.GET_IMAGES_FAILED:
      return {
        images: [],
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export * from './interface';
