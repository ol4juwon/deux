import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { baseApi } from "./services/base-service";
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
});





export default store;