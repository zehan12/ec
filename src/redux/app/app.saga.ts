import { call, put, takeEvery } from "redux-saga/effects";

import { fetchActiveActionTypes } from "./app.slice";
import { fecthActive } from "../../services/app.service";

function* workerToFetchActive(): Generator<unknown, void, null> {
  try {
    yield put({
      type: fetchActiveActionTypes.PENDING,
      payload: null,
    });
    const response = yield call(fecthActive);
    if (response) {
      yield put({
        type: fetchActiveActionTypes.FULFILLED,
        payload: response,
      });
    } else {
      yield put({
        type: fetchActiveActionTypes.REJECTED,
      });
    }
  } catch (err) {
    console.log(err);
    yield put({
      type: fetchActiveActionTypes.REJECTED,
    });
  }
}

export function* fetchActiveSaga() {
  yield takeEvery(
    fetchActiveActionTypes.REQUEST, 
    workerToFetchActive);
}
