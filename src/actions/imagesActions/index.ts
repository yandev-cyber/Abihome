import { ActionTypes } from '@actions/types';
import {
  GetImagesAction,
  GetImagesRequestAction,
  GetImagesSuccessAction,
  GetImagesFailedAction,
} from './interface';

export const getImages = (): GetImagesAction => {
  return {
    type: ActionTypes.GET_IMAGES,
  };
};

export const getImagesRequest = (): GetImagesRequestAction => {
  return {
    type: ActionTypes.GET_IMAGES_REQUEST,
  };
};

export const getImagesSuccess = (payload: string[]): GetImagesSuccessAction => {
  return {
    type: ActionTypes.GET_IMAGES_SUCCESS,
    payload,
  };
};

export const getImagesFailed = (payload: string): GetImagesFailedAction => {
  return {
    type: ActionTypes.GET_IMAGES_FAILED,
    payload,
  };
};

export * from './interface';
