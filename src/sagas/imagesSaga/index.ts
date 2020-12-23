import { call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from '@actions/types';
import { ApiHandler } from '@apis/index';

function* getImages() {
  try {
    yield put({ type: ActionTypes.GET_IMAGES_REQUEST });
    const response = yield call(ApiHandler, 'test/images');
    yield put({ type: ActionTypes.GET_IMAGES_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({
      type: ActionTypes.GET_IMAGES_FAILED,
      error: 'Get Images Failed',
    });
  }
}

const ImagesSaga = function* Images() {
  yield takeEvery(ActionTypes.GET_IMAGES, getImages);
};

export default ImagesSaga;
