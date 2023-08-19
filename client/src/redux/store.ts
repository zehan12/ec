import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import appReducer from "./app/app.slice";
import rootSaga from "./saga";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine multiple reducers using combineReducers
const rootReducer = combineReducers({
  app: appReducer,
});

// Configure the Redux store with the rootReducer and saga middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== "production",
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
