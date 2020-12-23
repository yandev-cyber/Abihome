import { all } from 'redux-saga/effects';
import ImagesSaga from './imagesSaga';

export default function* mainSaga() {
  yield all([ImagesSaga()]);
}
