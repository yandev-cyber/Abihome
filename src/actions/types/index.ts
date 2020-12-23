import * as ImagesActions from '../imagesActions';

export enum ActionTypes {
  GET_IMAGES = 'GET_IMAGES',
  GET_IMAGES_REQUEST = 'GET_IMAGES_REQUEST',
  GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS',
  GET_IMAGES_FAILED = 'GET_IMAGES_FAILED',
}

export type Actions =
  | ImagesActions.GetImagesAction
  | ImagesActions.GetImagesRequestAction
  | ImagesActions.GetImagesSuccessAction
  | ImagesActions.GetImagesFailedAction;
