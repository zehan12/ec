import { all } from "redux-saga/effects";
import { fetchActiveSaga } from "./app/app.saga";

// The root saga that combines all sagas
export default function* rootSaga() {
  yield all([
    fetchActiveSaga(),
  ]);
}
