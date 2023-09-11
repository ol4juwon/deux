import { combineReducers } from "redux";
// import departmentSliceReducer from "redux/slices/department-slice";

import { baseApi } from "./services/base-service";
import movieSliceReducer from "./slices/movieSlice";

const rootReducer = combineReducers({
  tmdbApi: baseApi.reducer,
  movies: movieSliceReducer,
//   department: departmentSliceReducer,
});


export default rootReducer;
