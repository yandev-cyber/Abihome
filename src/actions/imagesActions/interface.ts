import { ActionTypes } from '@actions/types';

export interface GetImagesAction {
  type: ActionTypes.GET_IMAGES;
}

export interface GetImagesRequestAction {
  type: ActionTypes.GET_IMAGES_REQUEST;
}

export interface GetImagesSuccessAction {
  type: ActionTypes.GET_IMAGES_SUCCESS;
  payload: string[];
}

export interface GetImagesFailedAction {
  type: ActionTypes.GET_IMAGES_FAILED;
  payload: string;
}
